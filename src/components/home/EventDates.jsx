import Image from "next/image";
import date from "../../assets/icons/date.svg";

export default function EventDates() {
  return (
    <div
      className="flex flex-col items-center justify-center md:justify-around gap-8 py-6 scroll-m-20"
      id="dates"
    >
      <div className="flex justify-center items-center gap-5 -ml-20">
        <Image src={date} alt="date" />
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-900">
          KEY <span className="text-yellow">DATES</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6 px-5 py-6 md:px-0 md:py-0">
        <div className="flex gap-3">
          <span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">
            📅
          </span>
          <p>
            Abstract Submission Deadline:{" "}
            <span className="font-semibold">30th July 2025</span>
          </p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">
            📅
          </span>
          <p>
            Paper Submission Deadline:{" "}
            <span className="font-semibold">15th September 2025</span>
          </p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">
            📅
          </span>
          <p>
            Notification of Acceptance:{" "}
            <span className="font-semibold">25th November 2025</span>
          </p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">
            📅
          </span>
          <p>
            Final Paper Submission & Registration:{" "}
            <span className="font-semibold">20th January 2026</span>
          </p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-full h-fit bg-blue-900 py-1 px-3 text-white font-semibold">
            📅
          </span>
          <p>
            Conference Dates:{" "}
            <span className="font-semibold">6th & 7th March 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
