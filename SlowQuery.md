In MongoDB, you can identify long-running queries using the following methods:

### 1. **Using the `currentOp` Command**
The `currentOp` command provides information about operations currently running on the MongoDB server. 

Run the following command in the `admin` database:
```javascript
db.currentOp({
    "active": true,            // Only active operations
    "secs_running": { "$gte": 10 } // Operations running for 10 seconds or more
});
```
You can adjust the `secs_running` value based on your threshold for "long-running" queries.

### 2. **Using MongoDB Logs**
MongoDB logs long-running queries if you enable profiling. 

#### Steps to enable profiling:
1. Enable profiling for the database:
   ```javascript
   db.setProfilingLevel(2, { slowms: 100 }); // Logs queries that take more than 100ms
   ```
   - **Level 0**: No profiling.
   - **Level 1**: Logs slow operations only.
   - **Level 2**: Logs all operations.

2. Check the `system.profile` collection:
   ```javascript
   db.system.profile.find({ millis: { $gte: 100 } }).sort({ ts: -1 });
   ```
   Replace `100` with your desired threshold in milliseconds.

3. Disable profiling after debugging:
   ```javascript
   db.setProfilingLevel(0);
   ```

### 3. **Using MongoDB Monitoring Tools**
- **Cloud Manager/Atlas**: These tools provide real-time monitoring and performance metrics, including long-running queries.
- **Third-party tools**: Tools like **Percona Monitoring and Management (PMM)** or **Mongostat** can also help in identifying such queries.

### 4. **Using `explain()`**
For suspected queries, run them with `explain()` to see execution stats and optimize the query:
```javascript
db.collectionName.find({ field: "value" }).explain("executionStats");
```

This will provide details like the total execution time and the query plan.

