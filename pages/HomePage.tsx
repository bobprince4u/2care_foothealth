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

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Diabetic Foot Care",
      description:
        "Specialized care for diabetic patients to prevent complications and maintain foot health.",
      icon: Heart,
    },
    {
      title: "Nail Care & Treatment",
      description:
        "Professional nail cutting, trimming, filing, and ingrown toenail management.",
      icon: CheckCircle,
    },
    {
      title: "Corn & Callus Removal",
      description:
        "Safe and effective removal of corns and calluses for immediate relief.",
      icon: Shield,
    },
    {
      title: "Medical Pedicure",
      description:
        "Comprehensive foot care treatment including massage (studio appointments only).",
      icon: Award,
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
      description: "Professional treatment in our studio every Thursday",
      icon: Calendar,
    },
    {
      title: "Fully Registered",
      description: "PRFHC registered professional foot health practitioner",
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      name: "Margaret T.",
      location: "Aberdeen",
      rating: 5,
      text: "Absolutely wonderful service! The practitioner came to my home and was so gentle and professional. My feet feel so much better, and I appreciated not having to travel.",
      service: "Home Visit - General Foot Care",
    },
    {
      name: "James M.",
      location: "Ellon",
      rating: 5,
      text: "As a diabetic, I was worried about finding proper foot care. 2Care Foot Health has been fantastic - very knowledgeable about diabetic foot health and always thorough.",
      service: "Diabetic Foot Care",
    },
    {
      name: "Allina Osbeck.",
      location: "Newburgh",
      rating: 5,
      text: "Well done, great podiatrist, keep up the great work",
      service: "Studio - Medical Pedicure",
    },
    {
      name: "Robert L.",
      location: "Aberdeenshire",
      rating: 5,
      text: "I had been struggling with an ingrown toenail for months. The treatment was professional and virtually painless. Pain-free now!",
      service: "Ingrown Toenail Treatment",
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through one set of testimonials
      const cardWidth = 320; // approximate card width + gap
      const resetPoint = testimonials.length * cardWidth;

      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 to-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl mb-6 text-slate-900">
                Professional Foot Health Care You Can Trust
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Providing compassionate and expert foot health services across
                Aberdeen and Aberdeenshire. From diabetic care to general foot
                health, we&apos;re here to help you stay comfortable and mobile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => (window.location.href = "tel:+447300790349")}
                  size="lg"
                  className="gap-2 text-lg py-6"
                >
                  <Phone className="size-5" />
                  Call 07300 790349
                </Button>
                <Button
                  onClick={() =>
                    window.open("https://dikidi.net/1756535", "_blank")
                  }
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Calendar className="size-5" />
                  Book Online
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-secondary" />
                  <span>PRFHC Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-secondary" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-secondary" />
                  <span>Home Visits Available</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl group">
                <motion.img
                  src="/face.jpeg"
                  alt="Professional foot care service"
                  className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary transition-colors h-full">
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <h3 className="mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4 text-slate-900">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive foot health care services tailored to your
              individual needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? // Loading skeletons for services
                [...Array(4)].map((_, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="pt-6">
                      <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                  </Card>
                ))
              : services.map((service, index) => {
                  const Icon = service.icon;
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                        <CardContent className="pt-6">
                          <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="size-6 text-secondary" />
                          </div>
                          <h3 className="mb-2">{service.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate("services")}
              size="lg"
              variant="outline"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl group order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/foot.jpeg"
                alt="Before and after foot treatment results"
                className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl mb-6 text-slate-900">
                Why Choose 2Care Foot Health?
              </h2>
              <div className="space-y-4">
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="bg-secondary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="size-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Fully Registered & Qualified</h4>
                    <p className="text-muted-foreground">
                      Registered with the Professional Register for Foot Health
                      Care (PRFHC0090)
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-secondary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Heart className="size-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Compassionate Care</h4>
                    <p className="text-muted-foreground">
                      Specializing in care for elderly patients, diabetic
                      patients, and those with mobility concerns
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-secondary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Flexible Appointments</h4>
                    <p className="text-muted-foreground">
                      Home visits across Aberdeen & Aberdeenshire, plus studio
                      appointments every Thursday
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-secondary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="size-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Care Homes Welcome</h4>
                    <p className="text-muted-foreground">
                      We provide professional foot health services to care homes
                      and residential facilities
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Auto Scrolling */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4 text-slate-900">
              What Our Patients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Read testimonials from patients who have experienced our
              professional foot health care
            </p>
          </motion.div>

          {/* Auto-scrolling container */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden"
              style={{
                scrollBehavior: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="shrink-0 w-75"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <Quote className="size-6 text-primary/20" />
                      </div>
                      <p className="text-slate-700 mb-4 italic text-sm">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-medium text-slate-900 text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                        <p className="text-xs text-primary mt-1">
                          {testimonial.service}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-slate-50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-slate-50 to-transparent pointer-events-none" />
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-slate-900 font-semibold">5.0 / 5</span>
              <span className="text-slate-600">Patient Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Ready to Take Care of Your Feet?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Book your appointment today or call us to discuss your foot health
              needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "tel:+447300790349")}
                size="lg"
                variant="secondary"
                className="gap-2"
              >
                <Phone className="size-5" />
                Call Now
              </Button>
              <Button
                onClick={() =>
                  window.open("https://wa.me/447300790349", "_blank")
                }
                size="lg"
                variant="outline"
                className="gap-2 bg-white hover:bg-slate-100 text-slate-900"
              >
                <MessageCircle className="size-5" />
                WhatsApp
              </Button>
              <Button
                onClick={() =>
                  window.open("https://dikidi.net/1756535", "_blank")
                }
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-white/10"
              >
                <Calendar className="size-5" />
                Book Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon - Online Store */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-linear-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 border-2 border-dashed border-secondary/30">
              <div className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Coming Soon
              </div>
              <h2 className="text-2xl lg:text-3xl mb-3 text-slate-900">
                Online Medical Equipment Store
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
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
