# Saarah Packeer — Portfolio

Built with **Vue 3 + TypeScript + Vite + Tailwind CSS**.

## Project structure

```
src/
├── data/
│   ├── profile.ts     ← your name, bio, links, interests, photo filenames
│   ├── projects.ts    ← featured projects + uni projects
│   └── skills.ts      ← skill groups (Frontend / Backend / Tools)
├── types/
│   └── index.ts       ← TypeScript interfaces
├── components/
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── SkillsSection.vue
│   └── ProjectCard.vue
├── views/
│   ├── HomeView.vue       → saarahpackeer.github.io/#/
│   └── ProjectsView.vue   → saarahpackeer.github.io/#/projects
├── router/index.ts
├── App.vue
├── main.ts
└── style.css

public/
└── photos/            ← put your images here
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    └── photo4.jpg
```

## Updating your content

**All content lives in `src/data/` — you never need to touch a component.**

| What you want to change | File to edit |
|---|---|
| Name, bio, email, resume link, socials | `src/data/profile.ts` |
| Interests + photo filenames | `src/data/profile.ts` |
| Skills list | `src/data/skills.ts` |
| Add/edit a project | `src/data/projects.ts` |

### Adding photos

1. Drop your images into `public/photos/`
2. Make sure the filenames match what's listed in `profile.ts` under `photos: [...]`
3. That's it — the About grid picks them up automatically.

### Adding a project

Open `src/data/projects.ts` and add an entry to the array:

```ts
{
  title: 'My Project',
  description: 'What it does in one sentence.',
  emoji: '🚀',
  tags: ['Vue', 'TypeScript'],
  tagVariants: ['primary', 'secondary'],
  liveUrl: 'https://myproject.com',   // omit if not deployed
  repoUrl: 'https://github.com/...',  // omit if private
  featured: true,   // true = shows on home page; false = uni projects page only
}
```

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Deployment

Deployment is fully automatic via GitHub Actions.

**One-time setup (do this once):**

1. Push this code to your `main` branch
2. In your GitHub repo → **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Save

After that, every `git push` to `main` triggers a build and deploy. Your site will
be live at **https://saarahpackeer.github.io** within about 60 seconds.

You can also trigger a manual deploy from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.
