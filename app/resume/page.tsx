"use client";

import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";

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
        role: "Actuarial Team Lead",
        company: "Accenture",
        period: "Jul 2023 - Present",
        description:
          "At Accenture, I lead a team of actuarial professionals and data science experts to transition Excel-based raters into Python-based solutions on the Hyper Exponential cloud platform for the North America region. This initiative aims to streamline pricing processes and enhance efficiency in client deliverables.",
        highlights: ["React", "Python"],
      },
      {
        role: "Actuarial Consultant",
        company: "RSA",
        period: "Dec 2022 - Jul 2023",
        description:
          "At RSA, I developed and implemented a machine learning model for motor insurance fraud detection, achieving a 20% improvement in the fraud detection success rate. I conducted resource estimation through FTE analysis to recover overlooked benefits and created effective business rules based on SIRA reports, reducing potentially fraudulent applications by 70%.",
        highlights: ["React", "Python"],
      },
      {
        role: "Actuarial Analyst",
        company: "SwissRe",
        period: "Jun 2021 - Dec 2022",
        description:
          "While at Swiss Re, I supported pricing for over 30 quotes across life, health, and disability products for the South-East Asia market. I conducted experience studies using R, resulting in cost revisions aligned with actual claims experience. Additionally, I developed models for premium trend analysis and data visualization, collaborated with underwriting teams to launch three new critical illness products, and presented findings to clients and senior leadership, including a presentation on decision-tree-based machine learning.",
        highlights: ["React", "Python"],
      },
      {
        role: "Actuarial Consultant",
        company: "Tech Actuarial",
        period: "Jun 2019 - Jun 2021",
        description:
          "At Tech Actuarial, I worked on diverse projects, including claims analytics for Ayushman Bharat, where I analyzed 200,000 health insurance records, improving claims management efficiency by 20%. I built RShiny dashboards and Python-based tools for tracking claims and detecting fraud. For crop insurance, I developed ARIMA models to project crop yields and dashboards for futures tracking, reducing manual processing time by 70%. I also priced cancer products across 28 states, created valuation models for defined benefit pension schemes, and prepared consulting pitch presentations for various clients.",
        highlights: ["React", "Python"],
      },
      {
        role: "CAS Summer Internship Program",
        company: "Casualty Actuarial Society",
        period: "Jun 2020 - Aug 2020",
        description:
          "During my internship with the CAS, I worked on property and casualty pricing, reserving, and predictive modeling projects using Cognalysis Multirate software. I was recognized as a CAS Spotlight Candidate for demonstrating exceptional actuarial skills and contributing valuable insights.",
        highlights: ["React", "Python"],
      },
      {
        role: "Research Associate",
        company: "Tech Actuarial",
        period: "Jun 2017- Jun 2019",
        description:
          "As a Research Associate, I focused on fraud detection frameworks for group health insurance schemes, integrating actuarial and data science methodologies to improve fraud detection capabilities",
        highlights: ["React", "Python"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Actuarial Team Lead",
        institution: "Accenture",
        period: "Jul 2023 - Present",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum cumque, possimus cupiditate architecto molestias iusto doloribus laudantium quae eaque odit maiores hic totam libero.",
        achivements: ["React", "Python"],
      },
      {
        degree: "Actuarial Consultant",
        institution: "RSA",
        period: "Dec 2022 - Jul 2023",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum cumque, possimus cupiditate architecto molestias iusto doloribus laudantium quae eaque odit maiores hic totam libero.",
        achivements: ["React", "Python"],
      },
      {
        degree: "Actuarial Analyst",
        institution: "SwissRe",
        period: "Jun 2021 - Dec 2022",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum cumque, possimus cupiditate architecto molestias iusto doloribus laudantium quae eaque odit maiores hic totam libero.",
        achivements: ["React", "Python"],
      },
      {
        degree: "Actuarial Consultant",
        institution: "Tech Actuarial",
        period: "Jun 2019 - Jun 2021",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum cumque, possimus cupiditate architecto molestias iusto doloribus laudantium quae eaque odit maiores hic totam libero.",
        achivements: ["React", "Python"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Actuarial Team Lead",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum cumque, possimus cupiditate architecto molestias iusto doloribus laudantium quae eaque odit maiores hic totam libero.",
        skills: ["React", "Python"],
      },
      {
        name: "Actuarial Team Lead",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum cumque, possimus cupiditate architecto molestias iusto doloribus laudantium quae eaque odit maiores hic totam libero.",
        skills: ["React", "Python"],
      },
      {
        name: "Actuarial Team Lead",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum cumque, possimus cupiditate architecto molestias iusto doloribus laudantium quae eaque odit maiores hic totam libero.",
        skills: ["React", "Python"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum quia eligendi iusto beatae corrupti quisquam quos sed dolorem minima, ipsam culpa veniam eos voluptatem?",
    interests: ["coding", "listing to music"],
    languages: ["English", "Hindi"],
  },
};

const ResumePage = () => {
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
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.experience.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.experience?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.role}</h3>
                        <p className="text-muted-foreground">{item?.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="text-white mb-4">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
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
              <div className="space-y-6">
                {tabContent?.education?.items.map((item, index) => (
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
                    <p className="text-white mb-4">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achivements.map((achievement, i) => (
                        <Badge key={i} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
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
                  // transition={{ delay: index * 0.1 }}
                  // key={index}
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
