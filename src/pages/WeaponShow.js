import { Form, Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function Show() {
  const weapon = useLoaderData();

  const [openClose, setOpenClose] = useState("translate-x-[-100%]")

  const handleClose = () => {
    setOpenClose("translate-x-[-100%]")
  }
  const handleOpen = () => {
    setOpenClose("translate-x-[0%]")
  }

  

  return (
    <>
      <main className="flex 
      justify-between 
      w-screen 
      min-[280px]:h-full sm:h-screen h-screen 
      relative">
        <aside className={`bg-black 
        min-[280px]:w-full sm:max-w-[30rem] lg:w-[30rem] 
        flex flex-col 
        h-full 
        absolute 
        z-10 
        ${openClose} ease-in-out duration-300`}>
          <h2 className="text-white 
          min-[280px]:text-2xl text-3xl 
          my-5 font-semibold">Update Weapon(s)</h2>
          <button onClick={handleClose} className="font-bold text-white text-2xl absolute right-2">X</button>
          <Form
            className="bg-yellow-400 flex flex-col w-full h-full items-center"
            action={`/weapons/update/${weapon.id}`}
            method="post"
          >
            <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full 
                    h-8 
                    rounded-md 
                    p-1
                    border-2 border-black-1000"
                    id="Weapon_name_input"
                    type="text"
                    name="weapon_name"
                    placeholder="Enter Weapon Name Here......"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1 border-2 border-black-1000"
                    type="text"
                    name="weapon_type"
                    placeholder="Enter Weapon Type Here......"
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1 border-2 border-black-1000"
                    type="text"
                    name="weapon_serial_number"
                    placeholder="Enter Weapon Serial Number here...."
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1 border-2 border-black-1000"
                    type="text"
                    name="weapon_origin_country"
                    placeholder="Enter Weapon Origin Country here...."
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1 border-2 border-black-1000"
                    type="text"
                    name="weapon_caliber"
                    placeholder="Write Weapon Caliber here...."
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1 border-2 border-black-1000"
                    type="text"
                    name="weapon_description"
                    placeholder="Write Weapon Description here...."
                  />
                  <input
                    className="max-sm:max-w-[18rem] sm:max-w-[18rem] w-full h-8 rounded-md p-1 border-2 border-black-1000"
                    type="text"
                    name="weapon_state"
                    placeholder="Write Weapon State here...."
                  />

            <button className="bg-white text-black font-semibold w-44 h-8 my-2 rounded
            min-[280px]:text-sm lg:text-base">
              Update Weapon(s)
            </button>
          </Form>
        </aside>
        
        <section className="bg-purple-50 
        w-full
        p-5 
        shadow-[inset_1px_.5px_20px_rgba(0,0,0,0.4)] 
        relative">
          
          <section className="flex justify-between">

            <button onClick={handleOpen} className="bg-white
            rounded-lg
            p-2
            min-[280px]:w-16 lg:w-36
           
            left-5
            font-semibold
            min-[280px]:text-xs lg:text-base
            border-2
            border-black text-black">Update</button>
            

            <Link className="bg-purple-1000 
            text-white
            min-[280px]:text-xs lg:text-base 
            p-2 
            rounded-lg" to="/weapons">
              <button>Go Back to Previous Page</button>
            </Link>


            <Form className="bg-red-500
            text-white
            min-[280px]:text-xs lg:text-base
            font-semibold
            min-[280px]:w-16 lg:w-36
            p-2
            rounded-lg
            top-5
            right-5" action={`/weapons/delete/${weapon.id}`} method="post">
              <button>Delete Weapon</button>
            </Form>
          </section>

          
          <article className="bg-white 
          min-[280px]:w-[98%] md:w-[35rem] lg:w-[45rem] 
          min-[280px]:h-[45rem] lg:h-[55rem] 
          mx-auto 
          text-left 
          flex flex-col 
          justify-evenly 
          p-5 
          mt-5 
          shadow-md
          min-[280px]:text-[10px] md:text-sm lg:text-base
          ">
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
          </article>
        </section>
      </main>
    </>
  );
}
