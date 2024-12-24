import React from "react";
import { use } from "react";
import { useForm } from "react-hook-form";

const Contactus = () => {
  const {
    contact,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[70%] w-[70%] bg-[#FEFBEC] flex flex-col sm:flex-row mt-10">
        <div className="w-1/2 ">
          <div className="w-[80%] mx-auto border-red-600 flex flex-col lg:gap-4 lg:mt-10">
            <p className="text-3xl">Get In Touch </p>
            <p className="text-xs lg:text-sm text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate magnam, assumenda quas dignissimos cum veniam laborum
              consequuntur recusandae expedita alias.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="border-red-800 mx-auto flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full grid grid-cols04 gap-4  border">
                <div className="form-control w-[70%]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-[#F3F2D2] text-[#B0AA5C] w-[70%]"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-[#F3F2D2] text-[#B0AA5C] w-[70%]"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-[#F3F2D2] text-[#B0AA5C] w-[70%]"
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="message"
                    id="message"
                    className="bg-[#F3F2D2] text-[#B0AA5C] w-[70%]"
                    placeholder="message"
                  ></textarea>
                </div>
                <div className="form-control">
                  <input
                    type="submit"
                    name="submit"
                    placeholder="send"
                    className="bg-[#B0AA5C] text-white w-[40%]"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
