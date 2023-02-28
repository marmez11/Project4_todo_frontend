import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="bg-blue-1000 
      w-full 
      h-screen
      flex flex-col items-center 
      ">
          <section className="max-sm:w-4/5 sm:w-3/5 xl:w-2/5 w-2/5
          h-full">
            <h2 className=" max-[280px]:text-2xl max-sm:text-3xl sm:text-4xl text-5xl
           
            font-bold
            leading-[4rem]
            mt-10">
              Database of Military Weapons and their Owners
            </h2>
            <p className="max-[280px]:text-sm max-sm:text-lg sm:text-xl text-3xl
            leading-10
            mt-5">
              Make searching for background information on Military Weapons, their Owners and even creating new entries of Weapons & their Owners easier with this application 
              along with 
            </p>
            <section className="max-[280px]:w-full max-sm:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
            flex justify-evenly
            max-sm:mx-auto max-sm:mt-7 sm:mx-auto sm:mt-7">
              <Link to="/weapons/new">
                <div className="bg-black border-2 border-zinc-50 text-white
                w-40 max-sm:w-24 sm:w-32
                h-20 max-sm:h-15 sm:h-10
                text-2xl max-sm:text-sm sm:text-base
                flex justify-center items-center
                rounded-full
                font-semibold">
                  Create Weapon
                </div>
              </Link>
              <Link to="/weapons">
                <div className="bg-black border-2 border-zinc-50 text-white
                w-50 max-sm:w-34 sm:w-42
                h-20 max-sm:h-15 sm:h-10
                text-2xl max-sm:text-sm sm:text-base
                flex justify-center items-center
                rounded-full
                font-semibold">
                  View Weapons and Weapon Owners
                </div>
              </Link>
              </section>
          </section>
      </main>
    </>
  );
}