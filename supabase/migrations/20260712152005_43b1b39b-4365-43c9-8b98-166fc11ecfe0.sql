
-- Tighten contact_form access
DROP POLICY IF EXISTS "Allow authenticated users to view contact form submissions" ON public.contact_form;
DROP POLICY IF EXISTS "Allow public to insert contact form submissions" ON public.contact_form;

-- Revoke broad grants so table is no longer discoverable via PostgREST/GraphQL to anon or authenticated
REVOKE ALL ON public.contact_form FROM anon;
REVOKE ALL ON public.contact_form FROM authenticated;

-- Allow anonymous public form submissions only (INSERT), server (service_role) has full access
GRANT INSERT ON public.contact_form TO anon;
GRANT ALL ON public.contact_form TO service_role;

-- Recreate INSERT policy with basic validation instead of `true`
CREATE POLICY "Public can submit contact form"
ON public.contact_form
FOR INSERT
TO anon
WITH CHECK (
  name IS NOT NULL AND length(btrim(name)) > 0 AND length(name) <= 200
  AND email IS NOT NULL AND email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$' AND length(email) <= 320
  AND message IS NOT NULL AND length(btrim(message)) > 0 AND length(message) <= 5000
);

-- No SELECT policy for anon/authenticated: only service_role (edge functions) can read submissions.
