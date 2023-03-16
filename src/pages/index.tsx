import React from 'react';
import Layout from '../components/Layout';

type Props = {};

export default function Index({ }: Props): JSX.Element {
  return (
    <Layout className="flex items-center justify-center my-40">
      <h1 className="text-9xl text-center">Hello World</h1>
    </Layout>
  );
}
