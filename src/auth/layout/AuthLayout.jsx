import { Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const AuthLayoutProps = {
    children: PropTypes.node,
    title: PropTypes.string
  }

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
        container 
        sx={{ height: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        spacing={0}
        direction="column" 
        justifyContent="center" 
        alignItems="center"
    >
        <Grid
            item
            className="box-shadow"
            xs={ 3 }
            sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2 }}
         >
            <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>
            { children }
        </Grid>
    </Grid>
  )
}

AuthLayout.prototype = AuthLayoutProps;