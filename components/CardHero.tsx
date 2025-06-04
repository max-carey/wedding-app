import {marcellus} from "@/styles/fonts";
import Image from 'next/image';
import rama from '@/public/rama.png';
import divider from '@/public/branch-divider.svg';
import logo from '@/public/aya-logo-w-namest.svg';
import {Button} from "@/components/ui/button";
import { useTranslations } from 'next-intl';

const CardHero = () => {
    const t = useTranslations('CardHero');
    return (
        <div
            className="relative bottom-[30px] sm:bottom-[-80px] sm:absolute w-[80%] sm:w-[70%] max-w-[600px] z-20">
            <div
                className="relative z-20 bg-white text-center flex flex-col justify-center items-center gap-4 p-[25px_8%] sm:p-[30px_8%]">
                <Image
                    src={logo}
                    alt="Subtitle"
                    width={80}
                    height={0}
                    className="object-contain h-auto"
                />
                <p className="subtitle text-accent uppercase text-sm">{t('hero')}</p>
                <h1
                    style={marcellus.style}
                    className="heading-hero font-medium uppercase text-4xl sm:text-5xl">Lili & Max</h1>
                <Image
                    src={divider}
                    alt="Subtitle"
                    width={100}
                    height={0}
                    className="object-contain h-auto"
                />
            </div>
        </div>
    );
};

export default CardHero;