import Image from "next/image";
import date from "../../assets/icons/date.svg";

export default function EventDates() {
    return (
        <div className="flex flex-col items-center justify-center md:justify-around gap-8 py-12">
            <div className="flex justify-center items-center gap-5 -ml-20">
                <Image src={date} alt="date" />
                <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">KEY <span className="text-yellow">DATES</span></h1>
            </div>
            <div className="flex flex-col gap-6 px-5 py-8 md:px-0 md:py-0">
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">1</span><p>Abstract Submission deadline: <span className="font-semibold">22nd May 2024</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">2</span><p>Acceptance Notification: <span className="font-semibold">14th June 2024</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">3</span><p>Full Paper Submission Deadline: <span className="font-semibold">4th July 2024</span></p></div>
                <div className="flex gap-3"><span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">4</span><p>Conference Dates: <span className="font-semibold">9th & 10th August 2024</span></p></div>
            </div>
        </div>
    )
}
