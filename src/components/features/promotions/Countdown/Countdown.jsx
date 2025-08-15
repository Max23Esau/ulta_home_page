import { useState, useEffect } from "react";
import './Countdown.css'

const Countdown = ({title, bgColor1 = "#fff", bgColor2="#fff", colorText = "#000"}) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="Countdown" style={{ background: `linear-gradient(135deg, ${bgColor1} 0%, ${bgColor2} 100%)`, color: colorText}}>
      <div className="Countdown__container">
        <h2>{title}</h2>
        <div className="Countdown__timer">
          <span>{String(timeLeft.hours).padStart(2, '0')} <br></br> horas</span>
          <span>{String(timeLeft.minutes).padStart(2, '0')} <br></br> minutos</span>
          <span>{String(timeLeft.seconds).padStart(2, '0')} <br></br> segundos</span>
        </div>
      </div>
    </header>
  );
};

export default Countdown;