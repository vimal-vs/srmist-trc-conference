export default function CallForPapers() {

    const topics = [
        {
            category: "Generative Artificial Intelligence in Physics",
            subtopics: [
                "Cosmological Parameter Estimation with AI",
                "AI-enabled Nanophononics and Quantum Optics",
                "AI-driven Nanoscale Imaging and Sensing Techniques",
                "AI and Deep Learning Accelerated Electron Microscopy",
                "AI-Assisted Gravitational Wave Astronomy",
                "AI For High-Energy Physics Event Reconstruction"
            ]
        },
        {
            category: "Generative Artificial Intelligence in Chemistry",
            subtopics: [
                "Chemical Agronomics using artificial intelligence",
                "Predictive toxicology and environmental risk assessment",
                "Artificial Intelligence enabled green chemistry and sustainable processes",
                "Cheminformatics and molecular design using artificial intelligence and machine learning",
                "Artificial intelligence-enabled high throughput screening platforms",
                "Generative artificial intelligence-based applications in environmental sciences"
            ]
        },
        {
            category: "Generative Artificial Intelligence in Material Sciences",
            subtopics: [
                "Artificial intelligence incorporated nanomaterials",
                "Meta-materials using artificial intelligence",
                "Topological insulation using artificial intelligence",
                "Computational materials design using artificial intelligence",
                "Cognitive materials engineering",
                "Artificial intelligence enhancement of fossil fuel extraction"
            ]
        },
        {
            category: "Generative Artificial Intelligence in Mathematics",
            subtopics: [
                "Probability and optimization theory",
                "Mathematics for deep learning",
                "Classification problems",
                "Multivariate calculus",
                "Statistical Mechanics"
            ]
        },
        {
            category: "Generative Artificial Intelligence in Engineering",
            subtopics: [
                "Real-time Analytics in navigation and mobility",
                "Scalable Data Analytics",
                "Computational Intelligence for Huge Data",
                "Sentiment/Opinion analysis",
                "Cyber Threat Frameworks and Intelligence",
                "Forensic Analysis of Cyber Crimes",
                "DevSecOps/Hybrid Cloud Security",
                "Cryptography/Encryption standards",
                "Explainable AI for Computer Vision",
                "Multi-agent systems and games",
                "Quantum Machine Learning",
                "NLP and Large Language Models",
                "Industry 5.0 and applications",
                "Augmented Reality and Virtual Reality",
                "Cyber-Physical Systems"
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
        <div className="flex flex-col justify-center items-center w-full my-8 bg-neutral-100 py-5">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">CALL FOR <span className="text-yellow">PAPERS</span></h1>
            <div className=" flex flex-col items-center w-fit mt-5 md:mt-9">
                <div className="px-10">
                    <div className="space-y-8">
                        {topics.map((topic, index) => (
                            <div key={topic.category} className="flex flex-col">
                                <h2 className="text-blue-900 font-semibold text-lg md:px-0 pb-5 md:pb-2">{index + 1}. {topic.category}</h2>
                                <ul className="list-disc md:px-0 font-medium">
                                    {topic.subtopics.map((subtopic, index) => (
                                        <li key={index} className="md:ml-12">{subtopic}</li>
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
