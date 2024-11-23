import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="max-w-7xl flex w-full justify-between fixed">
        <button className="text-3xl text-blue-500">Button</button>
        <button className="text-3xl text-blue-500">Button</button>
        <button className="text-3xl text-blue-500">Button</button>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-7xl text-blue-500">Hello</h1>
      </div>
      <Image src="/home/Sad-Puppy.jpeg" alt="sad boi" width={1140} height={655} className="w-full" />
    </>
  );
}
