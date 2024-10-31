import AboutConference from "@/components/home/AboutConference";
import Banner from "@/components/home/Banner";
import CallForPapers from "@/components/home/CallForPapers";
import EventDates from "@/components/home/EventDates";
// import FeeDetails from "@/components/home/FeeDetails";
import MeetSpeakers from "@/components/home/MeetSpeakers";
import OrangizedCard from "@/components/home/OrangizedCard";
import ProgramSchedule from "@/components/home/ProgramSchedule";
import RegistrationDetails from "@/components/home/RegistrationDetails";
import VenueLocation from "@/components/home/VenueLocation";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <OrangizedCard />
      <AboutConference />
      <CallForPapers />
      <EventDates />
      <ProgramSchedule />
      {/* <FeeDetails /> */}
      <RegistrationDetails />
      <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold text-black mb-6">Downloads</h2>
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <span>For paper template -</span>
                    <a
                        href="https://docs.google.com/document/d/1A0wjz1Xv1Njg5vtHmXYoQYdYvGd8eDVm/edit?usp=sharing&ouid=106267889453596678336&rtpof=true&sd=true"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
                    >
                        MANUSCRIPT
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <span>For copyright form -</span>
                    <a
                        href="https://drive.google.com/file/d/1SGQt_naxdvGq0BePN_Qc740W-1QvNIXu/view?usp=sharing"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
                    >
                        COPYRIGHT FORM
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <span>For publication ethics -</span>
                    <a
                        href="https://conference.poornima.edu.in/downloads/Publication%20Ethics.docx.pdf"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
                    >
                        PUBLICATION ETHICS
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <span>For article preparation checklist (Do's & Don'ts) -</span>
                    <a
                        href="https://drive.google.com/file/d/1Y_JW9jcmITdPSWbQkPvNNRKvoms5oOZH/view?usp=sharing"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
                    >
                        DO'S & DON'TS
                    </a>
                </div>
            </div>
      </div>
      <VenueLocation />
      <MeetSpeakers />
    </div>
  );
}
