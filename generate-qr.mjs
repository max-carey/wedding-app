import QRCode from 'qrcode';
import { writeFile } from 'fs/promises';

// The URL to encode in the QR code
const url = 'https://crazylocofiesta.com';

// Options for the QR code
const options = {
    errorCorrectionLevel: 'H', // Highest error correction level
    margin: 1,
    width: 300,
    color: {
        dark: '#000000',  // Black
        light: '#f6f6e9'  // White
    }
};

// Generate QR code and save it as PNG
try {
    const qrDataUrl = await QRCode.toDataURL(url, options);
    const base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, '');
    await writeFile('wedding-qr.png', base64Data, 'base64');
    console.log('QR code has been generated successfully as wedding-qr.png');
} catch (err) {
    console.error('Error generating QR code:', err);
} 