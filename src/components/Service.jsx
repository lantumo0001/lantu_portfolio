import myServices from "@/assets/Constants";
import React from "react";
const Service = () => {
  return (
    <div
      className=" w-full flex  flex-col items-center  z-10 p-5 md:p-0 bg-primary-900/40 rounded-lg"
      id="services"
    >
      {/* header  */}

      <h3 className="text-white font-light my-5 font-secondary-font">
        my services
      </h3>
      <h2 className="text-white font-bold  text-3xl uppercase leading-12 tracking-wider font-primary-font">
        i provide a wide range of <br /> digital services
      </h2>

      <div className="flex flex-col md:flex-row md:gap-5 mt-5 p-5 gap-6">
        {myServices.map((service) => {
          return (
            <div
              key={service.id}
              className=" w-full md:w-1/4 h-100 bg-primary-900 shadow-sm p-5 shadow-white rounded-2xl hover:bg-primary-900 hover:scale-105 transition-all duration-100 "
            >
              <i className="text-white text-7xl font-bold font-primary-font">
                {React.createElement(service.icon)}
              </i>
              <h2 className="text-2xl font-sembold text-white my-2 font-secondary-font">
                {service.name}
              </h2>
              <p className="text-sm text-pretty text-white opacity-50 font-secondary-font ">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
