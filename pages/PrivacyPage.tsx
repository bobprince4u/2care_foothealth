import { Shield, Lock, Eye, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//interface PrivacyPageProps {
// onNavigate: (page: string) => void;
//}

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="size-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Your privacy and data security are important to us. This policy
              explains how we collect, use, and protect your personal
              information.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last updated: January 31, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Introduction */}
          <div>
            <p className="text-slate-600 mb-4">
              2Care Foot Health is committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines how we collect, use, store, and protect your data
              in compliance with the General Data Protection Regulation (GDPR)
              and other applicable data protection laws.
            </p>
          </div>

          {/* Key Principles */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="size-6 text-primary" />
                Our Commitment to You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                  <span>
                    We only collect information necessary for providing our
                    services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                  <span>
                    Your data is stored securely and never sold to third parties
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                  <span>
                    You have full rights to access, correct, or delete your
                    information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                  <span>
                    We comply with all UK GDPR regulations and healthcare data
                    protection standards
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <div>
            <h2 className="text-3xl mb-4 text-slate-900">
              Information We Collect
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2">Personal Information</h3>
                    <p className="text-muted-foreground mb-2">
                      When you book an appointment or contact us, we may
                      collect:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Name and contact details (phone, email, address)</li>
                      <li>Date of birth</li>
                      <li>Medical history relevant to foot health care</li>
                      <li>Appointment history and treatment records</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="mb-2">Website Usage Information</h3>
                    <p className="text-muted-foreground">
                      We may collect non-personal information about how you use
                      our website, including pages visited and time spent on the
                      site. This helps us improve our online services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-3xl mb-4 text-slate-900">
              How We Use Your Information
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  We use your personal information for the following purposes:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="size-4 text-primary" />
                    </div>
                    <div>
                      <h4>Providing Services</h4>
                      <p className="text-sm text-muted-foreground">
                        To deliver professional foot health care services and
                        maintain accurate treatment records
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="size-4 text-primary" />
                    </div>
                    <div>
                      <h4>Appointment Management</h4>
                      <p className="text-sm text-muted-foreground">
                        To schedule appointments, send reminders, and manage
                        your bookings
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="size-4 text-primary" />
                    </div>
                    <div>
                      <h4>Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        To respond to your inquiries and provide important
                        updates about our services
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="size-4 text-primary" />
                    </div>
                    <div>
                      <h4>Legal Obligations</h4>
                      <p className="text-sm text-muted-foreground">
                        To comply with healthcare regulations and professional
                        standards
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-3xl mb-4 text-slate-900">Data Security</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-4">
                  <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Lock className="size-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational
                      measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or
                      destruction. This includes:
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                    <span>Secure storage of physical and digital records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                    <span>
                      Limited access to personal information (only authorized
                      personnel)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                    <span>
                      Encrypted communications when handling sensitive
                      information
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-3xl mb-4 text-slate-900">
              Your Rights Under GDPR
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Under the GDPR, you have the following rights regarding your
                  personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="mb-2 flex items-center gap-2">
                      <Eye className="size-4 text-primary" />
                      Right to Access
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Request a copy of the personal information we hold about
                      you
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="mb-2 flex items-center gap-2">
                      <FileText className="size-4 text-primary" />
                      Right to Rectification
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Request correction of inaccurate or incomplete information
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="mb-2 flex items-center gap-2">
                      <FileText className="size-4 text-primary" />
                      Right to Erasure
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Request deletion of your personal data (subject to legal
                      obligations)
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="mb-2 flex items-center gap-2">
                      <FileText className="size-4 text-primary" />
                      Right to Object
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Object to processing of your personal data in certain
                      circumstances
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  To exercise any of these rights, please contact us using the
                  details below.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-3xl mb-4 text-slate-900">Cookies</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Our website uses cookies to improve your browsing experience.
                  Cookies are small text files stored on your device. We use:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                    <span>
                      <strong>Essential cookies:</strong> Necessary for the
                      website to function properly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-1" />
                    <span>
                      <strong>Preference cookies:</strong> Remember your
                      settings and preferences
                    </span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  You can control cookie settings through your browser. However,
                  disabling cookies may affect website functionality.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-4 text-slate-900">Contact Us</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, wish to
                  exercise your data rights, or have concerns about how we
                  handle your information, please contact us:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <p>
                    <strong>2Care Foot Health</strong>
                  </p>
                  <p className="text-muted-foreground">
                    11 School Crescent, Newburgh, Ellon AB41 6BH
                  </p>
                  <p className="text-muted-foreground">Phone: 07300 790349</p>
                  <p className="text-muted-foreground">
                    Email: 2carefoothealth@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Registration */}
          <Card className="border-2 border-secondary/20 bg-teal-50">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="size-6 text-secondary" />
                </div>
                <div>
                  <h3 className="mb-2">Professional Standards</h3>
                  <p className="text-muted-foreground">
                    As a registered member of the Professional Register for Foot
                    Health Care (PRFHC0090), we adhere to strict professional
                    standards for data protection and patient confidentiality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
