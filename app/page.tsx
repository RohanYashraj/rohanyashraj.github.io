"use client"; // Mark as a Client Component

import Container from "@/components/Container";
// import HomeDescription from "@/components/HomeDescription"; // Replaced with TypeAnimation
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react"; // Added Send icon
import Link from "next/link";
import { motion } from "framer-motion"; // Added motion
import { TypeAnimation } from "react-type-animation"; // Added TypeAnimation
import PageLayout from "@/components/PageLayout";
export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08, // Slightly faster stagger
        duration: 0.4, // Faster duration
        ease: "easeOut",
      },
    }),
  };

  return (
    <PageLayout>
      <div className="bg-bodyColour text-white/80 min-h-[calc(100vh-var(--header-height))] flex items-center">
        {" "}
        {/* Ensured vertical centering */}
        <Container className="py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {" "}
          {/* Added items-center */}
          {/* Left Column */}
          <div className="flex flex-col order-2 md:order-1 items-center md:items-start gap-5 md:gap-6 text-center md:text-start">
            {" "}
            {/* Adjusted gap */}
            <div className="overflow-hidden">
              {" "}
              {/* Container for text animation */}
              <motion.h3
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0}
                className="font-semibold tracking-wider mb-1 text-lightSky"
              >
                Qualified GI Actuary
              </motion.h3>
              <motion.h2
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-3xl md:text-5xl mb-1 text-white"
              >
                Hello, I&apos;m
              </motion.h2>
              <motion.h1
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-hoverColor text-5xl md:text-7xl tracking-normal font-bold mb-3"
              >
                Rohan Gupta
              </motion.h1>
            </div>
            {/* Dynamic Typing Effect */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg md:text-xl text-muted-foreground font-medium h-14 md:h-7 mb-2" // Adjusted height and margin
            >
              <TypeAnimation
                sequence={[
                  "Actuarial Data Scientist",
                  1500,
                  "Python Developer",
                  1500,
                  "Predictive Modeler",
                  1500,
                  "Web App Creator",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-lightSky"
              />
            </motion.div>
            {/* CTAs and Social Links */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row gap-3 items-center"
            >
              {/* Updated Resume Button with hover effect */}
              <Link href={"/resume"} rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11 px-6 flex items-center gap-2 w-full sm:w-auto">
                    View Resume
                    <Download className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
              {/* Added Contact Button with hover effect */}
              <Link href={"/contact"} rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    className="rounded-full border-muted-foreground/30 text-muted-foreground hover:bg-lightSky/10 hover:text-lightSky hover:border-lightSky/50 hoverEffect h-11 px-6 flex items-center gap-2 w-full sm:w-auto"
                  >
                    Contact Me
                    <Send className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
              <SocialLinks />
            </motion.div>
            {/* Statistics */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={5}
              className="mt-4 w-full"
            >
              <Statistics />
            </motion.div>
          </div>
          {/* Right Column (Photo) with hover effect */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
            className="order-1 md:order-2 flex justify-center"
            whileHover={{ scale: 1.03 }} // Added hover scale effect
            transition={{ type: "spring", stiffness: 200 }} // Spring effect for photo hover
          >
            <Photo />
          </motion.div>
        </Container>
      </div>
    </PageLayout>
  );
}
