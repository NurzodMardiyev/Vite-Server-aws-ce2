import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import "../../App.css";

import { FaTrashAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiChatVoiceFill } from "react-icons/ri";
import { MdPermMedia } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { SiMaterialformkdocs } from "react-icons/si";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaStubber } from "react-icons/fa6";
import { SiGooglenews } from "react-icons/si";
import { IoPersonAddSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    key: "/admin/add",
    label: "Bosh Sahifa",
    icon: <MdDashboard />,
  },
  {
    key: "sub2",
    label: "Perfona account",
    icon: <RiChatVoiceFill />,
    children: [
      {
        key: "/admin/sitting",
        label: "Sitting",
      },
      {
        key: "/admin/sitting",
        label: "Profile",
      },
      {
        key: "/admin/sitting",
        label: "Cards",
      },
    ],
  },

  {
    key: "/admin/lessons",
    label: "Barcha Darsliklar",
    icon: <FaStubber />,
  },

  {
    key: "/admin/employees",
    label: "Xodimlar",
    icon: <IoPersonAddSharp />,
  },
  {
    key: "/superadminpanel/korzinka",
    label: "Savat",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick(e) {
    navigate(e.key);
  }

  return (
    <div className="z-[99]">
      <div className="">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical " />
          <Menu
            onClick={handleClick}
            mode="inline"
            className="border h-[100vh] bg-gray-100 overflow-y-scroll sticky w-[300px] pt-[82px] pb-16"
            items={items}
            selectedKeys={location.pathname}
          />
        </Sider>

        <Layout>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={`absolute bottom-0 bg-gray-200 hover:bg-gray-500 `}
            style={{
              fontSize: "16px",

              width: collapsed ? 80 : 300,
              height: 64,
              borderRadius: 0,
            }}
          />
        </Layout>
      </div>

      <style jsx="true">{`
        ::-webkit-scrollbar {
          width: 3px;
        }
        ::-webkit-scrollbar-track {
          background: inherit;
        }
        ::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
