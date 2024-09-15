const syncGoogleToDB = require('./src/sync/google_to_db_sync');
const syncDBToGoogle = require('./src/sync/db_to_google_sync');

const startSyncJob = () => {
    setInterval(async () => {
        console.log('Syncing Google Sheets to Database...');
        await syncGoogleToDB();

        console.log('Syncing Database to Google Sheets...');
        await syncDBToGoogle();
    }, process.env.SYNC_INTERVAL);
};

startSyncJob();
