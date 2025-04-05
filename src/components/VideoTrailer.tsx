import React from "react";
import Interstellar from "../assets/Interstellar.mp4";

const MovieTrailer: React.FC = () =>{
    return(
    <div 
    className="trailer">
        <video 
        autoPlay 
        muted 
        loop
        style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px"
        }}
        >
            <source src = {Interstellar} type = "video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
    );
};

export default MovieTrailer