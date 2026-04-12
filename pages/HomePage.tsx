"use client";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Calendar,
  Shield,
  Heart,
  Award,
  MapPin,
  Star,
  Quote,
  CheckCircle,
  MessageCircle,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "FootCare For Diabetic Patients",
      description:
        "Footcare for diabetic patients to prevent complications and maintain foot health.",
      icon: Heart,
      num: "01",
    },
    {
      title: "Nail Care & Treatment",
      description:
        "Professional nail cutting, trimming, filing, and ingrown toenail management.",
      icon: CheckCircle,
      num: "02",
    },
    {
      title: "Corn & Callus Removal",
      description:
        "Safe and effective removal of corns and calluses for immediate relief.",
      icon: Shield,
      num: "03",
    },
    {
      title: "Medical Pedicure",
      description:
        "Comprehensive foot care service including massage (studio appointments only).",
      icon: Award,
      num: "04",
    },
  ];

  const features = [
    {
      title: "Home Visits Available",
      description: "Convenient appointments in the comfort of your own home",
      icon: MapPin,
    },
    {
      title: "Studio Appointments",
      description: "Professional Services in our studio every Thursday",
      icon: Calendar,
    },
    {
      title: "Fully Registered",
      description: "PRFHC registered professional foot health Service",
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      name: "Margaret T.",
      location: "Aberdeen",
      initials: "MT",
      rating: 5,
      text: "Absolutely wonderful service! The practitioner came to my home and was so gentle and professional. My feet feel so much better, and I appreciated not having to travel.",
      service: "Home Visit - General Foot Care",
      featured: false,
    },
    {
      name: "James M.",
      location: "Ellon",
      initials: "JM",
      rating: 5,
      text: "As a diabetic, I was worried about finding proper foot care. 2Care Foot Health has been fantastic - very knowledgeable about diabetic foot health and always thorough.",
      service: "Diabetic Foot Care",
      featured: true,
    },
    {
      name: "Allina Osbeck",
      location: "Newburgh",
      initials: "AO",
      rating: 5,
      text: "Well done, great podiatrist, keep up the great work",
      service: "Studio - Medical Pedicure",
      featured: false,
    },
    {
      name: "Robert L.",
      location: "Aberdeenshire",
      initials: "RL",
      rating: 5,
      text: "I had been struggling with an ingrown toenail for months. The treatment was professional and virtually painless. Pain-free now!",
      service: "Ingrown Toenail Service",
      featured: false,
    },
  ];

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const animate = () => {
      scrollPosition += scrollSpeed;
      const cardWidth = 320;
      const resetPoint = testimonials.length * cardWidth;
      if (scrollPosition >= resetPoint) scrollPosition = 0;
      if (scrollContainer) scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };
    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [testimonials.length]);

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
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
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
        .service-card-inner {
          position: relative; overflow: hidden;
          background: var(--white);
          transition: background 0.25s;
        }
        .service-card-inner::after {
          content: ''; position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--sage), var(--gold));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .service-card-inner:hover::after { transform: scaleX(1); }
        .service-card-inner:hover { background: var(--cream); }
        .service-card-inner:hover .service-icon-bg {
          background: var(--sage) !important;
        }
        .service-card-inner:hover .service-icon-bg svg { stroke: white; }
        .why-row {
          display: flex; gap: 1.25rem; padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          transition: padding-left 0.25s; cursor: default;
        }
        .why-row:hover { padding-left: 0.5rem; }
        .why-row:hover .why-icon-bg { background: var(--sage) !important; }
        .why-row:hover .why-icon-bg svg { stroke: white; }
        .float-card {
          position: absolute;
          background: var(--white);
          border-radius: 14px;
          padding: 0.875rem 1.125rem;
          box-shadow: 0 8px 32px rgba(13,27,42,0.10);
          border: 1px solid var(--border);
          pointer-events: none;
        }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .float-card-1 { animation: floatA 5s ease-in-out infinite; }
        .float-card-2 { animation: floatB 5s ease-in-out 2.5s infinite; }
        .testi-card-dark { background: var(--ink) !important; border-color: var(--ink) !important; }
        .stat-divider { width:1px; background:rgba(255,255,255,0.08); }
        @media(max-width:900px) {
          .stat-divider { display:none; }
          .float-card-1 { display:none; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: "var(--cream)", paddingTop: "5rem" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "5rem clamp(1.5rem,5vw,4rem) 5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Copy */}
          <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
            <span
              className="eyebrow"
              style={{ marginBottom: "1.5rem", display: "inline-flex" }}
            >
              PRFHC Registered · Aberdeen &amp; Aberdeenshire
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
              Professional Foot Health Care{" "}
              <em style={{ color: "var(--sage)", fontStyle: "italic" }}>
                You Can Trust
              </em>
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: "2.5rem",
              }}
            >
              Providing compassionate and expert foot health services across
              Aberdeen and Aberdeenshire. From diabetic care to general foot
              health, we&apos;re here to help you stay comfortable and mobile.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                onClick={() => (window.location.href = "tel:+447300790349")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "var(--ink)",
                  color: "white",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  padding: "0.875rem 1.75rem",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(13,27,42,0.18)",
                  transition: "background 0.2s, transform 0.15s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--gold)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--ink)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                }}
              >
                <Phone size={17} />
                Call 07300 790349
              </button>
              <button
                onClick={() =>
                  window.open("https://dikidi.net/1756535", "_blank")
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "var(--ink)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  padding: "0.875rem 1.75rem",
                  borderRadius: "100px",
                  border: "1.5px solid var(--border-md)",
                  cursor: "pointer",
                  transition: "border-color 0.2s, background 0.2s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--ink)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(13,27,42,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--border-md)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                <Calendar size={17} />
                Book Online
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                marginTop: "2rem",
              }}
            >
              {[
                "PRFHC Registered",
                "Fully Insured",
                "Home Visits Available",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8125rem",
                    color: "var(--ink-soft)",
                    fontWeight: 500,
                  }}
                >
                  <CheckCircle size={14} color="var(--sage)" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(13,27,42,0.12)",
                aspectRatio: "4/5",
                position: "relative",
              }}
            >
              <motion.img
                src="/face.jpeg"
                alt="Professional foot care service"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.3) 0%, transparent 55%)",
                }}
              />
            </div>
            {/* Float card 1 */}
            <div
              className="float-card float-card-1"
              style={{ top: "12%", left: "-8%" }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 4,
                }}
              >
                Reg. Number
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "var(--ink)",
                }}
              >
                PRFHC <span style={{ color: "var(--gold)" }}>0090</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  marginTop: 6,
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--sage)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--sage)",
                    fontWeight: 600,
                  }}
                >
                  Fully Registered
                </span>
              </div>
            </div>
            {/* Float card 2 */}
            <div
              className="float-card float-card-2"
              style={{ bottom: "16%", right: "-6%" }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 4,
                }}
              >
                Studio Days
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: "var(--ink)",
                }}
              >
                Every
                <br />
                Thursday
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  marginTop: 4,
                }}
              >
                Newburgh Studio
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "3rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { num: "5", accent: ".0", label: "Patient Rating" },
            { num: "100", accent: "%", label: "Fully Insured" },
            { num: "4", accent: "+", label: "Services Available" },
            { num: "AB", accent: "", label: "Aberdeen & Aberdeenshire" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-display"
                style={{
                  fontSize: "2.75rem",
                  fontWeight: 500,
                  color: "white",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.num}
                <span style={{ color: "var(--gold)" }}>{s.accent}</span>
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "0.5rem",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        style={{
          background: "var(--white)",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    height: "100%",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxShadow: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--sage)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 24px rgba(13,27,42,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <CardContent style={{ padding: "2rem" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "var(--sage-lt)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <Icon size={20} color="var(--sage)" />
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.65,
                      }}
                    >
                      {f.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        style={{
          background: "#F9F7F3",
          padding: "5rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              What We Offer
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
              Our Services
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginTop: "0.875rem",
                marginBottom: "3rem",
              }}
            >
              Comprehensive foot health care services tailored to your
              individual needs
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5px",
              background: "var(--border)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(13,27,42,0.07)",
            }}
          >
            {isLoading
              ? [...Array(4)].map((_, i) => (
                  <Card key={i}>
                    <CardContent style={{ padding: "2.5rem 2rem" }}>
                      <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                  </Card>
                ))
              : services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="service-card-inner"
                    >
                      <div style={{ padding: "2.5rem 2rem" }}>
                        <div
                          style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "3rem",
                            fontWeight: 400,
                            color: "rgba(13,27,42,0.07)",
                            lineHeight: 1,
                            marginBottom: "1.25rem",
                          }}
                        >
                          {s.num}
                        </div>
                        <div
                          className="service-icon-bg"
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            background: "var(--sage-lt)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "1.25rem",
                            transition: "background 0.25s",
                          }}
                        >
                          <Icon size={22} color="var(--sage)" />
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
                          {s.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--ink-soft)",
                            lineHeight: 1.65,
                          }}
                        >
                          {s.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              style={{
                borderRadius: "100px",
                borderColor: "var(--border-md)",
                color: "var(--ink)",
              }}
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section
        style={{
          background: "var(--white)",
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
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                aspectRatio: "3/4",
                boxShadow: "0 20px 60px rgba(13,27,42,0.12)",
              }}
            >
              <motion.img
                src="/foot.jpeg"
                alt="Before and after foot treatment"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7 }}
              />
            </div>
            {/* Credential badge */}
            <div
              style={{
                position: "absolute",
                bottom: "1.75rem",
                left: "1.75rem",
                background: "white",
                borderRadius: 14,
                padding: "1rem 1.25rem",
                boxShadow: "0 8px 32px rgba(13,27,42,0.10)",
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
                <Award size={22} color="var(--gold)" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    lineHeight: 1.2,
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
                  Registration No. 0090
                </div>
              </div>
            </div>
          </motion.div>

          {/* List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: "0.875rem", display: "inline-flex" }}
            >
              Why 2Care
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                lineHeight: 1.18,
                marginBottom: "2rem",
              }}
            >
              Why Choose 2Care Foot Health?
            </h2>
            <div>
              {[
                {
                  icon: Shield,
                  title: "Fully Registered & Qualified",
                  desc: "Registered with the Professional Register for Foot Health Care (PRFHC0090)",
                },
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  desc: "Provide care for elderly patients, diabetic patients, and those with mobility concerns",
                },
                {
                  icon: MapPin,
                  title: "Flexible Appointments",
                  desc: "Home visits across Aberdeen & Aberdeenshire, plus studio appointments every Thursday",
                },
                {
                  icon: Users,
                  title: "Care Homes Welcome",
                  desc: "We provide professional foot health services to care homes and residential facilities",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="why-row"
                    style={{
                      borderBottom:
                        i === 3 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="why-icon-bg"
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 10,
                        background: "var(--sage-lt)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                        transition: "background 0.2s",
                      }}
                    >
                      <Icon size={20} color="var(--sage)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--ink)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {item.title}
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--ink-soft)",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS (auto-scroll) ── */}
      <section
        style={{ background: "#F9F7F3", padding: "5rem 0", overflow: "hidden" }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(1.5rem,5vw,4rem)",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <div>
              <span
                className="eyebrow"
                style={{ marginBottom: "0.875rem", display: "inline-flex" }}
              >
                Patient Stories
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
                What Our Patients Say
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                background: "var(--gold-lt)",
                padding: "0.625rem 1.125rem",
                borderRadius: "100px",
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="var(--gold)"
                    color="var(--gold)"
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--gold)",
                }}
              >
                5.0 · Patient Rating
              </span>
            </div>
          </motion.div>
        </div>

        {/* Auto-scroll strip */}
        <div style={{ position: "relative" }}>
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "hidden",
              padding: "0.5rem clamp(1.5rem,5vw,4rem)",
            }}
          >
            {duplicatedTestimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: 300,
                  background: "var(--white)",
                  borderRadius: 16,
                  padding: "1.75rem",
                  border: "1px solid var(--border)",
                  position: "relative",
                  transition: "box-shadow 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 32px rgba(13,27,42,0.10)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "4rem",
                    lineHeight: 0.7,
                    color: "rgba(13,27,42,0.05)",
                    position: "absolute",
                    top: "1rem",
                    right: "1.25rem",
                    userSelect: "none",
                  }}
                ></div>
                <div
                  style={{ display: "flex", gap: 2, marginBottom: "0.875rem" }}
                >
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      fill="var(--gold)"
                      color="var(--gold)"
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--ink-soft)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "1.25rem",
                  }}
                >
                  &quot;{t.text}&quot;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--sage)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
                      {t.location}
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        color: "var(--sage)",
                        marginTop: 2,
                      }}
                    >
                      {t.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(to right, #F9F7F3, transparent)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(to left, #F9F7F3, transparent)",
              pointerEvents: "none",
            }}
          />
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
              Get In Touch
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
              Ready to Take Care of Your Feet?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1rem",
                lineHeight: 1.65,
                maxWidth: 480,
              }}
            >
              Book your appointment today or call us to discuss your foot health
              needs
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
              <Phone size={17} /> Call Now
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
                transition: "border-color 0.2s, background 0.2s, color 0.2s",
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
              <MessageCircle size={17} /> WhatsApp
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
                transition: "border-color 0.2s, background 0.2s, color 0.2s",
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
              <Calendar size={17} /> Book Online
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "4rem clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div
              style={{
                border: "1.5px dashed var(--border-md)",
                borderRadius: 20,
                padding: "3.5rem",
                textAlign: "center",
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "var(--gold-lt)",
                  color: "var(--gold)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "0.35rem 0.875rem",
                  borderRadius: "100px",
                  marginBottom: "1.25rem",
                }}
              >
                Coming Soon
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.875rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.875rem",
                }}
              >
                Online Medical Equipment Store
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                }}
              >
                We&apos;re working on bringing you a convenient online store for
                foot health and medical equipment. Stay tuned for updates!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
