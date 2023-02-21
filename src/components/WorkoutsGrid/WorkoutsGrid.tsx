import React, { Key } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { WorkoutCard } from "../WorkoutCard/WorkoutCard";
import { Workout } from '../../data/Workouts/Workouts';
import { Typography } from "@mui/material";

type workoutsGridProps = {
    workouts: Workout[],
    subTitle?: string,
};

export const WorkoutsGrid = ({ workouts, subTitle }: workoutsGridProps) => (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, lg: 12 }}>
        {subTitle && <Box style={{width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", minWidth: "345px"}}>
            <Typography variant="subtitle1">{subTitle}</Typography>
        </Box>}
        { workouts.length ?
            workouts.map((workout) => (
                <Grid xs={2} sm={4} md={4} key={workout.id as Key} sx={{ alignContent: "center", justifyContent: "center"}}>
                    <WorkoutCard {...workout} />
                </Grid>
            )) :
            <Box style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px"}}>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    No content available.
                </Typography>
            </Box>
        }
    </Grid>
);
