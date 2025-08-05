import React from 'react'
import { useTranslations } from 'next-intl';

const GiftGuide = () => {
    const t = useTranslations('IndexPage');

    return (
        <section id="gift-guide" className="container-full section-styles">
            <div className="content-section flex flex-col items-center justify-start gap-8">
                <h2 className="text-2xl font-bold text-center">
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
