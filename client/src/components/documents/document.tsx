import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Spacer,
  Image,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const test = (event: any) => {
  console.log(event.target.innerText);
};

const Document = () => {
  return (
    <Box
      w={130}
      h={130}
      bg="#F8F8F8"
      color="#545454"
      border="2px"
      borderColor="#A3A3A3"
      borderRadius={10}
      as="button"
      onClick={test}
    >
      <Text color="#545454" align="center" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur
      </Text>
    </Box>
  );
};

export default Document;
