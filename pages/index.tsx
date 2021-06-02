import React from 'react'
import { Avatar, Box, Button, Center, Heading, Image, Link, VStack } from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Center as="main" h="100%" p="15px">
      <Box
        borderWidth='1px'
        borderRadius="lg"
        bg="white"
        color="black"
        w="2xl"
        p="15px"
      >

        <VStack spacing="24px" align="inherit">
          <Box
            position="relative"
            align="center"
          >
            <Avatar
              position="absolute"
              borderWidth="2px"
              top="-79px"
              left="0"
              right="0"
              marginLeft="auto"
              marginRight="auto"
              size="2xl"
              zIndex="1"
              name="Wilgnne"
              src="https://github.com/wilgnne.png"
            />
            <Image
              src="/github-contribution-grid-snake.svg"
            />
          </Box>
          <Box align="center">
            <Heading>Wilgnne K.</Heading>
          </Box>

          <Link href="https://github.com/wilgnne" isExternal w="100%">
            <Button
              background="#373e47"
              colorScheme="black"
              color="white"
              w="100%"
              leftIcon={<FaGithub />}
            >
              GitHub
            </Button>
          </Link>
          
          <Link href="https://www.linkedin.com/in/wilgnne/" isExternal w="100%">
            <Button colorScheme="linkedin" w="100%" leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
          </Link>
          
          <Link href="https://twitter.com/WilgnneK" isExternal w="100%">
            <Button colorScheme="twitter" w="100%" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>
        </VStack>
      </Box>
    </Center>
  )
}
