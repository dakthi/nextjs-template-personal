import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(request: NextRequest) {
  // Only allow in development and localhost
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'This endpoint is only available in development' }, { status: 403 });
  }

  const host = request.headers.get('host');
  if (!host?.includes('localhost') && !host?.includes('127.0.0.1')) {
    return NextResponse.json({ error: 'This endpoint is only available on localhost' }, { status: 403 });
  }

  try {
    const { directoryPath } = await request.json();

    if (!directoryPath) {
      return NextResponse.json({ error: 'Directory path is required' }, { status: 400 });
    }

    // Security check: ensure path is absolute and doesn't contain traversal attempts
    if (!path.isAbsolute(directoryPath) || directoryPath.includes('..')) {
      return NextResponse.json({ error: 'Invalid directory path' }, { status: 400 });
    }

    const scriptPath = path.join(process.cwd(), 'prefixes.py');
    
    return new Promise((resolve) => {
      const python = spawn('python3', [scriptPath, directoryPath]);
      let output = '';
      let error = '';

      python.stdout.on('data', (data) => {
        output += data.toString();
      });

      python.stderr.on('data', (data) => {
        error += data.toString();
      });

      python.on('close', (code) => {
        if (code !== 0) {
          resolve(NextResponse.json({ 
            error: `Python script failed with code ${code}`, 
            details: error 
          }, { status: 500 }));
          return;
        }

        try {
          const result = JSON.parse(output);
          resolve(NextResponse.json(result));
        } catch (parseError) {
          resolve(NextResponse.json({ 
            error: 'Failed to parse script output', 
            details: output 
          }, { status: 500 }));
        }
      });

      // Set timeout for the process
      setTimeout(() => {
        python.kill();
        resolve(NextResponse.json({ error: 'Operation timed out' }, { status: 408 }));
      }, 30000); // 30 seconds timeout
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Invalid request', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 400 });
  }
}