import { Metadata } from "next";
import ResumeClientContent from "./ResumeClientContent"; // Import the client component

// Define page-specific metadata
export const metadata: Metadata = {
  title: "Resume | Dr. Rohan Yashraj Gupta, FIA, FIAI",
  description:
    "View the professional resume of Dr. Rohan Yashraj Gupta, FIA, FIAI. Details on experience, education, skills in actuarial science, data science, and tech.",
  keywords: [
    "Rohan Gupta Resume",
    "Dr. Rohan Yashraj Gupta",
    "Actuary Resume",
    "Data Scientist Resume",
    "FIA Resume",
    "FIAI Resume",
    "General Insurance Resume",
    "Actuarial Experience",
    "Data Science Skills",
  ],
  alternates: {
    canonical: "https://rohanyashraj.github.io/resume",
  },
  openGraph: {
    title: "Resume | Dr. Rohan Yashraj Gupta, FIA, FIAI",
    description:
      "Detailed resume of Dr. Rohan Yashraj Gupta, FIA, FIAI: Experience, Education, Skills.",
    url: "https://rohanyashraj.github.io/resume",
    images: [
      {
        url: "https://rohanyashraj.github.io/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Resume - Dr. Rohan Yashraj Gupta, FIA, FIAI",
      },
    ],
  },
  twitter: {
    title: "Resume | Dr. Rohan Yashraj Gupta, FIA, FIAI",
    description:
      "View the professional resume of Dr. Rohan Yashraj Gupta, FIA, FIAI.",
    images: ["https://rohanyashraj.github.io/profile.jpg"],
  },
};

// This is the Server Component that wraps the Client Component
export default function ResumePageContainer() {
  // Note: Renamed from ResumePage to avoid conflict with the default export in the client component
  return <ResumeClientContent />;
}
