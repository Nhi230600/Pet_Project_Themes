import React from 'react';
import "./Banner.css"

interface ImageComponentProps {
  contentUrl: string; // Thay đổi tên thuộc tính thành contentUrl
  contentType: string; // Thêm một thuộc tính contentType để xác định loại nội dung
}

const ImageComponent: React.FC<ImageComponentProps> = ({ contentUrl, contentType }) => {
  return (
    <div className="image-container">
      {contentType === 'image' && (
        <img src={contentUrl}  className='chip-mark' />
      )}
      {contentType === 'iframe' && (
        <iframe src={contentUrl} className="iframe-chip-mark" />
      )}
    </div>
  );
};

export default ImageComponent;
