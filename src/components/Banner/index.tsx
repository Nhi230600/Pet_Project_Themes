import React from "react";
import "./Banner.css";

interface ImageComponentProps {
  contentUrl: string;
  contentType: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  contentUrl,
  contentType,
}) => {
  return (
    <div className="image-container">
      {contentType === "image" && (
        <img src={contentUrl} className="chip-mark" />
      )}
      {contentType === "iframe" && (
        <iframe src={contentUrl} className="iframe-chip-mark" />
      )}
    </div>
  );
};

export default ImageComponent;
