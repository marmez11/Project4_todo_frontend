import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import '../pages/DisplayWeapons'

export default function Examples() {
  const weapons = useLoaderData();

const [imgsInView, setImgsInView] = useState(0)
const length = weapons.length
const show = 6


const moveStyle = {
transform: `translateX(-${imgsInView * show}%)`
}

function handleNextSlide(){
  if(imgsInView < (length)){
     setImgsInView(prevState => prevState + 2)
  }
}
function handleBackSlide(){
  if(imgsInView > 0){
     setImgsInView(prevState => prevState - 2)  
  }
}

  return (
    <>
      <main className=" h-screen">
        <Link className="bg-black
            text-white
            min-[280px]:text-xs lg:text-base 
            p-2 
            rounded-lg" to="/">
              <button>Go Back to Home Page</button>
            </Link>

            <Link className="bg-black
            text-white
            min-[280px]:text-xs lg:text-base 
            p-2 
            rounded-lg" to="/weapons/new">
              <button>Create New Weapon(s)</button>
            </Link>

          <section className="bg-red-400 
          w-full 
          underHeader
          overflow-hidden ">
          <br></br>
              <h2 className="underHeaderText"><u>All Weapon(s) and Weapon(s) Background Information:</u></h2>
          </section>
          <section className="overflow-hidden relative 
          h-80 max-2xl:h-fit 
          mt-10">
              <section style={moveStyle} className="w-fit 
              h-full 
              flex
              max-2xl:flex-wrap
              max-2xl:justify-center 
              items-center 
              ease-in-out 
              duration-300
              ">
                  {weapons.map((weapon) => (
                    <Link className="w-80 max-sm:w-72 
                    h-60 
                    mx-5 " to={`/weapons/${weapon.id}/`}>
                      <section className="bg-red-400 
                      box-border 
                      flex flex-col 
                      justify-between 
                      w-full sm:
                      max-sm:h-58 sm:h-64 
                      text-left 
                      rounded-xl 
                      shadow-lg">
                        <p className="p-2">
                          Weapon Name: <u><b>{weapon.weapon_name}</b></u>
                          <br></br>
                          Weapon Type: <u><b>{weapon.weapon_type}</b></u>
                        <br></br>
                          Weapon Serial Number: <u><b>{weapon.weapon_serial_number}</b></u>
                          <br></br>
                          Weapon Origin Country: <u><b>{weapon.weapon_origin_country}</b></u>
                          <br></br>
                          Weapon Caliber: <u><b>{weapon.weapon_caliber}</b></u>
                          <br></br>
                          Weapon Description: <u><b>{weapon.weapon_description}</b></u>
                          <br></br>
                          Weapon State: <u><b>{weapon.weapon_state}</b></u>
                        </p>
                      </section>
                      </Link>
              ))}
              </section>
              <div className="bg-white opacity-50 absolute w-28 h-full right-0 top-0 max-2xl:hidden"></div>
              <div className="absolute text-9xl right-2 top-24 cursor-pointer max-2xl:hidden" onClick={handleNextSlide}> &gt; </div>
            {imgsInView === 0 ? "" : <>
            <div className="bg-white opacity-50 absolute w-28 h-full top-0 max-2xl:hidden"></div>
            <div className="absolute text-9xl left-2 top-24 cursor-pointer max-2xl:hidden" onClick={handleBackSlide}>&lt;</div>
            </>}      
          </section>
      </main>
    </>
  );
}
