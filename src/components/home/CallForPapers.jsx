import Image from "next/image";
import right from "../../assets/icons/chevron-right.svg";

export default function CallForPapers() {
  const topics = [
    {
      category: "Artificial Intelligence and Machine Learning",
      subtopics: [
        "AI in Autonomous Systems",
        "Emotion AI",
        "AI for Sustainable Development",
        "Augmented Reality and AI Fusion"
      ]
    },
    {
      category: "Data Science and Big Data Analytics",
      subtopics: [
        "Geospatial Data Analytics",
        "Social Media and Network Analysis",
        "Real-Time Data Fusion",
        "AI in Financial Analytics"
      ]
    },
    {
      category: "Internet of Things (IoT) and Smart Technologies",
      subtopics: [
        "Smart Agriculture and IoT",
        "IoT in Environmental Monitoring",
        "Wearable IoT for Health Monitoring",
        "Smart Infrastructure and IoT"
      ]
    },
    {
      category: "Cybersecurity and Blockchain Technology",
      subtopics: [
        "IoT Security",
        "Blockchain in Healthcare",
        "Decentralized Identity Management",
        "Threat Intelligence and Cyber Defense"
      ]
    },
    {
      category: "Sustainable and Renewable Energy Technologies",
      subtopics: [
        "Battery Storage and Energy Management",
        "Decentralized Renewable Energy Grids",
        "Bioenergy and Waste-to-Energy Solutions",
        "Green Building Technologies"
      ]
    },
    {
      category: "Biomedical Engineering and Healthcare Technologies",
      subtopics: [
        "AI in Medical Imaging",
        "Wearable Health Sensors",
        "3D Bioprinting and Tissue Engineering",
        "Telemedicine and Remote Patient Monitoring"
      ]
    },
    {
      category: "Robotics, Automation, and Industry 4.0",
      subtopics: [
        "Robots in Hazardous Environments",
        "Human-Robot Collaboration",
        "Augmented Reality for Maintenance",
        "Industry 4.0 in Manufacturing"
      ]
    },
    {
      category: "Smart Materials and Nanotechnology",
      subtopics: [
        "Nanoelectronics and Quantum Devices",
        "Self-Healing Materials",
        "Energy Harvesting Nanomaterials",
        "Biocompatible Nanomaterials"
      ]
    },
    {
      category: "Quantum Computing and Cryptography",
      subtopics: [
        "Quantum Algorithms for Optimization",
        "Quantum Communication Protocols",
        "Quantum Machine Learning",
        "Post-Quantum Cryptography"
      ]
    },
    {
      category: "Future Cities & Smart Societies",
      subtopics: [
        "AI-driven Urban Resilience",
        "Next Gen Public Health Infrastructure",
        "Intelligent Governance and Civic Engagement",
        "Adaptive & Intelligent Transportation",
        "Social Robots & Assistive Tech"
      ]
    },
    {
      category: "AI for Complex Systems & Scientific Computing",
      subtopics: [
        "AI for High Energy Physics and Quantum Simulations",
        "Computational Social Science",
        "Digital Twin Models in Biological Systems",
        "Computational Linguistics for Science and Research",
        "Advanced Neuro Symbolic AI for Scientific Reasoning"
      ]
    }
  ];

  return (
    <div
      className="flex flex-col justify-center items-center w-full my-8 bg-neutral-100 py-5 scroll-m-20"
      id="callforpapers"
    >
      <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">
        CALL FOR <span className="text-yellow">PAPERS</span>
      </h1>
      <div className=" flex flex-col items-center w-fit mt-5 md:mt-9">
        <div className="px-10">
          <div className="space-y-8">
            {topics.map((topic, index) => (
              <div
                key={topic.category}
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-blue-900 font-semibold text-lg md:px-0 pb-5 md:pb-2 w-fit">
                  {index + 1}. {topic.category}
                </h2>
                <ul className="md:px-0 font-medium space-y-2 md:max-w-[50%]">
                  {topic.subtopics.map((subtopic, index) => (
                    <li
                      key={index}
                      className="md:ml-12 flex gap-1"
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
