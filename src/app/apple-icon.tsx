import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: 36,
        }}
      >
        <span style={{ fontSize: 72, fontWeight: 700, color: '#EDEDEC', fontFamily: 'sans-serif' }}>
          TL
        </span>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
