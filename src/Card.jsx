import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import image1 from './image-1.png';
import image2 from './image-2.png';
import image3 from './image-3.png';
import { Padding } from "@mui/icons-material";

const CARD_COLORS = ["#266678", "#cb7c7a", "#36a18b", "#cda35f", "#747474"];
const IMAGES = [image1, image2, image3, image2, image1];
const NAME = ["Indibuzz","Cupin","Instamart","Cupin","Indibuzz"]
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

const CardStack = () => {
  const [cards, setCards] = React.useState(CARD_COLORS);
  const [images, setImages] = React.useState(IMAGES);
  const [name, setName]=React.useState(NAME);
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
    setImages(move(images, from, images.length - 1));
    setName(move(name,from,name.length - 1));
  };

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((color, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={color}
              style={{
                ...cardStyle,
                backgroundColor: color,
                cursor: canDrag ? "grab" : "auto",
                zIndex: CARD_COLORS.length - index
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              <div style={imageContainerStyle}>
                <img 
                  src={images[index]} 
                  alt={`Card ${index + 1}`} 
                  style={imageStyle} 
                />
                <h3 style={{color:'white',marginTop:'-5px'}}>{name[index]}</h3>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "45vh"
};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};

const cardStyle = {
  paddingTop:"20px",
  position: "absolute",
  width: "280px",
  height: "205px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
};

const imageContainerStyle = {
  width: "100%",
  height: "100%",
  display: "fle",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none" // Ensures the image doesn't block dragging functionality
};

const imageStyle = {
  maxWidth: "80%",
  maxHeight: "80%",
  borderRadius: "8px"
};

export default CardStack;
