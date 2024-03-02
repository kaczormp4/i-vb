"use client";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ImageMarker, {
  Marker,
  MarkerComponentProps,
} from "../../../components/ImageMaker/ImageMaker";
import {
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const comments = [
  {
    avatar:
      "https://us.123rf.com/450wm/jemastock/jemastock1704/jemastock170402179/75461907-head-face-man-male-character-vector-illustration-eps-10.jpg",
    author: "Anna Nowak",
    content: "  Prosze poprawic to miejce, podesle inspiracje",
    date: "2024-02-10",
    unreaded: false,
  },
  {
    avatar:
      "https://thumbs.dreamstime.com/b/m%C4%99%C5%BCczyzna-awatar-w-k%C3%B3%C5%82ku-kresk%C3%B3wka-z-czarnymi-w%C5%82osami-brod%C4%85-i-okularami-ikona-p%C5%82aska-na-niebieskim-tle-znak-osoby-198999548.jpg",
    author: "JA",
    content: "Bardzo ciekawe spostrzeżenie.",
    date: "2024-02-15",
    unreaded: false,
  },
  {
    avatar:
      "https://thumbs.dreamstime.com/b/m%C4%99%C5%BCczyzna-awatar-w-k%C3%B3%C5%82ku-kresk%C3%B3wka-z-czarnymi-w%C5%82osami-brod%C4%85-i-okularami-ikona-p%C5%82aska-na-niebieskim-tle-znak-osoby-198999548.jpg",
    author: "JA",
    content: "Juz Poprawione",
    date: "2024-02-15",
    unreaded: false,
  },
  {
    avatar:
      "https://us.123rf.com/450wm/jemastock/jemastock1704/jemastock170402179/75461907-head-face-man-male-character-vector-illustration-eps-10.jpg",
    author: "Anna Nowak",
    content: "Dziekuje !!!",
    date: "2024-02-10",
    unreaded: true,
  },
];
const comments2 = [
  {
    avatar:
      "https://us.123rf.com/450wm/jemastock/jemastock1704/jemastock170402179/75461907-head-face-man-male-character-vector-illustration-eps-10.jpg",
    author: "Anna Nowak",
    content: "  Prosze poprawic to miejce, podesle inspiracje",
    date: "2024-02-10",
    unreaded: true,
  },
];

const list = [
  {
    name: "Poprawka salon sofa",
    count: 10,
  },
  {
    name: "Poprawka sufit",
    count: 3,
  },
  {
    name: "Podloga kuchnia",
    count: 1,
  },
  {
    name: "szafka i komoda",
    count: 1,
  },
];

const Projekt = () => {
  const [markers, setMarkers] = useState<Array<Marker>>([
    { top: 10, left: 50 },
    { top: 30, left: 10 },
  ]);
  console.log(markers);

  const CustomMarker = (props: MarkerComponentProps) => {
    return (
      <p className="custom-marker">My custom marker - {props.itemNumber}</p>
    );
  };

  return (
    <div className="p-5  w-full h-full bg-white pb-40 shadow-lg rounded-md">
      <h1 className="flex pb-4">
        <b>Oczekujące na Twoją reakcje</b>
      </h1>
      <div className="flex">
        <div className="w-1/6 mr-5">
          {/* <Button className="bg-blue-500 w-full mb-4" variant="contained">
            Dodaj LISTE
          </Button> */}
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
            {list.map(({ name, count }, i) => (
              <ListItemButton
                key={`item-${name}`}
                selected={i === 1}
                className="relative"
              >
                <ListItemText primary={name} /> 1/{count}{" "}
                {i === 1 && <ArrowForwardIosIcon />}
              </ListItemButton>
            ))}
          </List>
        </div>
        <div className="frame w-2/4 relative shadow-lg">
          <ImageMarker
            src={"/salon.webp"}
            markers={markers}
            onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
            // markerComponent={CustomMarker}
            onDeleteMarker={(indexToRemove) =>
              setMarkers((prev) =>
                prev.filter((_, index) => index !== indexToRemove)
              )
            }
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
            <div>
              <Button
                variant="contained"
                endIcon={<ArrowBackIosIcon />}
                className="bg-blue-500"
              ></Button>
            </div>
            <div className="flex items-end h-full">
              <Button variant="contained" className="bg-blue-500">
                1/3
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                className="bg-blue-500"
              ></Button>
            </div>
          </div>
        </div>
        <div className="p-5 pt-0 w-2/4">
          <h1 className="flex pb-4 ">
            <b>Aktywnosc</b>
          </h1>
          <div className="flex shadow-lg">
            <div className="w-max mx-10 flex items-center">
              <div className="w-7 h-7 bg-red-600 text-center rounded-full text-white">
                1
              </div>
            </div>
            <div className="max-w-2xl ">
              <ul className="divide-y divide-gray-200">
                {/* Mapowanie danych i tworzenie elementów listy */}
                {comments.slice(0, 8).map((comment, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <div
                      className={`py-4 flex ${
                        comment.unreaded ? "font-semibold" : ""
                      }`}
                    >
                      {/* Zdjęcie z lewej strony */}
                      <img
                        src={comment.avatar}
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                      />

                      {/* Treść komentarza i informacje o autorze z prawej strony */}
                      <div className="ml-4">
                        <div className="flex items-center">
                          <p className="font-semibold">{comment.author}</p>
                          <p className="text-gray-500 text-xs ml-2">
                            {comment.date}
                          </p>
                        </div>
                        <p className="text-gray-800">{comment.content}</p>
                      </div>
                    </div>
                    {comment.unreaded && (
                      <div className="text-red-500 ">
                        <FiberManualRecordIcon />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex shadow-lg">
            <div className="w-max mx-10 flex items-center">
              <div className="w-7 h-7 bg-red-600 text-center rounded-full text-white">
                2
              </div>
            </div>
            <div className="max-w-2xl ">
              <ul className="divide-y divide-gray-200">
                {/* Mapowanie danych i tworzenie elementów listy */}
                {comments2.slice(0, 2).map((comment, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <div
                      className={`py-4 flex ${
                        comment.unreaded ? "font-semibold" : ""
                      }`}
                    >
                      {/* Zdjęcie z lewej strony */}
                      <img
                        src={comment.avatar}
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                      />

                      {/* Treść komentarza i informacje o autorze z prawej strony */}
                      <div className="ml-4">
                        <div className="flex items-center">
                          <p className="font-semibold">{comment.author}</p>
                          <p className="text-gray-500 text-xs ml-2">
                            {comment.date}
                          </p>
                        </div>
                        <p className="text-gray-800">{comment.content}</p>
                      </div>
                    </div>
                    {comment.unreaded && (
                      <div className="text-red-500 ">
                        <FiberManualRecordIcon />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projekt;
