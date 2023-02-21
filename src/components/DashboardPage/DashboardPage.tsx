import React, { ReactNode, useEffect, useState } from "react";
import { getWorkouts, Workout } from "../../data/Workouts/Workouts";
import { WorkoutsGrid } from "../WorkoutsGrid/WorkoutsGrid";
import {
  Box,
  Breadcrumbs,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { styles } from "./styles";

export const DashboardPage = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [level, setLevel] = React.useState("all");
  const [impact, setImpact] = React.useState("all");

  useEffect(() => {
    setWorkouts(getWorkouts());
  }, []);

  useEffect(() => {
    setWorkouts(getWorkouts({ impactTag: impact, levelTag: level }));
  }, [impact, level]);

  const onImpactChange = (event: SelectChangeEvent) => {
    setImpact(event.target.value);
  };

  const onLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value);
  };

  type FilterProps = {
    value: string;
    label: string;
    items: Map<string, string>;
    onChangeHandler: (event: SelectChangeEvent<string>) => void;
  };

  const Filter = ({ value, label, items, onChangeHandler }: FilterProps) => (
    <FormControl sx={styles.filter} size="small">
      <InputLabel id="impact-filter-label">{label}</InputLabel>
      <Select
        size="small"
        value={value}
        label={label}
        onChange={onChangeHandler}
      >
        {Array.from(items).map<ReactNode>(
          (pair: [string, string]): ReactNode => (
            <MenuItem value={pair[0]}>{pair[1]}</MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );

  const levelFilterItems: Map<string, string> = new Map([
    ["all", "All"],
    ["beginner", "Beginner"],
    ["intermediate", "Intermediate"],
    ["advanced", "Advanced"],
  ]);

  const impactFilterItems: Map<string, string> = new Map([
    ["all", "All"],
    ["low", "Low"],
    ["high", "High"],
  ]);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ paddingLeft: "20px" }}>
        <Typography color="text.primary">Dashboard</Typography>
      </Breadcrumbs>
      <Box
        minWidth={styles.mainBox.minWidth}
        maxWidth={styles.mainBox.maxWidth}
        padding={styles.mainBox.padding}
        sx={styles.mainBox.sx}
      >
        <Box sx={styles.titleBox}>
          <Typography variant="h6" gutterBottom>
            Mars Workouts Library
          </Typography>
        </Box>
        <Box sx={styles.filterBox}>
          <Filter
            value={level}
            label={"Level"}
            items={levelFilterItems}
            onChangeHandler={onLevelChange}
          />
          <Filter
            value={impact}
            label={"Impact"}
            items={impactFilterItems}
            onChangeHandler={onImpactChange}
          />
        </Box>
        <WorkoutsGrid workouts={workouts} />
      </Box>
    </>
  );
};
