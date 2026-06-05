# XT Scale: AI Consulting & Svelte 5 Component Library

This project is a high-end marketing site for **XT Scale LLC** built atop a production-grade Svelte 5 component library.

## 🛠 Prerequisites

- **Node.js LTS**: Required for Svelte 5 and Vite 6.
- **Node Types**: Required for path resolution in configuration files.

```bash
# Use the latest stable Node.js LTS version
nvm use --lts

# Install Node types for path resolution
npm install --save-dev @types/node

# Verify Node.js version
node --version
```

## Installation

```bash
# Install dependencies
npm install

# Or with pnpm
pnpm install

# Or with yarn
yarn install
```

## Available Commands

### Development

```bash
# Start development server
npm run dev

# Start development server and open in browser
npm run dev -- --open
```

### Storybook

```bash
# Start Storybook development server (runs on http://localhost:6006)
npm run storybook

# Build Storybook for production
npm run build-storybook
```

### Type Checking

```bash
# Run TypeScript type checking
npm run check

# Run TypeScript type checking in watch mode
npm run check:watch
```

### Building

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🏗 Configuration Reference

This project uses several important configuration files that control how the project builds, runs, and tests. Most configuration files require `@types/node` for path resolution.

### 1. Vite Configuration (`vite.config.ts`)

This file coordinates SvelteKit and Tailwind 4. It includes the necessary path aliases and the Storybook/Vitest testing integration.

```typescript
/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' 
  ? __dirname 
  : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  test: {
    projects: [{
      extends: true,
      plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{ browser: 'chromium' }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});
```

**Why it matters:** Controls how your app is built and served, integrates Tailwind CSS, and sets up testing infrastructure.

### 2. Svelte Configuration (`svelte.config.js`)

Standard Svelte 5 setup using the Vite preprocessor.

```javascript
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    // $lib alias is handled automatically by SvelteKit to point to src/lib
  }
};

export default config;
```

**Why it matters:** Controls how SvelteKit processes your application. No changes needed from default.

### 3. Storybook Main Config (`.storybook/main.ts`)

Crucial for resolving the `$lib` alias and injecting Tailwind 4 into the Storybook-specific Vite build.

```typescript
import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  addons: [
    "@storybook/addon-svelte-csf",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import('@tailwindcss/vite');

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          $lib: resolve(dirname, '../src/lib')
        }
      }
    });
  }
};
export default config;
```

**Why it matters:** Controls component documentation and testing setup, ensures `$lib` alias works in Storybook.

### 4. Storybook Preview (`.storybook/preview.ts`)

This file ensures Tailwind styles are loaded in the Storybook iframe.

```typescript
import type { Preview } from '@storybook/sveltekit'
import '../src/app.css'; // Global CSS import for Tailwind 4

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
```

**Why it matters:** Controls global Storybook behavior and ensures Tailwind styles are available.

### 5. TypeScript & Global Types

To handle `.svelte` imports in TypeScript files, we need declarations in `src/app.d.ts` or `src/global.d.ts`.

**`src/global.d.ts`**
```typescript
declare module "*.svelte" {
    import { SvelteComponentTyped } from "svelte";
    export default class SvelteComponent<
        Props = Record<string, any>, 
        Events = Record<string, any>, 
        Slots = Record<string, any>
    > extends SvelteComponentTyped<Props, Events, Slots> {}
}
```

**`tsconfig.json`**
```json
{
    "extends": "./.svelte-kit/tsconfig.json",
    "compilerOptions": {
        "rewriteRelativeImportExtensions": true,
        "allowJs": true,
        "checkJs": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strict": true,
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true
    },
    "plugins": [{ "name": "@sveltejs/language-server" }]
}
```

**Why it matters:** Provides type safety and IDE support for Svelte components.

### 6. Tailwind CSS Entry Point (`src/app.css`)

```css
@import "tailwindcss";
```

**Note:** Tailwind is configured via Vite plugin - no separate `tailwind.config.js` needed.

**Why it matters:** This is where Tailwind CSS is imported into your application.

### Configuration Hierarchy

```
vite.config.ts (build tool)
  ├── svelte.config.js (SvelteKit)
  ├── tsconfig.json (TypeScript)
  └── .storybook/main.ts (Storybook)
      └── .storybook/preview.ts (Storybook global)
```

## 📂 Project Structure

```
src/
├── lib/
│   ├── custom/    # Hand-crafted CSS components (Zero dependencies)
│   ├── tailwind/  # Tailwind CSS utility-based components
│   ├── types/     # Shared TypeScript definitions
│   └── utils/     # Helper functions
├── routes/        # Website Pages (XT Scale)
└── app.css        # Tailwind 4 Entry (@import "tailwindcss";)
```

## 🚀 Key Workflows

### Svelte 5 Runes

Always use Svelte 5 syntax. **Never use Svelte 4 `export let` or `$:`**.

```svelte
<script lang="ts">
  let { title, children } = $props();
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>
  {title}: {doubled}
</button>
```

### Path Aliases

Always use `$lib` for internal library imports to ensure Storybook and the App stay in sync.

```typescript
import { Button } from '$lib/tailwind/Button/Button.svelte';
```

## Key Technologies

- **Svelte 5** - Modern reactive framework with runes
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework (via Vite plugin)
- **Storybook** - Component documentation and testing
- **Vite** - Fast build tool and dev server
- **SvelteKit** - Full-stack Svelte framework
- **Vitest** - Fast unit test framework

## Component Organization

Components are organized into two main categories:

- **Custom Components** (`src/lib/custom/`) - Hand-crafted components with custom CSS (zero dependencies)
- **Tailwind Components** (`src/lib/tailwind/`) - Components built with Tailwind utility classes

Each component should have:
- Component file (`.svelte`)
- Storybook story file (`.stories.ts`)
- Optional test file (`.test.ts`)

## Notes

- **Tailwind CSS**: Configured via `@tailwindcss/vite` plugin - no separate `tailwind.config.js` needed
- **Path Aliases**: `$lib` alias is automatically handled by SvelteKit
- **TypeScript**: Strict mode enabled - all code must be properly typed
- **Storybook**: Uses SvelteKit framework integration for seamless development

## Deployment

The site is hosted on Cloudflare Pages at [xtscale.com](https://xtscale.com). Deployments are done manually via the Wrangler CLI. There is no Git integration with Cloudflare.

The adapter is `@sveltejs/adapter-cloudflare`. Build output goes to `.svelte-kit/cloudflare`.

### First-time setup

Authenticate wrangler with your Cloudflare account (only needed once per machine):

```bash
npx wrangler login
```

### Deploy to production (xtscale.com)

```bash
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=xtscale
```

### Deploy a preview (staging link)

Use `--branch` to create a preview deployment that does not affect the live site. Each branch name gets its own unique `*.pages.dev` URL printed in the terminal after deploy.

```bash
npm run build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=xtscale --branch=dev
```

## Troubleshooting

### Site not updating after deploy

If `xtscale.com` is not reflecting the latest deploy:

1. **Hard refresh** the browser: `Cmd + Shift + R` (or open in incognito)
2. **Purge Cloudflare cache:** dash.cloudflare.com > click **xtscale.com** (the domain) > **Caching** > **Purge Everything**

The `xtscale.pages.dev` URL always reflects deploys immediately. The custom domain goes through Cloudflare's CDN which may serve cached content.

### Type Checking Errors

Run type checking to identify issues:
```bash
npm run check
```

### Node Version Issues

If you encounter issues, ensure you're using Node.js LTS:
```bash
nvm use --lts
```

### Storybook Not Loading

Ensure dependencies are installed:
```bash
npm install
npm run storybook
```
