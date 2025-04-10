"use client";

import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Calendar,
  Code2,
  GraduationCap,
  User,
  Clock,
  Sparkles,
  Languages,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Import shared experience data
import { experienceData, ExperienceItem } from "@/data/resumeData"; // Adjust path if needed

// Timeline data structure
interface TimelineItem {
  year: number;
  achievement: string;
}

const educationTimeline: TimelineItem[] = [
  { year: 2017, achievement: "BSc" },
  { year: 2019, achievement: "MSc" },
  { year: 2021, achievement: "PhD" },
  { year: 2022, achievement: "ASA" }, // Added ASA based on request
  { year: 2024, achievement: "FIA" },
  { year: 2025, achievement: "FIAI" },
];

const tabMenu = [
  {
    title: "Experience",
    value: "experience",
    icon: Briefcase,
  },
  {
    title: "Education",
    value: "education",
    icon: GraduationCap,
  },
  {
    title: "Skills",
    value: "skills",
    icon: Code2,
  },
  {
    title: "About Me",
    value: "about",
    icon: User,
  },
];

const tabContent = {
  experience: {
    title: "Professional Experience",
    items: experienceData, // Use imported data
  },
  education: {
    title: "Education & Qualifications",
    items: [
      {
        degree: "Qualified GI Actuary (FIA, FIAI)",
        institution:
          "Institute and Faculty of Actuaries (IFoA) & Institute of Actuaries of India (IAI)",
        period: "Dec 2024",
        sections: [
          {
            title: "Qualification Journey",
            points: [
              "Wrote my first actuarial exam on Sep 2017 and qualified as a GI actuary on Dec 2024",
              "Achieved Fellowship designation (FIA).",
            ],
          },
        ],
      },
      {
        degree: "Doctor of Philosophy (PhD)",
        institution: "Sri Sathya Sai Institute of Higher Learning (SSSIHL)",
        period: "Jun 2017 - May 2021",
        sections: [
          {
            title: "Framework for Fraud Detection in Motor Insurance",
            points: [
              "Proposed a framework for fraud detection, which includes actuarial and data science techniques",
              "Generated 450+ business rules used for fraud detection and developed an innovative method to automate rule-generation using machine learning and data visualization",
              "Used Python and R to develop data-driven fraud detection models for automobile and health insurance businesses with more than 100,000 records and have achieved results with 95%+ accuracy",
              "Thesis focused on fraud detection in health and motor insurance claims using data-driven models.",
            ],
          },
          {
            title: "Academic Contributions",
            points: [
              "Presented research at multiple conferences.",
              "Published findings in relevant journal articles.",
            ],
          },
        ],
      },
      {
        degree: "MSc (Mathematics) specialization in Actuarial Science",
        institution: "Sri Sathya Sai Institute of Higher Learning (SSSIHL)",
        period: "Jun 2017 - Apr 2019",
        sections: [
          {
            title: "Coursework & Focus",
            points: [
              "Pursued actuarial science alongside mathematics masters.",
            ],
          },
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Data Scientist - Actuary",
        description:
          "Combining actuarial expertise with data science to analyze complex datasets, build predictive models, and develop innovative pricing strategies. Focused on transitioning legacy systems to modern platforms like Hyperexponential.",
        skills: [
          { name: "Qualified GI Actuary", level: 5 },
          { name: "Predictive Modelling", level: 4 },
          { name: "Technology transformation", level: 4 },
          { name: "Hyper Exponential", level: 3 },
        ],
      },
      {
        name: "Technical Skills",
        description:
          "Proficient in Python, R, SQL, and advanced Excel for data analysis, modeling, and automation. Experienced in version control with Git/GitHub/GitLab and creating reports/dashboards with Office/Google Workspace.",
        skills: [
          { name: "Python", level: 5 },
          { name: "R", level: 4 },
          { name: "SQL", level: 4 },
          { name: "VBA / Excel", level: 5 },
          { name: "Git / GitHub / GitLab", level: 4 },
        ],
      },
      {
        name: "Public Speaking & Team Collaboration",
        description:
          "Experienced presenter at international conferences, simplifying complex topics. Thrive in cross-functional teams, managing stakeholders, driving consensus, and fostering productive environments.",
        skills: [
          { name: "Public Speaking", level: 4 },
          { name: "Stakeholder Management", level: 4 },
          { name: "Team Collaboration", level: 5 },
        ],
      },
      {
        name: "Building Web Apps & Dashboards",
        description:
          "Enjoy building web applications and dashboards to make complex processes accessible. Foundational skills in full-stack development and data visualization tools.",
        skills: [
          { name: "RShiny", level: 4 },
          { name: "Next.js / React", level: 3 },
          { name: "Flask", level: 3 },
          { name: "PowerBI", level: 4 },
        ],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "I am always seeking new challenges and opportunities to grow in my field and am excited to see where my skills and passion takes me.",
    interests: [
      "Programming",
      "Staying upto date with latest technologies",
      "Listening to music",
      "Chilling with friends",
    ],
    languages: ["English", "Hindi", "Nepali"],
  },
};

// Simple component to render skill level bar
const SkillLevelBar = ({ level }: { level: number }) => {
  const maxLevel = 5;
  return (
    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-lightSky rounded-full"
        style={{ width: `${(level / maxLevel) * 100}%` }}
      ></div>
    </div>
  );
};

const ResumePage = () => {
  // State for experience timeline
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Calculate total experience
  const calculateExperience = () => {
    const startDate = new Date(2017, 5, 1); // June 1, 2017 (Month is 0-indexed)
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (
      months < 0 ||
      (months === 0 && currentDate.getDate() < startDate.getDate())
    ) {
      years--;
      months += 12;
    }
    // Adjust month if current day is less than start day (to avoid partial month counting)
    if (currentDate.getDate() < startDate.getDate() && months > 0) {
      months--;
    } else if (currentDate.getDate() < startDate.getDate() && months === 0) {
      // This case means we just passed an anniversary but not a full month yet
      years--; // Decrement year again
      months = 11; // Set month to 11
    }

    let result = "";
    if (years > 0) {
      result += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (months > 0) {
      if (result.length > 0) result += ", ";
      result += `${months} month${months > 1 ? "s" : ""}`;
    }
    return result || "0 months"; // Fallback if less than a month
  };

  const totalExperience = calculateExperience();

  const experienceItems = tabContent.experience.items as ExperienceItem[];

  // Animation variants for expansion
  const detailsVariants = {
    open: {
      opacity: 1,
      height: "auto",
      marginTop: "1rem",
      transition: { duration: 0.3 },
    },
    collapsed: {
      opacity: 0,
      height: 0,
      marginTop: "0rem",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex flex-col justify-center py-8">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex flex-col md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            <TabsContent value="experience">
              <div className="flex flex-col sm:flex-row justify-between items-baseline mb-8">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 150,
                  }}
                  className="inline-flex items-center gap-1.5 bg-lightSky/10 border border-lightSky/20 rounded-full px-3 py-1 text-sm font-semibold text-lightSky/90 mt-2 sm:mt-0"
                >
                  <Clock className="w-4 h-4" />
                  <span>Total Experience: {totalExperience}</span>
                </motion.span>
              </div>
              <div className="relative pl-6 border-l-2 border-lightSky/30">
                {/* Experience Items List */}
                <ul className="grid grid-cols-1 gap-y-8">
                  {experienceItems.map((item, index) => (
                    <li
                      key={index}
                      className="relative group bg-primary/5 dark:bg-primary/10 p-4 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md"
                      onMouseEnter={() => setExpandedIndex(index)} // Expand on hover enter
                      onMouseLeave={() => setExpandedIndex(null)} // Collapse on hover leave
                    >
                      {/* Timestamp Dot */}
                      <div
                        className={`absolute w-4 h-4 rounded-full border-2 ${
                          expandedIndex === index
                            ? "bg-hoverColor border-hoverColor"
                            : "bg-bodyColour border-lightSky/50"
                        } left-[-31px] top-5`}
                      ></div>

                      {/* Main Item Content (adjusted layout) */}
                      <div>
                        {/* Row for Role and Period */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-1">
                          <h3 className="text-xl font-semibold">{item.role}</h3>
                          <div className="flex items-center gap-x-2 text-sm text-muted-foreground mt-1 sm:mt-0 whitespace-nowrap">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        {/* Company below */}
                        <div className="flex items-center gap-x-2 text-sm mb-2">
                          <Briefcase className="w-4 h-4 text-muted-foreground" />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      {/* Animated Details Section */}
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={detailsVariants}
                            className="overflow-hidden pl-3 md:pl-5"
                          >
                            <div className="space-y-4 mb-4">
                              {item.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                  <div className="flex items-start mb-2">
                                    <span className="text-lg font-bold mr-2 mt-1 text-lightSky/80">
                                      •
                                    </span>
                                    <h4 className="font-semibold text-lightSky/90">
                                      {section.title}
                                    </h4>
                                  </div>
                                  <ul className="list-none pl-8 space-y-1">
                                    {section.points.map((point, pointIndex) => (
                                      <li
                                        key={pointIndex}
                                        className="flex items-start text-white/80 text-sm"
                                      >
                                        <span className="text-xs mr-2 mt-[5px] text-lightSky/60">
                                          ◦
                                        </span>
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.highlights.map((highlight, i) => (
                                <Badge key={i} variant="secondary">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-8 text-lightSky"
              >
                {tabContent.education.title}
              </motion.h2>

              {/* Qualifications Section */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Qualifications
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="default"
                    className="text-lg px-4 py-1.5 font-semibold text-black bg-gradient-to-br from-lightSky to-hoverColor shadow-lg shadow-hoverColor/40 rounded-md transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
                  >
                    PhD
                  </Badge>
                  <Badge
                    variant="default"
                    className="text-lg px-4 py-1.5 font-semibold text-black bg-gradient-to-br from-lightSky to-hoverColor shadow-lg shadow-hoverColor/40 rounded-md transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
                  >
                    FIA
                  </Badge>
                  <Badge
                    variant="default"
                    className="text-lg px-4 py-1.5 font-semibold text-black bg-gradient-to-br from-lightSky to-hoverColor shadow-lg shadow-hoverColor/40 rounded-md transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
                  >
                    FIAI
                  </Badge>
                </div>
              </div>

              {/* Education Timeline Section - Responsive Zigzag/Horizontal */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-8 text-white">
                  Milestones
                </h3>
                {/* Container: Handles flex direction change */}
                <div className="relative flex flex-col md:flex-row md:justify-between md:items-start md:space-y-0 md:w-full md:px-4 w-full px-10">
                  {/* Background Horizontal Line (Desktop Only) */}
                  <div className="absolute top-[1.875rem] left-0 w-full h-0.5 bg-lightSky/30 -translate-y-1/2 hidden md:block"></div>
                  {/* Central Vertical Line (Mobile Only) */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-lightSky/30 -translate-x-1/2 md:hidden"></div>

                  {educationTimeline.map((item, index) => (
                    <div
                      key={item.year}
                      // Item container: Mobile alternating alignment, Desktop centered alignment
                      className={`relative flex flex-col z-10 md:flex-1 ${
                        index % 2 === 0
                          ? "items-start text-left"
                          : "items-end text-right"
                      } md:items-center md:text-center ${
                        index < educationTimeline.length - 1
                          ? "mb-10 md:mb-0"
                          : ""
                      }`}
                      style={{ minWidth: "80px" }}
                    >
                      {/* Year Above */}
                      <span className="text-xs font-semibold text-lightSky mb-1 h-4 leading-4">
                        {item.year}
                      </span>

                      {/* Dot Container - Mobile alternating justify, Desktop centered justify */}
                      <div
                        className={`relative w-full flex ${
                          index % 2 === 0 ? "justify-start" : "justify-end"
                        } md:justify-center mb-1`}
                      >
                        <div className="relative w-5 h-5">
                          {/* Mobile horizontal line segment */}
                          <div
                            className={`absolute top-1/2 w-[calc(50vw-2.5rem-0.625rem)] h-0.5 bg-lightSky/50 ${
                              index % 2 === 0
                                ? "left-full ml-0.5"
                                : "right-full mr-0.5"
                            } -translate-y-1/2 z-0 md:hidden`}
                          ></div>
                          {/* Dot */}
                          <span className="absolute top-0 left-0 block w-5 h-5 bg-hoverColor rounded-full border-2 border-lightSky z-10"></span>
                        </div>
                      </div>

                      {/* Achievement Below */}
                      <span className="text-sm text-white whitespace-nowrap mt-1">
                        {item.achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Education List Heading */}
              <h3 className="text-xl font-semibold mb-6 text-white">Details</h3>

              {/* Detailed Education List */}
              <div className="space-y-8">
                {tabContent.education.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {item?.degree}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item?.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0 whitespace-nowrap">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        {item?.period}
                      </div>
                    </div>
                    {item.sections && (
                      <div className="space-y-4">
                        {item.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <div className="flex items-start mb-2">
                              <span className="text-lg font-bold mr-2 mt-1 text-lightSky/80">
                                •
                              </span>
                              <h4 className="font-semibold text-lightSky/90">
                                {section.title}
                              </h4>
                            </div>
                            <ul className="list-none pl-8 space-y-1">
                              {section.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start text-white/80"
                                >
                                  <span className="text-sm mr-2 mt-1 text-lightSky/60">
                                    ◦
                                  </span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-8 text-lightSky"
              >
                {tabContent.skills.title}
              </motion.h2>
              <div className="space-y-8">
                {tabContent?.skills?.categories.map((category, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 bg-bodyColour/50"
                  >
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {category?.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {category?.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-4">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <span className="text-white/90 text-sm flex-grow pr-2">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2 flex-shrink-0 w-32">
                            <SkillLevelBar level={skill.level} />
                            <span className="text-xs text-lightSky/80 w-6 text-right">
                              {skill.level}
                              /5
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-8 text-lightSky"
              >
                {tabContent.about.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border rounded-lg border-lightSky/20 p-6 bg-bodyColour/50"
              >
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  {tabContent.about.bio}
                </p>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-lightSky" />
                      <h3 className="text-lg text-lightSky font-medium">
                        Interests
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {tabContent.about.interests.map((interest, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Languages className="w-5 h-5 text-lightSky" />
                      <h3 className="text-lg text-lightSky font-medium">
                        Languages
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {tabContent.about.languages.map((language, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
