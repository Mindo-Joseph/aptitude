import React from "react";
import Homepage from "../pages/Homepage";
import Footer from "./Footer";
import HelloWorld from "./HelloWorld";

const App = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 px-4">
            <Homepage />
            <Footer/>
      {/* Add more components here */}
    </div>
  );
};

export default App;
