The `mongorestore` command is used to restore data from a backup created with `mongodump`. It takes the backup files (typically created using `mongodump` in binary format) and restores them to a MongoDB database.

Here’s an overview of how to use `mongorestore`:

### Basic Usage

```bash
mongorestore --uri="mongodb://localhost:27017" /path/to/backup/
```

#### Explanation of the options:
- `--uri`: The connection URI to your MongoDB instance. (Optional if connecting to the default `localhost:27017`).
- `/path/to/backup/`: The path to the folder containing the backup files you want to restore.

### Full Database Restore

To restore an entire database from the backup:

```bash
mongorestore --uri="mongodb://localhost:27017" /path/to/backup/
```

This will restore all databases and collections found in the backup directory.

### Restore a Specific Database

To restore a specific database from the backup:

```bash
mongorestore --db=myDatabase --uri="mongodb://localhost:27017" /path/to/backup/myDatabase/
```

- `--db`: Specify the name of the database to restore.
- `/path/to/backup/myDatabase/`: Path to the backup folder for the specific database.

### Restore a Specific Collection

To restore a specific collection within a database:

```bash
mongorestore --db=myDatabase --collection=myCollection --uri="mongodb://localhost:27017" /path/to/backup/myDatabase/myCollection.bson
```

- `--collection`: The collection to restore.
- `/path/to/backup/myDatabase/myCollection.bson`: Path to the specific collection backup file.

### Restore from a Compressed Archive

If you created a compressed backup using the `--gzip` or `--archive` options in `mongodump`, you can restore it like this:

#### From a gzipped backup:
```bash
mongorestore --gzip --uri="mongodb://localhost:27017" /path/to/backup/
```

#### From a single archive:
```bash
mongorestore --archive=/path/to/backup/mongodump.gz --gzip --uri="mongodb://localhost:27017"
```

### Drop Existing Data Before Restoring

By default, `mongorestore` will not drop existing collections when restoring. If you want to drop the collections that already exist before restoring, use the `--drop` option:

```bash
mongorestore --drop --uri="mongodb://localhost:27017" /path/to/backup/
```

This will ensure that any existing collections are removed before the backup is restored.

### Authentication (for secured MongoDB instances)

If your MongoDB instance requires authentication, you can specify the username, password, and authentication database:

```bash
mongorestore --uri="mongodb://username:password@localhost:27017" --authenticationDatabase=admin /path/to/backup/
```

### Restore to a Different Database

If you want to restore data to a database with a different name, you can specify a target database:

```bash
mongorestore --db=newDatabase --uri="mongodb://localhost:27017" /path/to/backup/myDatabase/
```

This will restore the backup of `myDatabase` into the `newDatabase` database.

### Specifying a Port

If your MongoDB instance is running on a different port (other than the default `27017`), you can specify the port with `--port`:

```bash
mongorestore --port=27018 --uri="mongodb://localhost" /path/to/backup/
```

### Additional Options

- `--oplogReplay`: This option can be used to restore the oplog if you're working with a replica set and want to replay operations.
- `--noIndexRestore`: Use this option to prevent restoring indexes.
- `--parallelCollections`: Specifies the number of collections to restore in parallel (useful for large datasets).

### Example Commands

1. **Restore a full backup to a MongoDB instance:**
   ```bash
   mongorestore --uri="mongodb://localhost:27017" /path/to/backup/
   ```

2. **Restore a specific database:**
   ```bash
   mongorestore --db=myDatabase --uri="mongodb://localhost:27017" /path/to/backup/myDatabase/
   ```

3. **Restore a specific collection:**
   ```bash
   mongorestore --db=myDatabase --collection=myCollection --uri="mongodb://localhost:27017" /path/to/backup/myDatabase/myCollection.bson
   ```

4. **Restore from a gzipped backup:**
   ```bash
   mongorestore --gzip --uri="mongodb://localhost:27017" /path/to/backup/
   ```

5. **Restore and drop existing collections:**
   ```bash
   mongorestore --drop --uri="mongodb://localhost:27017" /path/to/backup/
   ```

6. **Restore to a different database name:**
   ```bash
   mongorestore --db=newDatabase --uri="mongodb://localhost:27017" /path/to/backup/myDatabase/
   ```

---

#### Note:
- Ensure MongoDB is running before attempting a restore.
- You can also use `mongorestore` in conjunction with `mongodump` for automated backups and restores in a production environment.

