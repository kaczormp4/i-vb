"use client";
import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export const Forms1 = () => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Przykładowe pytanie (Textfield)</h3>
        <TextField
          label="Odpowiedź"
          value={answers.textAnswer}
          onChange={(e) => handleInputChange("textAnswer", e.target.value)}
          fullWidth
        />
      </div>

      <div>
        <h3>Przykładowe pytanie (Lista wyboru)</h3>
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

      <div>
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

      <div>
        <h3>Pytanie (Datepicker)</h3>
        <DatePicker
          label="Odpowiedź"
          value={answers.dateAnswer}
          onChange={(date) => handleInputChange("dateAnswer", date)}
          fullWidth
          format="dd.MM.yyyy"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span role="img" aria-label="calendar">
                  📅
                </span>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <Button type="submit" variant="contained" color="primary">
        Zatwierdź
      </Button>
    </form>
  );
};
