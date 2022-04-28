import React, {useState} from 'react';
import AreaTitleDeed from "../area/AreaTitleDeed";
import {useAppContext} from "../../contexts/AppContext";
import {Modal} from "antd";
import {groupBy} from "../../utils/helpers";

function PlayerItem({item}) {
    const {user_areas, areas} = useAppContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [area, setArea] = useState({});

    let itemAreas = user_areas.filter(i => i.player_id === item.id).map(i => {
        const area = areas.find(a => a.id === i.area_id);
        return {
            player_id: i.player_id,
            ...area
        }
    });
    itemAreas = groupBy(itemAreas, 'bg_color');

    const handleArea = (item) => {
        setArea(item)
        setIsModalVisible(true);
    }

    const handleStyle = (i) => {
        const style = {backgroundColor: i.bg_color, color: i.color};
        if (i.type === 'transport') {
            style.backgroundColor = 'blue'
            style.color = '#fff'
        }
        else if (i.type === 'company') {
            style.backgroundColor = 'yellow'
            style.color = '#000'
        }

        return style;
    }

    return (
        <>
            <div className="flex justify-between relative items-center bg-white shadow-lg p-4 rounded">
                <div className="space-y-1 w-full">
                    <div className="space-y-1">
                        <p><b>Oyuncu adı:</b> {item.name}</p>
                        <p><b>Balans:</b> {item.balance} AZN</p>
                    </div>
                    {Object.keys(itemAreas).length > 0 && (
                        <div className="flex flex-wrap gap-2 border border-gray-200 p-2 rounded">
                            {Object.keys(itemAreas).map((key, index) => (
                                <span key={index + '_' + key} className="inline-flex gap-2">
                                    {itemAreas[key].map((i, index) => (
                                        <button onClick={e => handleArea(i)} className="btn font-medium" style={handleStyle(i)} key={index}>{i.name}</button>
                                    ))}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex flex-col space-y-1 absolute top-2 right-2">
                    <button className="btn btn-red">Sil</button>
                </div>
            </div>

            {(area && isModalVisible) && (
                <Modal
                    visible={isModalVisible}
                    footer={false}
                    title="Ərzai məlumatları"
                    className="!w-full lg:!w-[300px]"
                    onCancel={e => setIsModalVisible(false)}
                >
                    <AreaTitleDeed
                        item={area}
                    />
                </Modal>
            )}
        </>
    );
}

export default PlayerItem;
