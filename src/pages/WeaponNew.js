import { Form } from "react-router-dom";
import "../index.css";

export default function New() {

  return (
    <>
      <main className="w-full h-full bg-red-400">
        <section className="flex flex-col items-center">
            <h2 className="max-[280px]:text-3xl max-sm:text-4xl text-5xl 
            font-bold
            my-1
            mx-3">Create New Weapon(s)</h2>
            <div className="max-[280px]:flex-col max-sm:flex-col max-[875px]:flex-col flex
            justify-evenly 
            max-[280px]:items-center max-sm:items-center max-[875px]:items-center
            w-full 
            h-4/5 
            max-[280px]:mt-0 mt-5">
              

              <Form
                className="flex flex-col 
                items-center
                max-[280px]:w-11/12 max-sm:w-11/12 w-96"
                action="/weapons/create"
                method="post"
              >

                <section className="flex flex-col 
                justify-evenly 
                items-center 
                max-[280px]:w-full max-sm:w-full sm:w-full w-3/5 
                h-[40rem]">
                  
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


                  <button className="bg-amber-300 
                  max-sm:max-w-[13rem] sm:max-w-[13rem] w-11/12 
                  font-bold 
                  text-black text-md 
                  rounded-lg 
                  py-1">Create Weapon(s)</button>

                  <button className="bg-amber-300 
                  max-sm:max-w-[13rem] sm:max-w-[13rem] w-11/12 
                  font-bold 
                  text-black text-md 
                  rounded-lg 
                  py-1"><a href="/">Return to Home Page</a></button>
                </section>
              </Form>
              
            </div>
        </section>
      </main>
    </>
  );
}
