'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { marcellus } from "@/styles/fonts";
import Image from 'next/image';
import rama from '@/public/rama.png';

const DressCodeSection = () => {
    const t = useTranslations('IndexPage');

    return (
        <section id="dress-code" className="container flex flex-col justify-center items-center py-20 px-5">
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
                        {t('sections.DressCode')}
                    </h2>
                    <div className="text-content flex flex-col gap-6 max-w-3xl">
                        <h3 className="text-xl font-semibold text-[#2E5A27]">
                            {t('sections.dressCodeTitle')}
                        </h3>
                        <p className="text-lg">
                            {t('sections.dressCodeDescription')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DressCodeSection; 