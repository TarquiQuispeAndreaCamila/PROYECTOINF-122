import video from "../assets/backvid3.mp4";
const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
