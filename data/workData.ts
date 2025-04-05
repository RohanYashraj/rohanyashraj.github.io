import { StaticImageData } from "next/image";
import projectOne from "@/images/projectOne.jpeg";
import projectTwo from "@/images/projectTwo.jpg";
import projectThree from "@/images/projectThree.jpg";
import projectFour from "@/images/projectFour.jpg";
import projectFive from "@/images/projectFive.jpg";
import projectSix from "@/images/projectSix.jpg";

// Define interface for work items
export interface WorkItemProps {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  image?: StaticImageData; // Keep optional as it's not used everywhere
  liveUrl?: string;
  githubUrl?: string;
}

// Export Projects Data
export const projects: WorkItemProps[] = [
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

// Export Conference Presentations Data
export const conferencePresentations: WorkItemProps[] = [
  {
    id: "CP01",
    title: "Speaker at 24th Global Conference of Actuaries",
    category: "Conference Presentation",
    description: "The 24th Global Conference of Actuaries held in Mumbai.",
    stack: ["Institute of Actuaries of India", "Mumbai", "Mar 2025"],
    image: projectOne,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP02",
    title: "Speaker at 2024 IFoA India Conference",
    category: "Conference Presentation",
    description: "The 2024 IFoA India Conference.",
    stack: ["Institute and Faculty of Actuaries", "Dec 2024"],
    image: projectTwo,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP03",
    title: "Speaker at 2024 CAS Teaching Summit for General Insurance",
    category: "Conference Presentation",
    description: "The 2024 CAS Teaching Summit for General Insurance.",
    stack: ["Casualty Actuarial Society", "Oct 2024"],
    image: projectThree,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP04",
    title: "Speaker at 23rd Global Conference of Actuaries",
    category: "Conference Presentation",
    description: "The 23rd Global Conference of Actuaries held in Mumbai.",
    stack: ["Institute of Actuaries of India", "Mumbai", "Feb 2024"],
    image: projectFour,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP05",
    title: "Speaker at National Seminar 2024 - CADS SSSIHL",
    category: "Conference Presentation",
    description: "The National Seminar 2024 - CADS SSSIHL.",
    stack: ["Sri Sathya Sai Institute of Higher Learning", "Feb 2024"],
    image: projectFive,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP06",
    title: "Speaker at International CAS Webinar Series 2023",
    category: "Conference Presentation",
    description: "The International CAS Webinar Series 2023.",
    stack: ["Casualty Actuarial Society", "Jun 2023"],
    image: projectSix,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP07",
    title: "Speaker at 22nd Global Conference of Actuaries",
    category: "Conference Presentation",
    description: "The 22nd Global Conference of Actuaries.",
    stack: ["Institute of Actuaries of India", "Mar 2023"],
    image: projectOne,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP08",
    title: "Speaker at 2022 ASTIN Actuarial Colloquia",
    category: "Conference Presentation",
    description:
      "The 2022 ASTIN Actuarial Colloquia, organized by CAS, with IAA and ASTIN.",
    stack: ["IAA and ASTIN", "Jun 2022"],
    image: projectTwo,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP09",
    title: "Speaker at 2022 CANW Spring Meeting",
    category: "Conference Presentation",
    description: "The 2022 CANW Spring Meeting in Seattle, USA.",
    stack: ["Casualty Actuarial Society", "Seattle, USA", "May 2022"],
    image: projectThree,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP10",
    title: "Speaker at 2022 CAS Spring Meeting",
    category: "Conference Presentation",
    description: "The 2022 CAS Spring Meeting in Florida, USA.",
    stack: ["Casualty Actuarial Society", "Florida, USA", "May 2022"],
    image: projectFour,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP11",
    title: "Speaker at 3rd Insurance Data Science Conference",
    category: "Conference Presentation",
    description:
      "The 3rd Insurance Data Science Conference, University of London.",
    stack: [
      "Insurance Data Science Conference",
      "University of London",
      "Jun 2021",
    ],
    image: projectFive,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP12",
    title: "Speaker at International Virtual Conference 2020",
    category: "Conference Presentation",
    description:
      "The International Virtual Conference on Distributed Computing, Intelligence and its Applications 2020.",
    stack: ["Kalasalingam University", "Jun 2020"],
    image: projectSix,
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "CP13",
    title: "Speaker at Kalasalingam Global Conference 2019",
    category: "Conference Presentation",
    description: "The Kalasalingam Global Conference 2019.",
    stack: ["Kalasalingam University", "Dec 2019"],
    image: projectOne,
    liveUrl: "",
    githubUrl: "",
  },
];

// Export Research Publications Data
export const researchPublications: WorkItemProps[] = [
  {
    id: "RP01",
    title:
      "Using Interpretable Machine Learning Methods: An Application to Health Insurance Fraud Detection",
    category: "Research Publication",
    description:
      "This project establishes a foundational framework for implementing interpretable machine learning techniques in the context of health insurance fraud detection. Machine learning algorithms excel at constructing intricate models by discerning patterns in data, yet the risk of overfitting necessitates rigorous testing. This report enhances transparency in health insurance fraud detection.",
    stack: ["Society of Actuaries Research Institute", "Jan 2024"],
    liveUrl:
      "https://www.soa.org/resources/research-reports/2024/interpretable-ml-methods/",
    githubUrl: "",
  },
  {
    id: "RP02",
    title: "Application of Cart-Based Modeling in Motor Insurance Fraud",
    category: "Research Publication",
    description:
      "Research applying Classification and Regression Trees (CART) for detecting fraudulent claims in the motor insurance sector.",
    stack: ["Taylor and Francis", "Aug 2021"],
    liveUrl:
      "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003187059-17/application-cart-based-modeling-motor-insurance-fraud-rohan-yashraj-gupta-satya-sai-mudigonda-phani-krishna-kandala-pallav-kumar-baruah",
    githubUrl: "",
  },
  {
    id: "RP03",
    title:
      "A Comparative Study of Using Various Machine Learning and Deep Learning-Based Fraud Detection Models For Universal Health Coverage Schemes",
    category: "Research Publication",
    description:
      "Comparative analysis of different machine learning and deep learning models for identifying fraudulent activities within universal health coverage programs.",
    stack: ["Intl. Journal of Eng. Trends & Tech.", "Feb 2021"],
    liveUrl:
      "https://www.ijettjournal.org/Volume-69/Issue-3/IJETT-V69I3P216.pdf",
    githubUrl: "",
  },
  {
    id: "RP04",
    title:
      "TGANs with Machine Learning Models in Automobile Insurance Fraud Detection and Comparative Study with Other Data Imbalance Techniques",
    category: "Research Publication",
    description:
      "Investigating Tabular Generative Adversarial Networks (TGANs) with ML models for auto insurance fraud, comparing effectiveness against methods for handling imbalanced data.",
    stack: ["Intl. Journal of Recent Tech. & Eng.", "Feb 2021"],
    liveUrl:
      "https://www.researchgate.net/publication/349095432_TGANs_with_Machine_Learning_Models_in_Automobile_Insurance_Fraud_Detection_and_Comparative_Study_with_Other_Data_Imbalance_Techniques",
    githubUrl: "",
  },
  {
    id: "RP05",
    title:
      "Implementation of Correlation and Regression Models for Health Insurance Fraud in Covid-19 Environment using Actuarial and Data Science Techniques",
    category: "Research Publication",
    description:
      "Applying correlation and regression modeling, combining actuarial and data science, to detect health insurance fraud during the COVID-19 pandemic.",
    stack: ["Intl. Journal of Recent Tech. & Eng.", "Sep 2020"],
    liveUrl:
      "https://www.ijrte.org/wp-content/uploads/papers/v9i3/C4686099320.pdf",
    githubUrl: "",
  },
  {
    id: "RP06",
    title:
      "Implementation of a Predictive Model for Fraud Detection in Motor Insurance using Gradient Boosting Method and Validation with Actuarial Models",
    category: "Research Publication",
    description:
      "Development and validation of a predictive model using gradient boosting for motor insurance fraud detection, benchmarked against traditional actuarial models.",
    stack: ["IEEE Xplore", "Aug 2020"],
    liveUrl: "https://ieeexplore.ieee.org/document/9167733",
    githubUrl: "",
  },
  {
    id: "RP07",
    title:
      "A Proposed Model for Measuring Protecon of Policyholders' Interest at Industry Level",
    category: "Research Publication",
    description:
      "Proposes a model to measure the protection of policyholders' interest by calculating a relativity coefficient of each quantitative measure at the industry level.",
    stack: ["IRDAI", "Dec 2019"],
    liveUrl:
      "https://www.policyholder.gov.in/uploads/CEDocuments/December%202019.1.pdf",
    githubUrl: "",
  },
  {
    id: "RP08",
    title:
      "Integrating actuarial models with neural networks for building a fraud detection model for automobile insurance",
    category: "Research Publication",
    description:
      "Exploring the integration of traditional actuarial models with neural networks to create enhanced fraud detection systems for automobile insurance.",
    stack: ["Journal of Emerging Tech. & Inn. Res.", "Jun 2019"],
    liveUrl: "https://www.jetir.org/papers/JETIR1908D44.pdf",
    githubUrl: "",
  },
  {
    id: "RP09",
    title:
      "A proposed method with a use case to facilitate the decision of implementing new technology in insurance organizations to improve operational efficiency",
    category: "Research Publication",
    description:
      "Presenting a methodology and case study for insurance companies to evaluate the implementation of new technologies aimed at improving operational efficiency.",
    stack: ["Journal of Emerging Tech. & Inn. Res.", "Jun 2019"],
    liveUrl: "https://www.jetir.org/papers/JETIR1908D45.pdf",
    githubUrl: "",
  },
  {
    id: "RP10",
    title:
      "A Framework for Comprehensive Fraud Management using Actuarial Techniques",
    category: "Research Publication",
    description:
      "Outlining a comprehensive framework that leverages actuarial techniques for effective fraud management within insurance operations.",
    stack: ["Intl. Journal of Sci. & Eng. Res.", "Mar 2019"],
    liveUrl:
      "https://www.citefactor.org/journal/pdf/A-Framework-for-Comprehensive-Fraud-Management-using-Actuarial-Techniques.pdf",
    githubUrl: "",
  },
];
