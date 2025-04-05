"use client";

import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Import shared data
import {
  projects,
  conferencePresentations,
  researchPublications,
  WorkItemProps,
} from "@/data/workData"; // Adjust path if needed

// Sort presentations by date descending - MOVED to WorkPage component where it's used
// const sortedConferencePresentations = [...conferencePresentations].sort(...);

// Reusable component to render a single work item card (Used for Projects)
const WorkItemCard = ({ item }: { item: WorkItemProps }) => (
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
          {item.image && ( // Conditionally render image block
            <div className="relative h-72 sm:h-96 bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Updated component for publication display within a Card
const PublicationItem = ({ item }: { item: WorkItemProps }) => (
  <Card className="bg-bodyColour border-lightSky/20 mb-6">
    {" "}
    {/* Added Card */}
    <CardContent className="p-6 space-y-3">
      {" "}
      {/* Added CardContent & padding */}
      <h3 className="text-xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
        {item.title}
      </h3>
      <p className="text-white/60 text-sm leading-normal">{item.description}</p>
      <ul className="flex flex-wrap gap-2 items-center pt-1">
        {item.stack?.map((tag: string, index: number) => (
          <li
            key={index}
            className="text-xs text-lightSky bg-lightSky/10 px-2 py-1 rounded"
          >
            {tag}
          </li>
        ))}
      </ul>
      {item.liveUrl && (
        <div className="pt-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect p-1.5"
                >
                  <Link
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-xs">View Publication</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black font-semibold">
                <p>View Publication</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </CardContent>
  </Card>
);

interface ConferenceTimelineProps {
  presentations: WorkItemProps[];
}

const ConferenceTimeline = ({ presentations }: ConferenceTimelineProps) => {
  const parseStack = (stack: string[]) => {
    const date = stack[stack.length - 1];
    const organizer = stack[0];
    const location = stack.length === 3 ? stack[1] : null;
    return { date, organizer, location };
  };

  return (
    <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-lightSky/30">
      {presentations.map((item) => {
        const { date, organizer, location } = parseStack(item.stack);
        return (
          <div
            key={item.id}
            className="relative grid grid-cols-[auto_1fr] items-start gap-x-4 pb-8 last:pb-0"
          >
            {/* Timeline Marker */}
            <div className="absolute left-0 top-0.5 -translate-x-1/2 transform">
              <div className="h-3 w-3 rounded-full bg-lightSky"></div>
            </div>

            {/* Content */}
            <div className="col-start-2 space-y-1">
              {/* Date */}
              <time className="text-sm font-semibold leading-none text-lightSky/80">
                {date}
              </time>
              {/* Title */}
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              {/* Organizer & Location */}
              <p className="text-sm text-white/60">
                {organizer} {location && `• ${location}`}
              </p>
              {/* Optional Description (Could be added back if needed) */}
              {/* <p className="text-sm text-white/50 mt-1">{item.description}</p> */}

              {/* Links (Optional) */}
              {(item.liveUrl || item.githubUrl) && (
                <div className="flex items-center space-x-3 pt-2">
                  {item.liveUrl && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-lightSky/5 text-white/70 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect p-1.5"
                          >
                            <Link
                              href={item.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ArrowUpRight className="h-4 w-4" />
                              <span className="sr-only">View Details</span>
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white text-black font-semibold">
                          <p>View Details</p>
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
                            size="sm"
                            className="bg-lightSky/5 text-white/70 border border-lightSky/20 hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect p-1.5"
                          >
                            <Link
                              href={item.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
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
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const WorkPage = () => {
  // Calculate counts
  const projectCount = projects.length;
  const presentationCount = conferencePresentations.length; // Use imported data
  const publicationCount = researchPublications.length;

  // Sort presentations by date descending
  const sortedConferencePresentations = [...conferencePresentations].sort(
    (a, b) => {
      const dateA = Date.parse(a.stack[a.stack.length - 1]);
      const dateB = Date.parse(b.stack[b.stack.length - 1]);
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;
      return dateB - dateA;
    }
  );

  return (
    <div className="py-8">
      <PageLayout>
        <Tabs
          defaultValue="projects"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          {/* Left Sidebar Wrapper for TabsList and Summary Cards */}
          <div className="flex flex-col w-full md:w-64 gap-8">
            <TabsList className="flex flex-col h-auto bg-transparent gap-4 border-none p-0">
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

            {/* Summary Cards Stack */}
            <div className="flex flex-col gap-6">
              {/* Projects Card */}
              <Card className="bg-bodyColour border-lightSky/20">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <h3 className="text-md font-semibold text-lightSky mb-1">
                    Projects
                  </h3>
                  <p className="text-3xl font-bold text-white">
                    {projectCount}
                  </p>
                </CardContent>
              </Card>

              {/* Presentations Card */}
              <Card className="bg-bodyColour border-lightSky/20">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <h3 className="text-md font-semibold text-lightSky mb-1">
                    Presentations
                  </h3>
                  <p className="text-3xl font-bold text-white">
                    {presentationCount}
                  </p>
                </CardContent>
              </Card>

              {/* Publications Card */}
              <Card className="bg-bodyColour border-lightSky/20">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <h3 className="text-md font-semibold text-lightSky mb-1">
                    Publications
                  </h3>
                  <p className="text-3xl font-bold text-white">
                    {publicationCount}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content Pane */}
          <div className="flex-1 min-h-[400px]">
            <TabsContent value="projects">
              <div className="grid grid-cols-1 gap-8">
                {projects.map((project) => (
                  <WorkItemCard key={project.id} item={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="presentations">
              <ConferenceTimeline
                presentations={sortedConferencePresentations} // Pass sorted data here
              />
            </TabsContent>

            <TabsContent value="publications">
              {/* Use PublicationItem within a simple div container */}
              <div>
                {researchPublications.map((publication) => (
                  <PublicationItem key={publication.id} item={publication} />
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
