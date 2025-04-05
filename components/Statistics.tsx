"use client";
import CountUp from "react-countup";
import Link from "next/link";
import {
  projects,
  conferencePresentations,
  researchPublications,
} from "@/data/workData";
import { experienceData } from "@/data/resumeData";

const calculateYearsOfExperience = (): number => {
  let earliestStartDate: Date | null = null;
  let latestEndDate: Date | null = null;
  const currentDate = new Date();

  const monthMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  experienceData.forEach((item) => {
    const parts = item.period.split(" - ");
    if (parts.length !== 2) return;

    const startDateStr = parts[0];
    const endDateStr = parts[1];

    const startParts = startDateStr.split(" ");
    if (startParts.length !== 2) return;
    const startMonth = monthMap[startParts[0]];
    const startYear = parseInt(startParts[1], 10);

    let potentialStartDate: Date | null = null;
    if (!isNaN(startYear) && startMonth !== undefined) {
      potentialStartDate = new Date(startYear, startMonth, 1);
      if (!earliestStartDate || potentialStartDate < earliestStartDate) {
        earliestStartDate = potentialStartDate;
      }
    }

    let potentialEndDate: Date | null = null;
    if (endDateStr.toLowerCase() === "present") {
      potentialEndDate = currentDate;
    } else {
      const endParts = endDateStr.split(" ");
      if (endParts.length !== 2) return;
      const endMonth = monthMap[endParts[0]];
      const endYear = parseInt(endParts[1], 10);
      if (!isNaN(endYear) && endMonth !== undefined) {
        potentialEndDate = new Date(endYear, endMonth + 1, 0);
      }
    }

    if (potentialEndDate instanceof Date) {
      if (!latestEndDate || potentialEndDate > latestEndDate) {
        latestEndDate = potentialEndDate;
      }
    }
  });

  if (
    earliestStartDate &&
    latestEndDate &&
    latestEndDate >= earliestStartDate
  ) {
    const diffMs =
      (latestEndDate as Date).getTime() - (earliestStartDate as Date).getTime();
    const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
    const calculatedYears = Math.floor(years);
    return calculatedYears > 0 ? calculatedYears : diffMs > 0 ? 1 : 0;
  }

  return 0;
};

const Statistics = () => {
  const projectCount = projects.length;
  const presentationCount = conferencePresentations.length;
  const publicationCount = researchPublications.length;
  const yearsExperience = calculateYearsOfExperience();

  const statsData = [
    {
      num: yearsExperience,
      title: "Years of Experience",
      href: "/resume",
    },
    {
      num: projectCount,
      title: "Projects Completed",
      href: "/work?tab=projects",
    },
    {
      num: presentationCount,
      title: "Conference Presentations",
      href: "/work?tab=presentations",
    },
    {
      num: publicationCount,
      title: "Research Publications",
      href: "/work?tab=publications",
    },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row gap-2.5 md:gap-5">
      {statsData?.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="flex-1 hover:opacity-80 transition-opacity duration-200"
        >
          <div className="flex w-full gap-4 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start">
            <CountUp
              end={item?.num}
              duration={5}
              delay={2}
              className="text-4xl lg:text-6xl font-extrabold text-white"
            />
            <p className="leading-snug text-sm">
              {item.title}
              {item.title === "Years of Experience" && "+"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Statistics;
