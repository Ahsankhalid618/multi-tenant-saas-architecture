# 👥 Organization Structure

```mermaid
flowchart TD
A[Platform]
--> B[Organization]

B --> C[Workspace: Operations]
B --> D[Workspace: Vendor Collaboration]
B --> E[Workspace: Finance]

C --> F[Role Bindings]
D --> F
E --> F

F --> G[Scoped Permissions]
G --> H[Module Access]
H --> I[Operational Actions]
I --> J[Audit Events]
```

### Structure Principles

- Organizations are the primary tenancy boundary.
- Workspaces segment operational responsibilities within a tenant.
- Role bindings are attached to memberships, not global users.
- Permissions are module-scoped to reduce blast radius.
