const Contact = () => {
    return (
      <div>
        <center>
          <h1 className="text-2xl text-pink-400 my-[90px]">Contact Me</h1>
        </center>
        <div className="flex">
          <div>
            <p className="text-[50px] ml-8">Have a question?</p>
            <p className="ml-8 mr-[90px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sint,
              ex nesciunt consequuntur omnis, esse ea neque excepturi eligendi
              perferendis autem magni, fugit ducimus non. Ipsam reprehenderit
              neque quidem pariatur! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eum sint, ex nesciunt consequuntur omnis.<br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sint,
              ex nesciunt consequuntur omnis, esse ea neque excepturi eligendi
              perferendis autem magni, fugit ducimus non. Ipsam reprehenderit
              neque quidem pariatur!
            </p>
            <div className="ml-8 my-7">
              <p>hello@ok.com</p>
              <p>123 455 678</p>
              <p>Chat with us</p>
            </div>
          </div>
          <div className="mt-8">
            <div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="  First Name"
                  className="border border-blue-500 rounded-[4px]"
                />
                <input
                  type="text"
                  placeholder="  Last Name"
                  className="border border-blue-500 mx-3 rounded-[4px] py-1"
                />
                        </div>
                        <input type="email" placeholder="  Enter Email" className="border pr-[190px] mt-3 border-blue-500 rounded-[4px] py-1" />
                        <input type="phone" placeholder="  Phone Number" className="border pr-[190px] mt-3 border-blue-500 rounded-[4px] py-1" />
                        <input type="number" placeholder="  Order Number" className="border pr-[190px] mt-3 border-blue-500 rounded-[4px] py-1" />
                        <textarea name="" id="" placeholder="  Message" className="border pr-[190px] mt-3 border-blue-500 rounded-[4px] py-[50px]"></textarea>
                        <button className="border w-[370px] border-black bg-black text-white text-sm py-2 rounded-md">SUBMIT</button>
                        
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Contact;
  