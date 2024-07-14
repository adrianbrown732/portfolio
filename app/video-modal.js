import { useRef } from "react";
import Image from "next/image";

export default function Video({ imgURL, alt, videoURL, sampleName, myRole }) {
  const dialogRef = useRef(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <div className="video-wrapper">
      <button onClick={toggleDialog}>
        <Image src={imgURL} alt={alt} />
      </button>
      <dialog ref={dialogRef}>
        <div className="iframe-wrapper">
          <iframe
            src={videoURL}
            width="640"
            height="564"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <div className="modal-footer">
          <div className="modal-footer-details">
            <p>{sampleName}</p>
            <p>{myRole}</p>
          </div>
          <button className="close-button" onClick={toggleDialog}>
            <span>&#10005;</span>
          </button>
        </div>
      </dialog>
    </div>
  );
}
