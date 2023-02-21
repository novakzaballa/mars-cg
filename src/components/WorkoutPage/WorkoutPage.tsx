import { Header } from "../Header/Header";
import { Workout, getWorkout, getWorkouts } from "../../data/Workouts/Workouts";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { WorkoutsGrid } from "../WorkoutsGrid/WorkoutsGrid";
import { styles } from "./styles";
import { FullWorkoutCard } from "../FullWorkoutCard/FullWorkoutCard";

export async function loader({
  params,
}: LoaderFunctionArgs): Promise<Workout | undefined> {
  const workoutData = await getWorkout(params.workoutId);
  return workoutData;
}

export const WorkoutPage = () => {
  const {
    id,
    description,
    levelTag,
    media,
    title,
    impactTag,
    trainerId,
    duration,
  } = useLoaderData() as Workout;

  const trainerWorkouts = getWorkouts({ trainerId }).filter(
    (workout) => workout.id !== id
  );
  const levelWorkouts = getWorkouts({ levelTag }).filter(
    (workout) => workout.id !== id
  );
  const impactWorkouts = getWorkouts({ impactTag }).filter(
    (workout) => workout.id !== id
  );

  return (
    <>
      <Header />
      <Paper sx={styles.paper}>
        <Breadcrumbs
          separator="|"
          aria-label="breadcrumb"
          sx={styles.breadcrumbs}
        >
          <Link underline="hover" color="inherit" href="/dashboard">
            Dashboard
          </Link>
          <Typography color="text.primary">Workout</Typography>
        </Breadcrumbs>
        <FullWorkoutCard
          description={description}
          levelTag={levelTag}
          media={media}
          title={title}
          impactTag={impactTag}
          duration={duration}
        />
        <Box
          minWidth={styles.other.minWidth}
          maxWidth={styles.other.maxWidth}
          padding={styles.other.padding}
          sx={styles.other.sx}
        >
          <Stack spacing={2}>
            <WorkoutsGrid
              subTitle="Other workouts on the same level"
              workouts={levelWorkouts}
            />
            <WorkoutsGrid
              subTitle="Other workouts with the same impact"
              workouts={impactWorkouts}
            />
            <WorkoutsGrid
              subTitle="Other workouts from the same trainer"
              workouts={trainerWorkouts}
            />
          </Stack>
        </Box>
      </Paper>
    </>
  );
};
