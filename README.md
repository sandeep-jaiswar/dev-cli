# @sandeep-jaiswar/dev-cli

A fast, opinionated developer CLI to scaffold React apps and components consistently across your organization.

## ✨ Features

- ⚡️ Fast scaffolding powered by [Bun](https://bun.sh) and [ESBuild](https://esbuild.github.io)
- 📦 Create production-ready React apps in seconds
- 🧱 Generate reusable React components with proper folder structure
- 🧹 Enforces code standards with ESLint, Prettier, and lint-staged
- 🔧 Zero-config setup via CLI prompts
- 🚀 Built with DX and scalability in mind

---

## 📦 Installation

```bash
bun add -g @sandeep-jaiswar/dev-cli
````

---

## 🚀 Usage

### Create a new React App

```bash
dev-cli create-app
```

Follow the interactive prompts to scaffold a new React + Vite app.

---

### Generate a React Component

```bash
dev-cli generate-component
```

Choose the component name and type (function or compound), and the CLI will generate the boilerplate inside `src/components/`.

---

## 🛠 Tech Stack

* **Runtime**: [Bun](https://bun.sh)
* **Bundler**: [tsup](https://tsup.egoist.dev)
* **Build Tooling**: ESBuild
* **CLI**: Inquirer
* **Automation**: GitHub Actions, Changesets

---

## 🗂 Project Structure

```
src/
├── commands/
│   ├── create-app.ts
│   └── generate-component.ts
├── utils/
│   └── copyAndReplaceTemplate.ts
├── templates/
│   ├── react-app/
│   └── react-component/
└── index.ts
```

---

## 🧪 Development

Install dependencies:

```bash
bun install
```

Build the CLI:

```bash
bun run build
```

Run locally:

```bash
bun run dev
```

---

## 🔄 Releasing

We use [Changesets](https://github.com/changesets/changesets) for versioning and publishing.

To prepare a release:

```bash
bunx changeset
```

Then create a PR. Merging to `main` will trigger GitHub Actions to publish.

---

## 📄 License

MIT © [Sandeep Jaiswar](https://github.com/sandeep-jaiswar)
