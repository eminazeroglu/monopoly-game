import React, {useCallback, useEffect, useState} from 'react';
import {Col, InputNumber, Modal, Row, Select} from "antd";
import {useAppContext} from "contexts/AppContext";
import {useFormik} from "formik";
import FormGroup from "../common/FormGroup";
import * as Yup from "yup";
import {dialog} from "../../utils/helpers";

const {Option} = Select;

const validationSchema = Yup.object().shape({
    player_id: Yup.string().required('Zəhmət olmasa kimin ödəyəçəyini seçin'),
    area_id: Yup.string().required('Zəhmət olmasa kimə ödəniş olunaçaq onu seçin')
})

function PlayerSale({visible, onClose}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {addUserArea, users, areas, user_areas} = useAppContext();
    const items = users.filter(i => i.id !== 10);

    const customAreas = user_areas.length > 0 ? areas.filter(a => !user_areas.find(ua => ua.area_id === a.id)) : areas;

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
                    const check = user_areas.find(i => i.player_id === values.player_id && i.id === area.id);
                    if (!check) {
                        addUserArea(values);
                        resetForm();
                        setIsModalVisible(false)
                        onClose(false);
                    }
                    else {
                        const user = items.find(i => i.id === check.player_id)
                        dialog({
                            message: `Bu ərazi artıq <b>${user.name}</b> tərəfindən alınıb.`,
                            buttonYes: false,
                            buttonNo: false,
                        })
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
                                name="area_id"
                                value={values.area_id}
                                onChange={e => setFieldValue('area_id', e)}
                            >
                                {customAreas.length > 0 && customAreas.map((i, index) => (
                                    <Option key={index} value={i.id}>{i.name} - {i.document_price} AZN</Option>
                                ))}
                            </Select>
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
