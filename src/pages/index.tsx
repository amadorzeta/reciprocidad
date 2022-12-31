import { type NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  const [calculatedTime, setCalculatedTime] = React.useState<number>(0);

  const calculateTime = (time: number) => {
    return Math.round(Math.pow(time, 1.2));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.replace(/\D/g, "");
    setCalculatedTime(calculateTime(+input));
  };

  return (
    <>
      <Head>
        <title>Reciprocidad</title>
        <meta
          name="description"
          content="Calculadora de falla de reciprocidad para largas exposiciones con pelicula"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-slate-700 to-slate-900">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-[5rem]">
            <span>Reciprocidad</span>
          </h1>

          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-slate-800 p-4 text-slate-50">
            <h3 className="text-2xl font-bold">
              tiempo de exposicion en segundos
            </h3>
            <div className="w-full rounded-xl border-none bg-slate-50 p-4 text-6xl text-slate-900">
              <input
                className="w-full bg-inherit"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-slate-800 p-4 text-slate-50">
            <h3 className="text-2xl font-bold">+ calculo de reciprocidad</h3>
            <div className="w-full rounded-xl border-none bg-slate-50 p-4 text-6xl text-slate-900">
              <span>{calculatedTime}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
