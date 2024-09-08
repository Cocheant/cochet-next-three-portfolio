import React, { useContext } from 'react'
import { ContentContext } from '../page';


interface FooterProps {
    switchContent:(content:string)=>void
}

export function Footer({switchContent}: FooterProps) {

    const content = useContext(ContentContext);

    const shownClass = "hover:bg-[#383838] dark:hover:bg-[#ccc]  border-transparent text-background bg-foreground";
    const hiddenClass = "hover:border-transparent hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] border-black/[.08] dark:border-white/[.145]";

    return (
        <div className="flex gap-4 items-center flex-row sm:flex-row ">
            <button
                className={"rounded-full border border-solid w-40 transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4  sm:px-5 sm:min-w-44"+ (content === "Home" ? shownClass : hiddenClass) }
                onClick={() => { switchContent("Home") }}
            >
                Home
            </button>
            <button
                className={"rounded-full border border-solid w-40  transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4  sm:px-5 sm:min-w-44"+ (content === "Projects" ? shownClass : hiddenClass) }
                onClick={() => { switchContent("Projects") }}
            >
                Projects
            </button>
            <button
                className={"rounded-full border border-solid w-40  transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4  sm:px-5 sm:min-w-44"+ (content === "Experiences" ? shownClass : hiddenClass) }
                onClick={() => { switchContent("Experiences") }}
            >
                Experience
            </button>
            <button
                className={"rounded-full border border-solid w-40  transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4  sm:px-5 sm:min-w-44"+ (content === "Contact" ? shownClass : hiddenClass) }
                onClick={() => { switchContent("Contact") }}
            >
                Contact
            </button>
        </div>
    )
}


