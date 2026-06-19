# Agent Instructions

## Project Overview

This is a Todo application with a React frontend and Express backend, using SQLite for persistence.

## Key Commands

- `npm run dev` — Start both client and server in development mode
- `npm run build` — Build for production
- `npm test` — Run tests

## Code Style

- TypeScript strict mode enabled
- Use functional components with hooks in React
- Use Express Router for API route organization
- Keep route handlers thin — business logic in separate modules

## File Conventions

- API routes: `server/src/routes/*.ts`
- React components: `client/src/components/*.tsx`
- Custom hooks: `client/src/hooks/*.ts`
- Database queries: `server/src/db/*.ts`
