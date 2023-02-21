import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styles } from './styles'

type FullWorkoutCardProps = {
    description: string;
    levelTag: string;
    media: string;
    title: string;
    impactTag: string;
    duration: Number;
}

export const FullWorkoutCard = ({ description, levelTag, media, title, impactTag, duration }: FullWorkoutCardProps) => {

    return (
        <Card sx={styles.card}>
            <CardContent>
                <Box sx={styles.contentBox}>
                    <Typography variant="body2" color="text.secondary">
                        {`Level: ${levelTag}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`Impact: ${impactTag}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`${duration} min`}
                    </Typography>
                </Box>
                <CardMedia
                    component='video'
                    image={media}
                    controls
                />
                <Box sx={styles.titleBox}>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};
