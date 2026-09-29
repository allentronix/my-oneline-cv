# Project conventions

## Main rule

Put each piece of code where its responsibility naturally belongs.

## Folder structure (under `src/`)

- `pages/` → full screens/pages and page-level state.
- `components/` → reusable feature-specific UI.
- `components/ui/` → generic UI like Button, Modal, Input, Card.
- `data/` → static/local application data.
- `types/` → shared TypeScript types/interfaces.
- `utils/` → pure helper functions; no React state/UI.
- `hooks/` → reusable React hooks and state logic.
- `services/` → API, database, authentication, external services.
- `assets/` → images, icons, fonts, etc.

## Guidelines

- Keep files focused → one clear responsibility per file.
- Avoid giant components → if a component becomes complicated, split it.
- Keep data flow predictable → parent owns state, children receive props and callbacks.
- Don't duplicate logic → extract reusable logic into utils, hooks, or services.
- Use TypeScript properly → shared types instead of `any`.
- Build incrementally → make one change, test it, then continue.
