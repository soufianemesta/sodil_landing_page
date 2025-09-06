import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        // Load the service account credentials
        const credentialsPath = path.join(process.cwd(), 'credentials.json');
        const auth = new google.auth.GoogleAuth({
            keyFile: credentialsPath,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Your Google Sheets ID from the URL
        const spreadsheetId = '14c8U6iWhVjwzR8hMCpStiNqmifwGZa5d0eh08HdgqTg';
        
        // Format the data for the spreadsheet
        const values = [
            [
                new Date().toISOString(),
                formData.fullName,
                formData.phoneNumber,
                formData.city,
                formData.vehicleType,
                formData.availability
            ]
        ];

        // Append the data to the sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:F', // Adjust range as needed
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        return NextResponse.json({ message: 'Candidature soumise avec succès!' });
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        const errorMessage = error instanceof Error ? error.message : 'Une erreur s\'est produite';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}