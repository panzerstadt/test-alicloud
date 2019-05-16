import React, { useState } from "react";

import vidsrc from "../../assets/SampleVideo_1280x720_10mb.mp4";

const Mp4Local = () => {
  return (
    <video height={200} controls playsInline>
      <source src={vidsrc} type="video/webm" />
    </video>
  );
};

const StressTestEmbed = () => {
  const [count, setCount] = useState(10);

  const Vids = ({ count }) => {
    const out = [...Array(parseInt(count))];
    console.log(out);
    return out.map((v, i) => {
      return <Mp4Local key={i} />;
    });
  };

  return (
    <div>
      <input
        placeholder="how many videos at once"
        value={count}
        onChange={e => e.target.value > 0 && setCount(e.target.value)}
      />
      <br />
      <Vids count={count} />
    </div>
  );
};

export default StressTestEmbed;
