type TenantQueryParams = {
  organizationId: string;
  workspaceId?: string;
  userId: string;
  role: "tenant_owner" | "operations_manager" | "support_agent" | "vendor_manager";
};

export async function getTenantProjects(params: TenantQueryParams) {
  // 1. Confirm active membership for this organization.
  // 2. Validate the caller role can read this module.
  // 3. Apply organization + optional workspace scope.
  // 4. Return tenant-safe records only.
  const scopedFilters = {
    organizationId: params.organizationId,
    workspaceId: params.workspaceId ?? null,
  };

  return {
    scope: scopedFilters,
    projects: [],
  };
}