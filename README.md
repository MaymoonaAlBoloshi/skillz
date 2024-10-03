# React TypeScript Vite Template with Tailwind CSS, DaisyUI, and TanStack Router

This template is a starting point for projects that use React, TypeScript, Vite, Tailwind CSS, DaisyUI, and TanStack Router with a file-based routing setup.

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14.x or above)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```
   yarn
   ```

3. Start the development server:

   ```
   yarn dev
   ```

### Project Structure

```
├── public
├── src
│   ├── assets
│   ├── components
│   ├── routes
│   ├── store
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── routeTree.gen.ts
│   ├── vite-env.d.ts
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

- The `routes/` directory is where you define your route components following a file-based routing pattern.

### Features

- **React** with TypeScript for a robust development experience.
- **Vite** for fast development and optimized production builds.
- **Tailwind CSS** for utility-first CSS.
- **DaisyUI** for pre-built Tailwind components and themes.
- **TanStack Router** for flexible and powerful routing with file-based structure.

### Configuration

#### Tailwind CSS

Tailwind is configured in `tailwind.config.js` to scan your content:

```
export default {
  daisyui: {
    themes: ['wireframe'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root'
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
```

#### DaisyUI

DaisyUI is included as a Tailwind plugin. You can customize it through the `daisyui` section in your Tailwind configuration.

### TanStack Router with File-Based Routing

This template uses TanStack Router with a file-based approach for routing. Routes are auto-generated from the `routeTree.gen.ts` file, which is configured in the `routes` folder.

The main setup is handled in the `App.tsx` file as shown below:

```
import './App.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
```

- The `routeTree.gen.ts` file is where the routes are defined and managed.
- The `RouterProvider` is used to set up the router across your application.
- TypeScript support is enhanced using module augmentation to declare the `router` type.

This setup allows you to maintain routing configuration centrally in the `routes` directory while keeping the main application file clean and focused.

### Available Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the project for production.
- `yarn preview`: Previews the production build locally.

### License

This project is licensed under the MIT License.
