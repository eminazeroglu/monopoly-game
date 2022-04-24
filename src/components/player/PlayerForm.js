import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../contexts/AppContext";
import {Col, Input, InputNumber, Modal, Row} from "antd";
import {useFormik} from "formik";
import * as Yup from 'yup';
import FormGroup from "../common/FormGroup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Zəhmət olmasa boş buraxmayın.'),
    balance: Yup.number().required('Zəhmət olmasa boş buraxmayın.'),
})

function PlayerForm({visible, onClose}) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const {addUsers} = useAppContext();
    const {values, handleSubmit, resetForm, setFieldValue, errors, touched} = useFormik({
        initialValues: {
            name: '',
            balance: 15000
        },
        validationSchema,
        onSubmit: values => {
            addUsers(values);
            resetForm();
        }
    })

    const handleCancel = () => {
        setIsModalVisible(false);
        onClose(false);
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
            <form onSubmit={handleSubmit}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <FormGroup
                            label="Oyuncu adı"
                            error={errors.name && touched.name}
                            errorMessage={errors.name}
                        >
                            <Input
                                name="name"
                                value={values.name}
                                onChange={e => setFieldValue('name', e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col span={24}>
                        <FormGroup
                            label="Balans"
                            error={errors.balance && touched.balance}
                            errorMessage={errors.balance}
                        >
                            <InputNumber
                                name="balance"
                                value={values.balance}
                                onChange={e => setFieldValue('balance', e)}
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

PlayerForm.defaultProps = {
    visible: true
}

export default PlayerForm;
