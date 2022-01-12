import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";

const Quora = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-100">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="h-screen overflow-hidden">
          <main className="flex space-x-7">
            <Sidebar />
            <Feed />
            <Widget />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Quora;
