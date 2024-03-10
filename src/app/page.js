import AboutConference from "@/components/home/AboutConference";
import Banner from "@/components/home/Banner";
import CallForPapers from "@/components/home/CallForPapers";
import FeeDetails from "@/components/home/FeeDetails";
import MeetSpeakers from "@/components/home/MeetSpeakers";
import OrangizedCard from "@/components/home/OrangizedCard";
import VenueLocation from "@/components/home/VenueLocation";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <OrangizedCard />
      <AboutConference />
      <CallForPapers />
      <FeeDetails />
      <VenueLocation />
      <MeetSpeakers />
    </div>
  );
}
