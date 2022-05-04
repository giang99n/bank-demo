import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
    Button,
    Col,
    DatePicker,
    Divider,
    Form,
    Input,
    Result,
    Row,
    Select,
    Spin,
    Switch,
} from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormCustomer } from "./hook/customerForm.hook";


const { Option } = Select;
function CustomerForm() {
    const {
        initForm,
        form,
        onFinish,
        onChange,
        result,
    } = useFormCustomer();

    const allowEdit =true;

    return (
    
            <div className="form-new-customer">
                {/* {result.success && (
                    <Result
                        status="success"
                        title={result.mess}
                        subTitle={
                            <Link to={`${list.abcxyz}`}>
                                Back to list event page
                            </Link>
                        }
                    />
                )} */}
                {true && (
                    <Form
                        name="formCustomer"
                        labelAlign="left"
                        labelCol={{ span: 6 }}
                        onFinish={onFinish}
                        // initialValues={initForm}
                        // defaultValue={initForm}
                        // onValuesChange={onChange}
                         form={form}
                    >
                        {/* {allowEdit && (
                                    <Row justify="end">
                                        <Col className="btn-submit">
                                            <Form.Item>
                                                <Button
                                                    className="btn-submit-primary"
                                                    type="primary"
                                                    htmlType="submit"
                                                >
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                        )} */}
                        <Row justify="space-around">
                            <Col xl={10} xs={24}>
                                <Form.Item
                                    name="email"
                                    label="Email"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="Email"
                                        disabled={!allowEdit}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="firstName"
                                    label="First Name"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="First Name"
                                        disabled={!allowEdit}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="lastName"
                                    label="Last Name"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="Last Name"
                                        disabled={!allowEdit}
                                    />
                                </Form.Item>
                             
                                <Form.Item
                                    name="age"
                                    label="Age"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="Age"
                                        disabled={!allowEdit}
                                    />
                                </Form.Item>
                                
                               
                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                 
                                >
                                    <Select
                                      //  style={{ width: "100%"}}
                                        disabled={!allowEdit}
                                        placement="bottomLeft"
                                    >
                                        <Option value="F">Nữ</Option>
                                        <Option value="M">Nam</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="balance"
                                    label="Balance"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="Balance"
                                        disabled={!allowEdit}
                                    />
                            </Form.Item>
                        
                            </Col>
                            <Col  xl={2}/>
                            <Col xl={10} xs={24}>
                            <Form.Item
                                    name="address"
                                    label="Address"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="Address"
                                        disabled={!allowEdit}
                                    />
                            </Form.Item>
                            <Form.Item
                                    name="city"
                                    label="City"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="City"
                                        disabled={!allowEdit}
                                    />
                            </Form.Item>
                            <Form.Item
                                    name="state"
                                    label="State"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="State"
                                        disabled={!allowEdit}
                                    />
                            </Form.Item>
                            <Form.Item
                                    name="employer"
                                    label="Employer"                                  
                                >
                                   <Input
                                        style={{ width: "100%" }}
                                        placeholder="Employer"
                                        disabled={!allowEdit}
                                    />
                            </Form.Item>
                            
                            <Form.Item
                                    name="roleList"
                                    label="Role"
                                >
                                    <Select
                                        style={{ width: "100%"}}
                                        disabled={!allowEdit}
                                    >
                                        <Option value="user">User</Option>
                                        <Option value="">...</Option>
                                    </Select>
                            </Form.Item>
                            
                                
                            </Col>
                        </Row>
                        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        
                    </Form>
                )}
            </div>
        
    );
}

export default CustomerForm;
