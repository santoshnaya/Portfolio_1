const Hero = () => {
    return (
      <div className="flex justify-evenly my-10">
        <div className="flex items-center justify-center">
          <span className="">
            <span className="text-orange-500 ml-[170px] text-[50px]">I am </span>
            <br />
            <span className="text-teal-500 text-[50px] ml-[50px]">
              {" "}
              $antosh Nayak
            </span>
            <span>
              <p className="text-sm text-blue-800">
                I am a professional software developer and product engineer
              </p>
            </span>
            <div className="flex items-cente justify-centerr">
              <button className="border h-7 w-[100px] rounded-md border-blue-500 bg-blue-800 text-white mt-4 ml-[140px]">
                Resume
              </button>
              <div className="flex">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                  className="h-8 w-8 justify-center items-center m-3"
                />
                
              </div>
            </div>
          </span>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Free-Image.png"
            alt=""
            className="h-80 mt-10"
          />
        </div>
      </div>
    );
  };
  export default Hero;
  