"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AddIcon from "@mui/icons-material/Add";
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
  Container,
  IconButton,
  Divider,
  ListItemText,
  Paper,
  ListSubheader,
  ListItemButton,
} from "@mui/material";

const rooms = [
  {
    roomName: "Salon",
    children: [{ name: "Sufit" }, { name: "Lampy" }, { name: "Podłoga" }],
  },
  {
    roomName: "Kuchnia",
    children: [{ name: "Meble" }, { name: "Sprzęt AGD" }, { name: "Podłoga" }],
  },
  {
    roomName: "Jadalnia",
    children: [{ name: "Stół" }, { name: "Krzesła" }, { name: "Oświetlenie" }],
  },
  {
    roomName: "Sypialnia",
    children: [
      { name: "Łóżko" },
      { name: "Szafa" },
      { name: "Oświetlenie" },
      { name: "Dekoracje" },
    ],
  },
];

const Rooms = () => {
  return (
    <div className="w-full h-lvh flex">
      <div className="w-1/6">
        <Button className="bg-blue-500 w-full mb-4" variant="contained">
          Dodaj Pomieszczenie
        </Button>
        <List
          sx={{
            width: "100%",
            maxWidth: 660,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: "100%",
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
          className="shadow-lg rounded-md"
        >
          {rooms.map(({ roomName, children }) => (
            <li key={`section-${roomName}`}>
              <ul>
                <ListSubheader>
                  <div className="flex justify-between">
                    <span>{roomName}</span>
                    <IconButton aria-label="delete">
                      <AddIcon />
                    </IconButton>
                  </div>
                </ListSubheader>
                {children.map(({ name }) => (
                  <ListItemButton
                    key={`item-${name}`}
                    selected={name === "Lampy"}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </div>
      <div className="p-5 ml-4 bg-white shadow-lg rounded-md overflow-auto w-full">
        <div className="flex justify-between">
          <h1 className="flex pb-4 ">
            <b>Salon </b> &nbsp; / Lampy
          </h1>
          <Button variant="contained" color="primary" className="bg-blue-500">
            Dodaj&nbsp;
            <AddIcon />
          </Button>
        </div>

        <div className="p-5 bg-white ">
          <div className="shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnyyiLzppgklzSh6naveeDPdBZJw3SjU8ww&usqp=CAU" // Replace with your project photo URL
                      alt="Project 1"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Lampa 1
                    </p>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://a.allegroimg.com/s512/112751/63f7d9ea4e91b40d801bf529368b/Lampy-sufitowe-LED-lampa-sufitowa-32W-2500lm" // Replace with your Lampa photo URL
                      alt="Lampa 2"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Lampa 2
                    </p>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://www.brw.pl/blog/wp-content/uploads/2022/02/kuchnia-w-kamienicy.jpg" // Replace with your Lampa photo URL
                      alt="Lampa 3"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Lampa 3
                    </p>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://media.domni.pl/thumbnail/1370w/uploads/9/9a/opoczno-passion-oak-i-quenos-1_102928819179.jpg" // Replace with your Lampa photo URL
                      alt="Lampa 4"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Lampa 4
                    </p>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://meblem4.pl/img/products/44/09/1/43.jpg" // Replace with your Lampa photo URL
                      alt="Lampa 5"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Lampa 5
                    </p>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://meblem4.pl/img/products/44/09/1/43.jpg" // Replace with your Lampa photo URL
                      alt="Lampa 6"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Lampa 6
                    </p>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://homekoncept.shop/pub/media/lookbookslider/1247X960/HomeKONCEPT_68_wnetrze_9.jpg" // Replace with your project photo URL
                      alt="Project 7"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Project 7
                    </p>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://mebline.pl/images/stories/virtuemart/product/sypialnia-beta-biala4.jpg" // Replace with your project photo URL
                      alt="Project 8"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <p className="bg-gray-800 text-white text-center p-2 w-full">
                      Project 8
                    </p>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
