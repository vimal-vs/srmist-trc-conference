import Image from "next/image";
import date from "../../assets/icons/date.svg";

export default function EventDates() {
    return (
        <div className="flex flex-col items-center justify-center md:justify-around gap-8 py-6 scroll-m-20" id="dates">
            <div className="flex justify-center items-center gap-5 -ml-20">
                <Image src={date} alt="date" />
                <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">KEY <span className="text-yellow">DATES</span></h1>
            </div>
            <div className="flex flex-col gap-6 px-5 py-6 md:px-0 md:py-0">
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">1</span><p>Abstract Submission Deadline: <span className="font-semibold">3rd June 2024</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">2</span><p>Acceptance Notification: <span className="font-semibold">21st June 2024</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">3</span><p>Full Paper Submission Deadline: <span className="font-semibold">31st July 2024</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">4</span><p>Conference Dates: <span className="font-semibold">19th and 20th September 2024</span></p></div>
            </div>
        </div>
    )
};