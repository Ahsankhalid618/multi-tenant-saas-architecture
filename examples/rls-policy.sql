CREATE POLICY tenant_isolation_policy
ON projects
FOR SELECT
USING (
  organization_id =
  current_setting('app.current_organization')::uuid
);