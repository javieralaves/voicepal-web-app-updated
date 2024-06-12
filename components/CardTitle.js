import React from "react";

const CardTitle = ({ title, timestamp }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
      <div className="self-stretch relative tracking-[-0.01em] leading-[120%] font-extrabold">
        {title}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[6px] text-[13px] text-textsecondary">
        <img className="w-4 relative h-4" alt="" src="ClockIcon.svg" />
        <div className="flex-1 relative tracking-[-0.04em] leading-[120%]">
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
