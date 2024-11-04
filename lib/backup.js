const fs = require('fs');
const path = require('path');

function backupEnv() {
  const currentEnvPath = path.resolve(process.cwd(), '.env');
  const backupDir = path.resolve(process.cwd(), 'history');

  if (!fs.existsSync(currentEnvPath)) {
    console.error('Error: No .env file found to back up');
    return;
  }

  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(backupDir, `.env.backup-${timestamp}`);

  fs.copyFileSync(currentEnvPath, backupPath);
  console.log(`Backup created at ${backupPath}`);
}

module.exports = { backupEnv };
