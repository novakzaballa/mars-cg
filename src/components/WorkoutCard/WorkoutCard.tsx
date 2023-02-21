import React, { useCallback } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { styles } from './styles'

type WorkoutProps = {
    description: string;
    thumbnail: string;
    title: string;
    id: string;
};

export const WorkoutCard = ({
        description,
        thumbnail,
        title,
        id,
    }: WorkoutProps
    ) => {
    
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(`/workouts/${id}`, {replace: false}), [navigate, id]);

    return (
        <Card onClick={handleOnClick} sx={styles.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    width="300"
                    src={thumbnail}
                    alt={title}
                    sx={styles.cardMedia}
                />
            <CardContent>
                <Typography
                    gutterBottom variant="h5"
                    component="div"
                    sx={styles.title}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    )
};
