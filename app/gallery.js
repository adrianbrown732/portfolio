import Video from "./video-modal";
import phsImg from "../public/roots-portrait.png";

export default function VideoGallery() {
  return (
    <>
      <Video
        imgURL={phsImg}
        alt="video sample 1"
        videoURL="https://player.vimeo.com/video/861280731?h=dca1f5dfd9"
        sampleName="Roots to Re-Entry"
        myRole="Videographer / Editor"
      ></Video>
    </>
  );
}
