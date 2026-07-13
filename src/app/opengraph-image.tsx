import { ImageResponse } from 'next/og'

export const alt = 'Yogesh Chauhan — Full Stack Developer | Node.js & AWS Specialist'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                    background: 'radial-gradient(circle at 30% 20%, #1a1a1a 0%, #0a0a0a 60%)',
                    color: '#fafafa',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ fontSize: 30, color: '#a3a3a3', letterSpacing: '0.05em' }}>
                    yogeshchauhan.dev
                </div>
                <div
                    style={{
                        fontSize: 84,
                        fontWeight: 800,
                        marginTop: 24,
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                    }}
                >
                    Yogesh Chauhan
                </div>
                <div
                    style={{
                        fontSize: 40,
                        fontWeight: 500,
                        marginTop: 20,
                        color: '#d4d4d4',
                    }}
                >
                    Full Stack Developer
                </div>
                <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
                    {['Node.js', 'React', 'AWS', 'MongoDB'].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                fontSize: 26,
                                color: '#e5e5e5',
                                border: '1px solid #404040',
                                borderRadius: 9999,
                                padding: '8px 24px',
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    )
}
