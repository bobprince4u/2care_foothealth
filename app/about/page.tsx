import { Metadata } from "next";
import AboutPage from "@/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us - 2Care Foot Health",
  description:
    "Learn about 2Care Foot Health, our mission, values, and PRFHC registered professional foot health care services across Aberdeen and Aberdeenshire.",
};

export default function Page() {
  return <AboutPage />;
}
