import React, {useCallback, useEffect, useState} from 'react';
import {Col, InputNumber, Modal, Row, Select} from "antd";
import {useAppContext} from "contexts/AppContext";
import {useFormik} from "formik";
import FormGroup from "../common/FormGroup";
import * as Yup from "yup";
import {dialog} from "../../utils/helpers";

const {Option} = Select;

const validationSchema = Yup.object().shape({
    sale_user_id: Yup.string().required('Zəhmət olmasa kimin satış edəçəyini seçin'),
    area_id: Yup.string().required('Zəhmət olmasa ərazini seçin'),
    price: Yup.number().required('Zəhmət olmasa qiyməti daxil edin'),
    buy_user_id: Yup.string().required('Zəhmət olmasa alıçını seçin')
})

function PlayerTransferArea({visible, onClose}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {users, areas, user_areas, setUsers, setUserAreas} = useAppContext();
    const items = users.filter(i => i.id !== 10);
    const [userAreas, setAreas] = useState([]);
    const [buyUsers, setBuyUsers] = useState([]);

    const {values, handleSubmit, resetForm, setFieldValue, errors, touched} = useFormik({
        initialValues: {
            sale_user_id: '',
            area_id: '',
            price: '',
            buy_user_id: '',
        },
        validationSchema,
        onSubmit: values => {
            const saleUser = items.find(i => i.id === values.sale_user_id);
            const area = areas.find(i => i.id === values.area_id);
            const saleUserIndex = users.findIndex(i => i.id === values.sale_user_id);
            const buyUserIndex = users.findIndex(i => i.id === values.buy_user_id);
            const sale_index = user_areas.findIndex(u => u.player_id === values.sale_user_id && u.area_id === values.area_id);
            if (sale_index < 0) {
                dialog({
                    message: `<b>${saleUser.name}</b> adlı oyuncunun <b>${area.name}</b> adlı ərazisi mövcud deyil.`,
                    buttonNo: false,
                    buttonYes: false,
                })
                return false;
            }

            if (users[buyUserIndex].balance < values.price) {
                dialog({
                    message: `<b>${users[buyUserIndex].name}</b> adlı oyuncunun hesabında kifayyət qədər vəsait yoxdur.`,
                    buttonNo: false,
                    buttonYes: false,
                })
                return false;
            }

            user_areas.splice(sale_index, 1);
            if (users[buyUserIndex].id !== 10)
                setUserAreas([...user_areas, {player_id: values.buy_user_id, area_id: values.area_id}])


            users[saleUserIndex].balance += values.price;
            if (users[buyUserIndex].id !== 10) users[buyUserIndex].balance -= values.price;

            setUsers(users);

            resetForm();
            setIsModalVisible(false)
            onClose(false);
        }
    })

    const handleCancel = () => {
        setIsModalVisible(false);
        onClose(false);
    }

    const changeSaleUserId = useCallback(() => {
        if (values.sale_user_id) {
            const userAreaArr = user_areas.filter(i => i.player_id === values.sale_user_id).map(i => {
                return areas.find(a => a.id === i.area_id);
            });
            const userArr = users.filter(i => i.id !== values.sale_user_id);
            setAreas(userAreaArr);
            setBuyUsers(userArr);
        }
    }, [values.sale_user_id, areas, user_areas, users])

    useEffect(() => {
        setIsModalVisible(visible);
    }, [visible])

    useEffect(() => {
        changeSaleUserId();
    }, [changeSaleUserId])

    return (
        <Modal
            visible={isModalVisible}
            footer={false}
            title="Oyuncu arasında ərazi satışı"
            onCancel={handleCancel}
        >
            <form onSubmit={handleSubmit}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <FormGroup
                            label="Satış edən oyuncu"
                            error={errors.sale_user_id && touched.sale_user_id}
                            errorMessage={errors.sale_user_id}
                        >
                            <Select
                                name="sale_user_id"
                                options={items}
                                value={values.sale_user_id}
                                fieldNames={{label: 'name', value: 'id'}}
                                onChange={e => setFieldValue('sale_user_id', e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col span={24}>
                        <FormGroup
                            label="Ərazi"
                            error={errors.area_id && touched.area_id}
                            errorMessage={errors.area_id}
                        >
                            <Select
                                name="area_id"
                                value={values.area_id}
                                onChange={e => setFieldValue('area_id', e)}
                            >
                                {userAreas.length > 0 && userAreas.map((i, index) => (
                                    <Option key={index} value={i.id}>{i.name} - {i.document_price} AZN</Option>
                                ))}
                            </Select>
                        </FormGroup>
                    </Col>
                    <Col span={24}>
                        <FormGroup
                            label="Satış qiyməti"
                            error={errors.price && touched.price}
                            errorMessage={errors.price}
                        >
                            <InputNumber
                                name="price"
                                value={values.price}
                                onChange={e => setFieldValue('price', e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col span={24}>
                        <FormGroup
                            label="Ərazini alan oyuncu"
                            error={errors.buy_user_id && touched.buy_user_id}
                            errorMessage={errors.buy_user_id}
                        >
                            <Select
                                name="buy_user_id"
                                options={buyUsers}
                                value={values.buy_user_id}
                                fieldNames={{label: 'name', value: 'id'}}
                                onChange={e => setFieldValue('buy_user_id', e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col span={24}>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-green w-full"
                            >
                                Yadda saxla
                            </button>
                        </div>
                    </Col>
                </Row>
            </form>
        </Modal>
    );
}

export default PlayerTransferArea;
