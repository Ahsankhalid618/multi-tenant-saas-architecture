# 🏢 Tenant Architecture

```mermaid
flowchart TD
A[User Request]
--> B{Portal Domain}

B --> C[Customer Experience]
B --> D[Vendor Workspace]
B --> E[Internal Operations]

C --> F[Session Validation]
D --> F
E --> F

F --> G[Tenant Resolver]
G --> H[Role and Permission Guard]
H --> I[Service Layer]
I --> J[RLS-Scoped Data Access]
J --> K[(Shared PostgreSQL)]

I --> L[Audit and Event Stream]
I --> M[Async Jobs and Integrations]
```

### Design Notes

- Distinct portal domains reduce accidental privilege crossover.
- Tenant context is resolved before business logic is executed.
- Service guards and database policies are complementary controls.
- Operational jobs run outside request latency paths, but remain tenant-aware.