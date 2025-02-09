# MongoDump: MongoDB Backup Utility

![MongoDump Logo](https://upload.wikimedia.org/wikipedia/commons/4/4e/MongoDB_Logo.svg)

## Description

**MongoDump** is a simple utility for creating backups of MongoDB databases using the `mongodump` tool. It allows you to back up a specific database, collection, or an entire MongoDB instance into binary files, which can be restored later using `mongorestore`. 

This project provides easy-to-follow instructions for using `mongodump` in various scenarios.

## Features

- Backup a full MongoDB database.
- Backup specific collections or subsets of data.
- Optionally compress backup files using gzip.
- Archive backups into single files for easier storage.

## Prerequisites

Before using **MongoDump**, ensure that the following tools are installed:

- **MongoDB**: You need a running MongoDB instance. Install MongoDB from [official MongoDB installation docs](https://www.mongodb.com/docs/manual/installation/).
- **MongoDB Database Tools**: The `mongodump` tool is part of MongoDB Database Tools. Make sure they are installed. You can download them from [here](https://www.mongodb.com/try/download/database-tools).
  
## Installation

### Steps to Install MongoDB Database Tools:

1. **Download MongoDB Database Tools**:
   - For Windows, macOS, or Linux, download the appropriate version from [MongoDB Tools Downloads](https://www.mongodb.com/try/download/database-tools).
   
2. **Install MongoDB Database Tools**:
   - Follow the platform-specific installation instructions found in the documentation.
   - After installation, ensure that the `mongodump` command is available in your terminal/command prompt by typing:
     ```bash
     mongodump --version
     ```

## Usage

### Basic Command

To dump the entire database from a MongoDB instance:

```bash
mongodump --uri="mongodb://localhost:27017" --out=/path/to/backup/
```

- `--uri`: The MongoDB connection URI (defaults to localhost:27017 if not provided).
- `--out`: The directory where the backup will be stored.

### Dump Specific Database

To dump a specific database:

```bash
mongodump --db=myDatabase --out=/path/to/backup/
```

### Dump Specific Collection

To dump a specific collection from a database:

```bash
mongodump --db=myDatabase --collection=myCollection --out=/path/to/backup/
```

### Dump with Compression

You can compress the backup using gzip:

```bash
mongodump --db=myDatabase --gzip --out=/path/to/backup/
```

### Dump as a Single Archive File

To dump to a single archive file (useful for storing or transferring):

```bash
mongodump --archive=/path/to/backup/mongodump.gz --gzip
```

### Authentication

If your MongoDB instance requires authentication:

```bash
mongodump --uri="mongodb://username:password@localhost:27017" --out=/path/to/backup/
```

### Dump from Remote MongoDB Server

If you're backing up from a remote MongoDB server:

```bash
mongodump --uri="mongodb://username:password@remoteHost:27017" --out=/path/to/backup/
```

## Options

Here are some additional useful options:

- `--host`: MongoDB server hostname (default is `localhost`).
- `--port`: The port on which MongoDB is running (default is `27017`).
- `--authenticationDatabase`: The authentication database for the MongoDB instance.
- `--gzip`: Compresses the dump files.
- `--archive`: Dump data into a single file (can also compress).
- `--oplog`: Include the oplog for a point-in-time backup (useful for replica sets).

For full documentation of all options, refer to the official [mongodump documentation](https://www.mongodb.com/docs/database-tools/mongodump/).

## Example Commands

- Dump the entire database:
  ```bash
  mongodump --out=/backups/
  ```

- Dump a specific database (`myDatabase`):
  ```bash
  mongodump --db=myDatabase --out=/backups/
  ```

- Dump a specific collection (`myCollection`):
  ```bash
  mongodump --db=myDatabase --collection=myCollection --out=/backups/
  ```

- Dump to a single compressed archive:
  ```bash
  mongodump --archive=/backups/mydump.gz --gzip
  ```

## Troubleshooting

### 1. `mongodump: command not found`

If you're seeing this error, it means that `mongodump` isn't installed or isn't added to your system's PATH. Ensure that MongoDB Database Tools are installed correctly, and try restarting your terminal or adding the tools' directory to your PATH.

### 2. Authentication Issues

If you get authentication errors, ensure you're providing the correct username, password, and authentication database:
```bash
mongodump --uri="mongodb://username:password@localhost:27017" --authenticationDatabase=admin --out=/backups/
```

### 3. Permission Errors

If you encounter permission errors on backup output directories, ensure that your user has write permissions to the backup destination directory.

### 4. Large Database Backups

If your MongoDB instance is large, consider running `mongodump` during off-peak hours to avoid impacting performance. You may also want to consider using the `--oplog` option if you're working with a replica set.

```

