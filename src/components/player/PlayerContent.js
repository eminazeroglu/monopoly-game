import React from 'react';
import PlayerItem from "./PlayerItem";
import {useAppContext} from "../../contexts/AppContext";

function PlayerContent(props) {
    const {users} = useAppContext();
    return (
        <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
            {users.length > 0 && users.map((i, index) => (
                <PlayerItem key={index} item={i}/>
            ))}
        </div>
    );
}

export default PlayerContent;
