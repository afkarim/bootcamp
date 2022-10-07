import {
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  Spacer,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import Document from '../documents/document';

const Documents = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" mx={50} my={10} gap={8}>
      <GridItem>
        <Link href="/">
          <Image src="/create-document.svg" alt="Create document" w={130} />
        </Link>
      </GridItem>
      <GridItem>
        <Document />
      </GridItem>
      <Text>test</Text>
    </Grid>
  );
};

export default Documents;
