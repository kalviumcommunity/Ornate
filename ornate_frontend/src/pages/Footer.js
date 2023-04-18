import React, { useState } from "react";
import "../App.css";
import { FaStar } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, ChakraProvider, Stack } from "@chakra-ui/react";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#9900ff",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#9900ff",
    },
  },
});

const colors = {
  yellow: "#9900ff",
  white: "#FF8CC6",
};

const initial_form_state = {};

const form_validation = Yup.object().shape({});

const Footer = () => {
  const rate_star = Array(5).fill(0);

  const [currentValue, setcurrentValue] = useState(0);
  const [hoverValue, sethoverValue] = useState(undefined);

  const handleClick = (value) => {
    setcurrentValue(value);
  };

  const handleMouseOver = (value) => {
    sethoverValue(value);
  };

  const handleMouseOut = (value) => {
    sethoverValue(!value);
  };

  return (
    <div className="footer">
      <div className="rate_form" style={{ color: "white" }}>
        <h1>Your feedback helps us to improve!</h1>
        <h2>Rate your Ornate experience:</h2>
        <div className="star">
          {rate_star.map((_, index) => {
            return (
              <FaStar
                key={index}
                style={{ cursor: "pointer" }}
                size={26}
                stroke="#9900ff"
                fill={
                  (hoverValue || currentValue) > index
                    ? colors.yellow
                    : colors.white
                }
                onClick={() => handleClick(index + 1)}
                onMouseEnter={() => {
                  handleMouseOver(index + 1);
                }}
                onMouseLeave={() => {
                  handleMouseOut(index + 1);
                }}
              />
            );
          })}
        </div>
        <Formik
          initialValues={{
            ...initial_form_state,
          }}
          validationSchema={form_validation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form autoComplete="off">
            <CustomTextField label="Email Id" variant="outlined" fullWidth />
            <p
              style={{
                color: "#9900ff",
                fontFamily: "Courier New",
                fontSize: "1.2em",
              }}
            >
              How can we improve the application
            </p>
            <CustomTextField
              fullWidth
              label="Feedback"
              variant="outlined"
              style={{marginBottom: '1vh'}}
            ></CustomTextField>
            <ChakraProvider>
              <Stack align="center" spacing={4}>
                <Button colorScheme="purple">Submit</Button>
              </Stack>
            </ChakraProvider>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Footer;
