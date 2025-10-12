import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WebhookContactData {
  name: string;
  email: string;
  field: string;
  stage?: string;
  message: string;
  contactType?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: WebhookContactData = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.field || !data.message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required fields: name, email, field, message" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid email format" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate max lengths
    if (data.name.length > 100 || data.email.length > 255 || 
        data.field.length > 100 || data.message.length > 2000) {
      console.error("Field length exceeded");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Field length limits exceeded" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const contactType = data.contactType || "general";
    const recipientEmail = contactType === "hila" 
      ? "hila@phdgateway.com" 
      : "reuven@phdgateway.com";

    const emailResponse = await resend.emails.send({
      from: "PhD Gateway <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New Contact Form Submission - ${data.field}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Field:</strong> ${data.field}</p>
        ${data.stage ? `<p><strong>Stage:</strong> ${data.stage}</p>` : ''}
        <p><strong>Contact Type:</strong> ${contactType}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    console.log("Email sent successfully via webhook");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in contact-webhook function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Internal server error" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
