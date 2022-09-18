import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Documents from "../components/documents";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <VStack>
        <Heading>Create. Explore.</Heading>
        <Text>The document editing software you&apos;ve been waiting for.</Text>
      </VStack>
      <Documents />
    </>
  );
};

export default Home;
