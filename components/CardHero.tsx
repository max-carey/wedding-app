import {marcellus} from "@/styles/fonts";
import Image from 'next/image';
import rama from '@/public/rama.png';
import divider from '@/public/branch-divider.svg';
import logo from '@/public/aya-logo-w-namest.svg';
import logo2 from "@/public/logo.svg";
import {Button} from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import Countdown from '@/components/Countdown';
import LogoSvg from "./logo";

const CardHero = () => {
    const t = useTranslations('CardHero');
    return (
        <div
            className="relative bottom-[100px] md:bottom-[-250px] sm:absolute w-[92%] sm:w-[70%] max-w-[600px] z-20">
            <div
                className="relative z-20 bg-white text-center flex flex-col justify-center items-center gap-4 p-[25px_8%] sm:p-[30px_8%]">
                <p className="subtitle text-accent font-tanpearl  text-sm" dangerouslySetInnerHTML={{ __html: t('hero') }} />
                <h1
                    className="font-tanpearl font-medium text-4xl sm:text-5xl">Lili <span className="font-parfumerieScript text-[90px]"> & </span> Max</h1>
                
                <Countdown targetDate="2026-02-14T00:00:00" />
            </div>
        </div>
    );
};

export default CardHero;
