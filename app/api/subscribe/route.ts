import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'subscribers.csv');
    const csvLine = `${new Date().toISOString()},${email}\n`;

    await fs.appendFile(filePath, csvLine);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'An internal error occurred.' }), { status: 500 });
  }
}
