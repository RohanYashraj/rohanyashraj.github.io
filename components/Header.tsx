"use client";

import { navbarData } from "@/data/navbarData";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Download } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  console.log(pathname);
  return (
    <header className="border-b border-b-hoverColor/70 bg-bodyColour text-white sticky top-0 z-50">
      <Container className="py-4 md:py-5 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Logo title="Rohan" subtitle="." />
        </motion.div>
        <nav
          className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium"
          aria-label="Main navigation"
        >
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`relative group overflow-x-hidden px-2 py-1 rounded-md transition-colors duration-300 ease-in-out hoverEffect ${
                pathname === item?.href
                  ? "text-hoverColor bg-lightSky/5"
                  : "hover:text-hoverColor hover:bg-lightSky/5"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out ${
                  pathname === item?.href
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={"/resume/view"}
              rel="noopener noreferrer"
              className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:bg-hoverColor hover:border-hoverColor hover:text-black transition-colors duration-300 ease-in-out inline-flex items-center gap-2"
            >
              Resume
              <Download className="w-4 h-4" />
            </Link>
          </motion.div>
        </nav>
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect p-1 rounded-md hover:bg-lightSky/10 transition-colors duration-300"
        >
          <Menu />
        </button>
      </Container>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathname={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
