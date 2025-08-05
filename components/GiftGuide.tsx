import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import rama from '@/public/rama.png';


const GiftGuide = () => {
    const t = useTranslations('IndexPage');

    return (
        <section id="gift-guide" className="container-full section-styles">
            <Image
                src={rama}
                width={80}
                height={0}
                alt="Rama"
                className="h-auto object-contain mb-[14px]"
            />
            <div className="content-section flex flex-col items-center justify-start gap-8 pt-8">
                <h2 className="font-tanpearl text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center mb-8">
                    {t('sections.giftGuide.title')}
                </h2>
                <p className="text-lg text-center">
                    {t('sections.giftGuide.description')}
                </p>
            </div>
        </section>
    )
}

export default GiftGuide;
