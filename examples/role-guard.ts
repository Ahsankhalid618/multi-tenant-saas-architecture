type Role =
  | "admin"
  | "operations"
  | "support"
  | "vendor";

export function hasPermission(
  role: Role,
  permission: string
) {
  const permissions: Record<Role, string[]> = {
    admin: ["*"],
    operations: ["manage_orders"],
    support: ["view_tickets"],
    vendor: ["view_vendor_portal"],
  };

  return (
    permissions[role]?.includes("*") ||
    permissions[role]?.includes(permission)
  );
}