import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../contexts/AppContext";
import {Col, Modal, Row} from "antd";

function PlayerForm({visible, onClose}) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const {setUsers} = useAppContext();
    const [error, setError] = useState({});
    const initialForm = {
        name: '',
        balance: 15000
    };
    const [form, setForm] = useState(initialForm);

    const handleCancel = () => {
        setIsModalVisible(false);
        onClose(false);
    }

    const userSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.balance) {
            setError([]);
            setUsers(form);
            setForm(initialForm)
        }
        else {
            if (!form.name && !error['name']) setError({...error, name: true});
            if (!form.balance && !error['balance']) setError({...error, balance: true});
        }
    }

    useEffect(() => {
        setIsModalVisible(visible);
    }, [visible])


    return (
        <Modal
            visible={isModalVisible}
            footer={false}
            title="Oyuncu elave etmək formu"
            onCancel={handleCancel}
        >
            <form onSubmit={userSubmit}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <div className="form-group">
                            <label>Oyuncu adı</label>
                            <input type="text" value={form.name} onChange={e => setForm({
                                ...form,
                                name: e.target.value
                            })}/>
                            {error.name && (<p className="text-red-500">Zəhmət olmasa boş buraxmayın</p>)}
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="form-group">
                            <label>Balans</label>
                            <input type="number" value={form.balance} onChange={e => setForm({
                                ...form,
                                balance: e.target.value
                            })}/>
                            {error.balance && (<p className="text-red-500">Zəhmət olmasa boş buraxmayın</p>)}
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <button type="submit" className="btn btn-green w-full">Yadda saxla</button>
                        </div>
                    </Col>
                </Row>
            </form>
        </Modal>
    );
}

PlayerForm.defaultProps = {
    visible: true
}

export default PlayerForm;
