#!/usr/bin/env node
const { program } = require('commander');
const { switchEnv } = require('../lib/switch');
const { validateEnv } = require('../lib/validate');
const { backupEnv } = require('../lib/backup');
const { listHistory, rollbackTo } = require('../lib/history');

program
  .version('1.0.0')
  .description('EnvBuddy CLI for managing environment files');

program
  .command('switch <envName>')
  .description('Switch to a specific .env file (e.g., dev, staging, prod)')
  .action((envName) => {
    switchEnv(envName);
  });

program
  .command('validate')
  .description('Validate current .env file against .env.example')
  .action(() => {
    validateEnv();
  });

program
  .command('backup')
  .description('Backup current .env file')
  .action(() => {
    backupEnv();
  });

program
  .command('history')
  .description('List available backups of the .env file')
  .action(() => {
    listHistory();
  });

program
  .command('rollback <version>')
  .description('Rollback to a specific version of the .env file')
  .action((version) => {
    rollbackTo(version);
  });

program.parse(process.argv);
