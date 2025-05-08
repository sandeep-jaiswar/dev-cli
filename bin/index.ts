#!/usr/bin/env bun

import inquirer from 'inquirer';
import { createApp } from '../src/commands/create-app';
import { generateComponent } from '../src/commands/generate-component';

async function main() {
  const { command } = await inquirer.prompt([
    {
      type: 'list',
      name: 'command',
      message: 'What do you want to do?',
      choices: ['create-app', 'generate-component'],
    },
  ]);

  if (command === 'create-app') await createApp();
  if (command === 'generate-component') await generateComponent();
}

main();
