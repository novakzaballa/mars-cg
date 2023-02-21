import { Logo, CampGladiator } from '../../images';
import { Box } from "@mui/material";
import { styles } from './styles'

export const Header = () => (
    <Box sx= {styles.box}>
        <img src={Logo} alt="Logo" />
        <img src={CampGladiator} alt= "CampGladiator" />
    </Box>
);
