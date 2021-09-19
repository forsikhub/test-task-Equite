import { Button, Container, Grid } from '@mui/material';
import { fontWeight, minHeight } from '@mui/system';
import Typography from '@mui/material/Typography';
import React from 'react';
const minMaxSize = {
  minHeight: {
    xs: '0px',
    sm: '0px',
    xl: '250px',
    md: '250px',
    lg: '250px',
  },
  maxWidth: {
    xs: '50%',
    sm: '50%',
    xl: '90%',
    md: '90%',
    lg: '90%',
  },
};
const containerMaxWidth = {
  xs: '50%',
  sm: '50%',
  xl: '90%',
  md: '90%',
  lg: '90%',
};
export default function Header(): JSX.Element {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      columns={{ xs: 1, sm: 1, md: 2 }}
      sx={{
        minHeight: '87vh',
        marginTop: {
          xs: '0px',
          sm: '0px',
          xl: '-50px',
          md: '-50px',
          lg: '-50px',
        },
      }}
    >
      <Grid item xs={1} sm={1} md={1}>
        <Typography
          sx={{ fontWeight: '600' }}
          variant="h3"
          component="h1"
          gutterBottom
        >
          Иструмент мониторинга для трейдера, которому доверяют
        </Typography>
        <Typography variant="subtitle1" component="h3" gutterBottom>
          Создайте портфолио со своими фактическими успехами — повысьте доверие
          у заинтересованных людей.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ marginTop: '32px' }}
        >
          Начать работу
        </Button>
      </Grid>
      <Grid item xs={1} sm={1} md={1}>
        <Container sx={minMaxSize}>
          <img
            style={{ width: '100%', marginLeft: '150px' }}
            src="/img/Illustration1.svg"
          />
        </Container>
      </Grid>
      <Grid item xs={1} sm={1} md={1}>
        <Container sx={minMaxSize}>
          <img
            style={{ width: '100%', marginLeft: '-150px' }}
            src="/img/Illustration2.svg"
          />
        </Container>
      </Grid>
      <Grid item xs={1} sm={1} md={1}>
        <Typography
          sx={{ fontWeight: '600' }}
          variant="h3"
          component="h1"
          gutterBottom
        >
          Проверенные результаты
        </Typography>
        <Typography variant="subtitle1" component="h3" gutterBottom>
          Объективные и сухие цифры подойдут не только для мониторинга своих
          результатов, но и для того, чтобы вызвать доверие у инвесторов
          или своей публики.
        </Typography>
      </Grid>
    </Grid>
  );
}
