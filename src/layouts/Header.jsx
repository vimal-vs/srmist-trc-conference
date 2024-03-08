import Link from 'next/link'
import React from 'react'

export default function Header() {
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
    ]
    return (
        <div className='flex justify-between w-full'>
            <div>logo</div>
            <div className='flex gap-8'>
                {navElements.map((navElement, index) => {
                    return (
                        <Link href={navElement.link} key={index} className='px-4 py-2 hover:bg-black/80 transition-all duration-300 text-lg'>
                            {navElement.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
