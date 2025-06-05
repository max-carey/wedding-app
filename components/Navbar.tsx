'use client';
import { useState } from 'react';
import Image from 'next/image';
import LocalSwitcher from '../components/local-switcher';
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const t = useTranslations('IndexPage');
    const locale = useLocale();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="flex-no-wrap fixed top-0 z-50 flex w-full items-center justify-between bg-[#F7FAF7] py-2 shadow-md shadow-black/5 dark:bg-[#1A2E1A] dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 backdrop-blur-sm">
            <div className="mx-6 flex flex-wrap items-center justify-between w-full">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap text-[#2E5A27]"
                    >
                        <Image
                            width={50}
                            height={50}
                            src="/aya-logo-w-namest.svg"
                            alt={"Logo de boda de Adrian y Ana"}
                        />
                    </span>
                </a>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex items-center space-x-4">
                        <LocalSwitcher/>
                    </div>

                    <button onClick={toggleMenu} data-collapse-toggle="navbar-language" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#2E5A27] rounded-full md:hidden bg-[#E8F0E8] hover:bg-[#D8E4D8] focus:outline-none focus:ring-2 focus:ring-[#2E5A27] transition-colors duration-200"
                            aria-controls="navbar-language" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                <div
                    className={`h-screen md:h-auto items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                    id="navbar-language">
                    <ul className="flex flex-col tracking-[0.25em] font-normal p-4 md:p-0 mt-4 border border-[#E8F0E8] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="/" className="block py-2 px-3 font-bold text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu} aria-current="page">
                            {t('sections.Home')} 
                            </a>
                        </li>
                        <li>
                            <a href="#greeting" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.Greeting')} 
                            </a>
                        </li>
                        <li>
                            <a href="#about-us" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.AboutUs')} 
                            </a>
                        </li>
                        <li>
                            <a href="#itinerary" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.Itinerary')} 
                            </a>
                        </li>
                        <li>
                            <a href="#gallery" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.Gallery')}  
                            </a>
                        </li>
                        <li>
                            <a href="#localitations" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.Locations')}  
                            </a>
                        </li>
                        <li>
                            <a href="#accommodations" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.Accommodations')}  
                            </a>
                        </li>
                        <li>
                            <a href="#dress-code" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.DressCode')}  
                            </a>
                        </li>
                        <li>
                            <a href="#guestFormFormik" className="block py-2 px-3 text-[#2E5A27] hover:text-[#3A7232] transition-colors duration-200" onClick={closeMenu}>
                            {t('sections.RSVP')}   
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
