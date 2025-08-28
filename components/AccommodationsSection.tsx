import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { marcellus } from "@/styles/fonts";
import Image from 'next/image';
import rama from '@/public/rama.png';
import { hotelsES, hotelsEN, HotelData } from '@/data/hotels';

const AccommodationsSection = () => {
    const t = useTranslations('IndexPage');
    const locale = useLocale();
    const hotels: HotelData = locale === 'en' ? hotelsEN : hotelsES;

    return (
        <section id="accommodations" className="container flex flex-col justify-center items-center py-20 px-5">
            <div className="container-wide w-full max-w-[1200px] flex flex-col items-center">
                <div className="w-full text-center flex flex-col items-center gap-6 relative">
                    <Image
                        src={rama}
                        width={80}
                        height={0}
                        alt="Rama"
                        className="h-auto object-contain mb-[14px]"
                    />
                    <h2
                        className="font-tanpearl text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center mb-8">
                        {t('sections.Accommodations')}
                    </h2>
                    <div className="text-content flex flex-col gap-6 max-w-3xl">
                        <p className="text-lg text-justify" style={marcellus.style}>
                            {t('sections.accommodationsText')}
                        </p>

                        <p className="mt-4 text-lg text-justify" style={marcellus.style}>
                            {t('sections.accommodationsHelp2')}
                        </p>
                        <p className="mt-4 text-lg text-justify" style={marcellus.style}>
                            {t('sections.accommodationsHelp3')}
                        </p>
                        <p className="mt-4 text-lg text-justify" style={marcellus.style}>
                            {t('sections.accommodationsHelp4')}
                        </p>
                        <p className="mt-4 text-lg text-justify" style={marcellus.style}>
                            {t('sections.accommodationsHelp5')}
                        </p>
                        <p className="mt-4 text-lg text-justify" style={marcellus.style}>
                            {t('sections.accommodationsText2')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            {Object.entries(hotels).map(([neighborhood, hotelList]) => (
                                <div key={neighborhood} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">{neighborhood}</h3>
                                    <ul className="space-y-2 text-sm">
                                        {hotelList.map((hotel, index) => (
                                            <li key={index}>
                                                • <a href={hotel.url} target="_blank" rel="noopener noreferrer">{hotel.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-lg italic">
                            {t('sections.accommodationsHelp')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccommodationsSection; 
