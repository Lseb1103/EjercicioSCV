import "../styles/App.css";
import "../styles/register.css";
//import { HeaderComp } from "./HeaderComp";
import { Table } from "antd";
function AdminTable() {
  const columns = [
    {
      title: "Usuario",
      dataindex: "usuario",
      key: "usuario",
    },
    {
      title: "Nombre",
      dataindex: "nombre",
      key: "nombre",
    },
    {
      title: "Apellido",
      dataindex: "apellido",
      key: "apellido",
    },
    /*{
      title: "Acciones",
      dataindex: "acciones",
      key: "acciones",
      render: (fila) => (
        <>
          <Button type="primary">Editar</Button>{" "}
          <Button type="primary" danger>
            Eliminar
          </Button>
        </>
      ),
    },*/
  ];
  const data = [
    {
      key: "1",
      Usuario: "123",
      Nombre: "luis",
      Apellido: "catota",
    },
    {
      key: "2",
      Usuario: "123",
      Nombre: "luis",
      Apellido: "catota",
    },
    {
      key: "3",
      Usuario: "123",
      Nombre: "luis",
      Apellido: "catota",
    },
  ];

  return (
    <div className="app">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
export default AdminTable;
