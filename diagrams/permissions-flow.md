# 🔐 Permissions Flow

```mermaid
flowchart LR

A[Incoming Request]
--> B[Session and Identity Validation]

B --> C[Resolve Organization and Workspace Context]

C --> D[Resolve Role Claims]

D --> E[Module Scope Check]

E --> F[Handler-Level Permission Check]

F --> G{Allowed by App Layer?}

G -->|No| H[Reject with Structured Deny Reason]

G -->|Yes| I[Run Tenant-Scoped Query]

I --> J[RLS Policy Evaluation]

J --> K{Allowed by Data Layer?}

K -->|No| H

K -->|Yes| L[Return Resource]

L --> M[Emit Audit Event]
```

### Why this flow matters

- App-layer checks stop unauthorized workflows early.
- RLS remains the final gate for row visibility.
- Deny outcomes are logged for security review and troubleshooting.