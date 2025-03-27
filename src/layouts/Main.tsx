"use client";

import {
  useDisclosure,
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";

export default function MainLayout({ children }: { children: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
    { label: "Education", href: "/education" },
    { label: "Volunteering", href: "/volunteering" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Box>
      {/* Navigation */}
      <Container maxW="container.xl" py={4} bg={"white"} w={"100%"}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" fontSize="2xl" fontWeight="bold">
            Fadi Bakour
          </Heading>
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                style={{
                  fontWeight: "500",
                  // color: "gray",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={<FaBars />}
            aria-label="Open Menu"
            onClick={onOpen}
          />
        </Flex>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} onClick={onClose}>
                  {item.label}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box>{children}</Box>
    </Box>
  );
}
