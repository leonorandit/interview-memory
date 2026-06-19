# Todo App

## Overview

A simple full-stack Todo application that allows users to create, read, update, and delete tasks. The app provides a clean web interface for managing daily tasks with status tracking.

## Goals

- Provide an intuitive task management experience
- Support basic CRUD operations for todos
- Track task completion status
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: SQLite (via better-sqlite3)
- **Build**: Vite

## Architecture

```
todo-app/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── App.tsx
│   └── package.json
├── server/          # Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── db/
│   │   └── index.ts
│   └── package.json
├── specs/           # OpenSpec specification files
├── project.md       # This file
└── AGENTS.md        # Agent instructions
```

## Key Decisions

1. Use SQLite for simplicity — no external database dependency
2. RESTful API design for clear resource modeling
3. Monorepo structure with separate client/server packages
