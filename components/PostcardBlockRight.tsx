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
                <p className=" mt-4" style={marcellus.style}>
                    {t('description')}
                </p>
            </div>
        </div>
    );
};

export default PostcardBlockRight;
