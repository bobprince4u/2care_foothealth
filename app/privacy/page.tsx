import { Metadata } from "next";
import PrivacyPage from "@/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy - 2Care Foot Health",
  description:
    "Privacy Policy and GDPR compliance information for 2Care Foot Health. Learn how we protect your personal data and ensure your privacy.",
};

export default function Page() {
  return <PrivacyPage />;
}
