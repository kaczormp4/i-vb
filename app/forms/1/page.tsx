"use client";
import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Forms1 = () => {
  const [answers, setAnswers] = useState({
    textAnswer: "",
    choiceAnswer: "",
    imageAnswer: "",
    dateAnswer: new Date(),
  });

  const handleInputChange = (field, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted answers:", answers);
    // Dodaj tutaj logikę obsługi przesłanych odpowiedzi
  };

  return (
    <div className="w-1/2 bg-white rounded-sm shadow-lg p-4">
      <form onSubmit={handleSubmit}>
        <div className="py-4">
          <h3>Przykładowe pytanie (Textfield)</h3>
          <TextField
            label="Odpowiedź"
            value={answers.textAnswer}
            onChange={(e) => handleInputChange("textAnswer", e.target.value)}
            fullWidth
          />
        </div>

        <div className="py-4">
          <h3 className="mb-2">Przykładowe pytanie (Lista wyboru)</h3>
          <TextField
            select
            label="Odpowiedź"
            value={answers.choiceAnswer}
            onChange={(e) => handleInputChange("choiceAnswer", e.target.value)}
            fullWidth
          >
            <MenuItem value="opcja1">Opcja 1</MenuItem>
            <MenuItem value="opcja2">Opcja 2</MenuItem>
            <MenuItem value="opcja3">Opcja 3</MenuItem>
          </TextField>
        </div>

        <div className="py-4">
          <h3>Pytanie ze zdjęciem (Textfield)</h3>
          <TextField
            label="Odpowiedź"
            value={answers.imageAnswer}
            onChange={(e) => handleInputChange("imageAnswer", e.target.value)}
            fullWidth
          />
          <small>Dodaj zdjęcie:</small>
          {/* Dodaj obsługę ładowania zdjęcia */}
        </div>

        <div className="py-4">
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider> */}
        </div>
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="bg-blue-500"
          >
            Nastepna strona
          </Button>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div>
            <Button variant="outlined" size="large" className="rounded-full">
              0
            </Button>
            {/* <div>Dane</div> */}
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
            {/* <div>Formularz</div> */}
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
            {/* <div>Inpiracje</div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms1;
