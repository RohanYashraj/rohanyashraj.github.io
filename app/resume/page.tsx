import { Metadata } from "next";
import ResumeClientContent from "./ResumeClientContent"; // Import the client component

// Define page-specific metadata for Resume
export const metadata: Metadata = {
  title: "Resume | Dr. Rohan Yashraj Gupta, FIA",
  description:
    "View the professional resume of Dr. Rohan Gupta, FIA. Details on experience, education, skills in actuarial science, data science, and tech.",
  keywords: [
    "Rohan Gupta Resume",
    "Actuary Resume",
    "Data Scientist Resume",
    "Actuarial Experience",
    "Actuarial Education",
    "FIA Resume",
    "PhD Actuarial Science",
    "Insurance Resume",
    "Python",
    "R",
    "SQL",
    "Predictive Modeling",
  ],
  alternates: {
    canonical: "https://rohanyashraj.github.io/resume",
  },
  openGraph: {
    title: "Resume | Dr. Rohan Yashraj Gupta, FIA",
    description:
      "Detailed resume of Dr. Rohan Gupta, FIA: Experience, Education, Skills.",
    url: "https://rohanyashraj.github.io/resume",
    images: [
      {
        url: "https://rohanyashraj.github.io/profile.jpg", // Consistent profile image
        width: 1200,
        height: 1200,
        alt: "Resume - Dr. Rohan Gupta",
      },
    ],
  },
  twitter: {
    title: "Resume | Dr. Rohan Yashraj Gupta, FIA",
    description: "View the professional resume of Dr. Rohan Gupta, FIA.",
    images: ["https://rohanyashraj.github.io/profile.jpg"],
  },
};

// This is the Server Component that wraps the Client Component
export default function ResumePageContainer() {
  // Note: Renamed from ResumePage to avoid conflict with the default export in the client component
  return <ResumeClientContent />;
}
