import Image from "next/image";
import TaskListImage from "../public/home_target_icon.png";
import Link from "next/link";

export default function Home() {
  const entryOptions = [
    {
      id: 1,
      name: "Sign In",
      route: "/",
    },
    {
      id: 2,
      name: "Sign Up",
      route: "/",
    },
  ];

  return (
    <main className="md:mt-16">
      {/* Introductin Section */}
      <section
        id="intro"
        className="text-black bg-white md:w-screen md:h-64 content-center flex"
      >
        {/* Title Div  and discription div*/}
        <div className="md:w-4/5 h-full content-center md:px-14">
          <div className="flex">
            <p className="text-appDarkBlue md:text-9xl font-bold">Task</p>
            <p className="text-appDarkOrange md:text-9xl font-bold">Master</p>
          </div>

          {/* The Discriptoion */}
          <p className="text-5xl text-appLightBlue md:ml-4">
            Do more and get things done!
          </p>

          {/* Sign in and Sign up options */}
          <div className="flex gap-4 md:mt-4 md:ml-4">
            {entryOptions.map((options) =>
              options.id == 1 ? (
                <div
                  key={options.id}
                  className="md:w-28 md:h-10 md:px-4 hover:bg-appLightOrange md:py-4 flex items-center justify-center rounded-lg bg-appDarkBlue"
                >
                  <Link
                    key={options.id}
                    className="text-white"
                    href={options.route}
                  >
                    {options.name}
                  </Link>
                </div>
              ) : (
                <div
                  key={options.id}
                  className="md:w-28 hover:bg-appLightOrange md:px-4 md:py-4 rounded-lg items-center flex justify-center md:h-10 bg-appDarkOrange"
                >
                  <Link
                    key={options.id}
                    className="text-white font-bold text-lg"
                    href={options.route}
                  >
                    {options.name}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>

        {/* Image div */}
        <div className="md:w-1/2 md:px-6 ">
          <Image alt="" src={TaskListImage} width={300} height={350}></Image>
        </div>
      </section>

      {/* About us section */}
      <section id="aboutus" className="text-black w-screen h-60">
        {/* Title Div */}
        <div className="md:w-screen md:h-10 grid self-center place-items-center">
          <h2 className="text-4xl text-appLightBlue md:mt-10 underline font-bold">
            What is this about?
          </h2>
        </div>

        {/* paragraph div */}
        <div className="w-11/12 text-justify md:h-36 md:p-5 text-white font-semibold bg-appDarkBlue rounded-lg md:mt-12 md:ml-5">
          <p>
            This is a portfolio project made by Karl Eve Mar Modequillo, the
            technology stack used are as follows: Next.js for front end, .net
            web api and entity framework core for backend. This app allows users
            to add edit remove and update tasks as well as set the date and time
            of the task completion.
          </p>
        </div>
      </section>

      {/* Guides section */}
      <section id="guides" className="text-black w-screen h-60">
        <p>Guides Section</p>
      </section>

      {/* Footer section */}
      <footer id="footer" className="text-black bg-slate-600 w-screen h-60">
        <p>Fotter Section</p>
      </footer>
    </main>
  );
}
