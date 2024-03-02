"use client";

import Link from "next/link";
import { useState } from "react";
import ImageMarker, {
  Marker,
  MarkerComponentProps,
} from "./components/ImageMaker/ImageMaker";
import Image from "next/image";
import "./page.css";

export default function Home() {
  const [markers, setMarkers] = useState<Array<Marker>>([
    { top: 10, left: 50 },
  ]);
  console.log(markers);

  const CustomMarker = (props: MarkerComponentProps) => {
    return (
      <p className="custom-marker">My custom marker - {props.itemNumber}</p>
    );
  };

  return (
    <>
      <div></div>
      {/* <div className="frame">
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
      </div> */}
    </>
  );
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Link href="/home">Home</Link>
      <Link href="/user">User</Link>
    </main>
  );
}
