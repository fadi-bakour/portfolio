import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Container,
  Heading,
} from "@chakra-ui/react";
import {
  FaGraduationCap,
  FaCode,
  FaMobileAlt,
  FaBuilding,
} from "react-icons/fa";

import MainLayout from "../layouts/main";

export const Route = createFileRoute("/education")({
  component: RouteComponent,
});

const TimelineItem = ({
  year,
  color,
  title,
  subtitle,
  period,
  location,
  icon,
}) => {
  return (
    <Flex mb={6} position="relative">
      {/* Year sidebar */}
      <Box
        bg={color}
        color="white"
        p={4}
        width="80px"
        height="120px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderTopLeftRadius="md"
        borderBottomLeftRadius="md"
        fontWeight="bold"
        fontSize="xl"
      >
        {year}
      </Box>

      {/* Content card */}
      <Box
        bg={useColorModeValue("white", "gray.700")}
        p={4}
        flex="1"
        borderTopRightRadius="md"
        borderBottomRightRadius="md"
        boxShadow="md"
        position="relative"
      >
        <HStack spacing={2} mb={1}>
          <Text fontWeight="bold" fontSize="lg" color={color}>
            {title}
          </Text>
        </HStack>
        <Text fontSize="sm" mb={1}>
          {subtitle}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {period}, {location}
        </Text>

        {/* Icon in the bottom right */}
        <Box position="absolute" bottom={4} right={4} color={color}>
          {icon}
        </Box>
      </Box>
    </Flex>
  );
};

function RouteComponent() {
  return (
    <MainLayout>
      <Container maxW="container.xl" py={10}>
        <Box p={4} position="relative" maxW="1200px" mx="auto">
          <Box mb={20} textAlign="center">
            <Heading as="h1" size="xl" fontWeight="bold">
              My Education
            </Heading>
          </Box>
          <VStack spacing={0} align="stretch">
            <TimelineItem
              year="2021"
              color="#3182CE" // blue
              title="Udemy"
              subtitle="NodeJS - The Complete Guide"
              period="Nov 2021"
              location=""
              icon={<FaCode size={24} />}
            />

            <TimelineItem
              year="2021"
              color="#DD6B20" // orange
              title="Udemy"
              subtitle="The Complete React Native + Hooks Course"
              period="Sep 2021"
              location=""
              icon={<FaMobileAlt size={24} />}
            />

            <TimelineItem
              year="2020"
              color="#38A169" // green
              title="University of the people"
              subtitle="Associate degree in computer science"
              period="May 2017-Apr 2020"
              location="USA"
              icon={<FaGraduationCap size={24} />}
            />

            <TimelineItem
              year="2016"
              color="#E53E3E" // red
              title="Al wadi international university"
              subtitle="Bachelor degree in architecture"
              period="Oct 2010-Nov 2016"
              location="Syria"
              icon={<FaBuilding size={24} />}
            />
          </VStack>
        </Box>
      </Container>
    </MainLayout>
  );
}
