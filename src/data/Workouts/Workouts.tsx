import workouts from './workouts.json'

export type Workout = {
    description: string;
    thumbnail: string;
    levelTag: string;
    media: string;
    title: string;
    impactTag: string;
    id: string;
    trainerId: string;
    duration: Number;
}

type WorkoutFilter = {
    levelTag?: string;
    impactTag?: string;
    trainerId?: string;
}

// export const getWorkouts = (): Array<Workout> => workouts;

export const getWorkout = (workoutId: string = ''): Workout | undefined => {
    const result = workouts.filter(workout => workout.id === workoutId);
    return result.length ? result[0] : undefined;
};

export const getWorkouts = (filter: WorkoutFilter | undefined = undefined): Workout[] => {
 
    return !filter ? workouts : workouts.filter(workout => (
        (!filter.trainerId || filter.trainerId === "all" || workout.trainerId === filter.trainerId) &&
        (!filter.impactTag || filter.impactTag === "all" || workout.impactTag === filter.impactTag) &&
        (!filter.levelTag || filter.levelTag === "all" || workout.levelTag === filter.levelTag)
    ));
};
