"use client";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
const forms = [
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
];
const Workflow = () => {
  return (
    <div className="p-5  w-full h-full bg-white pb-40 shadow-lg rounded-md">
      <div className="flex justify-between">
        <h1 className="flex pb-4">
          <b>Twoje aktualne workflow</b>
        </h1>
        <Button variant="contained" color="success" className="bg-green-600">
          In progress
        </Button>
      </div>
      <div className="flex">
        <div>
          <Button variant="outlined" size="large" className="rounded-full">
            0
          </Button>
          <div>Dane</div>
        </div>
        <div className="mx-4">
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div>
          <Button
            variant="contained"
            size="large"
            className="bg-blue-500 rounded-full"
          >
            1
          </Button>
          <div>Formularz</div>
        </div>
        <div className="mx-4">
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="outlined" size="large" className="rounded-full">
            2
          </Button>
          <div>Inpiracje</div>
        </div>
        <div className="mx-4">
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="outlined" size="large" className="rounded-full">
            3
          </Button>
          <div>Dokumenty</div>
        </div>
        <div className="mx-4">
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="outlined" size="large" className="rounded-full">
            4
          </Button>
          <div>1sza wersja</div>
        </div>
        <div className="mx-4">
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="outlined" size="large" className="rounded-full">
            5
          </Button>
          <div>Lista zakupowa</div>
        </div>
        <div className="mx-4">
          <IconButton aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="outlined" size="large" className="rounded-full">
            6
          </Button>
          <div>Zakończono</div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="flex pb-4">
          <b>Wybierz dostepny formularz lub stworz nowy</b>
        </h1>
        <div>
          <div>Dostepne formularze:</div>
          <div className="w-1/5 mt-4 shadow-lg ">
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              onChange={() => null}
              className="w-full"
            />
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
        </div>
      </div>
    </div>
  );
};

export default Workflow;
