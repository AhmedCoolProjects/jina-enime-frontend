// @ts-ignore
// @ts-nocheck

import { Button, IconButton, Paper } from "@mui/material";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useEffect, useState } from "react";
import { IMAGES } from "../../constants";
import Image, { StaticImageData } from "next/image";

export function CarouselHeader() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  var items = [
    {
      name: "Besoin d'un Charpentier",
      image: IMAGES.Carpenter3,
      description: "Des Charpentiers valables touts les jours",
    },
    {
      name: "Problème des placards, portes, fenêtres...?",
      description: "Nos Charpentiers sont à votre disposition",
      image: IMAGES.Carpenter2,
    },
    {
      name: "Moins de 24h",
      description:
        "Nos Charpentiers sont toujours à jour avec vos réclamations",
      image: IMAGES.Carpenter,
    },
    {
      name: "Besoin d'un plombier",
      image: IMAGES.plumber,
      description: "Des plombiers valables touts les jours",
    },
    {
      name: "Problème d'eau, de chauffage...?",
      description: "Nos plombiers sont à votre disposition",
      image: IMAGES.plumber2,
    },
    {
      name: "Besoin d'un electricien",
      image: IMAGES.Electrecian,
      description: "Des electriciens valables touts les jours",
    },
    {
      name: "Problème d'électricité...?",
      description: "Nos electriciens sont à votre disposition",
      image: IMAGES.Electrecian2,
    },
  ];
  const updateIndex = (index: number) => {
    if (index < 0) setCurrentIndex(items.length - 1);
    else if (index > items.length - 1) setCurrentIndex(0);
    else setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(currentIndex + 1);
    }, 2000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    //   carousel
    <div
      className="w-full relative
    overflow-hidden my-5
    "
    >
      {/* Control Buttons */}
      <div
        className="absolute top-1/2
      -translate-y-1/2 left-0 z-10"
      >
        <IconButton
          onClick={() => {
            updateIndex(currentIndex - 1);
          }}
          size="large"
        >
          <FcPrevious
            style={{
              opacity: 0.2,
            }}
          />
        </IconButton>
      </div>
      <div
        className="absolute top-1/2
      -translate-y-1/2 right-0 z-10"
      >
        <IconButton
          size="large"
          onClick={() => {
            updateIndex(currentIndex + 1);
          }}
        >
          <FcNext
            style={{
              opacity: 0.2,
            }}
          />
        </IconButton>
      </div>

      {/* inner */}
      <div
        className="whitespace-nowrap"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s",
        }}
      >
        {items.map((item_, index) => (
          <CarouselItem
            name={item_.name}
            description={item_.description}
            key={`${index}`}
            image={item_.image}
          />
        ))}
      </div>
    </div>
  );
}

type carouselItemProps = {
  name: string;
  description: string;
  image?: StaticImageData;
};

function CarouselItem(props: carouselItemProps) {
  const { name, description, image } = props;
  return (
    <Paper
      className="w-full
    inline-flex items-center justify-around h-[250px] md:h-[450px]
    flex-row 
    "
    >
      <div className="relative w-1/2 ml-8 ">
        <h1 className="text-md sm:text-3xl font-semibold mb-6">{name}</h1>
        <h1 className="pl-3 text-xs sm:text-base">{description}</h1>
      </div>
      <Image
        priority={true}
        src={image}
        width={500}
        objectFit="contain"
        alt="image"
      />
    </Paper>
  );
}
