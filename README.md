# identity — portfolio

Full-stack engineer portfolio that leads with frontend development. Implemented from the "Engineer Portfolio Design System" (light theme, indigo accent, Space Grotesk + JetBrains Mono, Lucide icons).

## Stack

- Vite + React 18
- Plain CSS with design tokens (`src/styles/tokens.css`) — no CSS framework
- lucide-react for icons

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio implementation from design system"
git branch -M main
git remote add origin https://github.com/njeruthuo/identity.git
git push -u origin main
```

## Customize

- **Projects**: edit the `projects` array in `src/pages/Home.jsx`; add real screenshots as the `image` prop.
- **Portrait**: `public/portrait.jpeg`.
- **Tokens**: every color/spacing/type/motion value lives in `src/styles/tokens.css`.
# identity
