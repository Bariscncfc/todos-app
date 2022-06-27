import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div>
      <h2 className="text-xl font-semibold">It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Clock;
