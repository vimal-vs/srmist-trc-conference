import React from 'react'
import one from "../../assets/program/1.png";
import two from "../../assets/program/2.png";
import three from "../../assets/program/3.png";
import four from "../../assets/program/4.png";
import five from "../../assets/program/5.png";
import six from "../../assets/program/6.png";
import seven from "../../assets/program/7.png";
import eight from "../../assets/program/8.png";
import Image from 'next/image';

export default function page() {

    const keyNoteSpeakers = [
        {
            name: "Xiaolei Wang",
            title: "Associate Professor",
            department: "Department of Electrical Engineer and Automation",
            university: "Aalto University, Finland",
            img: one
        },
        {
            name: "Mariofanna (Fanny) Milanova, IEEE Senior Member",
            title: "NVIDIA Deep Learning Instructor",
            position: "Fulbright Scholar and Professor",
            department: "Computer Science Department",
            university: "University of Arkansas",
            img: two
        },
        {
            name: "Xavier Fernando, PhD, P. Eng",
            title: "Professor",
            university: "Toronto Metropolitan University",
            img: three
        },
        {
            name: "Dr. Korhan Cengiz",
            title: "Senior Researcher",
            department: "Department of Information Technologies",
            faculty: "Faculty of Informatics and Management",
            university: "University of Hradec Kralove",
            location: "Kralove, 500 03, Czech Republic",
            img: four
        },
        {
            name: "Xiaohui Yuan, Ph.D.",
            title: "Associate Professor",
            department: "Department of Computer Science and Engineering",
            labDirector: "Computer Vision and Intelligent Systems Lab",
            university: "University of North Texas",
            img: five
        },
        {
            name: "Basim Alhadidi, PhD. Professor",
            department: "Department of Computer Information Systems",
            faculty: "Prince Abullah Bin Ghazi Faculty of Information and Communication Technology",
            university: "Al-Balqa Applied University",
            img: six
        },
        {
            name: "Stephen O. Olabiyisi, PhD, MCPN, MNCS",
            title: "Professor of Computer Science",
            img: seven
        },
        {
            name: "Dr. Lipo WANG",
            title: "Associate Professor",
            department: "School of Electrical and Electronic Engineering",
            university: "Nanyang Technological University",
            location: "Singapore",
            img: eight
        }
    ];

    const facultyList = [
        {
            name: "Dr.R.Jagadeesh Kannan",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Professor & Dean (Engg &Tech)"
        },
        {
            name: "Dr.R.Krishnamoorthy",
            qualification: "M.E.,Ph.D",
            designation: "Professor & Dean (Academic& Research)"
        },
        {
            name: "Dr.S.Kanaga Suba Raja",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Professor & Head"
        },
        {
            name: "Dr.R.Balaji Ganesh",
            qualification: "B.E., M.E.,Ph.D, Post-Doc",
            designation: "Assistant Professor & HoD AIML"
        },
        {
            name: "Mr.J.Paul RajaSingh",
            qualification: "B.E., M.E.,(Ph.D)",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.M.Devipriya",
            qualification: "B.E.,M.S(By Research ).,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.R.Deebalakshmi",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Assistant Professor & HoDCyber Security"
        },
        {
            name: "Dr.K.R.Saranya",
            qualification: "B.E., M.E.,Ph.D.",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.S. Sivakumar",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.L.Josephine Usha",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Mrs.R.Sharanya",
            qualification: "B.E., M.E.,(Ph.D)",
            designation: "Assistant Professor"
        },
        {
            name: "Dr. V.Senthil Kumar",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.P.Shanmuga Sundari",
            qualification: "B.Sc.,M.C.A.,M.E., Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.S.Anbukkarasi",
            qualification: "B. tech.,M.E.,MBA, Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.D. Chitradevi",
            qualification: "M.E.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.K.Jayanthi",
            qualification: "B. Tech., M.Tech.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.N.Saranya",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.S. Shanmuga Priya",
            qualification: "B.tech.,M.E.,MBA, Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Ms. T.Siron Anita Susan",
            qualification: "B.Tech., M.Tech.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.R. Sheeba",
            qualification: "B.E., M.E.,Ph.D",
            designation: "Assistant Professor"
        },
        {
            name: "Dr.K.Nithya",
            qualification: "B.Tech., M.Tech.,Ph.D",
            designation: "Assistant Professor"
        }
    ];

    const studentList = [
        "S MohanaKumar (II CSE C)",
        "AN Alagammai (II CSE C)",
        "Akash Sankar Chowdhury (III CSE)",
        "Shreya Mazumder (III CSE Al&ML)",
        "Samiksha Krishnasamy (II CSE A)",
        "Sri Ramaswamy S (II CSE A)",
        "Nithish Kumar N (II CSE A)",
        "Sanjay Raam VJ (II CSE A)",
        "Makeshwaran KP (II CSE A)",
        "R V Darsan (I Al&ML)",
        "Zian Surani (I Al&ML)",
        "Sandeep K (III CSE)",
        "Vignesh D (III CSE)",
        "ThirumukhilS P (III CSE)",
        "Jeyajeev V (III CSE)",
        "Shalini (II Al&ML)",
        "Laksharai Jha (II CSE A)",
        "Rishi Arun Kumar (II CSE A)",
        "Devi Nanda (III Al & ML)",
        "Suchi Pambhar (II CSE A)",
        "Amisha Kumari M (II CSE A)"
    ];

    return (
        <div className="w-full mx-auto py-10 bg-gradient-to-r from-[#E29E03] to-[#214B9C]">
            <div className='container flex flex-col justify-center text-white md:py-12 pb-12'>
                <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">KEYNOTE SPEAKERS</h1>
                <div className='flex flex-wrap justify-center items-center md:grid grid-cols-3 gap-y-10'>
                    {keyNoteSpeakers.map((person, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-8 justify-center items-center">
                                <Image src={person.img} className="w-[100px]" alt="person" />
                                <div className="text-center">
                                    <h3 className="text-sm md:max-w-[250px]">{person.name}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.title}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.department}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.university}</h3>
                                    <h3 className="text-sm md:max-w-[250px]">{person.location}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='container text-white w-full overflow-x-auto mt-12'>
                <h1 className="text-3xl font-bold mb-5 whitespace-nowrap text-center">Faculty Organizing committee</h1>
                <table className="min-w-full overflow-x-auto border border-[#eeeeee2f]">
                    <thead className="divide-y divide-[#eeeeee2f]">
                        <tr>
                            <th className="px-6 py-3 text-left font-semibold text-[#002160] text-xl uppercase tracking-wider border-b border-[#eeeeee2f]">Name</th>
                            <th className="px-6 py-3 text-left font-semibold text-[#002160] text-xl uppercase tracking-wider border-b border-[#eeeeee2f]">Qualification</th>
                            <th className="px-6 py-3 text-left font-semibold text-[#002160] text-xl uppercase tracking-wider border-b border-[#eeeeee2f]">Designation</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eeeeee2f]">
                        {facultyList.map((faculty, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold">{faculty.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold">{faculty.qualification}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold">{faculty.designation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='container text-white w-full overflow-x-auto py-12'>
                <h1 className="text-lg md:text-3xl font-bold mb-5 text-center">Organising Committee (Students)</h1>
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
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
