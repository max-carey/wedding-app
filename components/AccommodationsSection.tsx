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
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">Roma</h3>
                                <ul className="space-y-2">
                                    <li>• <a href="https://www.colima71.com/es" target="_blank" rel="noopener noreferrer">Colima 71</a></li>
                                    <li>• <a href="https://casatenue.mx" target="_blank" rel="noopener noreferrer">Casa Tenue</a></li>
                                    <li>• <a href="https://www.casacibeles.com.mx" target="_blank" rel="noopener noreferrer">Casa Cibeles</a></li>
                                    <li>• <a href="https://casaolivamx.com" target="_blank" rel="noopener noreferrer">Casa Oliva</a></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">Condesa</h3>
                                <ul className="space-y-2">
                                    <li>• <a href="https://casacuenca.mx" target="_blank" rel="noopener noreferrer">Casa Cuenca</a></li>
                                    <li>• <a href="https://octaviacasa.mx/#index" target="_blank" rel="noopener noreferrer">Octavia Casa </a></li>
                                    <li>• <a href="https://www.eurostarshotels.com/crisol-suites-condesa.html?referer_code=bs1gg15ww&gad_source=1&gad_campaignid=22618223506&gbraid=0AAAAAD-VyO4yrugkV0mQdPoWXGmicrACN&gclid=Cj0KCQjw18bEBhCBARIsAKuAFEblf-WIaS3nalA5QZWXxiiYJFQFIT3SzPueOlppldv707rSfGk_IaQaAgw_EALw_wcB" target="_blank" rel="noopener noreferrer">Crisol Suites Condesa </a></li>
                                    <li>• <a href="https://lucianacondesainfo.com.mx" target="_blank" rel="noopener noreferrer">Casa Luciana Condesa</a></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">Reforma</h3>
                                <ul className="space-y-2">
                                    <li>• <a href="https://www.sofitel-mexico-city.com/rooms-suites/" target="_blank" rel="noopener noreferrer">Sofitel Mexico City Reforma</a></li>
                                    <li>• <a href="https://www.marriott.com/es/hotels/mexis-sheraton-mexico-city-maria-isabel-hotel" target="_blank" rel="noopener noreferrer">Sheraton Mexico City</a></li>
                                    <li>• <a href="https://www.barcelo.com/es-mx/barcelo-mexico-reforma/" target="_blank" rel="noopener noreferrer">Barceló Mexico Reforma </a></li>
                                    <li>• <a href="https://www.nh-collection.com/es/hotel/nh-collection-mexico-city-reforma" target="_blank" rel="noopener noreferrer">NH Collection Mexico City Reforma</a></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">Polanco</h3>
                                <ul className="space-y-2">
                                    <li>• <a href="https://www.lasalcobas.com/" target="_blank" rel="noopener noreferrer">Las Alcobas</a></li>
                                    <li>• <a href="https://www.marriott.com/es/hotels/mexjw-jw-marriott-hotel-mexico-city/overview/" target="_blank" rel="noopener noreferrer">JW Marriott</a></li>
                                    <li>• <a href="https://presidenteicmexico.com" target="_blank" rel="noopener noreferrer">Presidente InterContinental</a></li>
                                    <li>• <a href="https://www.hyatt.com/hyatt-regency/es-ES/mexhr-hyatt-regency-mexico-city" target="_blank" rel="noopener noreferrer">Hyatt Regency Mexico City</a></li>
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
