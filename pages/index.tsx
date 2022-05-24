import { Button, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import { ReclamationCard, ReclamationDialog } from "../src/components";
import { useAppSelector } from "../src/store";

const Home: NextPage = () => {
  const isDark = useAppSelector((state) => state.mode.isDark);
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Dashboard | My APP</title>
      </Head>
      <div className="py-5">
        {/* ajouter une reclamation */}
        <Button
          size="large"
          variant="outlined"
          endIcon={<MdPostAdd />}
          color={isDark ? "primary" : "secondary"}
          onClick={() => setOpen(true)}
        >
          Ajouter une réclamation
        </Button>
        {/* history des reclamation */}
        <div className="flex py-4 flex-col items-center">
          <h1 className="text-3xl font-semibold">Mes réclamations</h1>
          <hr className="h-[0.5px] opacity-80 w-full my-3" />
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <ReclamationCard />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <ReclamationDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default Home;
