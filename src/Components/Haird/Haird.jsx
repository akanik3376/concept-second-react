import HairdSingl from "./HairdSingl/HairdSingl";

const Haird = ({ addHair }) => {
    console.log(addHair)
    return (
        <div className=" border border-black w-1/3 mt-5">
            <h2 className="text-3xl font-semibold text-center">Get Hair</h2>
            <h3 className="text-3xl text-center font-semibold">Add Hair:{addHair.length}</h3>
            <div>
                {
                    addHair.map((hair, idx) => <HairdSingl hair={hair} key={idx}></HairdSingl>)
                }
            </div>
        </div>
    );
};

export default Haird;