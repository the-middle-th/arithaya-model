create extension if not exists "pgcrypto";

create table if not exists public.enterprise_leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  organization text,
  position text,
  email text,
  phone text,
  interested_program text,
  message text,
  created_at timestamp default now()
);

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  organization text,
  partnership_type text,
  message text,
  created_at timestamp default now()
);

create table if not exists public.knowledge_assets (
  id uuid primary key default gen_random_uuid(),
  title text,
  slug text,
  category text,
  summary text,
  content text,
  is_premium boolean default false,
  published_at timestamp,
  created_at timestamp default now()
);

create index if not exists knowledge_assets_slug_idx on public.knowledge_assets (slug);
create index if not exists knowledge_assets_published_at_idx on public.knowledge_assets (published_at desc);
