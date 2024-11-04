const fs = require('fs');
const path = require('path');

function listHistory() {
  const historyDir = path.resolve(process.cwd(), 'history');
  if (!fs.existsSync(historyDir)) {
    console.log('No history available.');
    return;
  }

  const files = fs.readdirSync(historyDir).filter(file => file.startsWith('.env.backup'));
  if (files.length === 0) {
    console.log('No history available.');
  } else {
    console.log('Available backups:');
    files.forEach(file => {
      console.log(`- ${file}`);
    });
  }
}

function rollbackTo(version) {
  const historyDir = path.resolve(process.cwd(), 'history');
  const targetPath = path.resolve(process.cwd(), '.env');
  const backupPath = path.join(historyDir, version);

  if (!fs.existsSync(backupPath)) {
    console.error(`Error: Backup ${version} not found.`);
    return;
  }

  fs.copyFileSync(backupPath, targetPath);
  console.log(`Rolled back to ${version}`);
}

module.exports = { listHistory, rollbackTo };
