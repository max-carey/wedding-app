import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received data:', body);
    

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwOIEceCob21rcDrQxIxrytZg6_6IWp5JN4IQZ0AfqiD61bfmY-LxpboUZNQ_dK4uNqpw/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    // Lee el body solo una vez como texto
    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = text;
    }

    return NextResponse.json({ success: true, response: result });
  } catch (error: any) {
    console.error('Error al reenviar a Apps Script:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message },
      { status: 500 }
    );
  }
}
