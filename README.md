# Project Setup Guide

## Prerequisites

- Node.js (>=14.x)
- npm or yarn
- Git

## Installation

### Install Tailwind CSS with Next.js

Follow the official guide: [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./web-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start your development server

To install the project dependencies, navigate to the project directory and run `yarn install` to ensure all required packages are installed before starting the development server.

```bash
yarn install
```
After installing the dependencies, start the development server by running `yarn dev`.

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.



# Docusaurus Usage Guide

This guide explains how to set up and run the **Docusaurus** documentation site for this project.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (>=14.x)
- **npm** or **yarn**
- **Git** (if pulling from a repository)

## Running the Documentation Locally

### 1. Navigate to the `docs` Directory

```bash
cd docs
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Start the Documentation Server

Run the following command to start the Docusaurus development server:

```bash
npx docusaurus start
```

This will launch the documentation site at [http://localhost:3000](http://localhost:3000), and any changes will automatically reload.

## Additional Commands

### Build for Production

To generate a static site for deployment, run:

```bash
npx docusaurus build
```

This will create a `build/` directory with optimized static files.

### Serve the Built Site

To preview the production build locally, run:

```bash
npx docusaurus serve
```

This will serve the static files at [http://localhost:3000](http://localhost:3000).

# Documentation Page
To navigate to documentation pages, press on "Setup" on the top left.

## Need Help?

For more details, refer to the [Docusaurus Documentation](https://docusaurus.io/docs).
