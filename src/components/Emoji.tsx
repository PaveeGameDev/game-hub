import bullsEye from "../assets/emojis/bullsEye.png";
import thumbsUp from "../assets/emojis/thumbsUp.png";
import thumbsDown from "../assets/emojis/thumbsDown.png";
import { Image, ImageProps } from "@chakra-ui/react";

type Props = {
  rating: number;
};

export const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: thumbsDown, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};
