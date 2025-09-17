import {Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Juan Manuel'
              fullWidth
            />
          </Grid>

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

          <Grid
            container
            size={{ xs: 12, sm: 12 }}
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid size={{ xs: 12, sm: 12 }}>
              <Button variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
            size={{ xs: 12, sm: 12 }}
          >
            <Typography sx={{ mr: 1 }}>¿Ya tienen cuenta? </Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};