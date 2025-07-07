db.adminCommand({ setDefaultRWConcern:1, defaultWriteConcern:{w:"majority"} });
