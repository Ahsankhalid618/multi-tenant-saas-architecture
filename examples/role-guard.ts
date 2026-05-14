type Role =
  | "tenant_owner"
  | "operations_manager"
  | "support_agent"
  | "vendor_manager"
  | "read_only_analyst";

export function hasPermission(
  role: Role,
  permission: string
) {
  const permissions: Record<Role, string[]> = {
    tenant_owner: ["*"],
    operations_manager: ["manage_operations", "manage_orders"],
    support_agent: ["view_tickets", "respond_tickets"],
    vendor_manager: ["view_vendor_workspace", "manage_vendor_catalog"],
    read_only_analyst: ["view_reports", "view_audit_events"],
  };

  return (
    permissions[role]?.includes("*") ||
    permissions[role]?.includes(permission)
  );
}