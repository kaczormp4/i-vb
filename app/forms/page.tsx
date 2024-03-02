"use client";
import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Forms = () => {
  const router = useRouter();
  const [forms, setForms] = useState([
    { id: 1, name: "Modernist" },
    { id: 2, name: "Art Deco" },
    { id: 3, name: "Minimalist" },
    { id: 4, name: "Colonial Revival" },
    { id: 5, name: "Victorian Gothic" },
    { id: 6, name: "Bauhaus" },
    { id: 7, name: "Postmodern" },
    { id: 8, name: "Renaissance Revival" },
    { id: 9, name: "Neoclassical" },
    { id: 10, name: "Baroque" },
    { id: 11, name: "Bauhaus" },
    { id: 12, name: "Postmodern" },
    { id: 13, name: "Renaissance Revival" },
    { id: 14, name: "Neoclassical" },
    { id: 15, name: "Baroque" },
    // Add more example forms as needed
  ]);

  const handleAddForm = () => {
    router.push("/forms/new");
    const newForm = {
      id: forms.length + 1,
      name: `Form ${forms.length + 1}`,
    };

    setForms([...forms, newForm]);
  };

  const handleSearch = (searchTerm: any) => {
    // Perform search logic here if needed
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="w-6/12">
      <AppBar position="sticky">
        <Toolbar className="bg-white">
          <Typography
            variant="h6"
            component="div"
            style={{ flexGrow: 1, color: "black" }}
          >
            Lista Formularzy
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 ml-4"
            onClick={handleAddForm}
          >
            ADD FORM
          </Button>
        </Toolbar>
      </AppBar>
      <div className="w-full mt-4 shadow-lg">
        <ul className="divide-y divide-gray-200">
          {forms.map((form) => (
            <li
              key={form.id}
              className="py-4 flex bg-white hover:bg-gray-100 cursor-pointer"
            >
              <div className="ml-4">
                <div className="flex items-center">
                  <p className="font-semibold">{form.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <List>
        {forms.map((form) => (
          <ListItem key={form.id}>
            <ListItemText primary={form.name} />
          </ListItem>
        ))}
      </List> */}
      <div className="mt-20"></div>
    </div>
  );
};

export default Forms;
