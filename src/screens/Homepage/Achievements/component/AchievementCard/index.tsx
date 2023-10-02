
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AchievementCardProps {
  title: string;
  icon: any;
  count: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, icon, count }) => (
  <div className="card border-0 col-6 col-md-6 col-lg-3">
    <div className="element-achievements">
      <div className=" card-ico">
        <h4>{title}</h4>
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <div className="card-text">
        <h3>{count}</h3>
      </div>
    </div>
  </div>
);

export default AchievementCard;

// Add an empty export statement to mark the file as a module
export {};
