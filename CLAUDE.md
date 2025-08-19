# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Noshi Generator** - a Tauri-based desktop application for generating Japanese gift wrapping papers (熨斗/のし) used in festivals. It creates printable A4-sized noshi papers with customizable text fields.

## Development Commands

```bash
# Development
pnpm run dev         # Start Vite dev server (frontend)
pnpm run tauri dev   # Start Tauri dev environment (full app)

# Build & Production
pnpm run build       # TypeScript check + Vite build
pnpm run tauri build # Build complete Tauri application

# Code Quality
pnpm run lint        # Run ESLint
pnpm run format      # Fix ESLint issues + Prettier formatting
```

## Architecture

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + SCSS modules
- **Desktop Framework**: Tauri v2
- **UI Components**: Radix UI primitives with custom styling

### Key Directories

- `/src` - React frontend application
  - `/components` - React components including Preview and UI primitives
  - `/lib` - Utility functions and formatters
  - `/assets` - Fonts (YujiSyuku) and images
- `/src-tauri` - Rust backend for Tauri
  - `/icons` - Application icons for different platforms
  - `tauri.conf.json` - Tauri configuration

### Important Files

- `src/App.tsx` - Main application component with form and print logic
- `src/components/Preview.tsx` - Noshi preview component with print styling
- `src/const.ts` - Constants including item templates
- `src/type.ts` - TypeScript type definitions

## Development Notes

1. The app uses a custom Japanese font (YujiSyuku) for the noshi text display
2. Print functionality is handled via browser's `window.print()` with custom CSS
3. The application window is fixed at 1100x1100px as configured in Tauri
4. ESLint is configured to auto-remove unused imports
5. The project uses pnpm as the package manager (note the pnpm-lock.yaml file)
