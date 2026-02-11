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

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

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
    "Diabetic patients needing specialized foot health management",
    "Athletes seeking performance and injury prevention",
    "Care homes and residential facilities",
    "General foot care for all ages",
    "Patients with mobility concerns who benefit from home visits",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              About 2Care Foot Health
            </h1>
            <p className="text-lg text-slate-600">
              Dedicated to providing professional, compassionate foot health
              care services across Aberdeen and Aberdeenshire
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - PLACEHOLDER FOR YOUR VIDEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-4 text-slate-900">
              See Our Care in Action
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn more about our professional foot health services and what to
              expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-video flex items-center justify-center">
              <video
                controls
                className="w-full h-full"
                poster="path-to-thumbnail.jpg"
              >
                <source src="videos/2care.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/*<div className="text-center p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div> 
                <p className="text-slate-600 text-lg">Video Placeholder</p>
                <p className="text-slate-500 text-sm mt-2"></p>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl mb-6 text-slate-900">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  2Care Foot Health was founded with a simple but important
                  mission: to provide accessible, professional foot health care
                  to those who need it most. We understand that healthy feet are
                  essential for maintaining independence, mobility, and quality
                  of life.
                </p>
                <p>
                  Our practice specializes in serving elderly patients, diabetic
                  patients, athletes, and anyone seeking professional foot care.
                  We offer both home visits for convenience and studio-based
                  appointments for comprehensive treatments.
                </p>
                <p>
                  What sets us apart is our commitment to personalized care. We
                  take the time to understand each patient&apos;s unique needs
                  and concerns, providing treatments in a calm, professional
                  environment where you feel valued and cared for.
                </p>
              </div>

              <div className="mt-8 p-6 bg-secondary/10 rounded-lg">
                <h3 className="mb-3 text-slate-900">
                  Professional Registration
                </h3>
                <div className="flex items-start gap-3">
                  <Shield className="size-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">
                      Professional Register for Foot Health Care (PRFHC)
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Registration Number: PRFHC0090
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      This registration ensures we meet rigorous standards of
                      training, competence, and professional conduct in foot
                      health care practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/readyToGoBag.jpeg"
                alt="Ready to go bag with professional foot health equipment"
                className="w-full h-125 object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl mb-8 text-center text-slate-900">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {isLoading
                ? // Loading skeletons
                  [...Array(4)].map((_, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="pt-6">
                        <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-5/6" />
                      </CardContent>
                    </Card>
                  ))
                : values.map((value, index) => {
                    const Icon = value.icon;
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="border-2 hover:border-primary transition-all duration-300 hover:-translate-y-1 h-full">
                          <CardContent className="pt-6">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                              <Icon className="size-6 text-primary" />
                            </div>
                            <h3 className="mb-2">{value.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {value.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
            </div>
          </div>

          {/* Who We Serve */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl mb-8 text-center text-slate-900">
              Who We Serve
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {isLoading
                ? [...Array(6)].map((_, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Skeleton className="size-5 rounded-full shrink-0" />
                      <Skeleton className="h-5 flex-1" />
                    </div>
                  ))
                : specialties.map((specialty, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                      >
                        <CheckCircle className="size-5 text-secondary shrink-0 mt-0.5" />
                        <p className="text-slate-700">{specialty}</p>
                      </motion.div>
                    );
                  })}
            </div>
          </div>

          {/* Service Delivery */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="size-6 text-primary" />
                </div>
                <h3 className="mb-3">Home Visits</h3>
                <p className="text-muted-foreground mb-4">
                  We bring professional foot health care directly to your home,
                  providing convenience and comfort for patients with mobility
                  concerns or those who prefer the familiarity of their own
                  environment.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span>Available across Aberdeen & Aberdeenshire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span>Flexible scheduling to suit your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span>Care homes and facilities welcome</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="size-6 text-secondary" />
                </div>
                <h3 className="mb-3">Studio Appointments</h3>
                <p className="text-muted-foreground mb-4">
                  Our professional studio environment is equipped for
                  comprehensive treatments, including medical pedicures and
                  specialized procedures. Studio appointments are available
                  every Thursday and can be booked online.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span>Thursday appointments available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span>Professional, clean environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span>Online booking available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Studio Showcase */}
          <div className="mb-16">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-slate-900 mb-4">
                Our Professional Studio
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A clean, comfortable, and fully equipped environment designed
                for your foot health care
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/studio.jpeg"
                alt="Professional foot health studio interior"
                className="w-full h-100 lg:h-125 object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>

          {/* Location */}
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4 text-slate-900">Our Location</h2>
            <p className="text-lg text-slate-600 mb-2">
              11 School Crescent, Newburgh, Ellon AB41 6BH
            </p>
            <p className="text-slate-600">
              Serving Aberdeen, Aberdeenshire & surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4 text-slate-900">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600">
              Have questions or ready to book? We&apos;re here to help
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
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
            ].map((contact, index) => {
              const Icon = contact.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <h3 className="mb-2">{contact.title}</h3>
                      {contact.isAddress ? (
                        <p className="text-muted-foreground text-sm">
                          {contact.text}
                        </p>
                      ) : (
                        <a
                          href={contact.link}
                          {...(contact.external && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                          className={`text-muted-foreground hover:text-primary transition-colors block ${contact.isSmall ? "break-all text-sm" : ""}`}
                        >
                          {contact.text}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Map and Additional Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <Card className="border-2 overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-169">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2159.8147688536853!2d-2.0089907!3d57.3339839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4884197d8f8f8f8f%3A0x0!2s11%20School%20Crescent%2C%20Newburgh%2C%20Ellon%20AB41%206BH!5e0!3m2!1sen!2suk!4v1234567890"
                      width="100%"
                      height="700"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="2Care Foot Health Location"
                    />
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                11 School Crescent, Newburgh, Ellon AB41 6BH
              </p>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="size-5 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2">Studio Appointments</h4>
                    <p className="text-muted-foreground">Thursdays only</p>
                    <a
                      href="https://dikidi.net/1756535"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm inline-block mt-2"
                    >
                      Book online →
                    </a>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="mb-2">Home Visits</h4>
                    <p className="text-muted-foreground">
                      Available throughout the week. Call or WhatsApp to
                      schedule.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We provide home visits across:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Aberdeen</li>
                    <li>• Aberdeenshire</li>
                    <li>• Surrounding areas</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Not sure if we cover your area? Give us a call and
                    we&apos;ll be happy to discuss.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={() => (window.location.href = "tel:+447300790349")}
                    variant="outline"
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Phone className="size-5" />
                    Call 07300 790349
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/447300790349", "_blank")
                    }
                    variant="outline"
                    className="w-full gap-2"
                    size="lg"
                  >
                    <MessageCircle className="size-5" />
                    WhatsApp Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8 text-center text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
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
            ].map((faq, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
