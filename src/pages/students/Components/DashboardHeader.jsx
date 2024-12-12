import React from "react"
import { BellOutlined } from '@ant-design/icons'; 
import { Button, notification } from 'antd';

export default function DashboardHeader({userName}){
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
      api.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
        duration: 0,
      });
    };
    return(
        <header className="bg-blue-500 w-[100%] text-white p-4 flex justify-between items-center">
      {/* Welcome Message */}
      <h1 className="text-xl font-semibold">
        Welcome, {userName}!
      </h1>
      {/* Notifications Icon */}
      <div className="relative">
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        notification <BellOutlined className="text-2xl cursor-pointer" />
      </Button>
        
        {/* Notification Badge Logic */}
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3 {/* Replace with dynamic logic */}
        </span>
      </div>
    </header>
    )
}