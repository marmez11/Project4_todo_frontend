import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <>
      <header className="bg-yellow-400 w-full h-24 max-sm:h-12 flex justify-center items-center">
        <Link to="/">
          <h1 className="text-2xl max-sm:text-xl text-black"><em><b><u>ShadowEye Military Weapons Index/Tracker System</u></b></em></h1>
        </Link>
      </header>
    </>
  );
}
