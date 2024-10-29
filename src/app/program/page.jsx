// import one from "../../assets/program/1.png";
// import two from "../../assets/program/2.png";
// import three from "../../assets/program/3.png";
// import four from "../../assets/program/4.png";
// import five from "../../assets/program/5.png";
// import six from "../../assets/program/6.png";
// import seven from "../../assets/program/7.png";
// import eight from "../../assets/program/8.png";
import Image from "next/image";

export default function page() {
  const tableCellStyle = "px-6 py-4 whitespace-nowrap font-semibold";
  const tableHeaderStyle =
    "px-6 py-3 text-left font-semibold text-neutral-200 text-lg uppercase tracking-wider border-b border-[#eeeeee2f]";

  const keyNoteSpeakers = [
    {
      name: "Dr. Valentina Emilia Balas",
      university: "Calea Radnei 126, Arad, Romania",
      email: "balas@drbalas.ro",
    },
    {
      name: "Dr. Zhemin Zhuang",
      university: "Shantou University",
      location: "Guangdong, China",
      email: "zmzhuang@stu.edu.cn",
    },
    {
      name: "Dr. Izzet Kale",
      university: "University of Westminster",
      location: "London, UK",
      email: "kalei@westminster.ac.uk",
    },
    {
      name: "Dr. Hong Lin",
      university: "University of Houston Downtown",
      location: "USA",
      email: "linh@uhd.edu",
    },
    {
      name: "Assoc. Prof. Ahmet Arif Aydin",
      university: "Inonu University",
      location: "Turkey",
      website: "aaaydin.github.io",
    },
    {
      name: "Dr. Sansanee Auephanwiriyakul",
      university: "Chiang Mai University",
      location: "Thailand",
      email: "sansanee@ieee.org",
    },
    {
      name: "Prof. Lee Mong Li Janice",
      university: "National University of Singapore",
      email: "leeml@comp.nus.edu.sg",
    },
    {
      name: "Dr. Basim Al-Hadidi",
      university: "Al-Balqa Applied University",
      location: "Jordan",
      email: "hadidi72@hotmail.com",
    },
    {
      name: "Dr. Dimitri Androutsos",
      university: "Ryerson University",
      location: "Canada",
      email: "dimitri@ee.ryerson.ca",
    },
  ];

  const vicePatrons = [
    {
      name: "Dr. T. R. Paarivendhar",
      title: "Founder",
      institution: "SRM Group of Educational Institutions",
    },
    {
      name: "Dr. R. Shivakumar",
      title: "Chairman",
      institution:
        "SRM Group of Educational Institutions (Ramapuram & Trichy Campus)",
    },
    {
      name: "Mr. S. Niranjan",
      title: "Co-Chairman",
      institution:
        "SRM Group of Educational Institutions (Ramapuram & Trichy Campus)",
    },
  ];

  const chiefPatrons = [
    {
      name: "Dr. N. Sethuraman",
      title: "Chief Director",
      institution: "SRM Group of Educational Institutions, Ramapuram Campus",
    },
    {
      name: "Dr. N. Malmurugan",
      title: "Director",
      institution:
        "SRM Group of Educational Institutions, Tiruchirappalli Campus",
    },
  ];

  const patrons = [
    {
      name: "Dr. R. Jagadeesh Kannan",
      title: "Dean",
      institution:
        "Faculty of Engineering and Technology, SRM Institute of Science and Technology, Tiruchirappalli Campus",
    },
  ];

  const conferenceChair = [
    {
      name: "Dr. S. Kanaga Suba Raja",
      title: "Professor and Head",
      department:
        "Department of Computer Science and Engineering, SRM Institute of Science and Technology, Tiruchirappalli Campus",
    },
  ];

  const technicalChair = [
    {
      name: "Dr.R.Balaji Ganesh",
      qualification: "B.E., M.E., Ph.D, Post-Doc",
      designation: "Assistant Professor & HoD AIML",
    },
    {
      name: "Mr.J.Paul RajaSingh",
      qualification: "B.E., M.E.,(Ph.D)",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.M.Devipriya",
      qualification: "B.E.,M.S(By Research ).,Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.R.Deebalakshmi",
      qualification: "B.E., M.E., Ph.D",
      designation: "Assistant Professor & HoD Cyber Security",
    },
    {
      name: "Dr.K.R.Saranya",
      qualification: "B.E., M.E.,Ph.D.",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.S. Sivakumar",
      qualification: "B.E., M.E.,Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.L.Josephine Usha",
      qualification: "B.E., M.E.,Ph.D",
      designation: "Assistant Professor",
    },
  ];

  const conferenceTreasurers = [
    {
      name: "Mrs.R.Sharanya",
      qualification: "B.E., M.E.,(Ph.D)",
      designation: "Assistant Professor",
    },
    {
      name: "Dr. V.Senthil Kumar",
      qualification: "B.E., M.E., Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.P.Shanmuga Sundari",
      qualification: "B.Sc.,M.C.A.,M.E., Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.S.Anbukkarasi",
      qualification: "B. tech.,M.E.,MBA, Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.D. Chitradevi",
      qualification: "M.E.,Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.K.Jayanthi",
      qualification: "B. Tech., M.Tech.,Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.N.Saranya",
      qualification: "B.E., M.E.,Ph.D",
      designation: "Assistant Professor",
    },
  ];

  const committeeMembers = [
    {
      name: "Dr.S. Shanmuga Priya",
      qualification: "B.tech.,M.E.,MBA, Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Ms. T.Siron Anita Susan",
      qualification: "B.Tech., M.Tech.,Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.R. Sheeba",
      qualification: "B.E., M.E., Ph.D",
      designation: "Assistant Professor",
    },
    {
      name: "Dr.K.Nithya",
      qualification: "B.Tech., M.Tech.,Ph.D",
      designation: "Assistant Professor",
    },
  ];

  const studentList = [
    "Akash Sankar Chowdhury (IV CSE)",
    "Shreya Mazumder (IV CSE Al&ML)",
    "S MohanaKumar (III CSE C)",
    "AN Alagammai (III CSE C)",
    "Samiksha Krishnasamy (III CSE A)",
    "Sri Ramaswamy S (III CSE A)",
    "Nithish Kumar N (III CSE A)",
    "Sanjay Raam VJ (III CSE A)",
    "Makeshwaran KP (III CSE A)",
    "R V Darsan (II Al&ML)",
    "Zian Surani (II Al&ML)",
    "Sandeep K (IV CSE)",
    "Vignesh D (IV CSE)",
    "Thirumukhil S P (IV CSE)",
    "Jeyajeev V (IV CSE)",
    "Shalini (II Al&ML)",
    "Laksharaj Jha (III CSE A)",
    "Rishi Arun Kumar (III CSE A)",
    "Devi Nanda (III Al & ML)",
    "Suchi Pambhar (III CSE A)",
    "Amisha Kumari M (III CSE A)",
  ];

  return (
    <div
      className="w-full mx-auto py-10 bg-gradient-to-r from-[#E29E03] to-[#214B9C] scroll-m-0"
      id="keynote"
    >
      <div className="container flex flex-col justify-center text-white md:py-12 pb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">
          KEYNOTE SPEAKERS
        </h1>
        <div className="flex flex-wrap justify-center items-center md:grid grid-cols-3 mt-5 gap-y-10">
          {keyNoteSpeakers.map((person, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-8 justify-center items-center"
              >
                {/* <Image src={person.img} className="w-[100px]" alt="person" /> */}
                <div className="text-center">
                  <h3 className="text-sm md:max-w-[350px]">{person.name}</h3>
                  <h3 className="text-sm md:max-w-[350px]">{person.title}</h3>
                  <h3 className="text-sm md:max-w-[350px]">
                    {person.department}
                  </h3>
                  <h3 className="text-sm md:max-w-[350px]">
                    {person.university}
                  </h3>
                  <h3 className="text-sm md:max-w-[350px]">
                    {person.location}
                  </h3>
                  <h3 className="text-sm md:max-w-[350px]">{person.email}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="container text-white w-full overflow-x-auto pt-12 scroll-m-0"
        id="comittee"
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center uppercase">
          Organising Committee
        </h1>
        <div className="space-y-5">
          <h2 className="text-xl font-bold mb-3">Vice Patron:</h2>
          <ul className="list-disc pl-5 mb-5">
            {vicePatrons.map((person, index) => (
              <li key={index}>
                {person.name}, {person.title}, {person.institution}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-3">Chief Patron:</h2>
          <ul className="list-disc pl-5 mb-5">
            {chiefPatrons.map((person, index) => (
              <li key={index}>
                {person.name}, {person.title}, {person.institution}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-3">Patron:</h2>
          <ul className="list-disc pl-5 mb-5">
            {patrons.map((person, index) => (
              <li key={index}>
                {person.name}, {person.title}, {person.institution}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-3">Conference Chair:</h2>
          <ul className="list-disc pl-5 mb-5">
            {conferenceChair.map((person, index) => (
              <li key={index}>
                {person.name}, {person.title}, {person.department}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-3">Technical Chair:</h2>
          <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
            <thead className="divide-y divide-[#eeeeee2f]">
              <tr>
                <th className={tableHeaderStyle}>Name</th>
                <th className={tableHeaderStyle}>Qualification</th>
                <th className={tableHeaderStyle}>Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeee2f]">
              {technicalChair.map((person, index) => (
                <tr key={index}>
                  <td className={tableCellStyle}>{person.name}</td>
                  <td className={tableCellStyle}>{person.qualification}</td>
                  <td className={tableCellStyle}>{person.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-bold mb-3">Conference Treasurers:</h2>
          <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
            <thead className="divide-y divide-[#eeeeee2f]">
              <tr>
                <th className={tableHeaderStyle}>Name</th>
                <th className={tableHeaderStyle}>Qualification</th>
                <th className={tableHeaderStyle}>Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeee2f]">
              {conferenceTreasurers.map((person, index) => (
                <tr key={index}>
                  <td className={tableCellStyle}>{person.name}</td>
                  <td className={tableCellStyle}>{person.qualification}</td>
                  <td className={tableCellStyle}>{person.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-bold mb-3">Committee Members:</h2>
          <table className="min-w-full overflow-x-auto border border-[#eeeeee2f] mb-5">
            <thead className="divide-y divide-[#eeeeee2f]">
              <tr>
                <th className={tableHeaderStyle}>Name</th>
                <th className={tableHeaderStyle}>Qualification</th>
                <th className={tableHeaderStyle}>Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeee2f]">
              {committeeMembers.map((person, index) => (
                <tr key={index}>
                  <td className={tableCellStyle}>{person.name}</td>
                  <td className={tableCellStyle}>{person.qualification}</td>
                  <td className={tableCellStyle}>{person.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="container text-white w-full overflow-x-auto py-12 scroll-m-0"
        id="organizers"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center uppercase">
          Organising Committee (Students)
        </h1>
        <div className="flex flex-wrap justify-center">
          {studentList?.map((student, index) => {
            return (
              <div key={index} className="w-full">
                <div className=" rounded-lg shadow-lg">
                  <div className="p-6">
                    <h1 className="md:text-xl font-semibold">{student}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
