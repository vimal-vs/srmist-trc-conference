"use client";

import Link from 'next/link';
import React from 'react';
import srmLogo from "../assets/srm-trc-logo.png";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Header() {

    const currentPath = usePathname();

    const navElements = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
        {
            name: "Program",
            link: "/program",
        },
        {
            name: "Registration",
            link: "/registration",
        },
        {
            name: "Advisory Board",
            link: "/advisory-board",
        },
        {
            name: "Reach Us",
            link: "/reach-us",
        },
    ];

    return (
        <div className='flex justify-between items-center w-full border-y md:px-6'>
            <div className='h-[5rem]'><Image src={srmLogo} alt='logo' className='w-full h-full' /></div>
            <div className='hidden md:flex gap-4 py-4'>
                {navElements.map((navElement, index) => (
                    <Link href={navElement.link} key={index} className={cn('group px-4 py-3 font-semibold relative', navElement.link === currentPath && 'bg-yellow')}>
                        {navElement.name}
                        <span className="group-hover:absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full bg-yellow transition-all duration-300 transform"></span>
                    </Link>
                ))}
            </div>
        </div>
    );
}