import React, {useCallback, useEffect, useState} from 'react';
import {Col, InputNumber, Modal, Row, Select} from "antd";
import {useAppContext} from "contexts/AppContext";
import {useFormik} from "formik";
import FormGroup from "../common/FormGroup";
import * as Yup from "yup";
import {dialog} from "../../utils/helpers";

const validationSchema = Yup.object().shape({
    who_id: Yup.string().required('Zəhmət olmasa kimin ödəyəçəyini seçin'),
    whom_id: Yup.string().required('Zəhmət olmasa kimə ödəniş olunaçaq onu seçin'),
    price: Yup.number().required('Zəhmət olmasa məbləği seçin'),
})

function PlayerPayment({visible, onClose}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {setUsers, users} = useAppContext();
    const [whos, setWhos] = useState([]);
    const [whoms, setWhoms] = useState([]);
    const {values, handleSubmit, resetForm, setFieldValue, errors, touched} = useFormik({
        initialValues: {
            who_id: '',
            whom_id: '',
            price: ''
        },
        validationSchema,
        onSubmit: values => {
            const whoIndex = users.findIndex(i => i.id === values.who_id);
            const whomIndex = users.findIndex(i => i.id === values.whom_id);
            if (whoIndex >= 0 && whomIndex >= 0) {
                if (users[whoIndex].balance < values.price) {
                    dialog({
                        message: `<b>${users[whoIndex].name}</b> adlı oyuncunun hesabında kifayyət qədər vəsait yoxdur.`,
                        buttonNo: false,
                        buttonYes: false,
                    })
                    return false;
                }

                if (users[whomIndex].id === 10 || users[whoIndex].id === 10) {
                    if (users[whomIndex].id === 10)
                        users[whoIndex].balance -= values.price;
                    if (users[whoIndex].id === 10)
                        users[whomIndex].balance += values.price;
                }
                else {
                    users[whoIndex].balance -= values.price;
                    users[whomIndex].balance += values.price;
                }

                setUsers(users);
                resetForm();
                setIsModalVisible(false)
                onClose(false);
            }
        }
    })

    const fetchWhos = useCallback(() => {
        setWhos(users.filter(i => i.id !== values.whom_id))
    }, [users, values.whom_id])

    const fetchWhoms = useCallback(() => {
        setWhoms(users.filter(i => i.id !== values.who_id))
    }, [users, values.who_id])

    const handleCancel = () => {
        setIsModalVisible(false);
        onClose(false);
    }

    useEffect(() => {
        fetchWhoms();
    }, [fetchWhoms])

    useEffect(() => {
        fetchWhos();
    }, [fetchWhos])

    useEffect(() => {
        setIsModalVisible(visible);
    }, [visible])

    return (
        <Modal
            visible={isModalVisible}
            footer={false}
            title="Ödəniş etmək formu"
            onCancel={handleCancel}
        >
            <form onSubmit={handleSubmit}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <FormGroup
                            label="Kimdən"
                            error={errors.who_id && touched.who_id}
                            errorMessage={errors.who_id}
                        >
                            <Select
                                name="who_id"
                                options={whos}
                                value={values.who_id}
                                fieldNames={{label: 'name', value: 'id'}}
                                onChange={e => setFieldValue('who_id', e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col span={24}>
                        <FormGroup
                            label="Kimə"
                            error={errors.whom_id && touched.whom_id}
                            errorMessage={errors.whom_id}
                        >
                            <Select
                                options={whoms}
                                fieldNames={{label: 'name', value: 'id'}}
                                name="whom_id"
                                value={values.whom_id}
                                onChange={e => setFieldValue('whom_id', e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col span={24}>
                        <FormGroup
                            label="Məbləğ"
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

export default PlayerPayment;
