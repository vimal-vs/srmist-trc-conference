import Image from "next/image";
import right from "../../assets/icons/chevron-right.svg";

export default function CallForPapers() {

    const topics = [
        {
            category: "Data Science in Physics",
            subtopics: [
                "Statistical Mechanics and Thermodynamics",
                "Machine learning in particle physics experiments",
                "Data analysis in cosmological surveys",
                "Computational astrophysics and cosmology",
                "Quantum information and quantum computing",
                "Quantum simulation and optimization"
            ]
        },
        {
            category: "Data Science in Chemistry",
            subtopics: [
                "Quantum chemistry calculations",
                "Property prediction and materials design",
                "High-throughput screening of materials",
                "Computational catalysis and reaction mechanisms"
            ]
        },
        {
            category: "Data Sciences in Mathematics",
            subtopics: [
                "Quantum machine learning",
                "Computational Mathematics",
                "Numerical methods and algorithms",
                "Optimization techniques",
                "Computational fluid dynamics and simulations",
                "Mathematical Modelling"
            ]
        },
        {
            category: "Data Sciences in Material Sciences",
            subtopics: [
                "Material Informatics",
                "Material property predictions",
                "Molecular dynamic simulations",
                "Phase diagram prediction and materials modelling"
            ]
        },
        {
            category: "Data Sciences in Engineering",
            subtopics: [
                "Data Science in Industry 4.0 applications",
                "Embedded systems through IoT and Data Sciences",
                "Predictive Modelling and Forecasting",
                "NLP in data science",
                "Data Governance and Ethics",
                "Healthcare Analytics",
                "Fintech Analytics",
                "Social Media Analytics",
                "Spatial and Geospatial Analytics",
                "Data Visualisation and Interpretability",
                "Data science in Education",
                "Secure Data Sharing and Collaboration",
                "Cybersecurity Analytics",
                "Quantum – Secure Data Science",
                "Data Science in Cyber Physical Systems",
                "Block Chain engineering",
                "Data engineering and analysis",
                "Augmented Reality and Virtual Reality in collaboration with data sciences"
            ]
        },
        {
            category: "Technology for societal development",
            subtopics: [
                "Responsible AI",
                "Ethics and Governance of Artificial Intelligence",
                "Assistive Technology",
                "Blockchain for e-governance",
                "Deep Learning for Medical Imaging",
                "Fairness, privacy, ethics, social good, transparency, accountability in vision"
            ]
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full my-8 bg-neutral-100 py-5 scroll-m-20" id="callforpapers">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">CALL FOR <span className="text-yellow">PAPERS</span></h1>
            <div className=" flex flex-col items-center w-fit mt-5 md:mt-9">
                <div className="px-10">
                    <div className="space-y-8">
                        {topics.map((topic, index) => (
                            <div key={topic.category} className="flex flex-col">
                                <h2 className="text-blue-900 font-semibold text-lg md:px-0 pb-5 md:pb-2">{index + 1}. {topic.category}</h2>
                                <ul className="md:px-0 font-medium space-y-2">
                                    {topic.subtopics.map((subtopic, index) => (
                                        <li key={index} className="md:ml-12 flex gap-1 items-center"><Image src={right} alt="-" className="size-5" />{subtopic}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
