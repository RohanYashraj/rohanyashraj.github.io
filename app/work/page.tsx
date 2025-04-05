"use client";

import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import projectOne from "@/images/projectOne.jpeg";
import projectTwo from "@/images/projectTwo.jpg";
import projectThree from "@/images/projectThree.jpg";
import projectFour from "@/images/projectFour.jpg";
import projectFive from "@/images/projectFive.jpg";
import projectSix from "@/images/projectSix.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import icons for tabs
import { FolderKanban, Presentation, FileText } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "SOA Research",
    category: "Research",
    description:
      "This project endeavors to deliver a comprehensive research paper outlining a framework for interpretable machine learning algorithms tailored for fraud detection in health insurance. Machine learning algorithms excel at constructing intricate models by discerning patterns in data, yet the risk of overfitting to training data necessitates rigorous testing by modelers and users. While certain validation practices for linear models apply to machine learning, the challenge of interpretability remains pronounced.",
    stack: ["Interpretable ML", "Fraud Detection", "Health Insurance"],
    image: projectOne,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "02",
    title: "CAS Research",
    category: "Research",
    description:
      "Health insurance fraud is a significant problem affecting the insurance industry, resulting in billions of dollars in losses annually. We propose a novel approach to fraud detection in health insurance by integrating machine learning (ML) models with business rule triggers to identify unusual patterns in claims data and flag them for further investigation. We have demonstrated that incorporating machine learning models with business rule triggers greatly enhanced the performance across all models.",
    stack: ["Machine Learning", "Business Rules", "Fraud Detection"],
    image: projectTwo,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "03",
    title: "Health Claims Analytics",
    category: "Consulting",
    description:
      "The project involved collaborating with a Property and Casualty Insurer in India. The focus was on group health insurance scheme, covering approximately 800 million people. Our primary goal was to design a pricing methodology, real-time claims analytics dashboard and fraud detection for a state-level scheme and provide insights to optimize reinsurance capacity. The effort spanned two person-years and held significant value.",
    stack: ["Pricing", "Dashboard", "Fraud Detection", "Reinsurance"],
    image: projectThree,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "04",
    title: "Crop Revenue Protection",
    category: "Consulting",
    description:
      "The project involved collaborating with a department within the Government of India. Our objective was to design and a hedging mechanism that effectively protects revenue for farmers arising from price fluctuations. The effort spanned two person-years and held significant value.",
    stack: ["Hedging", "Agriculture", "Risk Management"],
    image: projectFour,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "05",
    title: "Cancer Pool Pricing",
    category: "Consulting",
    description:
      "The project centered around developing a medical indemnity insurance solution tailored for the Indian middle class. We meticulously analyzed various factors, including different cancer types, their incidence rates, and treatment costs, to determine an optimal pricing strategy. The resulting dashboard presents premium details, frequency, and severity across diverse options, considering variations in states and age groups. This comprehensive approach ensures effective risk management and affordability for policyholders.",
    stack: ["Insurance Pricing", "Health Insurance", "Data Analysis"],
    image: projectFive,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "06",
    title: "Insurance Fraud Classifier",
    category: "PhD",
    description:
      "The project focused on constructing a robust fraud detection model for insurance claims. Specifically, we developed a machine learning-based solution that enables users to assess the probability of fraud in motor insurance claims. This model enhances the accuracy and efficiency of fraud detection processes within the insurance domain.",
    stack: ["Machine Learning", "Fraud Detection", "Motor Insurance"],
    image: projectSix,
    liveUrl: "",
    githubUrl: "",
  },
];

// Data for Conference Presentations
const conferencePresentations = [
  {
    id: "CP01",
    title: "Interpretable ML for Health Insurance Fraud",
    category: "Conference Presentation",
    description:
      "Presented findings on developing interpretable machine learning frameworks for detecting fraudulent health insurance claims at the Annual Actuarial Conclave.",
    stack: ["SOA Conclave 2023", "Mumbai"],
    image: projectOne, // Replace with actual image if available
    liveUrl: "", // Link to presentation slides or recording
    githubUrl: "",
  },
  {
    id: "CP02",
    title: "ML and Business Rules for Fraud Detection",
    category: "Conference Presentation",
    description:
      "Discussed the synergy of machine learning models and business rule triggers in enhancing fraud detection accuracy in health insurance at the CAS Spring Meeting.",
    stack: ["CAS Meeting 2022", "Virtual"],
    image: projectTwo, // Replace with actual image if available
    liveUrl: "", // Link to presentation slides or recording
    githubUrl: "",
  },
];

// Data for Research Publications
const researchPublications = [
  {
    id: "RP01",
    title:
      "A Framework for Interpretable Machine Learning in Health Insurance Fraud Detection",
    category: "Research Publication",
    description:
      "Published research detailing a framework for building transparent and understandable ML models for health insurance fraud detection.",
    stack: ["Journal of Actuarial Science", "2023"],
    image: projectOne, // Replace with actual image if available
    liveUrl: "", // Link to publication DOI or page
    githubUrl: "",
  },
  {
    id: "RP02",
    title:
      "Enhancing Health Insurance Fraud Detection using Machine Learning and Business Rule Integration",
    category: "Research Publication",
    description:
      "Paper demonstrating the improved performance of fraud detection systems when combining machine learning predictions with predefined business rules.",
    stack: ["Insurance: Mathematics and Economics", "2022"],
    image: projectTwo, // Replace with actual image if available
    liveUrl: "", // Link to publication DOI or page
    githubUrl: "",
  },
];

// Reusable component to render a single work item card
const WorkItemCard = ({ item }: { item: any }) => (
  <Card className="bg-bodyColour border-lightSky/20 mb-6">
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
        {/* description */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
          <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
            <h3 className="text-xl md:text-2xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
              {item?.title}
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
              {item?.description}
            </p>
            <ul className="flex flex-wrap gap-2 md:gap-4 items-center">
              {item?.stack?.map((tag: string, index: number) => (
                <li
                  key={index}
                  className="text-xs md:text-sm text-lightSky bg-lightSky/10 px-2 py-1 rounded"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Separator className="bg-gray-700" />
            <div className="flex items-center space-x-4">
              {item.liveUrl && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                      >
                        <Link
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowUpRight />
                          <span className="sr-only">
                            View Live Project/Link
                          </span>
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black font-semibold">
                      <p>
                        View{" "}
                        {item.category === "Research Publication"
                          ? "Publication"
                          : item.category === "Conference Presentation"
                          ? "Details"
                          : "Live Project"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {item.githubUrl && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                      >
                        <Link
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github />
                          <span className="sr-only">
                            View GitHub Repository
                          </span>
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black font-semibold">
                      <p>View GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative h-72 sm:h-96 bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src={item?.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const WorkPage = () => {
  return (
    <div className="py-8">
      <PageLayout>
        {/* <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
          My Work
        </h1> */}
        <Tabs
          defaultValue="projects"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex flex-col md:flex-col h-full bg-transparent md:w-64 gap-4 border-none p-0">
            <TabsTrigger
              value="projects"
              className="w-full py-2.5 bg-white/10 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5 md:gap-3">
                <FolderKanban className="w-4 h-4 md:h-5 md:w-5" />
                Projects
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="presentations"
              className="w-full py-2.5 bg-white/10 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5 md:gap-3">
                <Presentation className="w-4 h-4 md:h-5 md:w-5" />
                Presentations
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="publications"
              className="w-full py-2.5 bg-white/10 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5 md:gap-3">
                <FileText className="w-4 h-4 md:h-5 md:w-5" />
                Publications
              </div>
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 min-h-[400px]">
            <TabsContent value="projects">
              <div className="grid grid-cols-1 gap-8">
                {projects.map((project) => (
                  <WorkItemCard key={project.id} item={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="presentations">
              <div className="grid grid-cols-1 gap-8">
                {conferencePresentations.map((presentation) => (
                  <WorkItemCard key={presentation.id} item={presentation} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid grid-cols-1 gap-8">
                {researchPublications.map((publication) => (
                  <WorkItemCard key={publication.id} item={publication} />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
