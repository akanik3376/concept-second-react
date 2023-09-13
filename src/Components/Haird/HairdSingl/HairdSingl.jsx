import { useEffect, useState } from "react";

const HairdSingl = ({ hair }) => {
    const { name, salary, image } = hair


    return (
        <div className="p-2 text-2xl font-medium border-2 border-black my-3 p-5 m-5">
            <img className="w-10 rounded-full" src={image} alt="" />
            <h3>name: {name}</h3>
            <h3 className="mt-2">salary: ${salary}</h3>
        </div>
    );
};

export default HairdSingl;