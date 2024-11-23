const Projects = () => {
    return (
      <>
        {/* <hr /> */}
        <div className="my-10 text-center text-purple-400 text-3xl">My Projects </div>
        <div className="flex flex-wrap mt-6 items-center justify-center">
          <div className="border h-[200px] w-[200px] border-b-2 rounded-md m-4">
            <img
              src="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Pic.png"
              alt=""
            />
            <p className="text-center text-sm mt-3 text-blue-600">
              Project 1
            </p>
          </div>
          {/* <div className="border h-[200px] w-[200px] border-b-2 rounded-md m-4">
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/free-developer-team-illustration-download-in-svg-png-gif-file-formats--support-group-laptop-text-design-and-development-pack-illustrations-1731280.png?f=webp"
              alt=""
            />
            <p className="text-center text-sm underline underline-offset-4">
              Project 1
            </p>
          </div> */}
          <div className="border h-[200px] w-[200px] border-b-2 rounded-md m-4 text-blue-600">
            <img
              src="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Picture.png"
              alt=""
            />
            <p className="text-center text-sm mt-3">
              Project 2
            </p>
          </div>
          <div className="border h-[200px] w-[200px] border-b-2 rounded-md m-4 text-blue-600">
            <img
              src="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Picture.png"
              alt=""
            />
            <p className="text-center text-sm text-blue-600 mt-3">
              Project 3
            </p>
          </div>
          <div className="border h-[200px] w-[200px] border-b-2 rounded-md m-4 text-blue-600">
            <img
              src="https://i.pinimg.com/originals/f3/36/64/f3366437556b621bc1b69248bf5a08c4.png"
              alt=""
            />
            <p className="text-center text-sm mt-3">
              Project 4
            </p>
          </div>
        </div>
      </>
    );
  };
  export default Projects;
  