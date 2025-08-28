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
                                <ul className="space-y-2 text-sm">
                                    <li>• <a href="https://staykukun.com/es/complex/Tonalá%20121" target="_blank" rel="noopener noreferrer">Kukun Tonalá 121</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Tonalá%2030" target="_blank" rel="noopener noreferrer">Kukun Casa Tonalá 30</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Alure" target="_blank" rel="noopener noreferrer">Kukun Alure</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Colima" target="_blank" rel="noopener noreferrer">Kukun Colima</a></li>
                                    <li>• <a href="https://www.reservas-mrw.com" target="_blank" rel="noopener noreferrer">Mr. W</a></li>
                                    <li>• <a href="https://www.airbnb.mx/s/Roma-Norte--Ciudad-de-México--C.D.Mx.--México/homes?refinement_paths%5B%5D=%2Fhomes&acp_id=09431e54-ae41-41d4-874c-01fa676b7cb9&date_picker_type=calendar&source=structured_search_input_header&search_type=autocomplete_click&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=2&price_filter_num_nights=7&channel=EXPLORE&guest_favorite=true&selected_filter_order%5B%5D=guest_favorite%3Atrue&update_selected_filters=false&zoom_level=14&place_id=ChIJzeSi8jn_0YURMiXDZ-gzmi0&location_bb=QZtoJcLGTqxBm0icwsZafg%3D%3D" target="_blank" rel="noopener noreferrer">Airbnb</a></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">Condesa</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• <a href="https://staykukun.com/es/complex/Taman" target="_blank" rel="noopener noreferrer">Kukun Taman</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Amsterdam%20185" target="_blank" rel="noopener noreferrer">Kukun Amsterdam 185</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Tenancingo%2016" target="_blank" rel="noopener noreferrer">Tenancingo 16</a></li>
                                    <li>• <a href="https://www.airbnb.mx/rooms/1039403393931105822?adults=6&check_in=2026-02-11&check_out=2026-02-18&search_mode=regular_search&source_impression_id=p3_1754683494_P3WppNhbrs9fNG1Z&previous_page_section_name=1000&federated_search_id=8e6c87d6-9c80-4767-a783-c1a3bd071cbc" target="_blank" rel="noopener noreferrer">Mr W Moderno apartamento</a></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">Reforma</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• <a href="https://staykukun.com/es/cdmx/property/Kukun_Reforma__n__Downtown/J35B214" target="_blank" rel="noopener noreferrer">Kukun Reforma and Downtown</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Reforma%20222" target="_blank" rel="noopener noreferrer">Kukun Reforma 222</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Grand%20Chapultepec" target="_blank" rel="noopener noreferrer">Kukun Grand Chapultepec</a></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 text-[#7D9B76]">Juárez</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• <a href="https://staykukun.com/es/complex/Londres%20208" target="_blank" rel="noopener noreferrer">Londres 208</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Magenta" target="_blank" rel="noopener noreferrer">Magenta</a></li>
                                    <li>• <a href="https://staykukun.com/es/complex/Reforma%20222%20Hamburgo" target="_blank" rel="noopener noreferrer">Kukun Casa Reforma 222 Hamburgo</a></li>
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
