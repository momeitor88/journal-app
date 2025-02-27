import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="email" type="email" placeholder="correo@gmail.com" fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="password" type="password" placeholder="contraseña" fullWidth></TextField>
                    </Grid>
                </Grid>
                <Grid container spacing={ 2 } sx={{ mb:2, mt: 1 }}>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button variant="contained" fullWidth>Login</Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button variant="contained" fullWidth spacing={ 2 }>
                            <Google/>
                            <Typography>Google</Typography>
                        </Button>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to="/auth/register">Crear una cuenta</Link>
                    </Grid>
                </Grid>
            </form>
    </AuthLayout>
  )
}
