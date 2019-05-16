import React, { useState } from "react";

const YoukuEmbed = () => {
  return (
    <iframe
      height="498"
      width="510"
      src="https://player.youku.com/embed/XMzI1NzA2MzE2MA=="
      frameborder="0"
      allowfullscreen
    />
  );
};

const StressTestEmbed = () => {
  const [count, setCount] = useState(10);

  const Vids = ({ count }) => {
    const out = [...Array(parseInt(count))];

    return out.map((v, i) => {
      return <YoukuEmbed key={i} />;
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
