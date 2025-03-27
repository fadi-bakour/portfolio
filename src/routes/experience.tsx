import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  Flex,
  Text,
  VStack,
  Circle,
  Heading,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Hide,
  Container,
} from "@chakra-ui/react";
import { FaCircle, FaMapMarkerAlt } from "react-icons/fa";

import MainLayout from "../layouts/Main";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  interface ExperienceItem {
    company: string;
    position: string;
    location: string;
    period: string;
    responsibilities: string[];
  }

  const experienceData: ExperienceItem[] = [
    {
      company: "Orgtomic",
      position: "Senior Software developer",
      location: "Kuala Lumpur",
      period: "Oct 2024 - current",
      responsibilities: [
        "Transforming business requirements to Features using Fastify and ReactJS.",
        "Integration with third party providers.",
      ],
    },
    {
      company: "Ace Resources",
      position: "Senior Software developer",
      location: "Kuala Lumpur",
      period: "Oct 2023 - Oct 2024",
      responsibilities: [
        "Transforming business requirements to Features using Express.js and ReactJS for multiple SAAS projects.",
        "Optimizing old mobile and web using react-native and express/react.",
      ],
    },
    {
      company: "Zing Healthcare",
      position: "Senior Software developer",
      location: "Kuala Lumpur",
      period: "Aug 2021 - Oct 2023",
      responsibilities: [
        "Developing 2 company apps on android and IOS using React Native.",
        "Migrating and restructuring application APIs from Laravel to Express.",
        "Maintaining Laravel 5.7 medical system dashboard.",
        "Transforming business requirements to Features in Node.js express and Laravel.",
      ],
    },
    {
      company: "Nexotech Malaysia",
      position: "Software developer",
      location: "Kuala Lumpur",
      period: "Jun 2020 - Jul 2021",
      responsibilities: [
        "Coordinating between the design team and the development team.",
        "Developing multiple HTML, CSS, JS websites.",
        "Maintaining and developing Laravel 5.7 Email system dashboard.",
        "Creating a mobile application using React Native for Android and IOS.",
        "Transforming business requirements to Features in Laravel.",
      ],
    },
    {
      company: "AL Sakkaf Travel And Tours SDN BHD",
      position: "Frontend Developer",
      location: "Kuala Lumpur",
      period: "Dec 2016 - Jun 2020",
      responsibilities: [
        "Changes to website articles using system dashboard using HTML,CSS.",
      ],
    },
  ];

  const accentColor = useColorModeValue("blue.600", "blue.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bgColor = useColorModeValue("white", "gray.800");
  const cardBgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <MainLayout>
      <Container maxW="container.xl" py={10}>
        <Box p={4} position="relative" maxW="1200px" mx="auto">
          <Box mb={20} textAlign="center">
            <Heading as="h1" size="xl" fontWeight="bold">
              My Experience
            </Heading>
          </Box>

          {/* Vertical line */}
          <Hide below="md">
            <Box
              mt={100}
              position="absolute"
              left="50%"
              top="0"
              bottom="0"
              width="2px"
              bg={borderColor}
              zIndex={1}
              transform="translateX(-50%)"
            />
          </Hide>

          <VStack spacing={0} align="stretch">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <Box key={index} position="relative" pb={10} mb={6}>
                  {/* Timeline dot */}
                  <Hide below="md">
                    <Circle
                      size="16px"
                      bg={accentColor}
                      border="3px solid"
                      borderColor={bgColor}
                      position="absolute"
                      left="50%"
                      top="24px"
                      transform="translateX(-50%)"
                      zIndex={2}
                    />
                  </Hide>
                  {/* Content */}
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                  >
                    <Box
                      width={{ base: "100%", md: "46%" }}
                      ml={{ base: 0, md: isEven ? 0 : "auto" }}
                      mr={{ base: 0, md: isEven ? "auto" : 0 }}
                      textAlign={{
                        base: "left",
                        md: isEven ? "right" : "left",
                      }}
                      pr={{ base: 0, md: isEven ? 8 : 0 }}
                      pl={{ base: 0, md: isEven ? 0 : 8 }}
                      bg={cardBgColor}
                      borderRadius="md"
                      p={6}
                      boxShadow="md"
                      borderLeft={isEven ? "none" : `4px solid ${accentColor}`}
                      borderRight={isEven ? `4px solid ${accentColor}` : "none"}
                    >
                      <Flex
                        direction="row"
                        justify={{
                          base: "space-between",
                          md: isEven ? "flex-end" : "flex-start",
                        }}
                        align="center"
                        mb={2}
                        gap={3}
                        flexWrap="wrap"
                      >
                        <Heading
                          as="h3"
                          fontSize="xl"
                          fontWeight="medium"
                          order={{ base: 1, md: isEven ? 2 : 1 }}
                        >
                          {item.company}
                        </Heading>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                          fontWeight="medium"
                          bg="gray.100"
                          px={3}
                          py={1}
                          borderRadius="full"
                          order={{ base: 2, md: isEven ? 1 : 2 }}
                        >
                          {item.period}
                        </Text>
                      </Flex>

                      <Heading
                        as="h4"
                        fontSize="md"
                        fontWeight="medium"
                        color={accentColor}
                        mb={1}
                      >
                        {item.position}
                      </Heading>

                      <Flex
                        align="center"
                        mb={4}
                        justify={{
                          base: "flex-start",
                          md: isEven ? "flex-end" : "flex-start",
                        }}
                      >
                        <Box as={FaMapMarkerAlt} color="gray.500" mr={1} />
                        <Text fontSize="sm" color="gray.500">
                          {item.location}
                        </Text>
                      </Flex>

                      <List spacing={2} textAlign="left">
                        {item.responsibilities.map((resp, idx) => (
                          <ListItem
                            key={idx}
                            display="flex"
                            alignItems="flex-start"
                            flexDirection={
                              isEven && !isEven ? "row-reverse" : "row"
                            }
                          >
                            <ListIcon
                              as={FaCircle}
                              color={accentColor}
                              fontSize="8px"
                              mt={2}
                              mr={isEven && !isEven ? 0 : 2}
                              ml={isEven && !isEven ? 2 : 0}
                            />
                            <Text>{resp}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </VStack>
        </Box>
      </Container>
    </MainLayout>
  );
}
