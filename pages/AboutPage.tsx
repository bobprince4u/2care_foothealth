"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  Heart,
  Users,
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: i * 0.1, ease: easing },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: easing } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: easing } },
  };

  const values = [
    {
      title: "Professional Excellence",
      description:
        "Registered with the Professional Register for Foot Health Care, ensuring the highest standards of care.",
      icon: Shield,
    },
    {
      title: "Compassionate Care",
      description:
        "We understand that foot health is vital for mobility and independence, especially for elderly and diabetic patients.",
      icon: Heart,
    },
    {
      title: "Personalized Service",
      description:
        "Every patient receives individualized care tailored to their specific needs and circumstances.",
      icon: Users,
    },
    {
      title: "Continued Learning",
      description:
        "We stay updated with the latest techniques and best practices in foot health care.",
      icon: Award,
    },
  ];

  const specialties = [
    "Elderly patients requiring gentle, professional care",
    "Diabetic patients needing specialised foot health management",
    "Athletes seeking performance and injury prevention",
    "Care homes and residential facilities",
    "General foot care for all ages",
    "Patients with mobility concerns who benefit from home visits",
  ];

  const contacts = [
    {
      icon: Phone,
      title: "Phone",
      link: "tel:+447300790349",
      text: "07300 790349",
    },
    {
      icon: Mail,
      title: "Email",
      link: "mailto:2carefoothealth@gmail.com",
      text: "2carefoothealth@gmail.com",
      isSmall: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      link: "https://wa.me/447300790349",
      text: "Message Us",
      external: true,
    },
    {
      icon: MapPin,
      title: "Address",
      text: "11 School Crescent, Newburgh, Ellon AB41 6BH",
      isAddress: true,
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get an appointment?",
      answer:
        "We strive to accommodate appointments as quickly as possible. Home visits can often be arranged within a few days, and studio appointments on Thursdays can be booked online immediately based on availability.",
    },
    {
      question: "Do you provide services to care homes?",
      answer:
        "Yes! We provide professional foot health services to care homes and residential facilities across our service area. Please contact us to discuss your care home's needs.",
    },
    {
      question: "What should I expect during a home visit?",
      answer:
        "We bring all necessary equipment to your home. All you need to provide is a comfortable chair and good lighting. The appointment typically lasts 30-45 minutes depending on the treatment required.",
    },
    {
      question: "Are you qualified and insured?",
      answer:
        "Yes, we are registered with the Professional Register for Foot Health Care (Registration Number: PRFHC0090) and are fully insured. We maintain the highest standards of professional practice and hygiene.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#F9F7F3",
        color: "#0D1B2A",
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
        .value-card {
          background: var(--white); border-radius: 16px;
          border: 1px solid var(--border); padding: 2rem; height: 100%;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          position: relative; overflow: hidden;
        }
        .value-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--sage), var(--gold));
          transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease;
        }
        .value-card:hover { box-shadow: 0 12px 40px rgba(13,27,42,0.10); transform: translateY(-3px); border-color: var(--border-md); }
        .value-card:hover::after { transform: scaleX(1); }
        .value-card:hover .val-icon { background: var(--sage) !important; }
        .value-card:hover .val-icon svg { stroke: white; }
        .contact-card {
          background: var(--white); border-radius: 16px;
          border: 1px solid var(--border); padding: 1.75rem; height: 100%;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .contact-card:hover { box-shadow: 0 12px 40px rgba(13,27,42,0.10); transform: translateY(-3px); border-color: var(--sage); }
        .contact-card:hover .contact-icon { background: var(--sage) !important; }
        .contact-card:hover .contact-icon svg { stroke: white; }
        .delivery-card {
          background: var(--white); border-radius: 16px;
          border: 1px solid var(--border); padding: 2rem; height: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .delivery-card:hover { border-color: var(--sage); box-shadow: 0 8px 24px rgba(13,27,42,0.07); }
        .faq-item {
          background: var(--white); border-radius: 16px;
          border: 1px solid var(--border); padding: 2rem;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .faq-item:hover { box-shadow: 0 12px 32px rgba(13,27,42,0.09); transform: translateY(-2px); }
        .info-card {
          background: var(--white); border-radius: 16px;
          border: 1px solid var(--border); overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .info-card:hover { border-color: var(--border-md); box-shadow: 0 8px 24px rgba(13,27,42,0.07); }
        .info-card-header {
          padding: 1.5rem 1.75rem; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: 0.75rem;
        }
        .info-card-body { padding: 1.5rem 1.75rem; }
        .divider-row { padding: 1rem 0; border-top: 1px solid var(--border); }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "7rem clamp(1.5rem,5vw,4rem) 5rem",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ maxWidth: 640 }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "1rem", display: "inline-flex" }}
            >
              Our Story
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.8rem,5vw,4.25rem)",
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: "0.75rem 0 1.5rem",
              }}
            >
              About{" "}
              <em style={{ color: "var(--sage)", fontStyle: "italic" }}>
                2Care Foot Health
              </em>
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Dedicated to providing professional, compassionate foot health
              care services across Aberdeen and Aberdeenshire
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              { val: "PRFHC0090", label: "Registration No." },
              { val: "Home & Studio", label: "Flexible Locations" },
              { val: "Thursday", label: "Studio Day" },
              { val: "Aberdeen", label: "& Aberdeenshire" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display"
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    marginTop: "0.3rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section
        style={{
          background: "var(--white)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              Watch
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              See Our Care in Action
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginTop: "0.875rem",
              }}
            >
              Learn more about our professional foot health services and what to
              expect
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(13,27,42,0.12)",
                background: "var(--ink)",
                aspectRatio: "16/9",
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              <video
                controls
                style={{ width: "100%", height: "100%", display: "block" }}
                poster="path-to-thumbnail.jpg"
              >
                <source src="videos/2care.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STORY & MISSION ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              Who We Are
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
                marginBottom: "1.75rem",
              }}
            >
              Our Story &amp; Mission
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                "2Care Foot Health was founded with a simple but important mission: to provide accessible, professional foot health care to those who need it most. We understand that healthy feet are essential for maintaining independence, mobility, and quality of life.",
                "Our practice specialises in serving elderly patients, diabetic patients, athletes, and anyone seeking professional foot care. We offer both home visits for convenience and studio-based appointments for comprehensive service.",
                "What sets us apart is our commitment to personalized care. We take the time to understand each patient's unique needs and concerns, providing services in a calm, professional environment where you feel valued and cared for.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--ink-soft)",
                    lineHeight: 1.75,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Registration block */}
            <div
              style={{
                marginTop: "2rem",
                background: "var(--sage-lt)",
                borderRadius: 14,
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
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
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Professional Register for Foot Health Care (PRFHC)
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--sage)",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  Registration Number: PRFHC0090
                </div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--ink-soft)",
                    lineHeight: 1.65,
                  }}
                >
                  This registration ensures we meet rigorous standards of
                  training, competence, and professional conduct in foot health
                  care practice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(13,27,42,0.12)",
                aspectRatio: "4/5",
              }}
            >
              <motion.img
                src="/readyToGoBag.jpeg"
                alt="Ready to go bag with professional foot health equipment"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7, ease: easing }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        style={{
          background: "var(--white)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              What Drives Us
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              Our Values
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {isLoading
              ? [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--white)",
                      borderRadius: 16,
                      padding: "2rem",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Skeleton className="w-11 h-11 rounded-lg mb-4" />
                    <Skeleton className="h-5 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))
              : values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                    >
                      <div className="value-card">
                        <div
                          className="val-icon"
                          style={{
                            width: 46,
                            height: 46,
                            borderRadius: 10,
                            background: "var(--sage-lt)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "1.25rem",
                            transition: "background 0.25s",
                          }}
                        >
                          <Icon size={20} color="var(--sage)" />
                        </div>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "var(--ink)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {v.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--ink-soft)",
                            lineHeight: 1.65,
                          }}
                        >
                          {v.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              Patients
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              Who We Serve
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "0.875rem",
              maxWidth: 900,
            }}
          >
            {isLoading
              ? [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <Skeleton className="w-5 h-5 rounded-full" />
                    <Skeleton className="h-5 flex-1" />
                  </div>
                ))
              : specialties.map((s, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      background: "var(--white)",
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      color="var(--sage)"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.55,
                      }}
                    >
                      {s}
                    </span>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DELIVERY ── */}
      <section
        style={{
          background: "var(--white)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              How We Work
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              How We Deliver Care
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                icon: MapPin,
                title: "Home Visits",
                desc: "We bring professional foot health care directly to your home, providing convenience and comfort for patients with mobility concerns or those who prefer the familiarity of their own environment.",
                points: [
                  "Available across Aberdeen & Aberdeenshire",
                  "Flexible scheduling to suit your needs",
                  "Care homes and facilities welcome",
                ],
              },
              {
                icon: Award,
                title: "Studio Appointments",
                desc: "Our professional studio environment is equipped for comprehensive services and medical pedicures. Studio appointments are available every Thursday and can be booked online.",
                points: [
                  "Thursday appointments available",
                  "Professional, clean environment",
                  "Online booking available",
                ],
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="delivery-card">
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 10,
                        background: "var(--sage-lt)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <Icon size={20} color="var(--sage)" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "1.375rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.625rem",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.65,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {card.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        paddingTop: "1.25rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      {card.points.map((p, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                          }}
                        >
                          <CheckCircle
                            size={14}
                            color="var(--sage)"
                            style={{ flexShrink: 0, marginTop: 2 }}
                          />
                          <span
                            style={{
                              fontSize: "0.84rem",
                              color: "var(--ink-soft)",
                              lineHeight: 1.55,
                            }}
                          >
                            {p}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STUDIO SHOWCASE ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              The Studio
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              Our Professional Studio
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginTop: "0.875rem",
              }}
            >
              A clean, comfortable, and fully equipped environment designed for
              your foot health care
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(13,27,42,0.12)",
              }}
            >
              <motion.img
                src="/studio.jpeg"
                alt="Professional foot health studio interior"
                style={{
                  width: "100%",
                  height: "clamp(300px, 40vw, 550px)",
                  objectFit: "cover",
                  display: "block",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease: easing }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section
        style={{
          background: "var(--white)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              Find Us
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              Our Location
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginTop: "0.875rem",
              }}
            >
              11 School Crescent, Newburgh, Ellon AB41 6BH
              <br />
              Serving Aberdeen, Aberdeenshire &amp; surrounding areas
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(13,27,42,0.10)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    padding: "1.25rem 1.75rem",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    background: "var(--white)",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "var(--gold-lt)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapPin size={18} color="var(--gold)" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    Find Us
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2159.8147688536853!2d-2.0089907!3d57.3339839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4884197d8f8f8f8f%3A0x0!2s11%20School%20Crescent%2C%20Newburgh%2C%20Ellon%20AB41%206BH!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="760"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="2Care Foot Health Location"
                />
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  marginTop: "0.875rem",
                  textAlign: "center",
                }}
              >
                11 School Crescent, Newburgh, Ellon AB41 6BH
              </p>
            </motion.div>

            {/* Info cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Availability */}
              <div className="info-card">
                <div className="info-card-header">
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
                    }}
                  >
                    <Clock size={18} color="var(--sage)" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    Availability
                  </span>
                </div>
                <div className="info-card-body">
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Studio Appointments
                    </div>
                    <p
                      style={{ fontSize: "0.875rem", color: "var(--ink-soft)" }}
                    >
                      Thursdays only
                    </p>
                    <a
                      href="https://dikidi.net/1756535"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--sage)",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-block",
                        marginTop: "0.4rem",
                      }}
                    >
                      Book online →
                    </a>
                  </div>
                  <div className="divider-row">
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Home Visits
                    </div>
                    <p
                      style={{ fontSize: "0.875rem", color: "var(--ink-soft)" }}
                    >
                      Available throughout the week. Call or WhatsApp to
                      schedule.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="info-card">
                <div className="info-card-header">
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
                    }}
                  >
                    <MapPin size={18} color="var(--sage)" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    Service Areas
                  </span>
                </div>
                <div className="info-card-body">
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--ink-soft)",
                      marginBottom: "0.875rem",
                    }}
                  >
                    We provide home visits across:
                  </p>
                  {["Aberdeen", "Aberdeenshire", "Surrounding areas"].map(
                    (area) => (
                      <div
                        key={area}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.4rem",
                        }}
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--sage)",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--ink-soft)",
                          }}
                        >
                          {area}
                        </span>
                      </div>
                    ),
                  )}
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--muted)",
                      marginTop: "0.875rem",
                    }}
                  >
                    Not sure if we cover your area? Give us a call and
                    we&apos;ll be happy to discuss.
                  </p>
                </div>
              </div>

              {/* Quick contact */}
              <div className="info-card">
                <div className="info-card-header">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "var(--gold-lt)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} color="var(--gold)" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    Quick Contact
                  </span>
                </div>
                <div
                  className="info-card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <button
                    onClick={() => (window.location.href = "tel:+447300790349")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      background: "var(--ink)",
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      padding: "0.75rem 1.5rem",
                      borderRadius: "100px",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--gold)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--ink)")
                    }
                  >
                    <Phone size={16} /> Call 07300 790349
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://wa.me/447300790349", "_blank")
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      background: "transparent",
                      color: "var(--ink)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      padding: "0.75rem 1.5rem",
                      borderRadius: "100px",
                      border: "1.5px solid var(--border-md)",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--ink)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border-md)")
                    }
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              Reach Out
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              Get In Touch
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 440,
                marginTop: "0.875rem",
              }}
            >
              Have questions or ready to book? We&apos;re here to help
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="contact-card">
                    <div
                      className="contact-icon"
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 10,
                        background: "var(--sage-lt)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                        transition: "background 0.25s",
                      }}
                    >
                      <Icon size={20} color="var(--sage)" />
                    </div>
                    <h3
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {c.title}
                    </h3>
                    {c.isAddress ? (
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--ink-soft)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.text}
                      </p>
                    ) : (
                      <a
                        href={c.link}
                        {...(c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        style={{
                          fontSize: c.isSmall ? "0.8125rem" : "0.875rem",
                          color: "var(--sage)",
                          fontWeight: 500,
                          textDecoration: "none",
                          wordBreak: "break-all",
                          display: "block",
                        }}
                      >
                        {c.text}
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          background: "var(--white)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              FAQ
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
              }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="faq-item">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "var(--gold)",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: "0.625rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.question}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--ink-soft)",
                          lineHeight: 1.7,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "6rem clamp(1.5rem,5vw,4rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-100px",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(192,138,58,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(62,112,100,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.875rem",
              }}
            >
              <div
                style={{ width: 20, height: 1.5, background: "var(--gold)" }}
              />
              Book Today
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3vw,2.75rem)",
                fontWeight: 500,
                color: "white",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Ready to Book Your Appointment?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1rem",
                lineHeight: 1.65,
                maxWidth: 480,
              }}
            >
              Call us, WhatsApp, or book online — we&apos;re happy to help you
              find the right service
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            <button
              onClick={() => (window.location.href = "tel:+447300790349")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "var(--gold)",
                color: "white",
                fontSize: "0.9375rem",
                fontWeight: 600,
                padding: "0.875rem 1.75rem",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(192,138,58,0.35)",
                fontFamily: "inherit",
                transition: "opacity 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
            >
              <Phone size={17} /> Call 07300 790349
            </button>
            <button
              onClick={() =>
                window.open("https://wa.me/447300790349", "_blank")
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                padding: "0.875rem 1.75rem",
                borderRadius: "100px",
                border: "1.5px solid rgba(255,255,255,0.18)",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.8)";
              }}
            >
              <MessageCircle size={17} /> WhatsApp Us
            </button>
            <button
              onClick={() =>
                window.open("https://dikidi.net/1756535", "_blank")
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                padding: "0.875rem 1.75rem",
                borderRadius: "100px",
                border: "1.5px solid rgba(255,255,255,0.18)",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.8)";
              }}
            >
              Book Online
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
