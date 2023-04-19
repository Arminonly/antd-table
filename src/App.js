import './App.css';
import { Button, Modal, Space, Table, Input } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined, EditFilled } from '@ant-design/icons';

function App() {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'Alesya',
      last: 'Yanushkevich'
    },
    {
      id: 2,
      name: 'Milana',
      last: 'Yanushkevich'
    }
  ]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: '1'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: '2'
    },
    {
      title: 'Last',
      dataIndex: 'last',
      key: '3'
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (record) => {
        return (
          <>
            <EditFilled style={{ cursor: 'pointer' }} />
            <DeleteOutlined
            onClick={()=>deleteRecord(record)}
              style={{ color: 'red', marginLeft: 12, cursor: 'pointer' }}
            />
          </>
        );
      }
    }
  ];
  const addRecord = () => {
    const randomNumber = parseInt(Math.random()*10);
    const newRecord = {
      id: randomNumber,
      name: 'Name' + randomNumber,
      last: 'Last' + randomNumber
    }
    setDataSource(pre=> {
      return [...pre, newRecord]
    })
  };
  const deleteRecord = (record) => {
 setDataSource(pre=>{
  return pre.filter((person) => person.id !== record.id);
 })

  }
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
        <Modal>
          <Input />
        </Modal>
      </header>
    </div>
  );
}

export default App;
