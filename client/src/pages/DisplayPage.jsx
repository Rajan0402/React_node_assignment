import React, { useEffect, useState } from "react";
import { Card, Spin, Button } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { StepBackwardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const calculateAge = (dob) => {
  const birthdate = dayjs(dob);
  return dayjs().diff(birthdate, "year");
};

const DisplayPage = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || {};
    } catch {
      return {};
    }
  });
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((response) => setUser(response.data));
    console.log(user);
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => setImgUrl(res.data.message));
  }, []);

  if (JSON.stringify(user) === JSON.stringify({})) {
    return (
      <div className="h-[calc(100vh-64px)] relative">
        <div className="absolute top-6 left-6 z-50">
          <Button icon={<StepBackwardOutlined />} onClick={handleBack}>
            {" "}
            Go Back
          </Button>
        </div>
        <div className="relative pt-10 text-center text-gray-700">
          No user data entered.
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-64px)] relative">
      <div className="absolute top-6 left-6">
        <Button icon={<StepBackwardOutlined />} onClick={handleBack}>
          {" "}
          Go Back
        </Button>
      </div>
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <Card
          title="Profile"
          className="w-96 shadow-lg"
          styles={{
            body: {
              paddingTop: 0,
            },
          }}
          cover={
            imgUrl ? (
              <img
                alt="Random Dog"
                src={imgUrl}
                className="object-cover h-60 p-6"
              />
            ) : (
              <Spin />
            )
          }
        >
          <div className="text-lg">
            <p>
              <span className="font-semibold">First Name:</span>{" "}
              {user.firstName}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span> {user.lastName}
            </p>
            <p>
              <span className="font-semibold">Age:</span>{" "}
              {calculateAge(user.dob)}
            </p>
            <p>
              <span className="font-semibold">DoB:</span> {user.dob}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DisplayPage;
