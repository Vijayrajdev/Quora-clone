import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Question from "../components/Question"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex space-x-4">
        <Sidebar />
        <Question/>
      </main>
    </div>
  );
}
