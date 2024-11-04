const fs = require('fs');
const path = require('path');

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File ${filePath} not found`);
    return null;
  }

  return fs.readFileSync(filePath, 'utf-8');
}

function writeEnvFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`File ${filePath} has been updated.`);
}

function parseEnvContent(content) {
  return content.split('\n').reduce((acc, line) => {
    if (line.trim() && !line.startsWith('#')) {
      const [key, value] = line.split('=');
      acc[key.trim()] = value ? value.trim() : '';
    }
    return acc;
  }, {});
}

module.exports = {
  readEnvFile,
  writeEnvFile,
  parseEnvContent,
};
