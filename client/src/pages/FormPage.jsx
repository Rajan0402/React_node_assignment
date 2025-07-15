import { Form, Input, DatePicker, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import NotiContext from "../context/notificationContext";

const FormPage = () => {
  const [submitting, setSubimtting] = useState(false);
  const navigate = useNavigate();
  const { openNotification } = useContext(NotiContext);

  const onFinish = async (values) => {
    setSubimtting(true);
    const { firstname, lastname, dob } = values;

    localStorage.setItem(
      "user",
      JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        dob: dob.format("YYYY-MM-DD"),
      })
    );

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        {
          firstName: firstname,
          lastName: lastname,
          dob: dob.format("YYYY-MM-DD"),
        }
      );
      if (response.statusText === "OK") {
        openNotification(response.data.message, "bottomRight");
      }
      setSubimtting(false);
      navigate("/display");
    } catch (error) {
      openNotification(error.message, "bottomRight");
      navigate("/display");
      setSubimtting(false);
    }
  };

  const showLastUser = () => {
    navigate("/display");
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)]">
      <Card className="w-2/3 shadow md:w-1/2">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true },
              {
                pattern: /^[A-Za-z]{2,}$/,
                message: "Only letters allowed, at least 2 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true },
              {
                pattern: /^[A-Za-z\s*]{2,}$/,
                message: "Only letters allowed, at least 2 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={submitting}
            >
              Submit
            </Button>
          </Form.Item>
          <div className="flex justify-end">
            <Button type="link" style={{ padding: 0 }} onClick={showLastUser}>
              show last user
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default FormPage;
