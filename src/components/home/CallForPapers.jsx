import Image from "next/image";
import right from "../../assets/icons/chevron-right.svg";

export default function CallForPapers() {
  const topics = [
    {
      category: "Artificial Intelligence and Machine Learning",
      subtopics: [
        "AI in Autonomous Systems: Enhancing self-driving cars, drones, and robotic process automation with cutting-edge AI algorithms.",
        "Emotion AI: Advances in understanding and simulating human emotions for use in social robots, virtual assistants, and customer service automation.",
        "AI for Sustainable Development: Utilizing AI in climate modelling, energy conservation, and urban planning to address environmental challenges.",
        "Augmented Reality and AI Fusion: AI-driven advancements in AR applications for education, training, and healthcare.",
      ],
    },
    {
      category: "Data Science and Big Data Analytics",
      subtopics: [
        "Geospatial Data Analytics: Analysis of satellite imagery and geographic data for applications in urban planning, disaster management, and environmental monitoring.",
        "Social media and Network Analysis: Insights into public opinion, trends, and behavioural analysis using big data from social networks.",
        "Real-Time Data Fusion: Integrating and analysing real-time data from multiple sources, such as sensors, IoT devices, and social media, to improve decision-making.",
        "AI in Financial Analytics: Machine learning for fraud detection, risk assessment, and predictive financial modelling.",
      ],
    },
    {
      category: "Internet of Things (IoT) and Smart Technologies",
      subtopics: [
        "Smart Agriculture and IoT: IoT-enabled precision farming techniques, smart irrigation, and soil monitoring to improve agricultural yield.",
        "IoT in Environmental Monitoring: Using IoT to monitor air quality, water quality, and natural resources, contributing to sustainable practices.",
        "Wearable IoT for Health Monitoring: Developing real-time health monitoring systems for chronic diseases, fitness tracking, and elderly care.",
        "Smart Infrastructure and IoT: IoT applications in smart buildings, transportation, and energy management for future smart cities.",
      ],
    },
    {
      category: "Cybersecurity and Blockchain Technology",
      subtopics: [
        "IoT Security: Addressing vulnerabilities in IoT devices and creating robust security frameworks.",
        "Blockchain in Healthcare: Secure patient data sharing and management using blockchain in healthcare and telemedicine.",
        "Decentralized Identity Management: Blockchain-based solutions for secure identity verification, digital ID, and privacy.",
        "Threat Intelligence and Cyber Defense: Advances in cyber-threat detection, response strategies, and automated defense mechanisms.",
      ],
    },
    {
      category: "Sustainable and Renewable Energy Technologies",
      subtopics: [
        "Battery Storage and Energy Management: Innovations in energy storage solutions and their applications in renewable energy systems.",
        "Decentralized Renewable Energy Grids: Community-based renewable energy projects for remote and rural areas.",
        "Bioenergy and Waste-to-Energy Solutions: Converting organic waste into bioenergy to reduce environmental impact.",
        "Green Building Technologies: Sustainable construction materials, energy-efficient design, and smart building management systems.",
      ],
    },
    {
      category: "Biomedical Engineering and Healthcare Technologies",
      subtopics: [
        "AI in Medical Imaging: Deep learning for diagnostics, disease prediction, and image enhancement in radiology.",
        "Wearable Health Sensors: Design and application of biosensors in fitness, chronic disease management, and elderly care.",
        "3D Bioprinting and Tissue Engineering: Advanced bioprinting technologies for regenerative medicine and organ transplants.",
        "Telemedicine and Remote Patient Monitoring: Enhanced solutions for telehealth, remote diagnostics, and patient data analysis.",
      ],
    },
    {
      category: "Robotics, Automation, and Industry 4.0",
      subtopics: [
        "Robots in Hazardous Environments: Development of robots for use in disaster recovery, mining, and hazardous material handling.",
        "Human-Robot Collaboration: Innovations in cobots (collaborative robots) for safer and more efficient industrial applications.",
        "Augmented Reality for Maintenance: AR applications in real-time machine maintenance, troubleshooting, and training.",
        "Industry 4.0 in Manufacturing: Advanced automation, predictive maintenance, and digital twins in the manufacturing sector.",
      ],
    },
    {
      category: "Smart Materials and Nanotechnology",
      subtopics: [
        "Nanoelectronics and Quantum Devices: Development of ultra-small electronic devices with applications in computing and medical diagnostics.",
        "Self-Healing Materials: Smart materials that autonomously repair cracks and damage in infrastructure and consumer products.",
        "Energy Harvesting Nanomaterials: Nanotechnology for renewable energy harvesting, including solar and piezoelectric applications.",
        "Biocompatible Nanomaterials: Nanomaterials for drug delivery, wound healing, and biomedical applications.",
      ],
    },
    {
      category: "Quantum Computing and Cryptography",
      subtopics: [
        "Quantum Algorithms for Optimization: Quantum computing applications in solving complex optimization problems in logistics, finance, and healthcare.",
        "Quantum Communication Protocols: New protocols for secure communication using quantum key distribution.",
        "Quantum Machine Learning: Leveraging quantum computing for faster and more efficient machine learning.",
        "Post-Quantum Cryptography: Developing cryptographic solutions resilient to quantum computing threats.",
      ],
    },
    {
      category: "Fundamental and Applied Sciences",
      subtopics: [
        "Applications in Physics: AI for high energy physics event reconstruction, AI and DL accelerated electron microscopy, AI driven nanoscale imaging and sensing techniques.",
        "Applications in Chemistry: AI enabled green chemistry and sustainable processes, Artificial Intelligence enhancement of fossil fuel extraction, Meta materials using artificial intelligence.",
        "Applications in Mathematics: Generative adversarial networks for mathematical data synthesis, stochastic process and Monte Carlo methods accuracy using Artificial Intelligence, Neuro symbolic integration for mathematical reasoning.",
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
                <ul className="md:px-0 font-medium space-y-2 max-w-[50%]">
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
