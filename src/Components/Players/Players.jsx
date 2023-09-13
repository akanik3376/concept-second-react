import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const Players = ({ HandelHairBtn }) => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

    }, [])
    return (
        <div>
            <h1 ></h1>
            <div className="grid grid-cols-3">
                {
                    players.map(player => <Player player={player} key={player.id} HandelHairBtn={HandelHairBtn}></Player>)
                }
            </div>

        </div >
    );
};

export default Players;