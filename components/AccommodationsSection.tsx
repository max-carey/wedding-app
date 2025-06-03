import React from 'react';
import { useTranslations } from 'next-intl';
import { marcellus } from "@/styles/fonts";
import Image from 'next/image';
import rama from '@/public/rama.png';

const AccommodationsSection = () => {
    const t = useTranslations('IndexPage');

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
                        style={marcellus.style}
                        className="text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center mb-8">
                        {t('sections.Accommodations')}
                    </h2>
                    <div className="text-content flex flex-col gap-6 max-w-3xl">
                        <p className="text-lg mb-4">
                            {t('sections.accommodationsText')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#2E5A27]">Polanco</h3>
                                <ul className="space-y-2">
                                    <li>• Las Alcobas</li>
                                    <li>• JW Marriott</li>
                                    <li>• Presidente InterContinental</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#2E5A27]">Reforma</h3>
                                <ul className="space-y-2">
                                    <li>• Four Seasons</li>
                                    <li>• Sheraton María Isabel</li>
                                    <li>• St. Regis</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#2E5A27]">Roma</h3>
                                <ul className="space-y-2">
                                    <li>• Hotel Condesa DF</li>
                                    <li>• Hotel Brick</li>
                                    <li>• Hotel Carlota</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#2E5A27]">Condesa</h3>
                                <ul className="space-y-2">
                                    <li>• Condesa DF</li>
                                    <li>• Hippodrome Hotel</li>
                                    <li>• Hotel Condesa</li>
                                </ul>
                            </div>
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