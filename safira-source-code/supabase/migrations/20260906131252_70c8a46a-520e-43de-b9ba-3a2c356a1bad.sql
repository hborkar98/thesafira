CREATE UNIQUE INDEX one_studio_admin ON public.user_roles ((role)) WHERE role = 'admin';
CREATE POLICY "First user can claim studio admin" ON public.user_roles
FOR INSERT TO authenticated
WITH CHECK (user_id = auth.uid() AND role = 'admin' AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin'));