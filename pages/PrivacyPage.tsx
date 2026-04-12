import { Shield, Lock, Eye, FileText, CheckCircle } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#F9F7F3",
        color: "#0D1B2A",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
        :root {
          --ink: #0D1B2A; --ink-soft: #3D5166; --muted: #7A8FA3;
          --gold: #C08A3A; --gold-lt: #F5EAD8;
          --sage: #3E7064; --sage-lt: #E4EFE8;
          --cream: #F9F7F3; --white: #FFFFFF;
          --border: rgba(13,27,42,0.08); --border-md: rgba(13,27,42,0.13);
        }
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif !important; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold);
        }
        .eyebrow::before {
          content: ''; display: block; width: 22px; height: 1.5px;
          background: var(--gold); border-radius: 2px;
        }
        .prose-section {
          background: var(--white); border-radius: 16px;
          border: 1px solid var(--border); overflow: hidden;
        }
        .prose-header {
          padding: 1.5rem 2rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: 0.875rem;
        }
        .prose-body { padding: 1.75rem 2rem; }
        .prose-body p { font-size: 0.9375rem; color: var(--ink-soft); line-height: 1.75; margin-bottom: 1rem; }
        .prose-body p:last-child { margin-bottom: 0; }
        .check-item { display: flex; align-items: flex-start; gap: 0.625rem; margin-bottom: 0.625rem; }
        .check-item:last-child { margin-bottom: 0; }
        .check-item span { font-size: 0.9rem; color: var(--ink-soft); line-height: 1.6; }
        .divider { border: none; border-top: 1px solid var(--border); margin: 1.5rem 0; }
        .use-row { display: flex; gap: 1rem; padding: 1.25rem 0; border-bottom: 1px solid var(--border); }
        .use-row:last-child { border-bottom: none; padding-bottom: 0; }
        .use-row:first-child { padding-top: 0; }
        .rights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.25rem; }
        .right-card {
          background: var(--cream); border-radius: 12px; padding: 1.25rem;
          border: 1px solid var(--border);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .right-card:hover { border-color: var(--sage); box-shadow: 0 4px 16px rgba(13,27,42,0.07); }
        .commitment-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.875rem 0; border-bottom: 1px solid var(--border); }
        .commitment-item:last-child { border-bottom: none; padding-bottom: 0; }
        .commitment-item:first-child { padding-top: 0; }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "7rem clamp(1.5rem,5vw,4rem) 5rem",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 640 }}>
            <span
              className="eyebrow"
              style={{ marginBottom: "1rem", display: "inline-flex" }}
            >
              Legal
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                margin: "0.75rem 0 1.5rem",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "var(--sage-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Shield size={24} color="var(--sage)" />
              </div>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.8rem,5vw,4.25rem)",
                  fontWeight: 500,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                }}
              >
                Privacy{" "}
                <em style={{ color: "var(--sage)", fontStyle: "italic" }}>
                  Policy
                </em>
              </h1>
            </div>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Your privacy and data security are important to us. This policy
              explains how we collect, use, and protect your personal
              information.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1.5rem",
                background: "var(--gold-lt)",
                borderRadius: "100px",
                padding: "0.375rem 1rem",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                Last updated: January 31, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: "4rem clamp(1.5rem,5vw,4rem) 6rem" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Intro prose */}
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--ink-soft)",
              lineHeight: 1.8,
            }}
          >
            2Care Foot Health is committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, store, and protect your data in
            compliance with the General Data Protection Regulation (GDPR) and
            other applicable data protection laws.
          </p>

          {/* Commitment */}
          <div className="prose-section">
            <div className="prose-header">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "var(--sage-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CheckCircle size={18} color="var(--sage)" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Our Commitment to You
              </h2>
            </div>
            <div className="prose-body">
              {[
                "We only collect information necessary for providing our services",
                "Your data is stored securely and never sold to third parties",
                "You have full rights to access, correct, or delete your information",
                "We comply with all UK GDPR regulations and healthcare data protection standards",
              ].map((item, i) => (
                <div key={i} className="commitment-item">
                  <CheckCircle
                    size={15}
                    color="var(--sage)"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--ink-soft)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Information We Collect */}
          <div className="prose-section">
            <div className="prose-header">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "var(--sage-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FileText size={18} color="var(--sage)" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Information We Collect
              </h2>
            </div>
            <div className="prose-body">
              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                }}
              >
                Personal Information
              </h3>
              <p>When you book an appointment or contact us, we may collect:</p>
              {[
                "Name and contact details (phone, email, address)",
                "Date of birth",
                "Medical history relevant to foot health care",
                "Appointment history and treatment records",
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--sage)",
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
              <hr className="divider" />
              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                }}
              >
                Website Usage Information
              </h3>
              <p>
                We may collect non-personal information about how you use our
                website, including pages visited and time spent on the site.
                This helps us improve our online services.
              </p>
            </div>
          </div>

          {/* How We Use */}
          <div className="prose-section">
            <div className="prose-header">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "var(--sage-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Eye size={18} color="var(--sage)" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                How We Use Your Information
              </h2>
            </div>
            <div className="prose-body">
              <p style={{ marginBottom: "1.25rem" }}>
                We use your personal information for the following purposes:
              </p>
              {[
                {
                  title: "Providing Services",
                  desc: "To deliver professional foot health care services and maintain accurate treatment records",
                },
                {
                  title: "Appointment Management",
                  desc: "To schedule appointments, send reminders, and manage your bookings",
                },
                {
                  title: "Communication",
                  desc: "To respond to your inquiries and provide important updates about our services",
                },
                {
                  title: "Legal Obligations",
                  desc: "To comply with healthcare regulations and professional standards",
                },
              ].map((item, i) => (
                <div key={i} className="use-row">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "var(--sage-lt)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <FileText size={16} color="var(--sage)" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.6,
                        marginBottom: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Security */}
          <div className="prose-section">
            <div className="prose-header">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "var(--sage-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Lock size={18} color="var(--sage)" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Data Security
              </h2>
            </div>
            <div className="prose-body">
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              {[
                "Secure storage of physical and digital records",
                "Limited access to personal information (only authorized personnel)",
                "Regular security assessments and updates",
                "Encrypted communications when handling sensitive information",
              ].map((item, i) => (
                <div key={i} className="check-item">
                  <CheckCircle
                    size={15}
                    color="var(--sage)"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Your Rights */}
          <div className="prose-section">
            <div className="prose-header">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "var(--sage-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Shield size={18} color="var(--sage)" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Your Rights Under GDPR
              </h2>
            </div>
            <div className="prose-body">
              <p>
                Under the GDPR, you have the following rights regarding your
                personal data:
              </p>
              <div className="rights-grid">
                {[
                  {
                    icon: Eye,
                    title: "Right to Access",
                    desc: "Request a copy of the personal information we hold about you",
                  },
                  {
                    icon: FileText,
                    title: "Right to Rectification",
                    desc: "Request correction of inaccurate or incomplete information",
                  },
                  {
                    icon: FileText,
                    title: "Right to Erasure",
                    desc: "Request deletion of your personal data (subject to legal obligations)",
                  },
                  {
                    icon: FileText,
                    title: "Right to Object",
                    desc: "Object to processing of your personal data in certain circumstances",
                  },
                ].map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i} className="right-card">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Icon size={15} color="var(--sage)" />
                        <span
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "var(--ink)",
                          }}
                        >
                          {r.title}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--ink-soft)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {r.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p
                style={{
                  fontSize: "0.8375rem",
                  color: "var(--muted)",
                  marginTop: "1.25rem",
                  marginBottom: 0,
                }}
              >
                To exercise any of these rights, please contact us using the
                details below.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="prose-section">
            <div className="prose-header">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "var(--sage-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Eye size={18} color="var(--sage)" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Cookies
              </h2>
            </div>
            <div className="prose-body">
              <p>
                Our website uses cookies to improve your browsing experience.
                Cookies are small text files stored on your device. We use:
              </p>
              {[
                {
                  label: "Essential cookies",
                  desc: "Necessary for the website to function properly",
                },
                {
                  label: "Preference cookies",
                  desc: "Remember your settings and preferences",
                },
              ].map((c, i) => (
                <div key={i} className="check-item">
                  <CheckCircle
                    size={15}
                    color="var(--sage)"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  <span>
                    <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                      {c.label}:
                    </strong>{" "}
                    {c.desc}
                  </span>
                </div>
              ))}
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                You can control cookie settings through your browser. However,
                disabling cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="prose-section">
            <div className="prose-header">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  background: "var(--gold-lt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FileText size={18} color="var(--gold)" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Contact Us
              </h2>
            </div>
            <div className="prose-body">
              <p>
                If you have any questions about this Privacy Policy, wish to
                exercise your data rights, or have concerns about how we handle
                your information, please contact us:
              </p>
              <div
                style={{
                  background: "var(--cream)",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--ink)",
                    fontSize: "0.9375rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  2Care Foot Health
                </div>
                {[
                  "11 School Crescent, Newburgh, Ellon AB41 6BH",
                  "Phone: 07300 790349",
                  "Email: 2carefoothealth@gmail.com",
                ].map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--ink-soft)",
                      lineHeight: 1.7,
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Standards */}
          <div
            style={{
              background: "var(--sage-lt)",
              borderRadius: 16,
              border: "1px solid rgba(62,112,100,0.18)",
              padding: "1.75rem 2rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "var(--sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <Shield size={20} color="white" />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.4rem",
                }}
              >
                Professional Standards
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                As a registered member of the Professional Register for Foot
                Health Care (PRFHC0090), we adhere to strict professional
                standards for data protection and patient confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
