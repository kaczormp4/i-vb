"use client";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    id: 1,
    label: "Home",
    url: "/home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    label: "Projekty",
    url: "/projects",
    icon: <PermMediaIcon />,
  },
  {
    id: 3,
    label: "Formularze",
    url: "/forms",
    icon: <NoteAltIcon />,
  },
  {
    id: 4,
    label: "Statystyki",
    url: "/statistics",
    icon: <AssessmentIcon />,
  },
  {
    id: 5,
    label: "Wizytowka",
    url: "/about",
    icon: <ImportContactsIcon />,
  },
];
const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const currentRoute = usePathname();
  console.log(currentRoute);

  return (
    <div
      className={`${
        isOpen ? "w-60" : "w-fit"
      } bg-white shadow-lg z-10 relative`}
    >
      <div className="absolute -right-4 h-full flex items-center">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-sky-100 shadow-lg pl-3 pt-2 pb-2 flex items-center justify-center rounded-full cursor-pointer "
        >
          <ArrowBackIosIcon />
        </div>
      </div>

      <div>
        <ul className="mt-5">
          {nav.map((e) => (
            <li
              key={e.id}
              // className={`font-bold p-4 flex items-center text-slate-500 hover:cursor-pointer hover:text-sky-500 ${
              //   e.isActive &&
              //   "bg-sky-100 text-blue-500 border-l-4 border-blue-500"
              // }`}
            >
              <Link
                href={e.url}
                className={`font-bold p-4 flex items-center text-slate-500 hover:cursor-pointer hover:bg-sky-100 hover:text-blue-500  ease-in-out duration-100
              ${
                e.url === currentRoute &&
                "bg-sky-100 text-blue-500 border-l-4 border-blue-500"
              }
              `}
              >
                <div className="px-2">{e.icon}</div>
                {isOpen && e.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
