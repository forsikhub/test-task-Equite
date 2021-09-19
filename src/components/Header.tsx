import { Container, AppBar, Toolbar, Box, Button } from '@mui/material';
import React from 'react';
import BasicMenu from './BasicMenu'
import Link from 'next/link';
import { useRouter } from 'next/router';

const displayLargeOn = {
  xs: 'none',
  sm: 'none',
  md: 'flex',
  lg: 'flex',
  xl: 'flex',
};
const displayLargeOff = {
  xs: 'flex',
  sm: 'flex',
  md: 'none',
  lg: 'none',
  xl: 'none',
};

export default function Header(): JSX.Element {
  const router = useRouter();
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href="/ru">
          <a>
            <img src="/img/Logo.svg" style={{ padding: '0 40px 0 0' }} />
          </a>
        </Link>

        <Box
          sx={{
            flexGrow: 1,
          }}
          display={displayLargeOn}
        >
          <Link href="/ru">
            <Button
              sx={{ fontWeight: router.pathname === '/' ? 600 : 400 }}
              color="inherit"
            >
              Главная
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              sx={{
                fontWeight: router.pathname === '/blog' ? 600 : 400,
                mx: '16px',
              }}
              color="inherit"
            >
              Блог
            </Button>
          </Link>
          <Link href="/rating">
            <Button
              sx={{
                fontWeight: router.pathname === '/rating' ? 600 : 400,
                mx: '16px',
              }}
              color="inherit"
            >
              Рейтинг
            </Button>
          </Link>
        </Box>

        <Box display={displayLargeOn}>
          <Link href="/pro">
            <Button
              sx={{
                fontWeight: router.pathname === '/pro' ? 600 : 400,
                mx: '16px',
              }}
              color="inherit"
            >
              PRO
            </Button>
          </Link>

          <Button
            sx={{
              fontWeight: true ? 600 : 400,
              mx: '16px',
              display: 'flex',
            }}
            color="secondary"
            href="#en"
          >
            EN
          </Button>

          <Button
            sx={{ fontWeight: false ? 600 : 400, ml: '16px', mr: '16px' }}
            color="inherit"
            href="#login"
          >
            Войти
          </Button>

          <Button
            sx={{
              fontWeight: false ? 600 : 400,
              ml: '32px',
              minWidth: '218px',
            }}
            color="inherit"
            href="#registration"
            variant="outlined"
          >
            Зарегестрироваться
          </Button>
        </Box>
        <Box
          display={displayLargeOff}
        >
          <BasicMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
