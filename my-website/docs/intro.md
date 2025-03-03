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
