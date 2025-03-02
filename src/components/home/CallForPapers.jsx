import Image from "next/image";
import right from "../../assets/icons/chevron-right.svg";

export default function CallForPapers() {
  const topics = [
    {
      category:
        "AI for Climate Resilience, Environmental Monitoring & Clean Energy (SDGs 7, 13, 15)",
      subtopics: [
        "AI in climate modeling and disaster prediction",
        "Renewable energy optimization using AI",
        "AI for carbon footprint reduction and emission monitoring",
        "Environmental data analytics and AI-powered early warnings",
        "AI for circular economy and sustainable production",
        "Circular economy and waste management solutions",
        "Climate change adaptation and disaster management",
      ],
    },
    {
      category:
        "Smart Infrastructure, Sustainable Cities & Digital Governance (SDGs 9, 11, 16)",
      subtopics: [
        "AI in smart cities, urban planning & waste management",
        "Intelligent transportation systems for sustainable mobility",
        "AI for water resource management and smart grids",
        "AI-driven e-governance and policy support for sustainability",
        "Digital twins for sustainable infrastructure monitoring",
        "Urban mobility and sustainable transportation",
      ],
    },
    {
      category:
        "AI in Sustainable Healthcare, Agriculture & Food Security (SDGs 2, 3, 6)",
      subtopics: [
        "AI for precision agriculture and climate-smart farming",
        "AI applications in food supply chain management",
        "AI-powered disease prediction, telemedicine & health analytics",
        "Smart water management in agriculture using AI",
        "AI for ensuring food safety and nutritional security",
        "Innovations in public health, disease prevention & healthcare delivery",
      ],
    },
    {
      category:
        "AI, Ethics, Education & Capacity Building for Sustainable Societies (SDGs 4, 5, 8, 10)",
      subtopics: [
        "AI for inclusive education and skill development in sustainability",
        "AI-driven frameworks for ethical and responsible innovation",
        "AI and workforce transformation for green jobs",
        "Bridging gender and digital divides using AI",
        "Multidisciplinary partnerships for AI-enabled SDG solutions",
        "Green finance, climate investment, and carbon credits",
        "Industry 4.0 and sustainable industrial development",
      ],
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center w-full my-8 bg-neutral-100 py-5 scroll-m-20"
      id="callforpapers"
    >
      <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">
        CALL FOR <span className="text-yellow">PAPERS</span>
      </h1>
      <div className=" flex flex-col items-center w-full mt-5 md:mt-9">
        <div className="px-10">
          <div className="space-y-8">
            {topics.map((topic, index) => (
              <div
                key={topic.category}
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-blue-900 font-semibold text-lg md:px-0 pb-5 md:pb-2 w-full">
                  {index + 1}. {topic.category}
                </h2>
                <ul className="md:px-0 font-medium space-y-2">
                  {topic.subtopics.map((subtopic, index) => (
                    <li
                      key={index}
                      className="md:ml-12 flex gap-1 items-center"
                    >
                      <Image src={right} alt="-" className="size-5" />
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
