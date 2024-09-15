const { getSheetData } = require('../api/google_sheets_service');
const SheetData = require('../models/database_model');

const syncGoogleToDB = async () => {
    const data = await getSheetData(process.env.SPREADSHEET_ID, 'Sheet1!A2:B');
    
    for (let row of data) {
        const [field1, field2] = row;
        
        // Update database, creating new records if needed
        await SheetData.upsert({ field1, field2 });
    }
};

module.exports = syncGoogleToDB;
