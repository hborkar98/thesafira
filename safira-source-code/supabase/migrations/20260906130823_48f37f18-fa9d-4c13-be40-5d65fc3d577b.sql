CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;
REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

ALTER POLICY "Admins manage roles" ON public.user_roles USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Published stories are public" ON public.stories USING (published OR private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Admins manage stories" ON public.stories USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Published story images are public" ON public.story_images USING (EXISTS (SELECT 1 FROM public.stories s WHERE s.id = story_id AND (s.published OR private.has_role(auth.uid(), 'admin'))));
ALTER POLICY "Admins manage story images" ON public.story_images USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Published films are public" ON public.films USING (published OR private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Admins manage films" ON public.films USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Published journal posts are public" ON public.journal_posts USING (published_at IS NOT NULL OR private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Admins manage journal" ON public.journal_posts USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Published testimonials are public" ON public.testimonials USING (published OR private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Admins manage testimonials" ON public.testimonials USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
ALTER POLICY "Admins manage enquiries" ON public.enquiries USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));

DROP FUNCTION public.has_role(uuid, public.app_role);