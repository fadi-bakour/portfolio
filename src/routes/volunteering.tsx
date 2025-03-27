import { createFileRoute } from "@tanstack/react-router";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

import RecodeImage from "../assets/recode.jpeg";
import MainLayout from "../layouts/main";

export const Route = createFileRoute("/volunteering")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout>
      <Container maxW="container.xl" py={10}>
        <Box p={4} position="relative" maxW="1200px" mx="auto">
          <Box mb={20} textAlign="center">
            <Heading as="h1" size="xl" fontWeight="bold">
              My volunteer Service
            </Heading>
          </Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <Box flex="1">
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                mb={4}
                color="blue.500"
              >
                Gift Your Time
              </Heading>

              <Text fontSize="md" color="gray.600" mb={6} maxW="md">
                <Text>
                  <strong>Organization:</strong> re.code |{" "}
                  <strong>Role:</strong> Facilitator
                </Text>
                <Text>
                  Conducted two workshops focused on teaching refugees how to
                  become web developers.
                </Text>
              </Text>
            </Box>

            <Box flex="1" position="relative">
              <Image
                src={RecodeImage}
                alt="Volunteers helping others illustration"
                maxW="100%"
                h="auto"
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </MainLayout>
  );
}
