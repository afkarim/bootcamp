import { Box, Flex, Heading, Button, Spacer, Image } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex mx="50px" justify="center">
      <Flex justify="center">
        <Image src="logo.svg" alt="Notiom logo" />
        <Heading>Notiom</Heading>
      </Flex>
      <Spacer />
      <Button>Create</Button>
    </Flex>
  );
};

export default NavBar;
