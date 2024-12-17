"use client";

import PageLayout from "@/components/PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projectOne from "@/images/projectOne.jpeg";
import projectTwo from "@/images/projectTwo.jpg";
import projectThree from "@/images/projectThree.jpg";
import projectFour from "@/images/projectFour.jpg";
import projectFive from "@/images/projectFive.jpg";
import projectSix from "@/images/projectSix.jpg";
import { useState } from "react";
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

const projects = [
  {
    id: "01",
    title: "SOA Research",
    category: "Research",
    description:
      "This project endeavors to deliver a comprehensive research paper outlining a framework for interpretable machine learning algorithms tailored for fraud detection in health insurance. Machine learning algorithms excel at constructing intricate models by discerning patterns in data, yet the risk of overfitting to training data necessitates rigorous testing by modelers and users. While certain validation practices for linear models apply to machine learning, the challenge of interpretability remains pronounced.",
    stack: ["Html 5", "Css 3", "Javascript"],
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
    stack: ["Html 5", "Css 3", "Javascript"],
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
    stack: ["next.js", "react.js"],
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
    stack: ["next.js", "react.js"],
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
    stack: ["next.js", "react.js"],
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
    stack: ["next.js", "react.js"],
    image: projectSix,
    liveUrl: "",
    githubUrl: "",
  },
];

const WorkPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="py-6 md:py-8">
      <PageLayout>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {projects?.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColour border-lightSky/20">
                  <CardContent className="p-6 ">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <h2 className="text-3xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project?.id}
                          </h2>
                          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                            {project?.category} project
                          </h3>
                          <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-lightSky/80"
                              >
                                {item}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-gray-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link href={project?.liveUrl}>
                                      <ArrowUpRight />
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold">
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link href={project?.githubUrl}>
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
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project?.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8">
            <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
