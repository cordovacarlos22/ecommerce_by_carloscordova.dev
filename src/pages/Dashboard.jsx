import CreateItem from "@/components/CreateItem";
import React, { useState } from "react";


const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "createItem":
        return <CreateItem />;
      default:
        return (
          <>
            <div className="font-bold">Welcome to your Dashboard</div>
          </>
        );
    }
  };

  return (
    <section className="flex flex-col md:flex-row  bg-gray-200  ">
      <br />
      <div className=" bg-blue-700 md:min-h-screen flex flex-col justify-center items-center gap-4 p-4">
        <h1 className="font-bold underline text-white">Dashboard</h1>
        <nav className="flex flex-col">
          <button onClick={() => setActiveComponent("createItem")}>
            Create Item
          </button>
          <button onClick={() => setActiveComponent("viewItems")}>
            View Items
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