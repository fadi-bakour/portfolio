"use client";

import { createFileRoute } from "@tanstack/react-router";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaMessage } from "react-icons/fa6";

import MainLayout from "../../layouts/Main";
import ProfilePic from "../../assets/fadi_bakour_profile.jpeg";
import { message, phoneNumber } from "../../utils/contstants";

export const Route = createFileRoute("/portfolio/")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Box position="relative" overflow="hidden" py={20}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={10}
          >
            {/* Left Content */}
            <Stack spacing={6} maxW={{ base: "100%", lg: "50%" }}>
              <Text fontSize="xl" fontWeight="medium">
                Hi There, I'm
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Fadi Bakour
              </Heading>
              <Box borderTop="3px solid" borderColor="blue.500" width="100px" />
              <Heading as="h3" fontSize="2xl" fontWeight="medium">
                Software Engineer |
              </Heading>
              <Text color="gray.500" fontSize="lg">
                A Software Engineer with over {getYearsSince("2016-12-20")}{" "}
                years of experience in software development. My expertise lies
                in building web and mobile applications using React, Node.js,
                and React Native. I have worked on multiple SaaS projects,
                transforming business requirements into functional features
                while optimizing existing systems for better performance. My
                personal mission is to keep developing myself non-stop.
              </Text>
              <Box>
                <Button
                  size="lg"
                  colorScheme="blue"
                  px={8}
                  leftIcon={<FaMessage />}
                  as={"a"}
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                >
                  Contact Me
                </Button>
              </Box>
            </Stack>
            <Box
              position="relative"
              width={{ base: "300px", md: "400px", lg: "500px" }}
              height={{ base: "300px", md: "400px", lg: "500px" }}
            >
              {/* Decorative Elements */}
              <Box
                position="absolute"
                top="0"
                right="0"
                bottom="0"
                left="0"
                borderRadius="full"
                border="3px solid"
                borderColor="blackAlpha.800"
                zIndex="1"
              />
              <Box
                position="absolute"
                top="-10px"
                right="-10px"
                bottom="-10px"
                left="-10px"
                borderRadius="full"
                bg="blue.500"
                opacity="0.8"
                zIndex="0"
              />

              {/* Profile Image */}
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="full"
                width="100%"
                height="100%"
                zIndex="2"
              >
                <Image
                  src={ProfilePic}
                  alt="Fadi Bakour"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </MainLayout>
  );
}

function getYearsSince(dateString: string) {
  const pastDate = new Date(dateString);
  const today = new Date();

  let years = today.getFullYear() - pastDate.getFullYear();

  // Adjust if the past date hasn't occurred yet this year
  if (
    today.getMonth() < pastDate.getMonth() ||
    (today.getMonth() === pastDate.getMonth() &&
      today.getDate() < pastDate.getDate())
  ) {
    years--;
  }

  return years;
}
