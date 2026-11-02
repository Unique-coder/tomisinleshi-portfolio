import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0B0C',
          borderRadius: 100,
        }}
      >
        <span style={{ fontSize: 220, fontWeight: 700, color: '#EDEDEC', fontFamily: 'sans-serif' }}>
          TL
        </span>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
