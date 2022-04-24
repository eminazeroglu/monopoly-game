import React from 'react';
import PlayerItem from "./PlayerItem";
import {useAppContext} from "../../contexts/AppContext";

function PlayerContent(props) {
    const {users} = useAppContext();
    const items = users.filter(i => i.id !== 10);
    return (
        <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
            {items.length > 0 && items.map((i, index) => (
                <PlayerItem key={index} item={i}/>
            ))}
        </div>
    );
}

export default PlayerContent;
