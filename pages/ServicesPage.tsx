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

//interface ServicesPageProps {
//onNavigate: (page: string) => void;
//}

export function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Diabetic Foot Care",
      icon: Heart,
      description:
        "Specialized foot health care for diabetic patients to prevent complications and maintain optimal foot health.",
      details: [
        "Comprehensive foot health assessment",
        "Nail care with diabetic protocols",
        "Skin condition monitoring",
        "Circulation and sensation checks",
        "Preventative care advice",
        "Early detection of potential issues",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Nail Cutting, Trimming & Filing",
      icon: Scissors,
      description:
        "Professional nail care services for toenails and fingernails (fingers at additional cost).",
      details: [
        "Safe cutting and trimming techniques",
        "Professional filing and shaping",
        "Treatment for thickened nails",
        "Reduction of thickened nails",
        "Nail condition assessment",
        "Fingernails available at extra cost",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Ingrown Toenail Treatment",
      icon: AlertCircle,
      description:
        "Expert management and treatment of ingrown toenails to relieve pain and prevent infection.",
      details: [
        "Pain relief treatment",
        "Professional nail cutting techniques",
        "Infection prevention",
        "Ongoing management plans",
        "Advice on proper footwear",
        "Follow-up care as needed",
      ],
      availability: "Home visits and studio",
    },
    {
      title: "Fungal Nail Treatment",
      icon: Stethoscope,
      description:
        "Treatment and management of fungal nail infections with professional advice and care.",
      details: [
        "Fungal infection assessment",
        "Treatment recommendations",
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
      title: "Diabetic Patients",
      icon: Heart,
      description:
        "Specialized diabetic foot care protocols to prevent complications and maintain health.",
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
        "Professional foot health services for residential care facilities and nursing homes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Our Services
            </h1>
            <p className="text-lg text-slate-600">
              Comprehensive foot health care services delivered with
              professionalism, compassion, and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Professional Equipment Section - HORIZONTAL LAYOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
              Professional Equipment & Mobile Service
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We bring professional-grade equipment and supplies directly to
              your home, ensuring you receive the same high-quality care whether
              you visit our studio or we come to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="size-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Fully Equipped Mobile Service
                  </h3>
                  <p className="text-sm text-slate-600">
                    All necessary tools, equipment, and supplies for
                    comprehensive foot care treatments
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="size-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Sterilized Professional Tools
                  </h3>
                  <p className="text-sm text-slate-600">
                    Hospital-grade sterilization protocols for your safety and
                    peace of mind
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="size-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Comfort & Convenience
                  </h3>
                  <p className="text-sm text-slate-600">
                    Professional care in the comfort of your own home
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/bag1.jpeg"
                alt="Professional foot care equipment and mobile service kit"
                width={1000}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 md:left-8 md:bottom-8 md:right-auto"
              >
                <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-xl border-2 border-primary/20 inline-block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <Stethoscope className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        PRFHC Registered
                      </p>
                      <p className="text-sm text-slate-600">
                        Professional Standards - PRFHC0090
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
              Our Professional Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized foot health care tailored to your individual needs
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {isLoading
              ? // Loading skeletons for services
                [...Array(6)].map((_, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <Skeleton className="w-12 h-12 rounded-lg" />
                        {index === 5 && (
                          <Skeleton className="w-20 h-6 rounded-full" />
                        )}
                      </div>
                      <Skeleton className="h-7 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6 mt-2" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        {[...Array(6)].map((_, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Skeleton className="size-4 rounded-full shrink-0" />
                            <Skeleton className="h-4 flex-1" />
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t">
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              : services.map((service, index) => {
                  const Icon = service.icon;
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="border-2 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                              <Icon className="size-6 text-primary" />
                            </div>
                            {service.badge && (
                              <Badge
                                variant="secondary"
                                className="bg-secondary/20 text-secondary"
                              >
                                {service.badge}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-2">
                            {service.description}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 mb-4">
                            {service.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
                            <Clock className="size-4" />
                            <span>{service.availability}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
              Who We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our services are tailored to meet the needs of diverse patient
              groups
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? [...Array(4)].map((_, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                      <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6 mx-auto" />
                    </CardContent>
                  </Card>
                ))
              : patientGroups.map((group, index) => {
                  const Icon = group.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                        <CardContent className="pt-6">
                          <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon className="size-8 text-secondary" />
                          </div>
                          <h3 className="font-semibold mb-2">{group.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {group.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="size-6 text-primary" />
                Important Service Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-slate-900">
                  Studio vs. Home Visits
                </h4>
                <p className="text-sm text-slate-600">
                  Most services are available both at our studio and through
                  home visits. However, medical pedicures with foot massage are
                  only available at the studio to ensure we have all necessary
                  equipment and facilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-900">
                  Studio Appointments
                </h4>
                <p className="text-sm text-slate-600">
                  Our studio appointments are available every Thursday. You can
                  book online through our booking system for your convenience.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-900">
                  Terminology
                </h4>
                <p className="text-sm text-slate-600">
                  We refer to our treatment space as a &quot;studio&quot; rather
                  than a &quot;clinic.&quot; The term &quot;clinic&quot; is
                  reserved for podiatrists. We are registered foot health
                  practitioners providing professional foot health care
                  services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-900">
                  Additional Services
                </h4>
                <p className="text-sm text-slate-600">
                  Fingernail care is available at an additional cost. Please
                  mention this when booking your appointment so we can allocate
                  appropriate time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-br from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Choose the service that&apos;s right for you and schedule your
            appointment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                window.open("https://dikidi.net/1756535", "_blank")
              }
              size="lg"
              variant="secondary"
            >
              Book Appointment
            </Button>
            <Link
              href="/about"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
