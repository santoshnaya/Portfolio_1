// import About from "../pages/About";

const Header = () => {
  return (
      
    <div className="sticky top-0 bg-white">
      <nav className="p-4 flex justify-between border border-lime-500 shadow-xl">
        <div>
          <h1 className="text-orange-400 text-xl">Website</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="     Search"
            className="border shadow-md w-[400px] rounded-md py-1"
          />
        </div>
        <div>
          <ul className="flex">
          <a href="" className="mr-3">Home</a>
            {/* <li className="mr-3">Home</li> */}
            <a href="./About.jsx" className="mr-3">About</a>
            {/* <li className="mr-3">About</li> */}
            <li className="mr-3">Blog</li>
            <li className="">Service</li>
          </ul>
        </div>
        <div>
          <button className="border bg-cyan-300 px-2 rounded-md">Contact</button>
        </div>
      </nav>
      </div>
    );
  };
  export default Header;
  