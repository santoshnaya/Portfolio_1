const About = () => {
    return (
      <>
        <div className="flex justify-evenly">
          <div>
            <img
              src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-web-site-department-programmers-and-art-department-create-a-company-website-png-image_7258173.png"
              alt=""
              className="h-80 mt-10 mr-[430px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[50px]">
              <span className="text-orange-500 ml-[60px]">About me </span>
              <br />
              <span>
                <p className="text-sm flex mr-10 text-blue-600">
                  Hi, I'm [Your Name], a software engineer with [X] years of
                  experience. I specialize in [your key areas of expertise, e.g.,
                  full-stack development, mobile app development, machine
                  learning], and I love turning ideas into reality through code. <br /><br /> I
                  hold a degree in [Your Degree] from [Your University] and have
                  worked on diverse projects, building efficient and scalable
                  solutions.
                </p>
              </span>
            </span>
          </div>
        </div>
      </>
    );
  };
  export default About;
  