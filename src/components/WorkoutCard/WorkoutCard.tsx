import * as React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export type WorkoutCardProps = {
    description: String;
    thumbnail: string;
    levelTag: String;
    media: String;
    title: String;
    impactTag: String;
    id: String;
    trainerId: String;
    duration: Number;
}

export const WorkoutCard = ({
        description,
        thumbnail,
        levelTag,
        media,
        title,
        impactTag,
        id,
        trainerId,
        duration,
    }: WorkoutCardProps
    ) => (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="250"
                width="300"
                src={thumbnail}
                alt="title"
                sx={{ padding: "1em 1em 1em 1em", objectFit: "contain", maxWidth: 320, backgroundColor: "ghostwhite" }}
                onClick={() => alert('hello')}
            />
        <CardContent>
            <Typography
                gutterBottom variant="h5"
                component="div"
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    minHeight: "2.7em"
                }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
);
