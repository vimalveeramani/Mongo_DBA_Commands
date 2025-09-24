// --- Syntax Example ---
var bulk = db.music.initializeOrderedBulkOp();    // Initialize an ordered bulk operation on the 'music' collection
bulk.find({ "genre": "pop" }).delete();           // Queue delete operation for documents where genre = "pop"
bulk.execute();                                  // Execute the bulk operation


// --- Example: Delete documents in a date range ---
var bulk = db.callogs.initializeOrderedBulkOp();  // Initialize an ordered bulk operation on 'callbacklogs'

bulk.find({
  date: { 
    $gte: ISODate("2024-10-01T00:00:00Z"),       // Start date (inclusive)
    $lte: ISODate("2024-12-31T23:59:59Z")        // End date (inclusive)
  }
}).delete();                                     // Queue delete operation for matching documents

bulk.execute();                                  // Execute the bulk delete


// --- Example with Batching (for very large datasets) ---
const batchSize = 10000;                         // Number of documents to delete per batch
let deletedCount;                                // Tracks how many documents were deleted in each batch

do {
  // Create a new bulk operation for this batch
  const bulk = db.calllogs.initializeOrderedBulkOp();

  // Queue delete operation for documents within the date range
  bulk.find({
    date: { 
      $gte: ISODate("2024-10-01T00:00:00Z"),     // Start date (inclusive)
      $lte: ISODate("2024-12-31T23:59:59Z")      // End date (inclusive)
    }
  }).delete();

  // Execute the bulk delete for this batch
  const result = bulk.execute();

  // Get number of deleted documents (nRemoved for older versions, nDeleted for newer drivers)
  deletedCount = result.nRemoved || result.nDeleted || 0;
  print(`Deleted ${deletedCount} documents in this batch`);

  // Optional: Pause between batches to reduce load on the server
  // sleep(100); // Sleep for 100 milliseconds
} while (deletedCount === batchSize);


// --- Documentation Links ---
/*
  MongoDB Bulk Delete Reference:
  https://www.mongodb.com/docs/manual/reference/method/Bulk.find.delete/

  Additional Reference (Stack Overflow discussion):
  https://stackoverflow.com/questions/75410077/how-should-i-efficiently-delete-alot-of-records-from-a-mongodb-collection
*/
