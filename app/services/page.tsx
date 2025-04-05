import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Title from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { servicesData } from "@/data/servicesData";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

// Define page-specific metadata for Services
export const metadata: Metadata = {
  title: "Services | Dr. Rohan Yashraj Gupta, FIA",
  description:
    "Discover the actuarial and data science services offered by Dr. Rohan Gupta, FIA, including consulting, modeling, and technical solutions.",
  keywords: [
    "Actuarial Services",
    "Data Science Services",
    "Insurance Consulting",
    "Predictive Modeling Services",
    "Rohan Gupta Services",
    "Actuarial Consulting",
    "Data Analysis Services",
    "Machine Learning Consulting",
  ],
  alternates: {
    canonical: "https://rohanyashraj.github.io/services",
  },
  openGraph: {
    title: "Services | Dr. Rohan Yashraj Gupta, FIA",
    description:
      "Actuarial and data science services offered by Dr. Rohan Gupta, FIA.",
    url: "https://rohanyashraj.github.io/services",
    images: [
      {
        url: "https://rohanyashraj.github.io/profile.jpg", // Consistent profile image
        width: 1200,
        height: 1200,
        alt: "Services - Dr. Rohan Gupta",
      },
    ],
  },
  twitter: {
    title: "Services | Dr. Rohan Yashraj Gupta, FIA",
    description:
      "Actuarial and data science services offered by Dr. Rohan Gupta, FIA.",
    images: ["https://rohanyashraj.github.io/profile.jpg"],
  },
};

const ServicesPage = () => {
  // Generate JSON-LD schema for services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services Offered by Dr. Rohan Yashraj Gupta",
    description: metadata.description, // Reuse from page metadata
    itemListElement: servicesData.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        // If service.href points to a specific page about that service, use it here:
        // "url": service.href,
        provider: {
          "@type": "Person",
          name: "Dr. Rohan Yashraj Gupta",
          url: "https://rohanyashraj.github.io",
        },
        // Add relevant serviceType or category if applicable
        // e.g., "serviceType": "Actuarial Consulting"
      },
    })),
  };

  return (
    <section className="min-h-[80vh] flex flex-col w-full py-5 md:py-10">
      {/* Add JSON-LD script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        key="services-schema" // Add a key for React reconciliation
      />
      <PageLayout>
        <Title>Services I Provide</Title>
        <div className="grid grid-col-1 md:grid-cols-2 gap-5 md:gap-12">
          {servicesData?.map((item) => (
            <div
              key={item?._id}
              className="flex flex-col p-6 bg-lightSky/5 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md group hover:shadow-lg gap-2.5 hoverEffect"
            >
              <div className="w-full flex items-center justify-between">
                <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect">
                  {item?._id}
                </p>
                <Link href={item?.href} target="_blank">
                  <ArrowUp className="rotate-45" />
                </Link>
              </div>
              <h2 className="font-semibold text-white">{item?.title}</h2>
              <p className="text-sm md:text-base">{item?.description}</p>
              <Separator className="bg-white/20" />
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default ServicesPage;
