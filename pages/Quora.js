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
          <title>Quora</title>
          <link
            rel="icon"
            href="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.favicon-new.ico-26-e7e93fe0a7fbc991.ico"
          />
        </Head>
        <Navbar />
        <div className="h-screen overflow-hidden">
          <main className="flex space-x-7 mx-32">
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
