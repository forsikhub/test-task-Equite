import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../src/components/Header'



const Rating: NextPage<Props> = ({}) => (
  <main>
    <Container
      maxWidth="xl"
      sx={{
        flexGrow: 1,
        marginTop: { xs: '0px', sm: '0px', xl: '52px', md: '52px', lg: '52px' },
      }}
    >
      <Header />
      <Box>
        <Typography variant="h1" component="h1" sx={{marginTop:'150px'}}>
          Рейтинг
        </Typography>
      </Box>
    </Container>
  </main>
);

export default Rating;
