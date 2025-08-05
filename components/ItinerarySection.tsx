'use client';

import React from 'react';
import Image from 'next/image';
import { marcellus } from "@/styles/fonts";
import rama from '@/public/rama.png';
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
                time: "6:00 PM - 9:00 PM",
                title: "Welcome Cocktail Party",
                description: "Details to be confirmed"
            }
        ]
    },
    {
        date: "Saturday, February 14th, 2026",
        events: [
            {
                time: "4:00 PM - 5:00 PM",
                title: "Ceremony",
                description: "Wedding ceremony at the main venue"
            },
            {
                time: "5:00 PM - 6:00 PM",
                title: "Cocktail Hour",
                description: "Drinks and light appetizers"
            },
            {
                time: "6:00 PM - 8:00 PM",
                title: "Dinner and Live Music",
                description: "Delicious Mexican food"
            },
            {
                time: "8:00 PM - 12:00 AM",
                title: "Dancing",
                description: "Dance the night away"
            },
            {
                time: "12:00 AM - 1:00 AM",
                title: "Midnight Munchies",
                description: "Late night food"
            },
            {
                time: "1:00 AM - 2:00 AM",
                title: "After Party",
                description: "After party onsite"
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
                        className="font-tanpearl text-[23px] md:text-[32px] font-normal md:leading-[50.16px] text-center mb-8">
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
                                    <div key={eventIndex} className="timeline-item flex justify-center mb-8 relative w-full max-w-2xl mx-auto">
                                        {/* 3-column layout: time | line | content */}
                                        <div className="flex w-full">
                                            {/* Time (left) */}
                                            <div className="flex-1 flex justify-end pr-6 items-center">
                                                <div className="font-semibold text-right">
                                                    <div className="hidden md:block whitespace-nowrap">
                                                        {event.time}
                                                    </div>
                                                    <div className="md:hidden flex flex-col items-end">
                                                        {event.time.includes(' - ')
                                                            ? event.time.split(' - ').map((time, index) => (
                                                                <div key={index} className="text-sm leading-tight">
                                                                    {time}
                                                                </div>
                                                            ))
                                                            : event.time.includes('-')
                                                                ? event.time.split('-').map((time, index) => (
                                                                    <div key={index} className="text-sm leading-tight">
                                                                        {time.trim()}
                                                                    </div>
                                                                ))
                                                                : [event.time].map((time, index) => (
                                                                    <div key={index} className="text-sm leading-tight">
                                                                        {time}
                                                                    </div>
                                                                ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Vertical line (center) */}
                                            <div className="flex flex-col items-center">
                                                <div className="w-0.5 bg-amber-200 h-full min-h-[48px] mx-4"></div>
                                            </div>
                                            {/* Content (right) */}
                                            <div className="flex-1 flex flex-col justify-center pl-6">
                                                <h3 className="text-xl font-semibold mb-2 text-left">{event.title}</h3>
                                                <p className="text-gray-600 text-left">{event.description}</p>
                                            </div>
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
