import { Box, Flex, Heading, Button, Spacer, Image } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex mx={50} pt={4} align="center">
      <Flex align="center">
        <Image src="logo.svg" alt="Notiom logo" w={10} mr={4} />
        <Heading size="lg" color="#545454" fontWeight="extrabold">
          Notiom
        </Heading>
      </Flex>
      <Spacer />
      <Button variant="create">Create</Button>
    </Flex>
  );
};

export default NavBar;
