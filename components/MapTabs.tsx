'use client';
import React, { useState } from 'react';
import OpenStreetMapComponent from './OpenStreetMap';
import OpenStreetMapFridayComponent from './OpenStreetMapFriday';
import Image from 'next/image';
import { useLocale, useTranslations } from "next-intl";

type Tab = 'wedding' | 'party';

const MapTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('party');

  const t = useTranslations('IndexPage');
  const locale = useLocale();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'wedding':
        return (
          <div className="tab-content flex flex-col md:flex-row justify-center items-center">
            <div className="map-container w-[350px] md:w-[500px] h-[400px] md:h-[750px]">
              <OpenStreetMapComponent />
            </div>
            <div className="image-container ml-0 mt-5 md:mt-0 md:ml-5 w-[350px] md:w-[500px] h-[400px] md:h-[750px]">
              <Image src="/venue.jpg" alt="Iglesia" width={500} height={750} className="object-cover" />
            </div>
          </div>
        );
      case 'party':
        return (
          <div className="tab-content flex flex-col md:flex-row justify-center items-center">
            <div className="map-container w-[350px] md:w-[500px] h-[400px] md:h-[750px]">
              <OpenStreetMapFridayComponent />
            </div>
            <div className="image-container ml-0 mt-5 md:mt-0 md:ml-5 w-[350px] md:w-[500px] h-[400px] md:h-[750px]">
              <Image src="/venue.jpg" alt="Genilla" width={500} height={750} className="object-cover" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container w-full text-center my-5">
      <div className="tabs flex justify-center mb-5">
        
        <button
          className={`tab px-5 py-2 mx-2 border-2 cursor-pointer transition-colors duration-300 ${activeTab === 'party' ? 'bg-[#7d9b76] text-white' : 'bg-white text-[#545748]'}`}
          onClick={() => setActiveTab('party')}
        >
          {t('sections.Party')}
        </button>
        <button
          className={`tab px-5 py-2 mx-2 border-2 cursor-pointer transition-colors duration-300 ${activeTab === 'wedding' ? 'bg-[#7d9b76] text-white' : 'bg-white text-[#545748]'}`}
          onClick={() => setActiveTab('wedding')}
        >
          {t('sections.Wedding')}
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default MapTabs;
