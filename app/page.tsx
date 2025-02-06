import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-bodyColour text-white/80">
      <Container className="py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col order-2 md:order-1  items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Qualified GI Actuary
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">
              Hello I&apos;m
            </h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Rohan Gupta
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Link
              href={"/resume/view"}
              // target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11">
                Download CV
                <Download />
              </Button>
            </Link>
            <SocialLinks />
          </div>
          <Statistics />
        </div>
        <Photo />
      </Container>
    </div>
  );
}
