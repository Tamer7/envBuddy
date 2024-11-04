EnvBuddy.js
===========

**EnvBuddy.js** is an npm package designed to make managing environment variables simple and efficient. Switch between different `.env` files, validate environment variables, back up your current `.env`, and roll back to previous versions seamlessly. Perfect for developers working across multiple environments like development, staging, and production.

Features
--------

-   Switch Between Environments: Easily switch your `.env` file between predefined configurations.
-   Automatic Backup Creation: Back up your current `.env` file before switching, stored in a `history` folder.
-   Environment Validation: Validate your `.env` file against an example template (`.env.example`) to ensure all required variables are present.
-   List and Rollback History: View available backups and roll back to a previous version if needed.
-   CLI Tool: Simple and intuitive CLI commands for managing environment files.

Installation
------------

To install EnvBuddy.js globally, run:

```
npm install -g envbuddy
```
Or, use npx for one-time usage:

```
npx envbuddy <command>
```
Commands Overview
-----------------

### 1\. Switch to a Specific Environment

**Description**: Switches the current `.env` file to a specified environment (e.g., `.env.dev`, `.env.staging`, `.env.prod`).

**Usage**: 
```
envbuddy switch <envName>
```

**Example**: 
```
envbuddy switch dev
```

**What it Does**:

-   Creates a timestamped backup of the current `.env` file in the `history` folder.
-   Replaces the current `.env` file with the contents of `.env.dev`.

### 2\. Validate Environment Variables

**Description**: Validates the current `.env` file against `.env.example` to ensure all required variables are present.

**Usage**: 
```
envbuddy validate
```

**Example Output**: Warning: The following keys are missing from the .env file:

-   API_SECRET
-   DB_PORT

Validation completed. Missing keys found.

### 3\. Backup the Current `.env`

**Description**: Creates a backup of the current `.env` file with a timestamp.

**Usage**: 
```
envbuddy backup
```

**Example Output**: Backup created at /path/to/project/history/.env.backup-2024-11-03T14-30-05-000Z

### 4\. List Available Backups

**Description**: Lists all the backups available in the `history` folder.

**Usage**: 
```
envbuddy history
```

**Example Output**: Available backups:

-   .env.backup-2024-11-03T14-30-05-000Z
-   .env.backup-2024-11-02T16-45-22-000Z
-   .env.backup-2024-11-01T10-12-11-000Z

### 5\. Rollback to a Previous Backup

**Description**: Restores the current `.env` file to a specified backup version.

**Usage**:
```
envbuddy rollback <backupFileName>
```

**Example**: envbuddy rollback .env.backup-2024-11-03T14-30-05-000Z

**What it Does**:

-   Replaces the current `.env` file with the contents of the specified backup.

Setup and Configuration
-----------------------

### Requirements

-   Node.js version 12.x or higher.
-   Ensure you have the necessary permissions to create and modify files in your project directory.

### Directory Structure

Ensure your project has the following structure:

| Path              | Description                                   |
|-------------------|-----------------------------------------------|
| project-root/     | Root directory of your project                |
| ├── .env          | Main environment file                         |
| ├── .env.dev      | Development environment file                  |
| ├── .env.staging  | Staging environment file                      |
| ├── .env.prod     | Production environment file                   |
| ├── .env.example  | Example environment file for validation       |
| └── history/      | Directory created by EnvBuddy.js for backups  |


Example Workflow
----------------

1.  Switch to Development Environment: envbuddy switch dev The current `.env` file is backed up, and `.env.dev` is copied to `.env`.

2.  Validate Environment Variables: envbuddy validate Checks if all keys in `.env.example` are present in `.env`.

3.  List Backups: envbuddy history Shows all backups stored in the `history` folder.

4.  Rollback to a Previous Version: envbuddy rollback .env.backup-2024-11-03T14-30-05-000Z Restores `.env` to the selected backup version.

Advanced Features
-----------------

-   Automatic Backups: Every time you run `switch`, EnvBuddy creates a backup of the current `.env` file.
-   Cross-Environment Syncing: Future updates may include the ability to sync and merge common variables across different `.env` files.
-   Interactive CLI: Potential addition to allow users to interact with the CLI in a guided, menu-driven way.

Troubleshooting
---------------

-   Command Not Recognized: Ensure EnvBuddy.js is installed globally (npm install -g envbuddy).
-   Script Execution Policy (Windows): If you encounter issues with running scripts, use npx envbuddy <command> to bypass restrictions.

Contribution
------------

We welcome contributions! Please fork the repository, make changes, and submit a pull request. For any major changes, please open an issue first to discuss what you would like to change.