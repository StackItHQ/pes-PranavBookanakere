const { google } = require('googleapis');
require('dotenv').config();

const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_SHEETS_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const getSheetData = async (spreadsheetId, range) => {
    const authClient = await auth.getClient();
    const request = { spreadsheetId, range, auth: authClient };
    
    const response = await sheets.spreadsheets.values.get(request);
    return response.data.values;
};

module.exports = { getSheetData };
