import type { NextPage } from 'next';
import Image from 'next/image';
import NextHead from '../src/infra/components/Head';

const Home: NextPage = () => {
  return (
    <>
      <NextHead title="Traveler" />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default Home
