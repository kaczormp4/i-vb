"use client";
import * as React from "react";
import { calculateMarkerPosition } from "./utils/calculateMarkerPositon";
import "./ImageMarker.scss";
import Avatar from "@/public/download.jpg";
import { TextField } from "@mui/material";

const DEFAULT_BUFFER = 12;

export type Marker = {
  top: Number;
  left: Number;
};
export type MarkerComponentProps = {
  top: Number;
  left: Number;
  itemNumber: Number;
};

type Props = {
  src: string;
  markers: Array<Marker>;
  onAddMarker?: (marker: Marker) => void;
  onDeleteMarker: (markerIndex: number) => void;
  markerComponent?: React.FC<MarkerComponentProps> | any;
  bufferLeft?: number;
  bufferTop?: number;
  alt?: string;
  extraClass?: string;
};
const ImageMarker: React.FC<Props> = ({
  src,
  markers,
  onAddMarker,
  onDeleteMarker,
  markerComponent: MarkerComponent,
  bufferLeft = DEFAULT_BUFFER,
  bufferTop = DEFAULT_BUFFER,
  alt = "Markers",
  extraClass = "",
}: Props) => {
  const [currentPopUp, setCurrentPopUp] = React.useState<null | number>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const handleImageClick = (event: React.MouseEvent) => {
    if (!imageRef.current || !onAddMarker) {
      return;
    }
    const imageDimentions = imageRef.current.getBoundingClientRect();

    const [top, left] = calculateMarkerPosition(
      event,
      imageDimentions,
      window.scrollY,
      bufferLeft,
      bufferTop
    );

    onAddMarker({
      top,
      left,
    });
  };

  const getItemPosition = (marker: Marker) => {
    return {
      top: `${marker.top}%`,
      left: `${marker.left}%`,
    };
  };

  const showPopUp = (index: number) => {
    setCurrentPopUp(index);
  };

  const closePopUp = (index: number) => {
    setCurrentPopUp(null);
  };

  return (
    <div className="image-marker">
      <img
        src={src}
        alt={alt}
        onClick={handleImageClick}
        className={"image-marker__image " + extraClass}
        ref={imageRef}
      />
      {markers.map((marker, itemIndex) => (
        <button
          className={`image-marker__marker ${
            !MarkerComponent && "image-marker__marker--default"
          } image-marker__marker--point relative z-10`}
          style={getItemPosition(marker)}
          key={itemIndex}
          data-testid="marker"
          // onClick={() => onDeleteMarker(itemIndex)}
          // onMouseDown={(e) => console.log(e)}
          // onMouseUp={(e) => console.log(e)}
          onMouseOver={() => showPopUp(itemIndex)}
          onMouseLeave={() => closePopUp(itemIndex)}
        >
          <div className="animate-ping absolute bg-white w-5 h-5 z-0 rounded-full"></div>
          {MarkerComponent ? (
            <MarkerComponent {...marker} itemNumber={itemIndex} />
          ) : (
            itemIndex + 1
          )}
          {currentPopUp === itemIndex && (
            <div className={`image-marker__marker--popup`}>
              <div
                style={{
                  marginBottom: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "black",
                    width: "100%",
                    height: "max-content",
                    borderRadius: "40px",
                  }}
                  onClick={() => onDeleteMarker(itemIndex)}
                >
                  DELETE MARKER
                </button>
              </div>
              <div className={`image-marker__marker--popup--2`}>
                <img
                  style={{
                    backgroundColor: "lightblue",
                    borderRadius: "40px",
                    width: "40px",
                    height: "40px",
                  }}
                  src={
                    "https://us.123rf.com/450wm/jemastock/jemastock1704/jemastock170402179/75461907-head-face-man-male-character-vector-illustration-eps-10.jpg"
                  }
                ></img>
                <div style={{ color: "black", maxWidth: "150px" }}>
                  Prosze poprawic to miejce, podesle inspiracje
                </div>
              </div>
              <div className={`image-marker__marker--popup--2`}>
                <img
                  style={{
                    backgroundColor: "lightblue",
                    borderRadius: "40px",
                    width: "40px",
                    height: "40px",
                  }}
                  src={
                    "https://thumbs.dreamstime.com/b/m%C4%99%C5%BCczyzna-awatar-w-k%C3%B3%C5%82ku-kresk%C3%B3wka-z-czarnymi-w%C5%82osami-brod%C4%85-i-okularami-ikona-p%C5%82aska-na-niebieskim-tle-znak-osoby-198999548.jpg"
                  }
                ></img>
                <div style={{ color: "black", maxWidth: "150px" }}>
                  Bardzo ciekawe spostrzeżenie.
                </div>
              </div>
              <div className={`image-marker__marker--popup--2`}>
                <img
                  style={{
                    backgroundColor: "lightblue",
                    borderRadius: "40px",
                    width: "40px",
                    height: "40px",
                  }}
                  src={
                    "https://thumbs.dreamstime.com/b/m%C4%99%C5%BCczyzna-awatar-w-k%C3%B3%C5%82ku-kresk%C3%B3wka-z-czarnymi-w%C5%82osami-brod%C4%85-i-okularami-ikona-p%C5%82aska-na-niebieskim-tle-znak-osoby-198999548.jpg"
                  }
                ></img>
                <div style={{ color: "black", maxWidth: "150px" }}>
                  Juz Poprawione
                </div>
              </div>
              <div className={`image-marker__marker--popup--2`}>
                <img
                  style={{
                    backgroundColor: "lightblue",
                    borderRadius: "40px",
                    width: "40px",
                    height: "40px",
                  }}
                  src={
                    "https://us.123rf.com/450wm/jemastock/jemastock1704/jemastock170402179/75461907-head-face-man-male-character-vector-illustration-eps-10.jpg"
                  }
                ></img>
                <div style={{ color: "black", maxWidth: "150px" }}>
                  Dziekuje !!!
                </div>
              </div>
              <TextField
                id="standard-basic"
                label="Odpisz tutaj"
                variant="standard"
                className="-mt-10"
              />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ImageMarker;
