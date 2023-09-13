
const Player = ({ player, HandelHairBtn }) => {
    // console.log(player)
    const { name, role, image, country, salary } = player
    return (
        <div>
            <div className=" my-5 border-2 border-blue-900 mx-2 rounded flex justify-center">
                <div>
                    <img className="rounded-full w-16 mt-2" src={image} alt="" />
                    <div>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <h2 className="text-xl font-medium my-2">{role}</h2>
                        <p className="my-1">{country}</p>
                        <p>${salary}</p>
                        <button onClick={() => HandelHairBtn(player)} className="my-2 p-2 bg-red-600 rounded text-white">Get Hair</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;