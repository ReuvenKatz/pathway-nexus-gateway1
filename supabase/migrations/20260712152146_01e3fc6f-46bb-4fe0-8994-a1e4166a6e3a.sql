
REVOKE ALL ON public.heartbeat FROM anon;
REVOKE ALL ON public.heartbeat FROM authenticated;
GRANT ALL ON public.heartbeat TO service_role;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.heartbeat;
