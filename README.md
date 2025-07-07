# MongoDB DBA Commands

This repository contains **100+ essential MongoDB DBA commands**, organized in individual `.js` or `.sh` files for quick reference and execution. These scripts are designed to help database administrators perform monitoring, troubleshooting, and maintenance tasks efficiently.

## Structure

Each file is named clearly to indicate the command’s purpose. The files are categorized broadly into:

- `.js` files: Commands to run within the MongoDB shell
- `.sh` files: Shell scripts for monitoring or maintenance

## Usage

Run JavaScript files using the MongoDB shell:

```bash
mongo < db_connection_string > path/to/command_file.js
```

Run shell scripts directly:

```bash
bash path/to/script.sh
```

## Full List of Commands

| File Name | Description |
|-----------|-------------|
| 01_server_status.js | Check overall server health |
| 02_connection_status.js | Connection status to MongoDB instance |
| 03_conn_pool_stats.js | View connection pool stats |
| 04_host_info.js | Hardware and system-level host info |
| 05_build_info.js | MongoDB build information |
| 06_version.js | Current MongoDB version |
| 07_coll_stats.js | Collection-level statistics |
| 08_db_stats.js | Database statistics |
| 09_db_stats_verbose.js | Verbose database stats |
| 10_data_size.js | Data size of specific collection |
| 11_explain_query.js | Explain and analyze a query |
| 12_get_indexes.js | List all indexes on a collection |
| 13_current_op.js | Show currently running operations |
| 14_kill_op.js | Terminate long-running operation |
| 15_ping.js | Ping the database |
| 16_log_components.js | List log verbosity components |
| 17_get_log_global.js | Get global logs |
| 18_get_log_all.js | Get all available logs |
| 19_repl_status.js | Replication status |
| 20_print_repl_info.js | Basic replication info |
| 21_print_secondary_info.js | Secondary replication details |
| 22_print_slave_info.js | Legacy slave replication info |
| 23_list_databases.js | List all databases |
| 24_get_indexes_cmd.js | List indexes via command |
| 25_validate_collection.js | Validate collection structure |
| 26_reindex_collection.js | Rebuild indexes |
| 27_shutdown.js | Shutdown MongoDB server |
| 28_shutdown_force.js | Force shutdown |
| 29_set_feature_compat.js | Set feature compatibility version |
| 30_get_cmd_opts.js | Command line options |
| 31_is_master.js | Check if node is primary |
| 32_list_roles.js | List all roles |
| 33_show_users.js | Show users |
| 34_auth_user.js | Authenticate as a user |
| 35_create_user.js | Create a new MongoDB user |
| 36_drop_user.js | Drop an existing user |
| 37_grant_roles_user.js | Grant roles to a user |
| 38_revoke_roles_user.js | Revoke roles from a user |
| 39_update_user_password.js | Update user password |
| 40_change_user_password.js | Change current user password |
| 41_system_users.js | Show system users |
| 42_system_roles.js | Show system roles |
| 43_create_role.js | Create custom role |
| 44_grant_roles_role.js | Grant roles to role |
| 45_revoke_roles_role.js | Revoke roles from role |
| 46_drop_role.js | Drop role |
| 47_rotate_certificates.js | Rotate SSL certificates |
| 48_default_rw_concern.js | Set default write concern |
| 49_set_index_commit_quorum.js | Set index build commit quorum |
| 50_set_profiling_level.js | Set profiling level |
| 51_get_profiling_status.js | Get current profiling level |
| 52_profile_find_recent.js | Find recent queries in profiler |
| 53_plan_cache_list.js | List plan cache |
| 54_plan_cache_clear.js | Clear plan cache |
| 55_fsync_lock.js | Lock instance for backup |
| 56_fsync_unlock.js | Unlock instance |
| 57_enable_free_monitoring.js | Enable free monitoring |
| 58_disable_free_monitoring.js | Disable free monitoring |
| 59_get_free_monitoring_status.js | Free monitoring status |
| 60_log_rotate.js | Rotate MongoDB logs |
| 61_set_param.js | Set server parameter |
| 62_get_param.js | Get server parameters |
| 63_rename_collection.js | Rename a collection |
| 64_clone_db.js | Clone remote database |
| 65_copy_db.js | Copy one DB to another |
| 66_repair_database.js | Repair the database |
| 67_create_collection.js | Create a new collection |
| 68_drop_collection.js | Drop a collection |
| 69_drop_database.js | Drop the current database |
| 70_get_sibling_db.js | Switch DB context |
| 71_drop_connections.js | Drop client connections |
| 72_fail_point.js | Trigger fail point for testing |
| 73_wiredtiger_cache.js | WiredTiger cache stats |
| 74_metrics_query.js | Query execution metrics |
| 75_metrics_cursor.js | Cursor usage stats |
| 76_metrics_document.js | Document-level metrics |
| 77_metrics_record.js | Record-level metrics |
| 78_metrics_locks.js | Locks performance |
| 79_metrics_threads.js | Thread-level metrics |
| 80_mongostat.sh | Live server stats |
| 81_mongotop.sh | Real-time collection access stats |
| 82_watch_current_op.sh | Live view of current operations |
| 83_repair_mongod.sh | Start mongod with repair |
| 84_disk_stats.js | Block manager disk stats |
| 85_memory_stats.js | Memory usage from serverStatus |
| 86_opcounters.js | Operation counters |
| 87_network_stats.js | Network traffic info |
| 88_asserts.js | Assertions from serverStatus |
| 89_locks_info.js | Lock contention information |
| 90_list_all_collections.js | List all collections |
| 91_cursor_info.js | Cursor metrics |
| 92_query_exec_stats.js | Query executor performance |
| 93_page_faults.js | Page faults observed |
| 94_read_write_concern_defaults.js | Default RW concern |
| 95_dbhash.js | Database hash for consistency |
| 96_hostInfo.js | Hardware and OS info |
| 97_buildInfo.js | Build details of MongoDB |
| 98_listCommands.js | All available server commands |
| 99_all_dbs_storage.js | List all DBs for usage check |
| 100_get_logs.js | Get logs from server |

## Author

**Vimal Veeramani**  
GitHub: [vimalveeramani](https://github.com/vimalveeramani)

## License

This project is licensed under the MIT License.
