const fs = require('fs');
const path = require('path');

function validateEnv() {
  const currentEnvPath = path.resolve(process.cwd(), '.env');
  const exampleEnvPath = path.resolve(process.cwd(), '.env.example');

  if (!fs.existsSync(currentEnvPath)) {
    console.error('Error: .env file not found');
    return;
  }

  if (!fs.existsSync(exampleEnvPath)) {
    console.error('Error: .env.example file not found');
    return;
  }

  const currentEnv = fs.readFileSync(currentEnvPath, 'utf-8').split('\n').map(line => line.split('=')[0].trim());
  const exampleEnv = fs.readFileSync(exampleEnvPath, 'utf-8').split('\n').map(line => line.split('=')[0].trim());

  const missingKeys = exampleEnv.filter(key => key && !currentEnv.includes(key));

  if (missingKeys.length > 0) {
    console.warn('Warning: The following keys are missing from the .env file:');
    console.warn(missingKeys.join('\n'));
  } else {
    console.log('Validation passed: All required keys are present.');
  }
}

module.exports = { validateEnv };
