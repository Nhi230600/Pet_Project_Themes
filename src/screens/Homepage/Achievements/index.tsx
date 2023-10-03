// index.tsx
import React, { useState, useEffect } from "react";
import "./Achievements.css";
import AchievementCard from "./component/AchievementCard";
import { achievementsData } from "./Contants";
import { startCounting } from "helpers/StartCounting";

const initialAchievements: Record<string, number> = {
  started: 0,
  pets: 0,
  playDays: 0,
  baths: 0,
};

const App: React.FC = () => {
  const [achievements, setAchievements] = useState(initialAchievements);

  useEffect(() => {
    achievementsData.forEach((achievement) => {
      startCounting(achievement.count, achievement.key, setAchievements);
    });
  }, []);

  return (
    <div>
      <section className="progress-bars2 counters cid-rGtBgCg3f6" id="counters1-31">
        <div className="container">
          <h2 className="mbr-section-title mbr-bold pb-5 align-center mbr-fonts-style display-2">
            <div>
              <span>Our Achievements</span>
              <br />
            </div>
          </h2>

          <div className="row justify-content-center">
            {achievementsData.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                icon={achievement.icon}
                count={achievements[achievement.key] || 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
