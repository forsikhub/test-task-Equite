import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/ru">
            <Button variant="text" color="inherit">
              Главная
            </Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/blog">
            <Button variant="text" color="inherit">
              Блог
            </Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/rating">
            <Button variant="text" color="inherit">
              Рейтинг
            </Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/pro">
            <Button variant="text" color="inherit">
              PRO
            </Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="text" color="inherit">
            EN
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="text" color="inherit">
            Войти
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="outlined" color="inherit">
            Зарегестрироваться
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
