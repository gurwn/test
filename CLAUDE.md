# CLAUDE.md - HairFit Project

## Project Overview
- **Name**: HairFit (AI Hair Consulting)
- **Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **UI**: Shadcn/UI, Lucide React, Framer Motion
- **AI**: @mediapipe/tasks-vision (Local Face Analysis)
- **Deployment**: Vercel (Static/Client-side focus)

## Package Management
- **Use `npm` exclusively**. (`yarn`, `pnpm` prohibited to prevent lockfile conflicts)
- Install new packages with: `npm install <package>`

## Coding Conventions
- **Component Style**: Use Functional Components (`export default function Name() {}`).
- **Styling**: Use **Tailwind CSS** classes. Avoid inline styles or CSS-in-JS unless necessary for dynamic values.
- **Type Safety**: Strictly use TypeScript. Avoid `any`. Use `interface` or `type` definitions in `src/lib/types.ts` or co-located files.
- **State Management**: Prefer React Hooks (`useState`, `useContext`).
- **Directory Structure**:
    - `src/app`: Next.js App Router pages & API routes.
    - `src/components`: Reusable UI components.
    - `src/lib`: Core logic, types, and utility functions.
    - `src/contexts`: React Context providers (e.g., LanguageContext).

## Key Features & Rules
- **Localization**: All user-facing text must use `useLanguage()` hook.
    - Add translations to `src/contexts/LanguageContext.tsx`.
    - Support EN (default) and KO.
- **Theme**: Support Light/Dark mode using `next-themes` (or custom context) and Tailwind `dark:` modifers.
- **Performance**: Use `next/image` for optimizing heavy assets.
- **Error Handling**: Use `try-catch` blocks for async operations (e.g., Image generation, API calls).

## Workflow
1. **Plan First**: Before writing code, analyze requirements and check `task.md`.
2. **Implement**: Write clean, modular code.
3. **Verify**: Test changes locally (`npm run dev`) before confirming.
