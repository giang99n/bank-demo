
import { Modal, Spin, Row, Col,Form,Input, Button, Tag, Table } from 'antd';
import { EditFilled, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import useLayout from '../../../../common_hook/layout_hook';
import { useListAccount } from './hook/listAccount.hook';
import { Link, useHistory } from "react-router-dom";
import { listRoute } from '../../../../constants/list_route';
import { useState } from 'react';
import {deleteCustomer} from "../../../../services/customer_service"
import { keyLocal } from '../../../../constants/key_local';
import { localSpace } from '../../../../services/local/local_space';
function Customer() {

    useLayout({ code: 'Customer', label: 'Customer' })
    const history = useHistory();
    const role = localSpace?.getData(keyLocal.AUTHEN)?.account?.roleList[0].name||'';


    const  {
        listData,
        total,
        //  initFormSearch,
        onFinish,
        //onClearForm,     
        initParam,
        changePage,
        handleInputOnchange
    }=useListAccount();
   
    const [visible, setVisible] = useState(false);
    const [idDelete, setIdDelete] = useState();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = (id) => {
        setVisible(true);
        setIdDelete(id)
    };
    
    const handleOk = async() => {
        setConfirmLoading(true);
        const result = await deleteCustomer(idDelete);
        console.log(result)
        setVisible(false);
        setConfirmLoading(false);

    };
    
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <p>{id}</p>
        },
        {
            title: 'Name',
            // dataIndex: 'name',
            // key: 'name',
            render: (record) =>{
                return (<>{`${record.firstName} ${record.lastName}`}</> )
              
            }
           
        },
        
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
           
        },

        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: (gender) =>{
                if(gender==='F'){
                    return (<>Nữ</> )
                }else{
                    return (<>Nam</> )
                }
            }
        },  
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (id) =>{
                if(role=='Admin') 
                    return (
                        <div>
                            <Tag 
                                onClick={() => history.push({
                                    pathname: `${listRoute.CUSTOMER_ADMIN_FORM_DETAIL_UPDATE}/${id}`,
                                    state: { id: id}
                                })}
                                className="tag-action" color={'geekblue'}>update</Tag>
                            <Tag onClick={()=>{showModal(id) }} className="tag-action" color={'red'}>delete</Tag>
                        </div>
                    )
            } 
        },
    ];



    return (
        <div className="list-Customer">
      
            <Row justify="space-between">
                    <Col span={17}>
                        <Form
                            name="control-hooks"
                            className="login-form"
                            // initialValues={initParam}
                            onFinish={onFinish}
                            // form={formSearch}
                        >
                            <Row>
                                <Col span={9}>
                                    <Form.Item name="keyword">
                                        <Input
                                            allowClear
                                            prefix={<SearchOutlined />}
                                            placeholder="Type your keyword"
                                            onChange={handleInputOnchange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={2} >
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="login-form-button"
                                        >
                                            Search
                                        </Button>
                                    </Form.Item>
                                </Col>
                                {/* <Col span={2} offset={1}>
                                    <Form.Item>
                                        <Button onClick={onClearForm} type="ghost" htmlType="button" danger='true'>
                                            Clear
                                        </Button>
                                    </Form.Item>
                                </Col> */}
                            </Row>
                        </Form>
                    </Col>

                    <Col span={6}>
                        <Row justify="end">
                        <Link to={`${listRoute.CUSTOMER_ADMIN_FORM}`}>
                                <Button
                                    icon={<PlusOutlined />}
                                    type="primary"
                                >
                                    New
                                </Button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
                <Table 
                    className="list-customer-table"
                    dataSource={listData} 
                    columns={columns} 
                    scroll={{ x: '100%'}}
                    pagination={
                        {
                            defaultCurrent: initParam.page+1,
                            current: initParam.page+1,
                            pageSize: initParam.size,
                            total: total,
                            onChange: changePage ,
                            showSizeChanger: false,
                        }
                    } 
                />
                 <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                 >
                    <p>Bạn có chắc chắn xóa người này?</p>
                </Modal>

        </div >
    )
}

export default Customer;