#!/usr/bin/env node
import { Command } from "commander";
import { createApp } from "./commands/create-app";

const program = new Command();

program
  .name("dev-cli")
  .description("Internal CLI for scaffolding React apps and components")
  .version("0.1.0");

program
  .command("create-app")
  .description("Scaffold a new React app")
  .action(createApp);

program.parse(process.argv);
