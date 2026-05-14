# 🧱 Organization Workspace Boundaries

```mermaid
flowchart TD
P[Platform]
--> O1[Organization A]
P --> O2[Organization B]

O1 --> M1[Memberships]
O1 --> W1[Workspace: Vendor Ops]
O1 --> W2[Workspace: Internal Ops]

M1 --> U1[User: Vendor Manager]
M1 --> U2[User: Admin Operator]

U1 --> R1[Role: Vendor Scoped]
U2 --> R2[Role: Admin Scoped]

R1 --> PS1[Permissions: Vendor Modules]
R2 --> PS2[Permissions: Internal Modules]

PS1 --> TR1[Tenant-Scoped Resources]
PS2 --> TR2[Tenant-Scoped Resources]

TR1 --> DB[(Shared Data Plane with RLS)]
TR2 --> DB

W1 -. cannot access .-> PS2
W2 -. cannot access .-> PS1
O2 -. isolated boundary .-> DB
```

## Boundary Notes

- Organization is the primary tenant boundary.
- Workspaces separate operational contexts inside a tenant.
- Roles and permissions are bound to memberships, not globally to users.
- Vendor and admin surfaces are isolated by module-level permission scopes.
- Data remains tenant-scoped even in a shared database model.
