"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Input,
  Button,
  Grid,
} from "@mui/material";

const Projects = () => {
  const router = useRouter();
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

  // Funkcja do określania koloru tła na podstawie statusu
  const getStatusColor = (status: any) => {
    switch (status) {
      case "Zakonczony":
        return "bg-green-500";
      case "Aktywny":
        return "bg-orange-500";
      case "Oczekujący":
        return "bg-yellow-500";
      case "Anulowany":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  // Przykładowe dane w postaci stałej

  return (
    <div className="w-full">
      <div className="mt-0 w-full gap-4">
        <h1 className="flex pb-4">
          <b>Projekty</b>
        </h1>
        <div className="p-5 bg-white shadow-lg rounded-md w-full">
          <div className="flex justify-between mb-4">
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Input placeholder="Klient" />
              </Grid>
              <Grid item>
                <Input placeholder="Status" />
              </Grid>
              <Grid item>
                <Input placeholder="Termin" />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" className="bg-blue-500">
              Dodaj&nbsp;Projekt
            </Button>
          </div>
          <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Klient
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Termin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Wartość
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Mapowanie danych i tworzenie wierszy */}
                {data.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() => router.push("/projects/1/projekt")}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.klient}
                    </td>
                    <td>
                      <button
                        className={`whitespace-nowrap ${getStatusColor(
                          row.status
                        )} text-white font-bold py-2 px-4 rounded`}
                      >
                        {row.status}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.termin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.wartosc}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-20"></div>
      {/* <Link href="/home/dom">Home/dom</Link> */}
    </div>
  );
};

export default Projects;
