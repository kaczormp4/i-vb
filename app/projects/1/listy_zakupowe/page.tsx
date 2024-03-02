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

const ShoppingLists = () => {
  const data = [
    {
      klient: "Anna Nowak",
      status: "Aktywny",
      termin: "2024-02-10",
      wartosc: "$1000",
      email: "anna.nowak@example.com",
    },
    {
      klient: "Jan Kowalski",
      status: "Oczekujący",
      termin: "2024-02-15",
      wartosc: "$1500",
      email: "jan.kowalski@example.com",
    },
    {
      klient: "Magdalena Wiśniewska",
      status: "Zakonczony",
      termin: "2024-02-20",
      wartosc: "$2000",
      email: "magdalena.wisniewska@example.com",
    },
    {
      klient: "Piotr Jankowski",
      status: "Anulowany",
      termin: "2024-02-25",
      wartosc: "$1200",
      email: "piotr.jankowski@example.com",
    },
    {
      klient: "Katarzyna Nowak",
      status: "Aktywny",
      termin: "2024-03-01",
      wartosc: "$1800",
      email: "katarzyna.nowak@example.com",
    },
    {
      klient: "Mateusz Kowalczyk",
      status: "Oczekujący",
      termin: "2024-03-05",
      wartosc: "$2500",
      email: "mateusz.kowalczyk@example.com",
    },
    {
      klient: "Agnieszka Zielińska",
      status: "Zakonczony",
      termin: "2024-03-10",
      wartosc: "$3000",
      email: "agnieszka.zielinska@example.com",
    },
    {
      klient: "Łukasz Nowak",
      status: "Aktywny",
      termin: "2024-03-15",
      wartosc: "$2200",
      email: "lukasz.nowak@example.com",
    },
    {
      klient: "Ewa Kaczmarek",
      status: "Anulowany",
      termin: "2024-03-20",
      wartosc: "$1600",
      email: "ewa.kaczmarek@example.com",
    },
    {
      klient: "Michał Lewandowski",
      status: "Oczekujący",
      termin: "2024-03-25",
      wartosc: "$2800",
      email: "michal.lewandowski@example.com",
    },
    // Dodaj więcej danych według potrzeb
  ];
  const list = [
    {
      name: "Lista do 20k",
    },
    {
      name: "Lista do Bialy design",
    },
    {
      name: "Podłogi cala iwestycja",
    },
    {
      name: "Płytki łazienka + salon",
    },
  ];
  const exampleData = [
    { produkt: "Deska Drewniana", producent: "WoodFloor Co.", cena: "$45/m²" },
    { produkt: "Panele Laminowane", producent: "FloorMaster", cena: "$30/m²" },
    {
      produkt: "Płytki Ceramiczne",
      producent: "CeramicTiles Ltd.",
      cena: "$20/m²",
    },
    {
      produkt: "Dywaniki Dywanowe",
      producent: "SoftTouch Carpets",
      cena: "$15/m²",
    },
    { produkt: "Podłoga Winylowa", producent: "VinylXpress", cena: "$25/m²" },
    {
      produkt: "Parkiet Egzotyczny",
      producent: "ExoticFloors",
      cena: "$50/m²",
    },
    {
      produkt: "Wykładzina Dywanowa",
      producent: "CarpetHeaven",
      cena: "$18/m²",
    },
    { produkt: "Płytki Marmurowe", producent: "MarbleWorld", cena: "$70/m²" },
    { produkt: "Panele PCV", producent: "VinylFlooring Ltd.", cena: "$12/m²" },
    // {
    //   produkt: "Podłoga Betonowa",
    //   producent: "ConcreteDesign",
    //   cena: "$40/m²",
    // },
  ];

  return (
    <div className="w-full h-lvh flex">
      <div className="w-1/6">
        <Button className="bg-blue-500 w-full mb-4" variant="contained">
          Dodaj LISTE
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
          className="shadow-lg rounded-md"
        >
          {list.map(({ name }, i) => (
            <ListItemButton key={`item-${name}`} selected={i === 2}>
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </List>
      </div>
      <div className="p-5 ml-4 bg-white shadow-lg rounded-md overflow-auto w-full">
        {/* <div className="p-5 bg-white shadow-lg rounded-md"> */}
        <div className="flex justify-between">
          <h1 className="flex pb-4 ">
            <b>{list[2].name}</b>
          </h1>
          <Button variant="contained" color="primary" className="bg-blue-500">
            EXPORT PDF
          </Button>
        </div>
        <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Lp
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Produkt
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Producent
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Cena
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Mapowanie danych i tworzenie wierszy */}
              {exampleData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.produkt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {row.producent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.cena}</td>
                </tr>
              ))}
              <tr className="hover:bg-gray-100 cursor-pointer">
                <Button
                  variant="contained"
                  color="primary"
                  className="bg-blue-500"
                >
                  Dodaj&nbsp;
                  <AddIcon />
                </Button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoppingLists;
