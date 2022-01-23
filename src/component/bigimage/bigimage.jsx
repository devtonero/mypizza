import { useState } from "react";

import {
  ImageContainer,
  ImageContent,
  ImageItems,
  ImageH1,
  ImageP,
  ImageBtn,
} from "./bigimage.styles";
import NavBar from "../navbar/navbar";
import SideBar from "../sidebar/sidebar";

const BigImage = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <ImageContainer>
      <NavBar toggle={toggle} />
      <SideBar IsOpen={IsOpen} toggle={toggle} />
      <ImageContent>
        <ImageItems>
          <ImageH1>Greatest Pizza Ever</ImageH1>
          <ImageP>Ready in 60 Seconds</ImageP>
          <ImageBtn>Place Your Order Now</ImageBtn>
        </ImageItems>
      </ImageContent>
    </ImageContainer>
  );
};

export default BigImage;
