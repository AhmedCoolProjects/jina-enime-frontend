import { Button, Grid, IconButton } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import {
  CarouselHeader,
  ReclamationCard,
  ReclamationDialog,
} from "../src/components";
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
        <IconButton
          color={isDark ? "primary" : "secondary"}
          onClick={() => setOpen(true)}
          size="large"
          style={{
            border: "0.2px solid",
            borderColor: isDark ? "primary" : "secondary",
          }}
        >
          <MdPostAdd />
        </IconButton>
        {/* Carousel */}
        <CarouselHeader />
        {/* history des reclamation */}
        <div className="flex py-4 flex-col items-center">
          <h1 className="text-3xl font-semibold">Mes réclamations</h1>
          <hr className="h-[0.5px] opacity-80 w-full my-5" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <ReclamationCard
                title="Réclamations"
                description="this is my description for réclamations this is my description for réclamations"
                status="In Progress"
                worker_id="1"
                date="2020-05-05"
                image="/plumber_problem.jpg"
                type="Réclamation"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ReclamationCard
                title="Réclamations"
                description="this is my description for réclamations this is my description for réclamations"
                status="Completed"
                worker_id="1"
                date="2020-05-05"
                image="/plumber_problem.jpg"
                type="Réclamation"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ReclamationCard
                title="Réclamations"
                description="this is my description for réclamations this is my description for réclamations"
                status="Pending"
                worker_id="1"
                date="2020-05-05"
                image="/plumber_problem.jpg"
                type="Réclamation"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ReclamationCard
                title="Réclamations"
                description="this is my description for réclamations this is my description for réclamations"
                status="Refused"
                worker_id="1"
                date="2020-05-05"
                image="/plumber_problem.jpg"
                type="Réclamation"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <ReclamationDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default Home;
