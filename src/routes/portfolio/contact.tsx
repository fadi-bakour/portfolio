import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { MdEmail, MdPhone } from "react-icons/md";

import MainLayout from "../../layouts/Main";
import ContactImage from "../../assets/contact_me.png";
import { message, phoneNumber } from "../../utils/contstants";

export const Route = createFileRoute("/portfolio/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout>
      <Container maxW="container.xl" py={10}>
        <Box
          p={4}
          position="relative"
          maxW="1200px"
          mx="auto"
          mt={{ base: 0, lg: 50 }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, lg: 0 }}
            align="stretch"
            justify="space-between"
          >
            {/* Left Section */}
            <Box w={{ base: "full", lg: "35%" }} pt={{ base: 0, lg: 20 }}>
              <Heading
                as="h1"
                fontSize="5xl"
                fontWeight="bold"
                mb={6}
                color={"blue.500"}
              >
                Contact Us
              </Heading>
              <Text fontSize="lg" mb={10} lineHeight="tall">
                Not sure what you need? The team at Square Events will be happy
                to listen to you and suggest event ideas you hadn&apos;t
                considered
              </Text>

              <Stack spacing={4} mt={8}>
                <Flex align="center">
                  <Box as={MdEmail} size="24px" mr={3} color={"blue.500"} />
                  <Text fontSize="lg">
                    <Box as="a" href="mailto:fadi.bakour101@gmail.com">
                      Email: fadi.bakour101@gmail.com
                    </Box>
                  </Text>
                </Flex>
                <Flex align="center">
                  <Box as={MdPhone} size="24px" mr={3} color={"blue.500"} />
                  <Text fontSize="lg">
                    <Box
                      as="a"
                      href={`https://wa.me/${phoneNumber}?text=${message}`}
                    >
                      whatsapp: 0172848453
                    </Box>
                  </Text>
                </Flex>
              </Stack>
            </Box>

            {/* Right Section - Form */}
            <Box
              w={{ base: "full", lg: "60%" }}
              position="relative"
              textAlign={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Image
                src={ContactImage}
                alt="Contact Us"
                maxW="100%"
                maxH={500}
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </MainLayout>
  );
}
