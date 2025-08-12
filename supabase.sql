-- Supabase schema for Prepora

-- Users table for optional authentication via email OTP.  Supabase
-- automatically manages authentication tables when using its Auth API.

-- Exams table stores metadata about each exam and year
create table if not exists exams (
  id uuid primary key default gen_random_uuid(),
  code text not null,
  year int not null,
  title text not null
);

-- Docs table stores the content for each pillar.  The `frontmatter` column
-- contains the parsed YAML as JSON for flexible queries.  The `body`
-- column stores the Markdown body as plain text.
create table if not exists docs (
  id uuid primary key default gen_random_uuid(),
  exam text not null,
  year int not null,
  type text not null,
  section text not null,
  tags text[] null,
  difficulty text null,
  frontmatter jsonb not null,
  body text not null,
  updated timestamptz default now(),
  constraint fk_exam_year foreign key (exam, year) references exams (code, year) on delete cascade
);

-- Indexes for efficient lookups
create index if not exists docs_exam_type_idx on docs (exam, year, type);