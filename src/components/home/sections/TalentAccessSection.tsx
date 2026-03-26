'use client'

import { withBasePath } from '@/lib/assetPath'

const desktopBg = withBasePath('/figmaAssets/talent-bg.png')

const LEFT_JOBS = ['CEO', 'Managing Director', 'GM', 'Senior Manager', 'Executive']
const RIGHT_JOBS = ['Partner', 'Vice President', 'Asst. Manager', 'AGM', 'Executive Manager']

export function TalentAccessSection() {
  return (
    <section
      className="talent-access-section"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        fontFamily: "'Poppins', 'Barlow', Helvetica, sans-serif",
      }}
    >
      <div
        className="block"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${desktopBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, rgba(5,20,10,0.82) 0%, rgba(10,28,16,0.72) 45%, rgba(5,20,12,0.65) 100%)',
          zIndex: 1,
        }}
      />

      <div
        className="talent-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          minHeight: '480px',
          padding: '80px 80px',
          gap: '80px',
        }}
      >
        <div className="talent-left" style={{ flex: '0 0 auto', minWidth: 0 }}>
          <div
            style={{
              display: 'inline-block',
              borderTop: 'none',
              borderRight: 'none',
              borderLeft: '2.5px solid transparent',
              borderBottom: '2.5px solid transparent',
              borderImage: 'linear-gradient(to bottom right, #1a7a30 0%, #C8F135 100%) 1',
              padding: '16px 24px 20px 20px',
              marginBottom: 28,
            }}
          >
            <div style={{ lineHeight: 1.15 }}>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(26px, 3.2vw, 42px)',
                  fontWeight: 700,
                  color: '#AAEE00',
                  letterSpacing: '0.01em',
                }}
              >
                Talent access
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(22px, 2.8vw, 38px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  letterSpacing: '0.01em',
                }}
              >
                we can recruit for
              </span>
            </div>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.5,
            }}
          >
            We set <span style={{ color: '#E8823A', fontWeight: 700 }}>high standards</span> for the quality of our work
          </p>
        </div>

        <div className="talent-right" style={{ flex: '1 1 auto', minWidth: 0 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: 'clamp(24px, 4vw, 64px)',
            }}
          >
            <div>
              {LEFT_JOBS.map((job, i) => (
                <div
                  key={job}
                  style={{
                    color: '#FFFFFF',
                    fontSize: 'clamp(13px, 1.2vw, 17px)',
                    fontWeight: 400,
                    padding: '14px 0',
                    borderBottom: i < LEFT_JOBS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  {job}
                </div>
              ))}
            </div>

            <div>
              {RIGHT_JOBS.map((job, i) => (
                <div
                  key={job}
                  style={{
                    color: '#FFFFFF',
                    fontSize: 'clamp(13px, 1.2vw, 17px)',
                    fontWeight: 400,
                    padding: '14px 0',
                    borderBottom: i < RIGHT_JOBS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  {job}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .talent-inner {
          flex-direction: row;
        }
        .talent-left {
          width: 40%;
        }
        .talent-right {
          width: 60%;
        }

        @media (max-width: 768px) {
          .talent-inner {
            flex-direction: column;
            padding: 48px 28px 56px !important;
            gap: 36px !important;
            min-height: unset !important;
            align-items: flex-start !important;
          }
          .talent-left,
          .talent-right {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
