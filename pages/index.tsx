import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';

import Header from '../src/components/Header';
import MainContent from '../src/components/MainContent';
import { Container } from '@mui/material';

interface Props {}

const Home: NextPage<Props> = ({}) => (
  <main>
    <Container
      maxWidth="xl"
      sx={{
        flexGrow: 1,
        marginTop: { xs: '0px', sm: '0px', xl: '52px', md: '52px', lg: '52px' },
      }}
    >
      <Header />
      <MainContent />
    </Container>
  </main>
);
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Home.propTypes = {};

export default Home;
