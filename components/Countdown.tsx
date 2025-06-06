'use client';
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const t = useTranslations('Countdown');
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);

  const calculateTimeLeft = React.useCallback(() => {
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
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  if (!timeLeft) return null; // No renderiza nada en SSR

  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex space-x-2 md:space-x-4 text-center">
        <div>
          <span className="md:text-3xl">{String(timeLeft.days).padStart(2, '0')}</span>
          <div className="font-tanpearl text-xs">{t('days')}</div>
        </div>
        <div>
          <span className="md:text-3xl">{String(timeLeft.hours).padStart(2, '0')}</span>
          <div className="font-tanpearl text-xs">{t('hours')}</div>
        </div>
        <div>
          <span className="md:text-3xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <div className="font-tanpearl text-xs">{t('minutes')}</div>
        </div>
        <div>
          <span className="md:text-3xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <div className="font-tanpearl text-xs">{t('seconds')}</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
