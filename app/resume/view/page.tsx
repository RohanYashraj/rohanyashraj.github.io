import PageLayout from "@/components/PageLayout";
import { Download } from "lucide-react";

export default function ViewPage() {
  return (
    <PageLayout>
      <iframe
        src={`/resume.pdf#toolbar=0&view=FitH&scrollbar=0`}
        className="fixed left-0 top-[73px] md:top-[78px] h-[100vh] w-[100vw] bg-black"
        title="Rohan's Resume"
      ></iframe>
      {/* <Splash {content} {icon} delay={600} /> */}

      <a
        className="fixed right-10 top-[100px]"
        href={"/resume.pdf"}
        download="Dr. Rohan Yashraj Gupta - FIA.pdf"
      >
        <button className="group inline-flex items-center gap-1 rounded-lg bg-bodyColour px-4 py-2 pl-3 text-base font-semibold shadow-lg transition-all duration-800 ease-in-out hover:scale-105 hover:bg-bodyColour text-hoverColor hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 active:scale-100">
          <span className="w-0 overflow-hidden transition-all duration-800 group-hover:w-20">
            Download
          </span>
          <Download className="size-6 text-white group-hover:text-hoverColor" />
          {/* <Icon icon="line-md:downloading-loop" className="size-6" /> */}
        </button>
      </a>
      {/* <HomeButton /> */}
    </PageLayout>
  );
}
