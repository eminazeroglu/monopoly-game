import React from 'react';

function PlayerItem({item}) {
    return (
        <div className="flex justify-between items-center bg-white shadow-lg p-4 rounded">
            <div className="space-y-1">
                <p><b>Oyuncu adı:</b> {item.name}</p>
                <p><b>Balans:</b> {item.balance} AZN</p>
            </div>
            <div className="flex flex-col space-y-1">
                <button className="btn btn-red">Sil</button>
            </div>
        </div>
    );
}

export default PlayerItem;
