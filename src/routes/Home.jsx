import React from "react";
import "../styles/dashboard.css";
import { Link} from "react-router-dom";

function Home() {
  return (
    <>
      <div class="ctr flex items-center justify-center">
        <div>
        <p class="text-3xl font-bold">
          Welcome to Letusmaintain.com your one And only reliable maintenance
          partner
        
          </p>
        <Link to="/Schedule">   <div className="text-blue-600 text-2xl mt-6 hover:text-blue-700 text-center">
        Raise your service ticket now
        </div> </Link> 
        </div>
      </div>
      
    </>
  );
}

export default Home;
