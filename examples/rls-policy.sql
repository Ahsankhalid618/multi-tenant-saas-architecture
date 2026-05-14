CREATE POLICY tenant_isolation_policy
ON projects
FOR SELECT
USING (
  organization_id = current_setting('app.current_organization')::uuid
  AND (
    workspace_id IS NULL
    OR workspace_id = current_setting('app.current_workspace', true)::uuid
  )
  AND EXISTS (
    SELECT 1
    FROM organization_memberships m
    WHERE m.user_id = auth.uid()
      AND m.organization_id = projects.organization_id
      AND m.status = 'active'
  )
);