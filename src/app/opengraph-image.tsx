import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Tomisin Leshi: Payment infrastructure for African markets';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  // TODO: add public/assets/tomisin.jpg — using profile.jpeg until then
  let photoSrc: string | undefined;
  try {
    const data = readFileSync(join(process.cwd(), 'public/assets/tomisin.jpg'));
    photoSrc = `data:image/jpeg;base64,${data.toString('base64')}`;
  } catch {
    try {
      const data = readFileSync(join(process.cwd(), 'public/assets/profile.jpeg'));
      photoSrc = `data:image/jpeg;base64,${data.toString('base64')}`;
    } catch {
      // renders without photo
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#343D4D',
          padding: '72px 80px',
          alignItems: 'center',
          gap: 60,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div
            style={{
              fontSize: 18,
              color: '#9CA3AF',
              letterSpacing: '0.12em',
              marginBottom: 20,
              fontFamily: 'sans-serif',
            }}
          >
            tomisinleshi.com
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#F5F0E8',
              lineHeight: 1.1,
              fontFamily: 'sans-serif',
            }}
          >
            Tomisin Leshi
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#9CA3AF',
              marginTop: 28,
              lineHeight: 1.5,
              fontFamily: 'sans-serif',
            }}
          >
            I build the systems that move money across African borders.
          </div>
        </div>
        {photoSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            width={300}
            height={440}
            style={{ objectFit: 'cover', borderRadius: 12, flexShrink: 0 }}
            alt=""
          />
        )}
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
