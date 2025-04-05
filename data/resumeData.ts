// data/resumeData.ts

// Define interface for Experience items
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  sections: { title: string; points: string[] }[];
  highlights: string[];
}

// Export Experience Data
export const experienceData: ExperienceItem[] = [
  {
    role: "Actuarial Data Scientist",
    company: "Accenture Solutions Pvt. Ltd., India",
    period: "Jul 2023 - Present",
    sections: [
      {
        title: "Rater Delivery & Transition",
        points: [
          "Work closely with the team to transition Excel-based raters to Python solutions on the Hyper Exponential cloud platform for North America.",
          "Implemented Agile methodologies to optimize project management and team workflow.",
        ],
      },
    ],
    highlights: [
      "Team Lead",
      "Python Rater Transition",
      "Hyper Exponential",
      "Agile",
    ],
  },
  {
    role: "Actuarial Data Science Consultant",
    company: "RSA Actuarial Services, India",
    period: "Dec 2022 - June 2023",
    sections: [
      {
        title: "Motor Insurance Fraud Detection",
        points: [
          "Developed and implemented a Machine Learning model to prioritize fraudulent cases, boosting the fraud application success rate by 20%.",
          "Executed a comprehensive Full-Time Equivalent (FTE) analysis to identify and recover previously neglected resource benefits.",
          "Authored effective SIRA-based business rules, slashing potentially fraudulent applications by 70%.",
        ],
      },
    ],
    highlights: [
      "Machine Learning",
      "Fraud Detection",
      "FTE Analysis",
      "Data Analytics",
    ],
  },
  {
    role: "Actuarial Analyst",
    company: "SwissRe",
    period: "Jun 2021 - Dec 2022",
    sections: [
      {
        title: "Pricing & Quoting (South-East Asia)",
        points: [
          "Supported pricing and experience studies for 30+ quotes across diverse L&H products (Life, CI, Disability, Hospitalization).",
          "Performed impact testing on terms of trade assumptions for whole/life assurance products.",
          "Monitored critical illness capacity for over 70+ quotes.",
        ],
      },
      {
        title: "Experience Studies",
        points: [
          "Executed experience studies using R to derive A/E ratios, enabling cost revisions aligned with actual claims data.",
        ],
      },
      {
        title: "R Modeling & Dashboarding",
        points: [
          "Developed R and Excel models for experience studies, premium trend analysis, and L&H data visualization.",
          "Leveraged R models to generate profit commission insights across various quotes.",
        ],
      },
      {
        title: "Product Design & Launch",
        points: [
          "Collaborated with claims and underwriting teams on product design, contributing to the successful launch of three new specialized critical illness products.",
        ],
      },
      {
        title: "Communication & Presentation",
        points: [
          "Presented pricing strategies and results to team leads and clients via executive summaries.",
          "Delivered a technical presentation on 'Intro to Machine Learning using Decision Tree'.",
        ],
      },
    ],
    highlights: [
      "L&H Pricing",
      "R Modeling",
      "Experience Studies",
      "Product Launch",
    ],
  },
  {
    role: "Actuarial Consultant",
    company: "Tech Actuarial",
    period: "Jun 2019 - Jun 2021",
    sections: [
      {
        title: "Ayushman Bharat Claims Analytics",
        points: [
          "Performed claims analytics using Python & R for India's largest group health scheme (Ayushman Bharat), analyzing 200,000+ records for broker/insurer insights.",
          "Engineered an RShiny dashboard for monthly claims tracking, improving claims management efficiency by 20%.",
          "Analyzed claim patterns and fraud indicators in 200,000+ records during COVID-19, achieving a 5% reduction in fraudulent claims.",
        ],
      },
      {
        title: "Crop Insurance Pricing & Forecasting",
        points: [
          "Automated daily yield data collection via Python web scraping (3M+ data points), reducing processing time by nearly 90%.",
          "Constructed ARIMA models to project crop yields, enhancing forecast accuracy for the subsequent three months.",
          "Built a futures tracking dashboard covering 12 scenarios/six crops, decreasing manual tracking time by 70%.",
        ],
      },
      {
        title: "Cancer Product Pricing & Analysis",
        points: [
          "Priced four distinct cancer product packages across 28 Indian states.",
          "Developed a dashboard for dynamic comparison and visualization of L&H risk metrics across 100+ scenarios, improving pricing analysis.",
        ],
      },
      {
        title: "Defined Benefit Pension Scheme Valuation",
        points: [
          "Streamlined Defined Benefit pension scheme valuations using Excel, achieving a 10x reduction in runtime and boosting process efficiency.",
        ],
      },
      {
        title: "Consulting Presentations",
        points: [
          "Authored over 30 consulting pitch presentations for diverse clientele over a two-year period.",
        ],
      },
    ],
    highlights: [
      "Python/R",
      "Claims Analytics",
      "Predictive Modeling",
      "Dashboarding",
    ],
  },
  {
    role: "Student Central Summer Internship Program",
    company: "Casualty Actuarial Society, USA",
    period: "Jun 2020 - Aug 2020", // Note: This overlaps but is shorter duration
    sections: [
      {
        title: "P&C Program Focus & Projects",
        points: [
          "Completed an intensive six-week P&C program focused on data visualization, pricing, reserving, and predictive modeling.",
          "Executed four projects using Cognalysis Multirate software, enhancing pricing and reserving strategies.",
        ],
      },
      {
        title: "Recognition",
        points: [
          "Recognized as a 'CAS Spotlight Candidate' for active participation and exceptional actuarial knowledge.",
        ],
      },
    ],
    highlights: [
      "P&C Pricing",
      "Reserving",
      "Predictive Modeling",
      "CAS Spotlight",
    ],
  },
  {
    role: "Research Associate",
    company: "Tech Actuarial",
    period: "Jun 2017 - May 2019",
    sections: [
      {
        title: "Group Health Insurance Fraud Research",
        points: [
          "Researched and developed fraud detection frameworks for Group Health Insurance schemes.",
          "Integrated actuarial and data science methodologies to enhance detection capabilities.",
        ],
      },
    ],
    highlights: [
      "Fraud Detection",
      "Research",
      "Data Science",
      "Health Insurance",
    ],
  },
];
