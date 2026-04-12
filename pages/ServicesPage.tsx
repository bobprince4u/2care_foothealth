"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Scissors,
  AlertCircle,
  Sparkles,
  Stethoscope,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
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

  const services = [
    {
      title: "Foot Care for Diabetic Patients",
      icon: Heart,
      num: "01",
      description:
        "Foot health care for diabetic patients to prevent complications and maintain optimal foot health.",
      details: [
        "Footcare for diabetic patients to prevent complications and maintain foot health.",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Nail Cutting, Trimming & Filing",
      icon: Scissors,
      num: "02",
      description:
        "Professional nail care services for toenails and fingernails (fingers at additional cost).",
      details: [
        "Safe cutting and trimming techniques",
        "Professional filing and shaping",
        "Service for thickened nails",
        "Reduction of thickened nails",
        "Nail condition assessment",
        "Fingernails available at extra cost",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Ingrown Toenail Treatment",
      icon: AlertCircle,
      num: "03",
      description:
        "Expert management and service of ingrown toenails to relieve pain and prevent infection.",
      details: [
        "Pain relief service",
        "Professional nail cutting techniques",
        "Infection prevention",
        "Ongoing management plans",
        "Advice on proper footwear",
        "Follow-up care as needed",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Fungal Nail Care and Management",
      icon: Stethoscope,
      num: "04",
      description:
        "Management of fungal nail infections with professional advice and care.",
      details: [
        "Fungal infection assessment",
        "Nail debridement",
        "Hygiene advice",
        "Prevention strategies",
        "Monitoring progress",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Corn & Callus Removal",
      icon: CheckCircle,
      num: "05",
      description:
        "Safe and effective removal of corns and calluses for immediate comfort and relief.",
      details: [
        "Professional assessment",
        "Painless removal techniques",
        "Immediate relief",
        "Skin smoothing and care",
        "Prevention advice",
        "Footwear recommendations",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Medical Pedicure & Foot Massage",
      icon: Sparkles,
      num: "06",
      description:
        "Comprehensive therapeutic pedicure with relaxing foot massage for overall foot wellness.",
      details: [
        "Complete nail care",
        "Skin exfoliation",
        "Callus reduction",
        "Moisturizing treatment",
        "Relaxing foot massage",
        "Enhanced circulation",
      ],
      availability: "Studio only",
      badge: "Studio Only",
    },
  ];

  const patientGroups = [
    {
      title: "Elderly Patients",
      icon: Users,
      description:
        "Gentle, professional care with home visits available for those with mobility concerns.",
    },
    {
      title: "Footcare For Diabetic Patients",
      icon: Heart,
      description:
        "Diabetic foot care protocols to prevent complications and maintain health.",
    },
    {
      title: "Athletes",
      icon: CheckCircle,
      description:
        "Performance-focused foot care to prevent injuries and maintain peak condition.",
    },
    {
      title: "Care Homes",
      icon: Users,
      description:
        "Foot health services for residential care facilities and nursing homes.",
    },
  ];

  const equipmentCards = [
    {
      icon: CheckCircle,
      title: "Fully Equipped Mobile Service",
      desc: "All necessary tools, equipment, and supplies for comprehensive foot care treatments",
    },
    {
      icon: Stethoscope,
      title: "Sterilized Professional Tools",
      desc: "Sterilization protocols for your safety and peace of mind",
    },
    {
      icon: Heart,
      title: "Comfort & Convenience",
      desc: "Professional care in the comfort of your own home",
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
          --ink: #0D1B2A;
          --ink-soft: #3D5166;
          --muted: #7A8FA3;
          --gold: #C08A3A;
          --gold-lt: #F5EAD8;
          --sage: #3E7064;
          --sage-lt: #E4EFE8;
          --cream: #F9F7F3;
          --white: #FFFFFF;
          --border: rgba(13,27,42,0.08);
          --border-md: rgba(13,27,42,0.13);
        }
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif !important; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--gold);
        }
        .eyebrow::before {
          content: ''; display: block;
          width: 22px; height: 1.5px;
          background: var(--gold); border-radius: 2px;
        }
        .service-card-wrap {
          background: var(--white);
          border-radius: 16px;
          border: 1px solid var(--border);
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .service-card-wrap::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--sage), var(--gold));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .service-card-wrap:hover { box-shadow: 0 12px 40px rgba(13,27,42,0.10); transform: translateY(-3px); border-color: var(--border-md); }
        .service-card-wrap:hover::after { transform: scaleX(1); }
        .service-card-wrap:hover .svc-icon-bg { background: var(--sage) !important; }
        .service-card-wrap:hover .svc-icon-bg svg { stroke: white; }
        .eq-card {
          background: var(--white);
          border-radius: 16px;
          border: 1px solid var(--border);
          padding: 2rem;
          text-align: center;
          height: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .eq-card:hover { border-color: var(--sage); box-shadow: 0 8px 24px rgba(13,27,42,0.07); }
        .patient-card {
          background: var(--white);
          border-radius: 16px;
          border: 1px solid var(--border);
          padding: 2rem;
          text-align: center;
          height: 100%;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .patient-card:hover { box-shadow: 0 12px 32px rgba(13,27,42,0.09); transform: translateY(-3px); }
        .note-row { padding: 1.5rem 0; border-bottom: 1px solid var(--border); }
        .note-row:last-child { border-bottom: none; padding-bottom: 0; }
        .note-row:first-child { padding-top: 0; }
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
              What We Offer
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.25rem)",
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: "0.75rem 0 1.5rem",
              }}
            >
              Our{" "}
              <em style={{ color: "var(--sage)", fontStyle: "italic" }}>
                Services
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
              Comprehensive foot health care services delivered with
              professionalism, compassion, and expertise
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
              gap: "2rem",
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              { val: "6", label: "Treatments Available" },
              { val: "Home & Studio", label: "Flexible Locations" },
              { val: "Thursday", label: "Studio Day" },
              { val: "PRFHC0090", label: "Registration No." },
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

      {/* ── EQUIPMENT & MOBILE SERVICE ── */}
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
              Mobile Care
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
              Professional Equipment &amp; Mobile Service
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 600,
                marginTop: "0.875rem",
              }}
            >
              We bring professional-grade equipment and supplies directly to
              your home, ensuring you receive the same high-quality care whether
              you visit our studio or we come to you.
            </p>
          </motion.div>

          {/* Equipment cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              marginBottom: "3.5rem",
            }}
          >
            {equipmentCards.map((c, i) => {
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
                  <div className="eq-card">
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 12,
                        background: "var(--sage-lt)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.25rem",
                      }}
                    >
                      <Icon size={22} color="var(--sage)" />
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.65,
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bag image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(13,27,42,0.12)",
                position: "relative",
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              <Image
                src="/bag1.jpeg"
                alt="Professional foot care equipment and mobile service kit"
                width={1000}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.3) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.75rem",
                  left: "1.75rem",
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 14,
                  padding: "1rem 1.25rem",
                  boxShadow: "0 8px 32px rgba(13,27,42,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "var(--gold-lt)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Stethoscope size={20} color="var(--gold)" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    PRFHC Registered
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    Professional Standards · PRFHC0090
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
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
              Treatments
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
              Our Professional Services
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
              Foot health care tailored to your individual needs
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {isLoading
              ? [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--white)",
                      borderRadius: 16,
                      padding: "2rem",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-6" />
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="flex items-center gap-2 mb-2">
                        <Skeleton className="w-4 h-4 rounded-full" />
                        <Skeleton className="h-4 flex-1" />
                      </div>
                    ))}
                  </div>
                ))
              : services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      custom={index % 3}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                    >
                      <div className="service-card-wrap">
                        <div style={{ padding: "2rem" }}>
                          {/* Header row */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                              marginBottom: "1.25rem",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.875rem",
                              }}
                            >
                              <div
                                className="svc-icon-bg"
                                style={{
                                  width: 46,
                                  height: 46,
                                  borderRadius: 10,
                                  background: "var(--sage-lt)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  transition: "background 0.25s",
                                }}
                              >
                                <Icon size={20} color="var(--sage)" />
                              </div>
                              <span
                                style={{
                                  fontFamily:
                                    "'Cormorant Garamond', Georgia, serif",
                                  fontSize: "2.25rem",
                                  fontWeight: 400,
                                  color: "rgba(13,27,42,0.07)",
                                  lineHeight: 1,
                                }}
                              >
                                {service.num}
                              </span>
                            </div>
                            {service.badge && (
                              <span
                                style={{
                                  background: "var(--gold-lt)",
                                  color: "var(--gold)",
                                  fontSize: "0.68rem",
                                  fontWeight: 700,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.08em",
                                  padding: "0.3rem 0.75rem",
                                  borderRadius: "100px",
                                  flexShrink: 0,
                                }}
                              >
                                {service.badge}
                              </span>
                            )}
                          </div>

                          <h3
                            style={{
                              fontFamily:
                                "'Cormorant Garamond', Georgia, serif",
                              fontSize: "1.375rem",
                              fontWeight: 500,
                              color: "var(--ink)",
                              letterSpacing: "-0.01em",
                              marginBottom: "0.625rem",
                            }}
                          >
                            {service.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--ink-soft)",
                              lineHeight: 1.65,
                              marginBottom: "1.5rem",
                            }}
                          >
                            {service.description}
                          </p>

                          {/* Details */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.5rem",
                              marginBottom: "1.5rem",
                            }}
                          >
                            {service.details.map((d, j) => (
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
                                  {d}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Availability */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              paddingTop: "1.25rem",
                              borderTop: "1px solid var(--border)",
                            }}
                          >
                            <Clock size={13} color="var(--muted)" />
                            <span
                              style={{
                                fontSize: "0.8125rem",
                                color: "var(--muted)",
                                fontWeight: 500,
                              }}
                            >
                              {service.availability}
                            </span>
                          </div>
                        </div>
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
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginTop: "0.875rem",
              }}
            >
              Our services are tailored to meet the needs of diverse patient
              groups
            </p>
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
                      textAlign: "center",
                    }}
                  >
                    <Skeleton className="w-14 h-14 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-5 w-3/4 mx-auto mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                  </div>
                ))
              : patientGroups.map((g, i) => {
                  const Icon = g.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                    >
                      <div className="patient-card">
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: "50%",
                            background: "var(--sage-lt)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 1.25rem",
                          }}
                        >
                          <Icon size={22} color="var(--sage)" />
                        </div>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "var(--ink)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {g.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--ink-soft)",
                            lineHeight: 1.65,
                          }}
                        >
                          {g.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT NOTES ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div
              style={{
                background: "var(--white)",
                borderRadius: 20,
                border: "1px solid var(--border)",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(13,27,42,0.07)",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: "2rem 2.5rem",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "var(--gold-lt)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <AlertCircle size={20} color="var(--gold)" />
                </div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.625rem",
                    fontWeight: 500,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Important Service Information
                </h2>
              </div>

              {/* Notes */}
              <div style={{ padding: "0 2.5rem 2rem" }}>
                {[
                  {
                    title: "Studio vs. Home Visits",
                    body: "Most services are available both at our studio and through home visits. However, medical pedicures with foot massage are only available at the studio to ensure we have all necessary equipment and facilities.",
                  },
                  {
                    title: "Studio Appointments",
                    body: "Our studio appointments are available every Thursday. You can book online through our booking system for your convenience.",
                  },
                  {
                    title: "Terminology",
                    body: `We refer to our service space as a "studio" rather than a "clinic." The term "clinic" is reserved for podiatrists. We are registered foot health practitioners providing professional foot health care services.`,
                  },
                  {
                    title: "Additional Services",
                    body: "Fingernail care is available at an additional cost. Please mention this when booking your appointment so we can allocate appropriate time.",
                  },
                ].map((note, i, arr) => (
                  <div
                    key={i}
                    className="note-row"
                    style={{
                      borderBottom:
                        i === arr.length - 1
                          ? "none"
                          : "1px solid var(--border)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {note.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.7,
                      }}
                    >
                      {note.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Choose the service that&apos;s right for you and schedule your
              appointment today
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
              onClick={() =>
                window.open("https://dikidi.net/1756535", "_blank")
              }
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
              Book Appointment
            </button>
            <Link
              href="/about"
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
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.8)";
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
