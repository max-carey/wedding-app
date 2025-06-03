'use client';

import React from 'react';
import Image from 'next/image';
import { marcellus } from "@/styles/fonts";
import rama from '@/public/branch-r.svg';
import { useTranslations } from 'next-intl';

interface TimelineEvent {
    time: string;
    title: string;
    description: string;
}

interface DayEvents {
    date: string;
    events: TimelineEvent[];
}

const timelineEvents: DayEvents[] = [
    {
        date: "Friday, February 13th, 2026",
        events: [
            {
                time: "6:00 PM",
                title: "Welcome Dinner",
                description: "Details to be confirmed"
            }
        ]
    },
    {
        date: "Saturday, February 14th, 2026",
        events: [
            {
                time: "5:00 PM - 6:00 PM",
                title: "Ceremony",
                description: "Wedding ceremony at the main venue"
            },
            {
                time: "6:00 PM - 7:00 PM",
                title: "Cocktail Hour",
                description: "Drinks and light appetizers"
            },
            {
                time: "7:00 PM - 9:00 PM",
                title: "Live Music",
                description: "Enjoy live entertainment"
            },
            {
                time: "9:00 PM - 2:00 AM",
                title: "Party",
                description: "Dancing and celebration"
            }
        ]
    }
];

export default function ItinerarySection() {
    const t = useTranslations('IndexPage');
    
    return (
        <section id="itinerary" className="container flex flex-col justify-center items-center py-20 px-5">
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
                        {t('sections.Itinerary')}
                    </h2>
                    
                    <div className="timeline w-full max-w-3xl">
                        {timelineEvents.map((day, dayIndex) => (
                            <div key={dayIndex} className="mb-12">
                                <h3 
                                    style={marcellus.style}
                                    className="text-xl md:text-2xl font-semibold mb-6 text-center">
                                    {day.date}
                                </h3>
                                {day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} className="timeline-item flex items-start mb-8 relative">
                                        <div className="timeline-time w-32 flex-shrink-0 text-right pr-6 font-semibold">
                                            {event.time}
                                        </div>
                                        <div className="timeline-content flex-grow pl-6 border-l-2 border-amber-200">
                                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                            <p className="text-gray-600">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 