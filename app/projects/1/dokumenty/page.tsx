"use client";
import React from "react";
import { Typography, Container, Paper, Grid } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const Dokumenty = () => {
  return (
    <div>
      <Paper elevation={3} sx={{ p: 3 }} className="h-full pb-96 shadow-lg">
        <Grid container spacing={3}>
          {/* Example Folders */}
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <FolderIcon fontSize="large" color="primary" />
              <Typography variant="body1">Folder 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <FolderIcon fontSize="large" color="primary" />
              <Typography variant="body1">Folder 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <FolderIcon fontSize="large" color="primary" />
              <Typography variant="body1">Folder 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <FolderIcon fontSize="large" color="primary" />
              <Typography variant="body1">Folder 2</Typography>
            </Paper>
          </Grid>
          {/* Example Files */}
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={1}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InsertDriveFileIcon fontSize="large" color="secondary" />
              <Typography variant="body1">File 2</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Dokumenty;
