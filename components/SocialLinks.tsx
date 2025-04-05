import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialData = [
  {
    title: "GitHub",
    icon: <Github />,
    href: "https://github.com/RohanYashraj",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/rohanyashraj/",
  },
  { title: "GMail", icon: <Mail />, href: "mailto:rohanyashraj@gmail.com" },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <div className="flex items-center gap-3">
          {socialData?.map((item) => (
            <Tooltip key={item?.title}>
              <TooltipTrigger asChild>
                <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect">
                  <Link
                    href={item?.href}
                    target="_blank"
                    aria-label={`Visit my ${item?.title} profile`}
                  >
                    <span aria-hidden="true">{item?.icon}</span>
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-hoverColor text-black font-semibold">
                {item?.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialLinks;
