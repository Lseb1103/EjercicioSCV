import "../styles/App.css";
import { Button, Form, Image, Input } from "antd";
import "../styles/login.css";
import logo from "../images/logo.png";
import "../styles/GreenButton.cs";
import { auth, db } from "../Firebase";
//import { BrowserRouter, Route, Link } from "react-router-dom";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = async (errorInfo) => {
  console.log("Success:", values);
  try {
    const user = values.username;
    const password = values.password;
    const userLogin = await auth.signInWithEmailAndPassword(user, password);
    console.log("user entrado", userLogin);
    history.push("/");
  } catch (error) {
    console.log("ocurrio un error");
  }
};

function Log() {
  return (
    <div>
      <div className="MainContainer">
        <div className="imageContainer">
          {" "}
          <Image width={400} src={logo} left={800} top={300} />
        </div>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="usuario"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su usuario!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="Contraseña"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <div className={"footer"}>¿No tienes cuenta? Regístrate </div>{" "}
          <div className={"footer1"} onClick={"footer1"}>
            {" "}
            Aquí
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Log;
