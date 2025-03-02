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
            International Conference on AI-Powered Multidisciplinary Solutions
            for Sustainable Development (IC-AIMS 2026) aims to serve as a
            premier global platform for researchers, academicians, industry
            experts, and policymakers to present and discuss cutting-edge
            innovations in sustainable technologies. This conference fosters a
            multidisciplinary approach by integrating advancements in computing,
            energy, healthcare, infrastructure, and environmental sciences to
            address global sustainability challenges.
          </p>{" "}
          <ul className={cn("list-disc pl-6 leading-loose", poppins.className)}>
            <li>
              To foster a global platform for knowledge exchange that brings
              together experts from academia, industry, government, and
              non-governmental organizations to explore how Artificial
              Intelligence (AI) can accelerate progress toward the Sustainable
              Development Goals (SDGs).
            </li>
            <li>
              To promote interdisciplinary research and innovations by
              encouraging collaboration across domains such as engineering,
              healthcare, agriculture, climate science, energy management, urban
              planning, and social sciences, with AI as the enabler for
              sustainable solutions.
            </li>
            <li>
              To showcase cutting-edge AI-driven technologies and their
              applications in addressing global sustainability challenges,
              including climate change, clean energy transition, food security,
              healthcare access, and smart infrastructure development.
            </li>
            <li>
              To bridge the gap between research, policy, and practice by
              facilitating dialogue between researchers, technology developers,
              policymakers, and practitioners, ensuring that AI solutions are
              ethical, inclusive, and aligned with global sustainability
              priorities.
            </li>
            <li>
              To create a repository of best practices and real-world case
              studies demonstrating the tangible impact of AI-powered
              innovations in local, national, and global sustainability
              initiatives, contributing to future research, policy formation,
              and capacity building.
            </li>
            <li>
              To inspire young researchers and innovators to focus on AI for
              social good and technological solutions for sustainability,
              fostering a new generation of researchers committed to
              technology-driven sustainable development.
            </li>
            <li>
              To emphasize responsible AI development by addressing issues such
              as ethics, transparency, data governance, and digital equity,
              ensuring that technological advancement contributes to inclusive
              and sustainable global development.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
