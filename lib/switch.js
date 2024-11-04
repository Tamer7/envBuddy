const fs = require('fs');
const path = require('path');

function switchEnv(envName) {
  const envPath = path.resolve(process.cwd(), `.env.${envName}`);
  const targetPath = path.resolve(process.cwd(), '.env');
  const historyDir = path.resolve(process.cwd(), 'history');

  if (!fs.existsSync(envPath)) {
    console.error(`Error: .env.${envName} does not exist`);
    return;
  }

  if (!fs.existsSync(historyDir)) {
    fs.mkdirSync(historyDir);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(historyDir, `.env.backup-${timestamp}`);

  if (fs.existsSync(targetPath)) {
    fs.copyFileSync(targetPath, backupPath);
    console.log(`Backup created at ${backupPath}`);
  }

  fs.copyFileSync(envPath, targetPath);
  console.log(`Switched to .env.${envName}`);
}

module.exports = { switchEnv };
