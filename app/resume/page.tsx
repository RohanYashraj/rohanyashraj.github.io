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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Define interface for Experience items with sections AND highlights
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  sections: { title: string; points: string[] }[];
  highlights: string[];
}

// Define interface for Education items with sections
interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  sections?: { title: string; points: string[] }[];
}

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
    items: [
      {
        role: "Actuarial Data Scientist",
        company: "Accenture Solutions Pvt. Ltd., India",
        period: "Jul 2023 - Present",
        sections: [
          {
            title: "Rater Delivery & Transition",
            points: [
              "Spearheaded the transition of Excel-based raters to Python solutions on the Hyper Exponential cloud platform for North America, leading a team of actuarial and data science professionals.",
              "Implemented Agile methodologies to optimize project management and team workflow.",
            ],
          },
        ],
        highlights: [
          "Team Lead",
          "Python Rater Transition",
          "Hyper Exponential",
          "Agile",
        ],
      },
      {
        role: "Actuarial Data Science Consultant",
        company: "RSA Actuarial Services, India",
        period: "Dec 2022 - June 2023",
        sections: [
          {
            title: "Motor Insurance Fraud Detection",
            points: [
              "Developed and implemented a Machine Learning model to prioritize fraudulent cases, boosting the fraud application success rate by 20%.",
              "Executed a comprehensive Full-Time Equivalent (FTE) analysis to identify and recover previously neglected resource benefits.",
              "Authored effective SIRA-based business rules, slashing potentially fraudulent applications by 70%.",
            ],
          },
        ],
        highlights: [
          "Machine Learning",
          "Fraud Detection",
          "FTE Analysis",
          "Data Analytics",
        ],
      },
      {
        role: "Actuarial Analyst",
        company: "SwissRe",
        period: "Jun 2021 - Dec 2022",
        sections: [
          {
            title: "Pricing & Quoting (South-East Asia)",
            points: [
              "Supported pricing and experience studies for 30+ quotes across diverse L&H products (Life, CI, Disability, Hospitalization).",
              "Performed impact testing on terms of trade assumptions for whole/life assurance products.",
              "Monitored critical illness capacity for over 70+ quotes.",
            ],
          },
          {
            title: "Experience Studies",
            points: [
              "Executed experience studies using R to derive A/E ratios, enabling cost revisions aligned with actual claims data.",
            ],
          },
          {
            title: "R Modeling & Dashboarding",
            points: [
              "Developed R and Excel models for experience studies, premium trend analysis, and L&H data visualization.",
              "Leveraged R models to generate profit commission insights across various quotes.",
            ],
          },
          {
            title: "Product Design & Launch",
            points: [
              "Collaborated with claims and underwriting teams on product design, contributing to the successful launch of three new specialized critical illness products.",
            ],
          },
          {
            title: "Communication & Presentation",
            points: [
              "Presented pricing strategies and results to team leads and clients via executive summaries.",
              "Delivered a technical presentation on 'Intro to Machine Learning using Decision Tree'.",
            ],
          },
        ],
        highlights: [
          "L&H Pricing",
          "R Modeling",
          "Experience Studies",
          "Product Launch",
        ],
      },
      {
        role: "Actuarial Consultant",
        company: "Tech Actuarial",
        period: "Jun 2019 - Jun 2021",
        sections: [
          {
            title: "Ayushman Bharat Claims Analytics",
            points: [
              "Performed claims analytics using Python & R for India's largest group health scheme (Ayushman Bharat), analyzing 200,000+ records for broker/insurer insights.",
              "Engineered an RShiny dashboard for monthly claims tracking, improving claims management efficiency by 20%.",
              "Analyzed claim patterns and fraud indicators in 200,000+ records during COVID-19, achieving a 5% reduction in fraudulent claims.",
            ],
          },
          {
            title: "Crop Insurance Pricing & Forecasting",
            points: [
              "Automated daily yield data collection via Python web scraping (3M+ data points), reducing processing time by nearly 90%.",
              "Constructed ARIMA models to project crop yields, enhancing forecast accuracy for the subsequent three months.",
              "Built a futures tracking dashboard covering 12 scenarios/six crops, decreasing manual tracking time by 70%.",
            ],
          },
          {
            title: "Cancer Product Pricing & Analysis",
            points: [
              "Priced four distinct cancer product packages across 28 Indian states.",
              "Developed a dashboard for dynamic comparison and visualization of L&H risk metrics across 100+ scenarios, improving pricing analysis.",
            ],
          },
          {
            title: "Defined Benefit Pension Scheme Valuation",
            points: [
              "Streamlined Defined Benefit pension scheme valuations using Excel, achieving a 10x reduction in runtime and boosting process efficiency.",
            ],
          },
          {
            title: "Consulting Presentations",
            points: [
              "Authored over 30 consulting pitch presentations for diverse clientele over a two-year period.",
            ],
          },
        ],
        highlights: [
          "Python/R",
          "Claims Analytics",
          "Predictive Modeling",
          "Dashboarding",
        ],
      },
      {
        role: "Student Central Summer Internship Program",
        company: "Casualty Actuarial Society, USA",
        period: "Jun 2020 - Aug 2020",
        sections: [
          {
            title: "P&C Program Focus & Projects",
            points: [
              "Completed an intensive six-week P&C program focused on data visualization, pricing, reserving, and predictive modeling.",
              "Executed four projects using Cognalysis Multirate software, enhancing pricing and reserving strategies.",
            ],
          },
          {
            title: "Recognition",
            points: [
              "Recognized as a 'CAS Spotlight Candidate' for active participation and exceptional actuarial knowledge.",
            ],
          },
        ],
        highlights: [
          "P&C Pricing",
          "Reserving",
          "Predictive Modeling",
          "CAS Spotlight",
        ],
      },
      {
        role: "Research Associate",
        company: "Tech Actuarial",
        period: "Jun 2017 - May 2019",
        sections: [
          {
            title: "Group Health Insurance Fraud Research",
            points: [
              "Researched and developed fraud detection frameworks for Group Health Insurance schemes.",
              "Integrated actuarial and data science methodologies to enhance detection capabilities.",
            ],
          },
        ],
        highlights: [
          "Fraud Detection",
          "Research",
          "Data Science",
          "Health Insurance",
        ],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Qualified GI Actuary (FIA)",
        institution: "Institute and Faculty of Actuaries (IFoA)",
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
          "I combine actuarial expertise with data science to analyze complex datasets, build predictive models, and develop innovative pricing strategies. My focus includes helping organizations transition from legacy Excel-based systems to modern platforms like Hyperexponential, enhancing efficiency and scalability.",
        skills: [
          "Qualified GI Actuary",
          "Predictive Modelling",
          "Technology transformation",
          "Hyper Exponential",
        ],
      },
      {
        name: "Technical Skills",
        description:
          "Proficient in Python, R, SQL, and advanced Excel for data analysis, predictive modeling, and workflow automation. I efficiently manage code and collaborate on projects using Git, GitHub, and GitLab. Skilled in creating professional dashboards, reports, and presentations with Office tools and Google Workspace.",
        skills: ["Python", "R", "VBA", "Git", "SQL"],
      },
      {
        name: "Public Speaking & Team Collaboration",
        description:
          "I have delivered presentation on multiple international conferences simplifying complex topics, and facilitating discussions with diverse audiences. I thrive in cross-functional team collaboration, effectively managing stakeholders, driving consensus, and fostering a supportive and productive environment.",
        skills: ["Public Speaker", "Conferences", "Team Work"],
      },
      {
        name: "Building Web Apps",
        description:
          "I enjoy building web applications that make complex processes more accessible and user-friendly. With a good foundation in full-stack development.",
        skills: ["RShiny", "Next.js", "Flask", "PowerBI"],
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

  // Toggle function for expanding/collapsing items
  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
                  transition={{ delay: 0.1, type: "spring", stiffness: 150 }}
                  className="inline-flex items-center gap-1.5 bg-lightSky/10 border border-lightSky/20 rounded-full px-3 py-1 text-sm font-semibold text-lightSky/90 mt-2 sm:mt-0"
                >
                  <Clock className="w-4 h-4" />
                  <span>Total Experience: {totalExperience}</span>
                </motion.span>
              </div>
              <div className="relative pl-6 border-l-2 border-lightSky/30">
                {experienceItems.map((item, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <div
                      className={`absolute w-4 h-4 rounded-full mt-1 -left-[9px] border-2 ${
                        expandedIndex === index
                          ? "bg-hoverColor border-hoverColor"
                          : "bg-bodyColour border-lightSky/50"
                      }`}
                    ></div>
                    <motion.div
                      initial={false}
                      onClick={() => handleToggle(index)}
                      className="cursor-pointer hover:bg-lightSky/5 p-3 rounded-md transition-colors duration-200"
                    >
                      <div className="flex flex-col md:flex-row items-start justify-between mb-1">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item?.role}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item?.company}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0 whitespace-nowrap">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          {item?.period}
                        </div>
                      </div>
                    </motion.div>
                    <AnimatePresence initial={false}>
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
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.education.title}
              </motion.h2>
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
                        <h3 className="text-lg font-semibold">
                          {item?.degree}
                        </h3>
                        <p className="text-muted-foreground">
                          {item?.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
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
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.skills.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.skills?.categories.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.name}</h3>
                        <p className="text-muted-foreground">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
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
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.about.title}
              </motion.h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="text-white/90 mb-6 text-lg">
                    {tabContent.about.bio}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
