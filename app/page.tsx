import { Metadata } from "next";
import { HomePage } from "@/pages/HomePage";
export const metadata: Metadata = {
  title:
    "2Care Foot Health - Professional Foot Care in Aberdeen & Aberdeenshire",
  description:
    "Professional foot health services including diabetic care, nail treatment, corn removal, and medical pedicures. Home visits and studio appointments available.",
};
export default function Page() {
  return <HomePage />;
}
