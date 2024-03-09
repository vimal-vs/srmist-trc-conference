import Image from "next/image";
import organizedBy from "../../assets/home/organized-by.png"

export default function OrangizedCard() {
    return (
        <div className="bg-gradient-to-r from-yellow to-pink-600 min-h-[30vh] w-full text-white flex relative overflow-hidden">
            <div className=" flex flex-col justify-start items-end md:justify-center md:items-center gap-4 w-full pr-8 pt-4 md:pr-0 md:pt-0">
                <h3 className="text-xl font-semibold md:text-3xl">Organized By</h3>
                <hr className="w-1/3 md:hidden" />
                <div className="text-end md:text-center text-xs md:text-2xl md:w-2/3">
                    <p>Department of Computer Science and Engineering</p>
                    <p>SRM Institute of Science and Technology,</p>
                    <p>SRM Nagar, Irungalur Near Samayapuram Toll Plaza,</p>
                    <p>Trichy Chennai Highway, Tiruchirappalli,</p>
                    <p>Tamil Nadu - 621105, India.</p>
                </div>
            </div>
            <Image src={organizedBy} alt="organizedBy" className="w-32 absolute -bottom-6 -left-6 md:relative md:bottom-auto md:left-auto md:w-auto" />
        </div>
    )
}
