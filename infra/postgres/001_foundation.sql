CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE SCHEMA IF NOT EXISTS hamseen;
CREATE TABLE IF NOT EXISTS hamseen.tenant (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), code text UNIQUE NOT NULL,
  name text NOT NULL, status text NOT NULL CHECK (status IN ('draft','active','suspended')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS hamseen.audit_event (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), tenant_id uuid NOT NULL REFERENCES hamseen.tenant(id),
  actor_id uuid, action text NOT NULL, resource_type text NOT NULL, resource_id uuid,
  request_id uuid NOT NULL, before_hash text, after_hash text, occurred_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE hamseen.audit_event ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_audit_isolation ON hamseen.audit_event
  USING (tenant_id = nullif(current_setting('app.tenant_id', true),'')::uuid)
  WITH CHECK (tenant_id = nullif(current_setting('app.tenant_id', true),'')::uuid);
REVOKE DELETE, TRUNCATE ON hamseen.audit_event FROM PUBLIC;
