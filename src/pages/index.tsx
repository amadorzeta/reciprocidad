import { type NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  const [measuredTime, setMeasuredTime] = React.useState<number>(0);
  const [calculatedTime, setCalculatedTime] = React.useState<number>(0);

  const calculateTime = (time: number) => {
    return Math.round(Math.pow(time, 1.2));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCalculatedTime(calculateTime(measuredTime));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.replace(/\D/g, "");
    setMeasuredTime(+input);
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Reciprocidad</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">
                Ingrese el tiempo calculado por el fotometro
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full border-none bg-zinc-100 text-6xl text-slate-900"
                  type="text"
                  value={measuredTime}
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">
                + calculo de falla de reciprocidad
              </h3>
              <span>{calculatedTime}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
