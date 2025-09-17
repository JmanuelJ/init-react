import {Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='corrego@gmail.com'
              fullWidth
            />
          </Grid>

          <Grid>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              autoComplete='off'
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
            size={{ xs: 12, sm: 12 }}
          >
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear un cuenta aquí
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
