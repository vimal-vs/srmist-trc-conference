import Image from "next/image";
import right from "../../assets/icons/chevron-right.svg";

export default function CallForPapers() {

    const topics = [
              {
            category: "Quantum Computing in Agriculture",
            subtopics: [
                "Quantum-optimized fertilizer formulations for soil health and crop yield",
                "Molecular-level pesticide design for eco-safe farming",
                "Quantum machine learning for accelerating plant genomics and breeding",
                "Shelf-life and preservation breakthroughs via quantum thermodynamics",
                "Nutrient metabolism and absorption modeling with quantum biology",
                "AI-quantum hybrid systems for resilient agro-supply chains",
                "Smart biodegradable packaging materials discovered with quantum design",
                "Quantum-enhanced water and irrigation efficiency models for sustainable farming"
            ]
        },
        {
            category: "Quantum Computing in Food Technology",
            subtopics: [
                "Quantum thermodynamics for food preservation and shelf-life extension",
                "Flavor molecule interaction modeling using quantum simulations",
                "Nutrient stability analysis under processing conditions at quantum scale",
                "Development of sustainable food additives with quantum chemistry",
                "Smart biodegradable packaging design via quantum material discovery",
                "Food safety detection systems enhanced with quantum AI sensors",
                "Real-time supply chain tracking with quantum-secure logistics",
                "Novel protein-based foods (alt-meat, dairy) designed via quantum biology"
            ]
        },
        {
            category: "Quantum Computing in Transportation Systems",
            subtopics: [
                "Next-generation EV battery chemistries engineered with quantum algorithms",
                "Quantum-optimized hydrogen fuel cells and storage systems for mobility",
                "Aerospace-grade lightweight alloys discovered via quantum simulations",
                "Traffic and logistics flow optimization through quantum decision models",
                "Sustainable aviation and marine fuels designed at quantum scale",
                "Autonomous navigation improved with quantum reinforcement learning",
                "Smart charging infrastructure planned using quantum optimization",
                "Maritime emission reduction strategies modeled via quantum chemistry"
            ]
        },
        {
            category: "Quantum Computing in Medical and Digital Healthcare",
            subtopics: [
                "Quantum-driven protein folding for accelerating life-saving drug discovery",
                "Personalized medicine tailored with quantum-enhanced diagnostic predictions",
                "Molecular quantum models for designing targeted cancer therapies",
                "Quantum AI for medical imaging and real-time anomaly detection",
                "Biocompatible implants and prosthetics engineered via quantum materials science",
                "Quantum cryptography for securing healthcare data and patient privacy",
                "Organ-level digital twins created with hybrid quantum-classical simulations",
                "Global outbreak and epidemic predictions powered by quantum epidemiology"
            ]
        },
        {
            category: "Quantum Computing in Environment and Climate Change",
            subtopics: [
                "Quantum-enhanced global climate models for real-time prediction accuracy",
                "Carbon capture and utilization materials discovered through quantum chemistry",
                "Renewable energy storage systems developed with quantum materials design",
                "Water desalination and purification breakthroughs at atomic precision",
                "Quantum catalysts for scalable green hydrogen and solar energy transitions",
                "Disaster forecasting (floods, droughts, wildfires) enhanced by quantum AI",
                "Greenhouse gas molecular reactivity analyzed with quantum simulations",
                "Sustainable resource allocation optimized using quantum algorithms"
            ]
        },
        {
            category: "Quantum Computing in Emerging Quantum Technologies",
            subtopics: [
                "Novel qubit architectures simulated with quantum computational chemistry",
                "Topological materials engineered for ultra-secure quantum communication",
                "Next-gen data protection enabled by quantum-enhanced cryptography",
                "Hybrid quantum-classical computing for exponential material discovery",
                "Ultra-sensitive quantum sensors for medical, defense, and aerospace domains",
                "Scalable superconductors engineered through density functional theory (DFT)",
                "Fault-tolerant quantum computers with advanced error-correction protocols",
                "AI-quantum fusion for multidisciplinary breakthroughs in science and industry"
            ]
        },
        {
            category: "Quantum Computing in Space Exploration",
            subtopics: [
                "Quantum navigation systems for interplanetary and deep-space missions",
                "Space radiation shielding materials engineered via quantum simulations",
                "Energy storage for spacecraft optimized using quantum chemistry",
                "Exoplanet atmosphere and astrobiology modeling with quantum algorithms",
                "Quantum communication networks for secure space-to-Earth data transfer",
                "Predictive maintenance of spacecraft using quantum digital twins",
                "Next-generation propulsion systems designed through quantum simulations",
                "Terraforming and planetary climate modeling accelerated by quantum computing"
            ]
        }
    ];
    return (
        <div className="flex flex-col justify-center items-center w-full my-8 bg-neutral-100 py-5 scroll-m-20" id="callforpapers">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">
                CALL FOR <span className="text-yellow">PAPERS</span>
            </h1>
            <div className="flex flex-col items-center w-fit mt-5 md:mt-9">
                <div className="px-10">
                    <div className="space-y-8">
                        {topics.map((topic, index) => (
                            <div key={topic.category} className="flex flex-col">
                                <h2 className="text-blue-900 font-semibold text-lg md:px-0 pb-5 md:pb-2">
                                    {index + 1}. {topic.category}
                                </h2>
                                <ul className="md:px-0 font-medium space-y-2">
                                    {topic.subtopics.map((subtopic, idx) => (
                                        <li key={idx} className="md:ml-12 flex gap-1 items-center">
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
