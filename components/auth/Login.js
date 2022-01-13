import Head from "next/head";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <Head>
          <title>Quora | Login page</title>
          <link
            rel="icon"
            href="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.favicon-new.ico-26-e7e93fe0a7fbc991.ico"
          />
        </Head>
        <Image
          src={
            "https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
          }
          layout="fill"
          objectFit="cover"
          className="-z-50"
        />
      </div>
      <div className="bg-white rounded-lg flex flex-col z-50 p-6 my-20">
        <div className="flex flex-col items-center justify-center space-y-3 my-2">
          <img src="Logo.svg" alt="" width={200} />
          <h1 className="text-md text-gray-500 font-semibold">
            A place to share knowledge and better understand the world
          </h1>
          <h1 className="text-sm text-gray-500 font-semibold">
            Made with ❤️ by{" "}
            <span className="text-red-500">
              <a href="https://vijayraj.netlify.app/">Vijaydev</a>
            </span>
          </h1>
        </div>

        <div className="flex mt-4">
          <div className="flex flex-col space-y-2 border-r pr-10">
            <button className="flex items-center w-60 space-x-2 border border-gray-300 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <img src="Google.svg" alt="" />
              <h1 className="text-sm">Continue with Google</h1>
            </button>

            <button className="flex items-center w-60 space-x-2 border border-gray-300 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <img src="Facebook.svg" alt="" />
              <h1 className="text-sm">Continue with Facebook</h1>
            </button>

            <button className="flex items-center justify-center w-60 space-x-2 p-1 rounded-3xl hover:bg-gray-100 cursor-pointer">
              <h1 className="text-xs font-semibold text-gray-600">
                Sign up with email
              </h1>
            </button>

            <hr className="w-60" />

            <h1 className="w-60 text-xs text-gray-500">
              By continuing you indicate that you agree to Quora’s Terms of
              Service and Privacy Policy.
            </h1>
          </div>

          <div className="flex flex-col pl-10">
            <div className="flex flex-col space-y-3 mb-3">
              <h1 className="font-semibold">Login</h1>
              <hr className="w-60 mb-2" />
              <h1 className="text-sm font-bold">Email</h1>
              <input
                type="email"
                placeholder="Your email"
                className=" p-2 w-60 rounded-md border border-gray-300 hover:border-blue-500 cursor-pointer outline-blue-400"
              />
              <h1 className="text-sm font-bold">Password</h1>
              <input
                type="password"
                placeholder="Your password"
                className=" p-2 w-60 rounded-md border border-gray-300 hover:border-blue-500 cursor-pointer outline-blue-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <h1 className="text-sm text-gray-400 ">Forgot password?</h1>
              <button className="text-sm text-white font-semibold bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-3xl">
                Login
              </button>
            </div>

            <div className="flex items-center justify-center mt-3">
              <button className="w-60 text-sm text-white font-semibold bg-blue-500 hover:bg-blue-600 py-2 rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>

        <div>
          <hr className="my-4" />
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-end justify-center">
              <h1 className="text-sm text-blue-800">தமிழ்</h1>
              <AiOutlineRight className="text-gray-500" />
            </div>
            <div className="flex items-end justify-center">
              <h1 className="text-sm text-blue-800">हिन्दी</h1>
              <AiOutlineRight className="text-gray-500" />
            </div>
          </div>
          <hr className="my-4" />

          <div>
            <ul className="flex items-center text-xs text-gray-600 justify-center">
              <li>About</li>
              <BsDot />
              <li>Careers</li>
              <BsDot />
              <li>Privacy</li>
              <BsDot />
              <li>Terms</li>
              <BsDot />
              <li>Contact</li>
              <BsDot />
              <li>Languages</li>
              <BsDot />
              <li>Press</li>
              <BsDot />
              <li>© Quora, Inc. 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
