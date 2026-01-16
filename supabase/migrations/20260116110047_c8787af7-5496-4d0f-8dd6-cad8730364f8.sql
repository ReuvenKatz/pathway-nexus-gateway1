-- Enable RLS on contact_form table (if not already enabled)
ALTER TABLE public.contact_form ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into contact_form (public contact form)
CREATE POLICY "Allow public to insert contact form submissions"
ON public.contact_form
FOR INSERT
WITH CHECK (true);

-- Create policy to allow reading contact form submissions (for admin purposes, can be restricted later)
CREATE POLICY "Allow authenticated users to view contact form submissions"
ON public.contact_form
FOR SELECT
USING (auth.role() = 'authenticated');