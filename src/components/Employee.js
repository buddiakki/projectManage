import React, { useState, useEffect } from "react";
import { Table, Form, Input, Button, DatePicker, Select } from "antd";
import "./Employee.css";
import { useNavigate } from "react-router-dom";

const { Column } = Table;
const { Option } = Select;

const Employee = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [employees, setEmployees] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    // load employees from async storage or database
    // and set them in the state
    const employeesFromStorage = localStorage.getItem("employees");
    let loadedEmployees = [];
    if (employeesFromStorage) {
      loadedEmployees = JSON.parse(employeesFromStorage);
    }
    if (selectedTeam) {
      loadedEmployees = loadedEmployees.filter(
        (employee) => employee.Designation === selectedTeam
      );
    }
    setEmployees(loadedEmployees);
  }, [selectedTeam]);

  const handleAddEmployee = (values, uploadedFiles) => {
    // add new employee to the state
    const newEmployee = { ...values, key: Date.now(), files: uploadedFiles };
    setEmployees([...employees, newEmployee]);

    // save employees to async storage or database
    localStorage.setItem(
      "employees",
      JSON.stringify([...employees, newEmployee])
    );

    // reset form fields
    form.resetFields();
    setUploadedFiles([]);
  };

  const handleNameClick = (record) => {
    // display all employee details when the name in the table is clicked
    console.log(record);
  };

  const handleDeleteEmployee = (key) => {
    const newEmployees = employees.filter((employee) => employee.key !== key);
    setEmployees(newEmployees);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
  };

  const handlenavigateclick = () => {
    navigate("/");
  };

  return (
    <div className="form">
      <Button
        onClick={handlenavigateclick}
        type="default"
        style={{
          margin: "30px 0px 10px 40px",
          background: "coral",
        }}
      >
        go to Track Tasks
      </Button>
      <div className="form-container">
        <center>
          <h1>Employee Details</h1>
        </center>
        <Form
          form={form}
          onFinish={(values) => handleAddEmployee(values, uploadedFiles)}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="Designation"
            label="Designation"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="WebDevolepment">Web Devolepment</Option>
              <Option value="Testing">Testing</Option>
              <Option value="snow Flake">snow Flake</Option>
              <Option value="Sales Force">Sales Force</Option>
              <Option value="Mule Soft">Mule Soft</Option>
              <Option value="IOT">IOT</Option>
              <Option value="Mechine Learning">Mechine Learning</Option>
              <Option value="UI/UX">UI/UX</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="file" label="Upload File">
            <input
              type="file"
              onChange={(e) =>
                setUploadedFiles([...uploadedFiles, e.target.files[0]])
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Employee
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="filterContainer">
        <label htmlFor="dropdown">
          <h4>Filter Employees:</h4>
        </label>
        <select id="dropdown" onChange={(e) => setSelectedTeam(e.target.value)}>
          <option value="">All Teams</option>
          <option value="WebDevolepment">Web Development</option>
          <option value="Testing">Testing</option>
          <option value="Snow Flake">Snow Flake</option>
          <option value="Sales Force">Sales Force</option>
          <option value="Mule Soft">Mule Soft</option>
          <option value="IOT">IOT</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="UI/UX">UI/UX</option>
        </select>
      </div>
      <div className="table-container">
        <Table className="table-wid" dataSource={employees}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Phone Number" dataIndex="phone" key="phone" />
          <Column title="Email Address" dataIndex="email" key="email" />
          <Column title="Date of Birth" dataIndex="dob" key="dob" />
          <Column
            title="Designation"
            dataIndex="Designation"
            key="Designation"
          />
          <Column title="Gender" dataIndex="gender" key="gender" />

          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Button onClick={() => handleDeleteEmployee(record.key)}>
                Delete
              </Button>
            )}
          />
        </Table>
      </div>
    </div>
  );
};

export default Employee;
