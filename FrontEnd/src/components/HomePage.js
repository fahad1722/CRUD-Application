import * as React from "react";
import { styled } from "@mui/system";
import image from "./image1.svg";

const MyComponent = styled("div")({
  color: "red",
  fontSize: "40px",
  backgroundColor: "aliceblue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const HomePage = () => {
  return (
    <MyComponent>
      <img src={image} alt="" style={{ width: 500, height: 400 }} />
      Welcome to CRUD Application Home Page
    </MyComponent>
  );
};
export default HomePage;
