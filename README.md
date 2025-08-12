# Prepora

Prepora is an AI‑powered study companion for Indian competitive exams.  It
provides structured, high‑quality resources across seven pillars for every
supported exam and year:

1. **Most Important Questions (MIQs)**
2. **Comprehensive Resources Map**
3. **Motivation & Burnout Prevention**
4. **Syllabus & Pattern**
5. **Topper Stories**
6. **Topper Strategies**
7. **Study Plans**

> **Note:** All content in this repository is original and intended as
> educational guidance.  Past‑paper questions are *not* reproduced.

## Getting started

This repository uses [Next.js](https://nextjs.org/) with the App Router,
TypeScript, and Tailwind CSS.  To run the application locally you must have
Node.js ≥16 installed.  Because dependencies are not vendored, you need
internet access when running `npm install`.

```bash
git clone https://github.com/Om7906/Prepora.git
cd Prepora
npm install # or pnpm install
npm run dev
```

### Environment variables

Copy `.env.example` to `.env` and fill in your Supabase project keys if you
wish to mirror content to a PostgreSQL database.  The application functions
fully from the filesystem when these values are absent.

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key # server only, not exposed to the client
```

### Scripts

- `npm run dev` &mdash; start the Next.js development server on
  `http://localhost:3000`
- `npm run build` &mdash; build a production version of the application
- `npm run start` &mdash; run the production build
- `npm run typecheck` &mdash; run TypeScript in no‑emit mode to verify types
- `npm run lint` &mdash; run ESLint
- `npm run validate-content` &mdash; run the custom content validator script

### Project structure

The project is organised by feature, with top‑level folders for application
code, content, type definitions and validation logic.

```
app/                 Next.js App Router (pages and layouts)
components/          Reusable UI components
content/             Markdown files containing exam data
lib/                 Shared libraries (types, content loader, search)
scripts/             Stand‑alone scripts (content validator)
public/              Static assets (logo, favicon)
```

### Supabase

Prepora supports an optional Supabase mirror for storing and querying
documents.  See `lib/supabase.ts` for client helpers and `supabase.sql` for
database schema.  To enable Supabase:

1. Create a new project at [supabase.com](https://supabase.com/).
2. Copy your project URL and anonymous key into `.env`.
3. Run the SQL in `supabase.sql` using the Supabase SQL editor to create
   required tables.

When `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are
provided the application will attempt to read documents from the database.
Otherwise it falls back to the local filesystem.

### Deployment (Vercel)

Prepora is designed to deploy seamlessly on [Vercel](https://vercel.com/):

1. Fork or clone this repository and push it to your own GitHub account.
2. Import the repository into Vercel and select the Next.js framework
   preset.
3. Add environment variables from `.env.example` in the Vercel dashboard.
4. Trigger a deployment and verify the preview URL.

### Contributing

Please use [Conventional Commits](https://www.conventionalcommits.org/) for
commit messages.  See `scripts/validate-content.ts` for information about
the custom content validator that ensures every exam has all seven pillar
files.

Feel free to open issues or pull requests to report problems or suggest
improvements!