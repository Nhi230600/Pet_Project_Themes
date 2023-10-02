

export const startCounting = (
    target: number,
    key: string,
    setAchievements: React.Dispatch<React.SetStateAction<Record<string, number>>>
  ) => {
    const step = Math.ceil(target / 100);
  
    let current = 0;
  
    const interval = setInterval(() => {
      if (current < target) {
        current += step;
        setAchievements((prevAchievements) => ({
          ...prevAchievements,
          [key]: current,
        }));
      } else {
        clearInterval(interval);
      }
    }, 10);
  };
  