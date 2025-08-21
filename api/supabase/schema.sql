-- Organizations & users (simplified)
create table if not exists organizations (
  id text primary key,
  name text not null,
  created_at timestamptz default now()
);

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  org_id text references organizations(id) on delete cascade,
  user_id text not null,
  role text not null check (role in ('admin','underwriter','servicer','viewer')),
  created_at timestamptz default now()
);

-- Loan applications
create table if not exists loan_applications (
  id uuid primary key default gen_random_uuid(),
  org_id text references organizations(id) on delete cascade,
  borrower_name text not null,
  amount numeric not null,
  property_address text,
  metadata jsonb,
  created_at timestamptz default now()
);

-- Escrows
create table if not exists escrows (
  id uuid primary key default gen_random_uuid(),
  org_id text references organizations(id) on delete cascade,
  loan_id text not null,
  type text not null check (type in ('tax','insurance')),
  balance numeric not null default 0,
  created_at timestamptz default now()
);

-- Audit logs
create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  org_id text,
  event text,
  payload jsonb,
  created_at timestamptz default now()
);

-- Model feedback
create table if not exists model_feedback (
  id uuid primary key default gen_random_uuid(),
  org_id text,
  payload jsonb,
  created_at timestamptz default now()
);
