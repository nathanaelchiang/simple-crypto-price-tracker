import React from 'react';
import Layout from '@theme/Layout';

export default function SetupPage() {
  return (
    <Layout title="Project Setup Guide" description="How to run both web and mobile apps with Tailwind CSS and Next.js">
      <main className="container margin-vert--lg">
        <h1>Project Setup Guide</h1>
        <p>This guide explains how to set up and run both the web and mobile applications for your project.</p>

        <h2>Prerequisites</h2>
        <ul>
          <li>Node.js ({'>'}=14.x)</li>
          <li>npm or yarn</li>
          <li>Git</li>
        </ul>

        <h2>Installation</h2>

        <h3>Install Tailwind CSS with Next.js</h3>
        <p>
          Follow the official guide: <a href="https://tailwindcss.com/docs/guides/nextjs" target="_blank" rel="noreferrer">Install Tailwind CSS with Next.js</a>
        </p>

        <h3>Create your project</h3>
        <p>Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use <a href="https://nextjs.org/docs/api-reference/create-next-app" target="_blank" rel="noreferrer">Create Next App</a>.</p>
        <pre>
          <code>{`npx create-next-app@latest crypto-price-tracker-app --typescript --eslint
cd crypto-price-tracker-app`}</code>
        </pre>

        <h3>Install Tailwind CSS</h3>
        <p>Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both <code>tailwind.config.js</code> and <code>postcss.config.js</code>.</p>
        <pre>
          <code>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code>
        </pre>

        <h3>Configure your template paths</h3>
        <p>Add the paths to all of your template files in your <code>tailwind.config.js</code> file.</p>
        <pre>
          <code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./web-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
        </pre>

        <h3>Add the Tailwind directives to your CSS</h3>
        <p>Add the <code>@tailwind</code> directives for each of Tailwind’s layers to your <code>./styles/globals.css</code> file.</p>
        <pre>
          <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
        </pre>

        <h3>Start your development server</h3>
        <pre>
          <code>{`npm run dev
# or
yarn dev`}</code>
        </pre>
        <p>
          Open <a href="http://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a> with your browser to see the result.
        </p>
        <p>
          You can start editing the page by modifying <code>pages/index.tsx</code>. The page auto-updates as you edit the file.
        </p>
      </main>
    </Layout>
  );
}
