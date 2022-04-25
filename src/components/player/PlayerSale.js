import React, {useCallback, useEffect, useState} from 'react';
import {Col, InputNumber, Modal, Row, Select} from "antd";
import {useAppContext} from "contexts/AppContext";
import {useFormik} from "formik";
import FormGroup from "../common/FormGroup";
import * as Yup from "yup";
import {dialog} from "../../utils/helpers";

const validationSchema = Yup.object().shape({
    player_id: Yup.string().required('Zəhmət olmasa kimin ödəyəçəyini seçin'),
    area_id: Yup.string().required('Zəhmət olmasa kimə ödəniş olunaçaq onu seçin')
})

function PlayerSale({visible, onClose}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {setUsers, users, areas} = useAppContext();
    const items = users.filter(i => i.id !== 10);
    const customAreas = areas.filter(a => users.filter(u => u?.areas?.find(ua => ua.id !== a.id)))
    const {values, handleSubmit, resetForm, setFieldValue, errors, touched} = useFormik({
        initialValues: {
            player_id: '',
            area_id: '',
        },
        validationSchema,
        onSubmit: values => {
            const index = users.findIndex(u => u.id === values.player_id);
            if (index >= 0) {
                const area = areas.find(a => a.id === values.area_id);
                if (area) {
                    if (parseFloat(users[index].balance) < parseFloat(area.document_price)) {
                        dialog({
                            message: `${users[index].name} adlı oyuncunun hesabında kifayyət qədər vəsait yoxdur.`,
                            buttonNo: false,
                            buttonYes: false,
                        })
                        return false;
                    }
                    if (!users[index]?.areas?.find(a => a.id === area.id)) {
                        users[index].areas = [...(users[index]?.areas?.length ? users[index]?.areas : []), area];
                        users[index].balance -= parseFloat(area.document_price);
                        console.log(users);
                        setUsers(users);
                        resetForm();
                        setIsModalVisible(false)
                        onClose(false);
                    }
                }
            }
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
            title="Ödəniş etmək formu"
            onCancel={handleCancel}
        >
            <form onSubmit={handleSubmit}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <FormGroup
                            label="Kimdən"
                            error={errors.player_id && touched.player_id}
                            errorMessage={errors.player_id}
                        >
                            <Select
                                name="player_id"
                                options={items}
                                value={values.player_id}
                                fieldNames={{label: 'name', value: 'id'}}
                                onChange={e => setFieldValue('player_id', e)}
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
                                options={customAreas}
                                fieldNames={{label: 'name', value: 'id'}}
                                name="area_id"
                                value={values.area_id}
                                onChange={e => setFieldValue('area_id', e)}
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

export default PlayerSale;
