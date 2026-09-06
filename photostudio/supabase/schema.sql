-- Run this in the Supabase SQL editor to create the content tables.
-- Table shapes mirror the TypeScript types in lib/types.ts exactly,
-- so lib/data.ts can be pointed at these with minimal changes.

create table stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null check (category in ('Wedding','Couple','Travel','Portrait','Editorial')),
  location text not null,
  date date not null,
  cover_image text not null,
  excerpt text not null,
  description text not null,
  photo_count int not null default 0,
  images jsonb not null default '[]',       -- array of StoryImage
  video_url text,
  featured boolean default false,
  tags text[] default '{}',
  created_at timestamptz default now()
);

create table films (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  location text not null,
  duration text not null,
  thumbnail text not null,
  video_url text not null,
  created_at timestamptz default now()
);

create table testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  context text not null,
  quote text not null,
  created_at timestamptz default now()
);

create table journal_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  date date not null,
  reading_time text not null,
  cover_image text not null,
  excerpt text not null,
  content jsonb not null default '[]',      -- array of paragraph strings
  created_at timestamptz default now()
);

create table inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  event_type text,
  event_date date,
  location text,
  estimated_budget text,
  found_via text,
  message text,
  created_at timestamptz default now()
);

-- Public read access for content tables; inquiries are insert-only from the client.
alter table stories enable row level security;
alter table films enable row level security;
alter table testimonials enable row level security;
alter table journal_posts enable row level security;
alter table inquiries enable row level security;

create policy "public read stories" on stories for select using (true);
create policy "public read films" on films for select using (true);
create policy "public read testimonials" on testimonials for select using (true);
create policy "public read journal_posts" on journal_posts for select using (true);
create policy "public insert inquiries" on inquiries for insert with check (true);
