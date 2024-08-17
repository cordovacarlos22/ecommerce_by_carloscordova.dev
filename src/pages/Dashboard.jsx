import CreateItem from "@/components/CreateItem";
import GetAllUsers from "@/components/GetAllUsers";
import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";


const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "createItem":
        return <CreateItem />;
      case "getAllUsers":
        return <GetAllUsers />;
      default:
        return (
          <>
            <div className="text-center" >

              <h1
                className="font-bold text-2xl"
              >
                Welcome to your Dashboard
              </h1>
              <span>Select one of the options on the navigation menu</span>
            </div>
          </>
        );
    }
  };

  return (
    <section className="flex flex-col md:flex-row  bg-gray-200  ">
      <br />
      <div className=" bg-blue-700 md:min-h-screen flex flex-col justify-center items-center gap-4 p-4">
        <Link
        to='/dashboard'
        
        >
          <h1 className="font-bold  text-white">Dashboard</h1>
        </Link>
        <nav className="flex flex-col text-white ">
          <button
            className={` p-2 ${activeComponent === "createItem"
                ? "text-blue-500 underline bg-white rounded"
                : "text-white"
              }`}
            onClick={() => setActiveComponent("createItem")}>
            Create Item
          </button>

          <button
            className={` p-2 ${activeComponent === "getAllUsers"
              ? "text-blue-500 underline bg-white rounded"
              : "text-white"
              }`}
            onClick={() => setActiveComponent("getAllUsers")}>
            list all  users
          </button>
         
          {/* Add more buttons for other components */}
        </nav>

      </div>
      <div className="flex flex-col justify-center items-center m-auto">
        {/* This will render the component based on the active state */}
        {renderComponent()}
      </div>
    </section>
  );
};

export default Dashboard;