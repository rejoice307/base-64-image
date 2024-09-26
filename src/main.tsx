import { ChangeEvent, useState } from "react";
import { githubLogo } from "./assets/images";


import "./main.css";

export function Main() {

  const [convertedImage, setConvertedImage] = useState(githubLogo)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    const [selectedImage] = event.target.files
    if (!selectedImage) return null
    const reader = new FileReader();
    console.log('readd', reader)

    reader.onloadend = function () {
      const base64Img = reader.result;
      if (typeof base64Img === 'string') setConvertedImage(base64Img)
      console.log('base 64', base64Img)
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleBase64ToImage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setConvertedImage(event.target.value)
  }


  return (
    <main className="">
      <input type="file" multiple={false} name="image" onChange={handleChange} />
      <img src={convertedImage} alt="img" />
      <textarea name="base64img" onChange={handleBase64ToImage} value={convertedImage} rows={5} className="mb-5 px-2 mx-6 flex w-full" />
    </main>
  );
}
