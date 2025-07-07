db.adminCommand({listDatabases: 1}).databases.forEach(db => print(db.name));
