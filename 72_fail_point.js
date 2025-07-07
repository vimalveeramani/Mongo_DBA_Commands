db.adminCommand({ failPoint: "hangBeforeReclaimCheckpoint", mode: "alwaysOn" });
