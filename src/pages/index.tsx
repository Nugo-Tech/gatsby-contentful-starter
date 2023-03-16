import React from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleThemeMode } from "../state/ui";
import Layout from '../components/Layout';

type Props = {};

export default function Index({ }: Props): JSX.Element {
  const { ui } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };
  console.log(ui);

  return (
    <Layout>
      <h1 className="text-9xl">Hello World</h1>
      <Button
        color="success"
        size="large"
        onClick={toggleTheme}
        variant="contained"
      >
        Hello World
      </Button>
    </Layout>

  );
}
