import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="http://localhost:3000/images/logo.svg" width={64} height={64} />
      </div>
    ),
    {
      width: 64,
      height: 64,
    },
  )
} 