import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { WorkoutCard, WorkoutCardProps } from "../WorkoutCard/WorkoutCard";
import workouts from '../../data/workouts.json'

function ResponsiveGrid() {
return (
    <Box sx={{ flexGrow: 1, marginLeft: "2%", marginRight: "2%" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            {workouts.map((workout) => (
            <Grid xs={2} sm={4} md={4} key={workout.id}>
                <WorkoutCard {...(workout as WorkoutCardProps)} />
            </Grid>
            ))}
        </Grid>
    </Box>
);
}

export const Dashboard = () => (
    <ResponsiveGrid/>
);
