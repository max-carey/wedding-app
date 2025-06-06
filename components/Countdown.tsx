'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl'; 


interface CountdownProps {
  targetDate: string; // formato: '2026-02-14T00:00:00'
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const t = useTranslations('Countdown');

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex space-x-4 text-center">
        <div>
          <span className="text-3xl">{String(timeLeft.days).padStart(3, '0')}</span>
          <div className="text-xs">{t('days')}</div>
        </div>
        <div>
          <span className="text-3xl">{String(timeLeft.hours).padStart(2, '0')}</span>
          <div className="text-xs">{t('hours')}</div>
        </div>
        <div>
          <span className="text-3xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <div className="text-xs">{t('minutes')}</div>
        </div>
        <div>
          <span className="text-3xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <div className="text-xs">{t('seconds')}</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
