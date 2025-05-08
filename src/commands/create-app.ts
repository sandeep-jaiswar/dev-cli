import path from 'path';
import fs from 'fs';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';
import { copyAndReplaceTemplate } from '../utils/copyAndReplaceTemplate';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createApp() {
  const { appName, useTailwind } = await inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'App name:',
      validate: (input) => input ? true : 'App name cannot be empty.',
    },
    {
      type: 'confirm',
      name: 'useTailwind',
      message: 'Use TailwindCSS?',
      default: true,
    },
  ]);

  const targetDir = path.resolve(process.cwd(), appName);
  const templateDir = path.resolve(__dirname, '../templates/react-app');

  if (fs.existsSync(targetDir)) {
    console.error(`❌ Directory "${appName}" already exists.`);
    process.exit(1);
  }

  console.log(`\n📦 Creating ${appName}...`);

  await copyAndReplaceTemplate(templateDir, targetDir, {
    APP_NAME: appName,
    USE_TAILWIND: useTailwind ? 'true' : 'false',
  });

  console.log(`\n✅ Done! Now run:`);
  console.log(`cd ${appName} && bun install && bun dev`);
}
