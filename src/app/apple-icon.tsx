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
          backgroundColor: '#343D4D',
          borderRadius: 36,
        }}
      >
        <span style={{ fontSize: 72, fontWeight: 700, color: '#F5F0E8', fontFamily: 'sans-serif' }}>
          TL
        </span>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
