"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Input,
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ButtonGroup,
  Tabs,
  Tab,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Projects1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    // Handle menu item click logic here
    console.log(`Clicked on ${menuItem}`);
    // Close the menu after clicking a menu item
    setIsMenuOpen(false);
  };

  const menuItems = [
    "PROJEKT",
    "WORKFLOW",
    "DOKUMENTY",
    "POMIESZCZENIA",
    "LISTY ZAKUPOWE",
    "INSPIRACJE",
  ];

  const [value, setValue] = React.useState(0);
  useEffect(() => {
    router.push(`/projects/1/projekt`);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    router.push(
      `/projects/1/${menuItems?.[newValue]?.toLowerCase().replaceAll(" ", "_")}`
    );
    console.log(event);

    setValue(newValue);
  };
  console.log(value);

  return (
    <div className="w-full">
      <div className="mb-4">
        <b>{"<"} Anna Nowak</b>
      </div>
      <div className="bg-white mb-4  shadow-md">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {menuItems.map((i) => (
            <Tab label={i} />
          ))}
        </Tabs>
      </div>
      {children}
    </div>
  );
}
