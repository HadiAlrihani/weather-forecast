import { useEffect, useState } from "react";

function useCityClock(tzId) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (!tzId) return;

    function updateTime() {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-CA", {
        timeZone: tzId,
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now);
      setLocalTime(formatted);
    }

    updateTime(); // immediately show
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [tzId]);

  return localTime;
}

export default useCityClock