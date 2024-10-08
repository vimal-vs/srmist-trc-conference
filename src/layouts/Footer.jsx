import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='flex flex-col w-full justify-center items-center bg-[#0A075F] text-white relative'>
            <div className='flex md:justify-evenly w-full py-12 px-6 md:px-0 gap-5 md:gap-0'>
                <div>
                    <p className='py-3 border-l-4 border-yellow pl-5 uppercase md:text-lg'>About</p>
                    <div className='flex flex-col gap-3 py-5 pt-7 text-sm md:text-base'>
                        <Link href={"/#about"} className='flex gap-2'><ArrowRight /> About Conference</Link>
                        <Link href={"/#dates"} className='flex gap-2'><ArrowRight /> Important Dates</Link>
                        <Link href={"/program#organizers"} className='flex gap-2'><ArrowRight /> Organizers</Link>
                        <Link href={"/program#comittee"} className='flex gap-2'><ArrowRight /> Committee</Link>
                    </div>
                </div>
                <div>
                    <p className='py-3 border-l-4 border-yellow pl-5 uppercase md:text-lg'>Quick Links</p>
                    <div className='flex flex-col gap-3 py-5 pt-7 text-sm md:text-base'>
                        <Link href={"/#callforpapers"} className='flex gap-2'><ArrowRight /> Call for Papers</Link>
                        <Link href={"/#registration"} className='flex gap-2'><ArrowRight /> Registration Fees</Link>
                        <Link href={"/registration"} className='flex gap-2'><ArrowRight /> Online Registration</Link>
                        <Link href={"/program#keynote"} className='flex gap-2'><ArrowRight /> Plenary/Keynote/Invited Speakers</Link>
                    </div>
                </div>
            </div>
            <hr className='w-4/5 border-gray-400' />
            <div className='py-3 text-xs md:text-sm text-center'>
                <p>Copyright © 2024 | SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, TIRUCHIRAPPALLI</p>
                <p className='py-2'>Developed by <Link href={"https://www.vimalvs.com"} className='font-semibold'>VS</Link></p>
            </div>
        </div>
    )
}
