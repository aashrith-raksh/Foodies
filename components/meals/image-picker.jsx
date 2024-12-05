"use client";

import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImageURL, setPickedImageURL] = useState("");

  function handlePickClick() {
    imageInput.current.click();
  }
  function handleInputChange(e) {
    const pickedFile = e.target.files[0];

    console.log('pciked file', pickedFile)

    if (!pickedFile) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const fileURL = fileReader.result;
      setPickedImageURL(fileURL);
    };
    fileReader.readAsDataURL(pickedFile);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.preview}>
        {pickedImageURL ? (
          <Image src={pickedImageURL} alt="Image picked by the user" fill />
        ) : (
          <p>No image picked yet</p>
        )}
      </div>
      <div className={classes.controls}>
        <input
          required
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleInputChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
