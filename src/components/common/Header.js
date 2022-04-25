import React, {useState} from 'react';
import PlayerForm from "../player/PlayerForm";
import {useAppContext} from "../../contexts/AppContext";
import PlayerPayment from "../player/PlayerPayment";
import PlayerSale from "../player/PlayerSale";

function Header() {
    const monopolyImage = require('../../assets/img/monopoly.png');

    const {resetGame, users} = useAppContext();
    const [playerFormModal, setPlayerFormModal] = useState(false);
    const [playerPaymentModal, setPlayerPaymentModal] = useState(false);
    const [playerSaleModal, setPlayerSaleModal] = useState(false);

    return (
        <>
            <div className="bg-white flex flex-col lg:flex-row items-center justify-between space-y-1 lg:space-x-4 p-5 rounded shadow-lg">
                <div className="order-2 lg:order-1 pt-4 flex w-full justify-start space-x-2 lg:pt-0 lg:h-full">
                    <button
                        onClick={() => setPlayerFormModal(true)}
                        className="btn btn-green flex-1 lg:flex-initial"
                    >
                        Oyuncu əlavə et
                    </button>
                    <button
                        className="btn btn-pink flex-1 lg:flex-initial"
                        onClick={() => setPlayerPaymentModal(true)}
                    >
                        Ödəniş et
                    </button>
                </div>
                <div className="flex justify-center items-center order-1 space-y-2 lg:order-2 flex-col shrink-0">
                    <figure className="w-20 h-20 rounded-full overflow-hidden">
                        <img src={monopolyImage} alt="Monopoly Bank"/>
                    </figure>
                    <p className="text-lg font-medium">Monopoly Banking</p>
                    {users.length > 0 && (
                        <button
                            onClick={resetGame}
                            className="btn btn-red lg:flex-initial"
                        >
                            Oynu yenidən başlat
                        </button>
                    )}
                </div>
                <div className="order-3 flex w-full justify-end space-x-2 lg:pt-0 lg:h-full">
                    <button
                        className="btn btn-orange flex-1 lg:flex-initial"
                        onClick={() => setPlayerSaleModal(true)}
                    >
                        Ərazi sat
                    </button>
                    <button
                        className="btn btn-green flex-1 lg:flex-initial"
                    >
                        İpoteka et
                    </button>
                </div>
            </div>

            <PlayerForm visible={playerFormModal} onClose={() => setPlayerFormModal(false)}/>
            <PlayerPayment visible={playerPaymentModal} onClose={() => setPlayerPaymentModal(false)}/>
            <PlayerSale visible={playerSaleModal} onClose={() => setPlayerSaleModal(false)}/>
        </>
    );
}

export default Header;
