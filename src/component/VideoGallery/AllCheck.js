import React from "react";

import styles from "./index.module.css";

import vidsrc from "../../assets/SampleVideo_1280x720_10mb.mp4";

const YoutubeEmbed = () => {
  return (
    <>
      <h1>Youtube Embed</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VwVg9jCtqaU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </>
  );
};

const YoukuEmbed = () => {
  return (
    <>
      <h1>Youku Embed</h1>
      <iframe
        height="498"
        width="510"
        src="http://player.youku.com/embed/XMzI1NzA2MzE2MA=="
        frameborder="0"
        allowfullscreen
      />
    </>
  );
};

const Mp4Local = () => {
  return (
    <>
      <h1>Local file</h1>
      <video height={400} controls autoPlay playsInline loop muted>
        <source src={vidsrc} type="video/webm" />
      </video>
    </>
  );
};

const Test = () => {
  return (
    <div className={styles.videoContainer}>
      <YoutubeEmbed />
      <br />
      <YoukuEmbed />
      <br />
      <Mp4Local />
    </div>
  );
};

export default Test;
