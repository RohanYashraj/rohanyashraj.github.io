"use client";

import { cn } from "@/lib/utils";
import Container from "./Container";
import { motion } from "motion/react";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: Props) => {
  return (
    <Container className={cn("w-full", className)}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        role="main"
      >
        {children}
      </motion.main>
    </Container>
  );
};

export default PageLayout;
