import React from 'react';
import Image, {StaticImageData} from "next/image";
import rama from "@/public/rama.png";
import GuestFormFormikEs from "@/components/GuestFormFormikEs";
import {marcellus} from "@/styles/fonts";


interface SectionsContentProps {
    image: StaticImageData;
    subtitle: string;
    title: string;
    description: string;
    description2: string;
}

const SectionsContent: React.FC<SectionsContentProps> = ({image, subtitle, title, description, description2}) => {
    return (
        <div className="w-full text-center flex-col items-center flex relative">
            <Image
                src={image}
                width={80}
                alt="Rama"
                className="h-auto object-contain mb-[14px]"
            />

            <span className="uppercase mb-4" style={marcellus.style}>
                {subtitle}
            </span>
            <h2
                className="font-tanpearl text-3xl font-bold">
                {title}
            </h2>
            <p className="mt-4" style={marcellus.style}>
                {description}
            </p>
            <p className="mt-4" style={marcellus.style}>
                {description2}
            </p>
        </div>
    );
};

export default SectionsContent;
