import "../styles/App.css";
import "../styles/adminmenu.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { HeaderComp } from "./HeaderComp";

const { SubMenu } = Menu;
function AdminMenu() {
  return (
    <div>
      <HeaderComp />
      <Menu
        className="containerMenu1"
        style={{
          width: 300,
          left: 40,
          background: "3A438B",
        }}
        mode="vertical"
      >
        <SubMenu
          style={{ background: "3A438B", color: "white", position: "center" }}
          icon={<MailOutlined />}
          title="Usuarios"
        ></SubMenu>
        <SubMenu
          style={{ background: "3A438B", color: "white", position: "center" }}
          icon={<AppstoreOutlined />}
          title="Cursos"
        ></SubMenu>

        <SubMenu
          style={{ background: "3A438B", color: "white", position: "center" }}
          icon={<SettingOutlined />}
          title="Turnos"
        ></SubMenu>

        <SubMenu
          style={{ background: "3A438B", color: "white", position: "center" }}
          icon={<AppstoreOutlined />}
          title="Comentarios"
        ></SubMenu>

        <SubMenu
          style={{ background: "3A438B", color: "white", position: "center" }}
          icon={<AppstoreOutlined />}
          title="Notificaciones"
        ></SubMenu>
      </Menu>
    </div>
  );
}
export default AdminMenu;
