"use client";

import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/main";
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Container,
  Image,
  Text,
  VStack,
  HStack,
  Circle,
} from "@chakra-ui/react";
import {
  FaCode,
  FaDatabase,
  FaTasks,
  FaGitAlt,
  FaReact,
  FaCloud,
} from "react-icons/fa";

import laptopImage from "../assets/laptop_typing.jpg";

export const Route = createFileRoute("/skills")({
  component: RouteComponent,
});

 const DeveloperIllustration = () => {
  return (
    <Box position="relative" width="100%" maxW="300px">
      <Image
        src={laptopImage}
        alt="Developer with laptop"
        width="100%"
        height="auto"
      />
    </Box>
  );
};

type Skill = {
  title: string;
  description: string;
  color: string;
  icon: string;
};

type SkillsSectionProps = {
  skills: Skill[];
  direction: "left" | "right";
};

const SkillsSection = ({ skills, direction }: SkillsSectionProps) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <FaCode />;
      case "database":
        return <FaDatabase />;
      case "agile":
        return <FaTasks />;
      case "git":
        return <FaGitAlt />;
      case "react":
        return <FaReact />;
      case "cloud":
        return <FaCloud />;
      default:
        return <FaCode />;
    }
  };

  return (
    <VStack
      spacing={8}
      align={direction === "right" ? "flex-end" : "flex-start"}
    >
      {skills.map((skill, index) => (
        <Flex
          key={index}
          align="center"
          direction={direction === "right" ? "row" : "row-reverse"}
          w="100%"
        >
          <Box
            flex={1}
            bg={bgColor}
            borderRadius="full"
            boxShadow="md"
            border="1px solid"
            borderColor={borderColor}
            p={4}
            position="relative"
            zIndex={1}
          >
            <Flex align="center">
              <Circle
                size="50px"
                bg={skill.color}
                color="white"
                mr={4}
              >
                {getIcon(skill.icon)}
              </Circle>
              <Box>
                <Text fontWeight="bold">{skill.title}</Text>
                <Text fontSize="sm">{skill.description}</Text>
              </Box>
            </Flex>
          </Box>

          <HStack
            spacing={0}
            flex={0.2}
            justify="center"
            position="relative"
            zIndex={0}
          >
            <Box h="2px" w="full" bg={skill.color} />
            <Circle size="10px" bg={skill.color} />
          </HStack>
        </Flex>
      ))}
    </VStack>
  );
};

function RouteComponent() {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <MainLayout>
      <Container maxW="container.xl" py={10}>
        <Box
          position="relative"
          bg={bgColor}
          borderRadius="xl"
          overflow="hidden"
          p={4}
        >
          <Box mb={10} textAlign="center">
            <Heading as="h1" size="xl" fontWeight="bold">
              My Technical Skills
            </Heading>
          </Box>

          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align="center"
            wrap="wrap"
          >
            {/* Left side skills */}
            <Box w={{ base: "100%", lg: "40%" }}>
              <SkillsSection
                skills={[
                  {
                    title: "Programming languages",
                    description: "JS, TS, PHP, HTML, CSS",
                    color: "cyan.400",
                    icon: "code",
                  },
                  {
                    title: "Databases",
                    description: "MySQL, MongoDB",
                    color: "orange.400",
                    icon: "database",
                  },
                  {
                    title: "Methodologies",
                    description: "Agile",
                    color: "pink.400",
                    icon: "agile",
                  },
                  {
                    title: "Version control",
                    description: "Git",
                    color: "teal.400",
                    icon: "git",
                  },
                ]}
                direction="right"
              />
            </Box>

            {/* Center illustration */}
            <Box
              w={{ base: "100%", lg: "20%" }}
              my={{ base: 10, lg: 0 }}
              display="flex"
              justifyContent="center"
            >
              <DeveloperIllustration />
            </Box>

            {/* Right side skills */}
            <Box w={{ base: "100%", lg: "40%" }}>
              <SkillsSection
                skills={[
                  {
                    title: "Frameworks/libraries",
                    description:
                      "ReactJS, Node.js, Express.js, fastify, Laravel, React Native, AJAX, jQuery, Bootstrap",
                    color: "cyan.400",
                    icon: "react",
                  },
                  {
                    title: "DevOps",
                    description: "GitHub Actions, Azure DevOps, AWS",
                    color: "orange.400",
                    icon: "cloud",
                  },
                ]}
                direction="left"
              />
            </Box>
          </Flex>

          {/* Decorative corner */}
          <Box
            position="absolute"
            bottom={0}
            right={0}
            height="200px"
            width="200px"
            bg="pink.400"
            borderTopLeftRadius="100%"
            zIndex={-1}
          />
        </Box>
      </Container>
    </MainLayout>
  );
}
