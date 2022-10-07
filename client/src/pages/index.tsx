import type { NextPage } from 'next';
import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import Documents from '../components/documents';
import NavBar from '../components/nav-bar';

const Home: NextPage = () => {
  return (
    <>
      <Box bg="#FBFBFA">
        <NavBar />
        <VStack spacing={10} pt={100} pb={90}>
          <Heading color="#545454" size="2xl">
            Create. Explore.
          </Heading>
          <Text color="#545454" fontSize="3xl">
            The document editing software you&apos;ve been waiting for.
          </Text>
        </VStack>
      </Box>
      <Documents />
    </>
  );
};

export default Home;
