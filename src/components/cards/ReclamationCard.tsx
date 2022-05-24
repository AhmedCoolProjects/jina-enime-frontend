import { Paper, IconButton, Button } from "@mui/material";
import Image from "next/image";
import { GrInProgress } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import { ImCross } from "react-icons/im";

export function ReclamationCard() {
  return (
    <Paper elevation={3}>
      <div className="relative w-full h-[250px]">
        <Image src="/vercel.svg" layout="fill" alt="image" objectFit="cover" />
      </div>
      <div className="p-3 ">
        <h1 className="text-xl font-semibold">Title of the Reclamation</h1>
        <div className="flex flex-row items-center ">
          <h1>Refusée</h1>
          <IconButton className="ml-2">
            <ImCross color="red" size={25} />
          </IconButton>
        </div>
        <Button className="mt-3" fullWidth>
          Contacter le technicien
        </Button>
        {/* <div className="flex flex-row items-center ">
          <h1>Confirmée</h1>
          <IconButton className="ml-2">
            <MdDone color="green" size={25} />
          </IconButton>
        </div>
        <Button className="mt-3" fullWidth>
          Consulter l&apos;historique
        </Button> */}
        {/* <div className="flex flex-row items-center ">
          <h1>In Progress</h1>
          <IconButton className="ml-2">
            <GrInProgress color="yellow" size={25} />
          </IconButton>
        </div> */}
        {/* <Button className="mt-3" fullWidth>
          Poursuivre la réclamation
        </Button> */}
      </div>
    </Paper>
  );
}
