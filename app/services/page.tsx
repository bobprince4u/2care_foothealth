import { Metadata } from "next";
import { ServicesPage } from "@/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services - 2Care Foot Health",
  description:
    "Comprehensive foot health services including diabetic care, nail treatment, ingrown toenail management, fungal treatment, corn & callus removal, and medical pedicures.",
};

export default function Page() {
  return <ServicesPage />;
}
