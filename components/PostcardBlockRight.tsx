import Image from 'next/image';
import React from 'react';
import ramal from '@/public/rama.png';
import { useTranslations } from 'next-intl';
import {marcellus} from "@/styles/fonts";


const PostcardBlockRight = () => {
    const t = useTranslations('AboutUs');
    return (
        <div className="about-us- right md:order-1 derw-full bg-[white] flex-col justify-center items-stretch mb-[-25px] flex mt-[25px] md:pl-[50px] py-[85px]">
            <div className="w-full flex-col justify-center items-start flex px-[10%] md:px-[16%]">
                <Image
                    src={ramal}
                    alt="Subtitle"
                    width={82}
                    height={82}
                    className="mb-4"
                />
                <h2
                    className="font-tanpearl text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center">
                    {t('sectionTitle')}
                </h2>
                <div className="mt-4 text-justify" style={marcellus.style}>
                    <div className='mb-4'>
                    {t('description-one')}
                    </div>
                    <div className='mb-4'>
                    {t('description-two')}
                    </div>
                    <div className='mb-4'>
                    {t('description-three')}
                    </div>
                    <div className='mb-4'>
                    {t('description-four')}
                    </div>
                    <div className='mb-4'>
                    {t('description-five')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostcardBlockRight;
