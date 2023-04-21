import './App.css';
import { Button, Modal, Space, Table, Input } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function App() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditingRecord, setIsEditingRecord] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      key: Date.now(),
      name: 'name',
      last: 'last',
      age: 'age',
      address: 'address',
      email: 'email'
    }
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Last',
      dataIndex: 'last',
      key: 'last'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Actions',
      // dataIndex: 'actions',
      key: 'actions',
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => editRecord(record)}
              style={{ cursor: 'pointer' }}
            />
            <DeleteOutlined
              onClick={() => deleteRecord(record)}
              style={{ color: 'red', marginLeft: 12, cursor: 'pointer' }}
            />
          </>
        );
      }
    }
  ];

  const addRecord = () => {
    const newRecord = {
      key: Date.now(),
      name: 'first name',
      last: 'last name',
      age: 'age',
      address: 'address',
      email: 'email'
    };
    setDataSource((pre) => {
      return [...pre, newRecord];
    });
    console.log(newRecord);
  };

  const deleteRecord = (record) => {
    Modal.confirm({
      title: 'Are you sure?',
      okText: 'Yes',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((person) => person !== record);
        });
      }
    });
  };
  const editRecord = (record) => {
    setShowEditModal(true);
    setIsEditingRecord({ ...record });
  };
  const resetModal = () => {
    setShowEditModal(false);
    setIsEditingRecord(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Space>
          <Button
            onClick={addRecord}
            style={{ marginBottom: 5 }}
            type="primary"
          >
            Add person
          </Button>
        </Space>
        <Table dataSource={dataSource} columns={columns} />
        <Modal
          open={showEditModal}
          title="Edit person"
          centered
          okText="Save"
          onCancel={() => resetModal()}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((el) => {
                if (el.key === isEditingRecord.key) {
                  return isEditingRecord;
                } else {
                  return el;
                }
              });
            });
            resetModal();
          }}
        >
          <Input
            placeholder="name"
            value={isEditingRecord?.name}
            onChange={(e) =>
              setIsEditingRecord((pre) => {
                return { ...pre, name: e.target.value };
              })
            }
          />
          <Input
            placeholder="last"
            value={isEditingRecord?.last}
            onChange={(e) =>
              setIsEditingRecord((pre) => {
                return { ...pre, last: e.target.value };
              })
            }
          />
          <Input
            placeholder="age"
            value={isEditingRecord?.age}
            onChange={(e) =>
              setIsEditingRecord((pre) => {
                return { ...pre, age: e.target.value };
              })
            }
          />
          <Input
            placeholder="address"
            value={isEditingRecord?.address}
            onChange={(e) =>
              setIsEditingRecord((pre) => {
                return { ...pre, address: e.target.value };
              })
            }
          />
          <Input
            placeholder="email"
            value={isEditingRecord?.email}
            onChange={(e) =>
              setIsEditingRecord((pre) => {
                return { ...pre, email: e.target.value };
              })
            }
          />
        </Modal>
      </header>
    </div>
  );
}

export default App;

{
  /*  */
}

{
  /*; */
}
