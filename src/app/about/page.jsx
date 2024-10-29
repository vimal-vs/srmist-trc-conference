import Image from "next/image";
import landingBg from "../../assets/about/landing-bg.jpg";
import tick from "../../assets/icons/tick.svg";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Inter({ subsets: ["latin"], weight: ["600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function page() {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[30vh] md:h-[50vh] overflow-hidden">
        <Image
          src={landingBg}
          alt="bg"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="md:py-12 pb-8 pt-8 space-y-12 px-6 md:px-20">
        {/* About the University */}
        <div>
          <h2
            className={cn(
              "text-2xl md:text-3xl text-blue-900 font-semibold pb-4",
              font.className
            )}
          >
            About Our University:
          </h2>
          <p className={cn("leading-loose", poppins.className)}>
            One of the best universities in India, SRM Institute of Science and
            Technology offers a wide range of undergraduate, graduate, and
            doctorate programmes in six faculties: engineering and technology,
            management, medicine and health sciences, science and humanities,
            law, and agricultural sciences. Its campuses are located in and
            around Chennai, Tiruchirappalli (in TN), Modinagar (in UP), and
            Sonepat (in Haryana). All of these locations are close to Delhi NCR,
            Amaravati (in AP), and Gangtok (in Sikkim).
          </p>
        </div>

        {/* About the Department */}
        <div>
          <h2
            className={cn(
              "text-2xl md:text-3xl text-blue-900 font-semibold pb-4",
              font.className
            )}
          >
            About the Department of Computer Science and Engineering:
          </h2>
          <p className={cn("leading-loose", poppins.className)}>
            The department of Computer Science and Engineering at SRM Institute
            of Science and Technology, Trichy was established in the year 2021
            with the aim of giving standard education to the students and help
            them reach their full potential. The department strives to achieve
            its key objectives by providing top-notch IT infrastructure,
            creating a world-class environment for learning and research,
            collaborating with industry leaders to adopt industry best
            practices, and promoting moral and ethical values. The experienced
            faculty finds it easier to produce top-notch engineers due to the
            students&apos; promptness to learn, resulting in their recruitment
            by prestigious companies worldwide. The department&apos;s renowned
            undergraduate education is complemented by its emphasis on preparing
            students to tackle real-world challenges.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h3 className={cn("text-3xl font-semibold pb-4", font.className)}>
            Vision
          </h3>
          <p className={cn("flex gap-3", poppins.className)}>
            <Image src={tick} alt="-" className="size-7" />
            The department&apos;s primary goal is to provide quality education
            in Computer Science and Engineering and produce highly competent
            engineers who can serve the society on a global level.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className={cn("text-3xl font-semibold pb-4", font.className)}>
            Mission
          </h3>
          <p className={cn("flex gap-3", poppins.className)}>
            <Image src={tick} alt="-" className="size-7" />
            Our goal is to provide industry-oriented training that prepares our
            graduates for real-world challenges, while also emphasizing the need
            for ethical conduct and social responsibility.
          </p>
        </div>

        {/* Objective of the Conference */}
        <div>
          <h3 className={cn("text-3xl font-semibold pb-4", font.className)}>
            Objective of the Conference
          </h3>
          <p className={cn("leading-loose", poppins.className)}>
            The International Conference on Emerging Innovations in Science,
            Technology, and Engineering (IC-EISTE 2024) seeks to unite academic
            and industry leaders in science, mathematics, and data science to
            discuss the latest advancements and applications of data science in
            various scientific fields. The conference aims to address critical
            issues, spotlight emerging trends, and cultivate a future-focused
            vision for the design, deployment, and operation of data-driven
            solutions across diverse sectors.
          </p>
          <p className={cn("leading-loose", poppins.className)}>
            IC-EISTE 2024 aspires to be a collaborative hub where the science
            and engineering communities converge to explore cutting-edge
            developments in data science and its transformative applications in
            fields such as physics, chemistry, biology, social sciences,
            economics, and other applied sciences. This interdisciplinary
            platform invites researchers, practitioners, and educators to
            present and exchange insights on recent innovations, current trends,
            and pressing challenges in data science. Participants will engage in
            discussions on practical issues faced in the industry, along with
            solutions successfully implemented to advance these fields.
          </p>
        </div>

        {/* Conference Scope */}
        <div>
          <h3 className={cn("text-3xl font-semibold pb-4", font.className)}>
            Conference Scope
          </h3>
          <p className={cn("leading-loose", poppins.className)}>
            The IC-EISTE 2024 will focus on advancing multidisciplinary research
            and applications in emerging technologies, addressing global
            challenges in innovation, sustainability, and digital
            transformation. Topics will include Artificial Intelligence, IoT,
            Cybersecurity, Sustainable Energy, Biomedical Engineering, Quantum
            Computing, and more. Researchers, practitioners, and experts from
            academia and industry are encouraged to join and contribute to
            discussions on the latest scientific advancements and engineering
            innovations, particularly those impacting the Indian subcontinent
            and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
