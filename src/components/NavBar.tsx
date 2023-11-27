import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logoGameHub.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

type Props = {
  onSearch: (searchText: string) => void;
};

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
