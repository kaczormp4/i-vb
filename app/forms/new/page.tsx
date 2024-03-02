"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: { formName: any }) => {
    // onFormCreate(data.formName);
    reset();
  };

  return <></>;
};

export default Forms;
