import { faImage, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageUploadButton = styled.label`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border: ${(props) => (props.isImage ? 'none' : '1px dashed #dadada')};
  color: #dadada;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-right: 10px;
  padding-bottom: 10px;

  input {
    display: none;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const RepresentativeButton = styled.button`
  width: 45px;
  height: 18px;
  border-radius: 5px;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: 'Noto Sans KR';
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  opacity: 0; /* Initially hidden */

  /* Show the button when hovering over the parent */
  ${ImageUploadButton}:hover & {
    opacity: 1;
  }
`;

const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #404040;
  display: ${(props) =>
    props.isImage ? 'block' : 'none'}; /* Show only when it's an image */
  justify-content: center;
  text-align: center;
  border: none;
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  color: white;
`;

const RepresentativeText = styled.div`
  width: 45px;
  height: 18px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
  font-family: 'Noto Sans KR';
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
`;

const PhotoUploader = ({ onImageCountChange }) => {
  const [images, setImages] = useState([]);
  const [representative, setRepresentative] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && images.length < 10) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        const newImages = [...images, imageUrl];
        setImages(newImages);
        if (!representative) {
          setRepresentative(imageUrl);
        }
        onImageCountChange(newImages.length);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSetRepresentative = (imageUrl) => {
    setRepresentative(imageUrl);
  };

  const handleDeleteImage = (imageUrl) => {
    const newImages = images.filter((img) => img !== imageUrl);
    setImages(newImages);
    if (representative === imageUrl) {
      setRepresentative(newImages[0] || null); // Set the first image as representative or null if there are no images left
    }
    onImageCountChange(newImages.length);
  };

  return (
    <Container>
      {images.map((imageUrl, index) => (
        <ImageUploadButton
          key={index}
          isRepresentative={representative === imageUrl}
          isImage={true} // Set isImage to true when rendering an image
          onClick={(e) => e.stopPropagation()} // Prevent image click from propagating
        >
          {representative !== imageUrl && (
            <>
              <RepresentativeButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click propagation
                  handleSetRepresentative(imageUrl);
                }}
              >
                대표
              </RepresentativeButton>
              <DeleteButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click propagation to the entire button
                  handleDeleteImage(imageUrl);
                }}
                isImage={true} // Set isImage to true when rendering an image
              >
                <FontAwesomeIcon icon={faX} style={{ fontSize: '10px' }} />
              </DeleteButton>
            </>
          )}
          {representative === imageUrl && (
            <RepresentativeText
              onClick={(e) => e.stopPropagation()} // Prevent text click from propagating
            >
              대표
            </RepresentativeText>
          )}
          <img src={imageUrl} alt="Uploaded" />
        </ImageUploadButton>
      ))}
      {images.length < 10 && (
        <ImageUploadButton>
          <IconTextContainer>
            <input type="file" accept="image/*" onChange={handleImageUpload} />

            <FontAwesomeIcon
              icon={faImage}
              style={{ fontSize: '25px', textAlign: 'center' }}
            />
            <span>사진 추가하기</span>
          </IconTextContainer>
        </ImageUploadButton>
      )}
    </Container>
  );
};

export default PhotoUploader;
