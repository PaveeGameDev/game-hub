import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const GameCardContainer = ({ children }: Props) => (
  <Box borderRadius={10} overflow="hidden">
    {children}
  </Box>
);
