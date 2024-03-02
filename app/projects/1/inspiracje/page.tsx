"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AddIcon from "@mui/icons-material/Add";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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
  Chip,
} from "@mui/material";

const list = [
  {
    name: "WSZYSTKIE",
  },
  {
    name: "Salony",
  },
  {
    name: "Kuchnie",
  },
  {
    name: "Lazienki",
  },
];
const Inspirations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="w-full h-lvh flex">
      <div className="w-1/6">
        <Button className="bg-blue-500 w-full mb-4" variant="contained">
          Dodaj Grupe inpiracji
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
            <ListItemButton key={`item-${name}`} selected={i === 0}>
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </List>
      </div>
      <div className="p-5 ml-4 bg-white shadow-lg rounded-md overflow-auto w-full">
        <div className="flex justify-between">
          <h1 className="flex pb-4 ">
            <b>Wszyskie </b>
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
                  <div className="flex flex-col items-center h-42 relative">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnyyiLzppgklzSh6naveeDPdBZJw3SjU8ww&usqp=CAU" // Replace with your project photo URL
                      alt="Project 1"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-200 to-gray-0 ">
                      <Chip
                        label="Salony"
                        color="primary"
                        onClick={() => null}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center h-42 relative">
                    <img
                      src="https://a.allegroimg.com/s512/112751/63f7d9ea4e91b40d801bf529368b/Lampy-sufitowe-LED-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod.-sufitowa-32W-2500lm" // Replace with your Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. photo URL
                      alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. 2"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                    <div className="absolute top-0 right-0">
                      <Chip
                        label={<MarkChatUnreadIcon />}
                        color="error"
                        onClick={() => setModalOpen((prev) => !prev)}
                      />
                      <div className="relative">
                        {modalOpen && (
                          <Card
                            sx={{ minWidth: 275 }}
                            className="absolute left-0 top-0"
                          >
                            <CardContent>
                              <Typography variant="body2">
                                Ta lampa mi sie podoba ale do mojego projektu
                                bedzie pasowala czarna
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button
                                size="small"
                                onClick={() => setModalOpen((prev) => !prev)}
                              >
                                Url do ispiracji
                              </Button>
                            </CardActions>
                          </Card>
                        )}
                      </div>
                    </div>
                    <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-200 to-gray-0 ">
                      <Chip
                        label="Salony"
                        color="primary"
                        onClick={() => null}
                      />
                      <Chip
                        label="Kuchnie"
                        color="primary"
                        onClick={() => null}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://www.brw.pl/blog/wp-content/uploads/2022/02/kuchnia-w-kamienicy.jpg" // Replace with your Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. photo URL
                      alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. 3"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://media.domni.pl/thumbnail/1370w/uploads/9/9a/opoczno-passion-oak-i-quenos-1_102928819179.jpg" // Replace with your Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. photo URL
                      alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. 4"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://meblem4.pl/img/products/44/09/1/43.jpg" // Replace with your Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. photo URL
                      alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. 5"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://meblem4.pl/img/products/44/09/1/43.jpg" // Replace with your Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. photo URL
                      alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, augue ac tincidunt eleifend, libero libero euismod mauris, vel tristique enim justo ut turpis. Curabitur fermentum massa ac ante fermentum, id gravida arcu laoreet. Nullam eu metus at magna convallis suscipit. Sed efficitur justo a elit faucibus, a egestas eros commodo. Vestibulum eu risus in quam efficitur varius. Fusce dapibus turpis vitae est tincidunt euismod. 6"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://homekoncept.shop/pub/media/lookbookslider/1247X960/HomeKONCEPT_68_wnetrze_9.jpg" // Replace with your project photo URL
                      alt="Project 7"
                      className="rounded-lg mb-2 w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center h-42">
                    <img
                      src="https://mebline.pl/images/stories/virtuemart/product/sypialnia-beta-biala4.jpg" // Replace with your project photo URL
                      alt="Project 8"
                      className="rounded-lg mb-2 w-full h-full"
                    />
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

export default Inspirations;
