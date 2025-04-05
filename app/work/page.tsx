import { Metadata } from "next";
import WorkClientContent from "./WorkClientContent"; // Import the client component
import { Suspense } from "react"; // Import Suspense

// Define page-specific metadata
export const metadata: Metadata = {
  title: "Work & Projects | Dr. Rohan Yashraj Gupta, FIA, FIAI",
  description:
    "Explore Dr. Rohan Yashraj Gupta, FIA, FIAI's projects, conference presentations, and research publications in actuarial science and data science.",
  keywords: [
    "Actuarial Projects",
    "Data Science Projects",
    "Machine Learning",
    "Insurance",
    "Conference Presentations",
    "Research Publications",
    "Rohan Gupta Work",
    "Dr. Rohan Yashraj Gupta",
    "Actuarial Portfolio",
    "FIAI",
  ],
  alternates: {
    canonical: "https://rohanyashraj.github.io/work",
  },
  openGraph: {
    title: "Work & Projects | Dr. Rohan Yashraj Gupta, FIA, FIAI",
    description:
      "Explore Dr. Rohan Yashraj Gupta, FIA, FIAI's projects, conference presentations, and research publications.",
    url: "https://rohanyashraj.github.io/work",
    images: [
      {
        url: "https://rohanyashraj.github.io/profile.jpg", // Use the same image or a page-specific one
        width: 1200,
        height: 1200,
        alt: "Work Portfolio Image - Dr. Rohan Yashraj Gupta, FIA, FIAI",
      },
    ],
  },
  twitter: {
    title: "Work & Projects | Dr. Rohan Yashraj Gupta, FIA, FIAI",
    description:
      "Explore Dr. Rohan Yashraj Gupta, FIA, FIAI's projects, conference presentations, and research publications.",
    images: ["https://rohanyashraj.github.io/profile.jpg"],
  },
};

// This is the Server Component that wraps the Client Component
export default function WorkPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkClientContent />
    </Suspense>
  );
}
