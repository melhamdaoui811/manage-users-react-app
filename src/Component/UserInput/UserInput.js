import React from "react";
import styled from "styled-components";
import Form from "./Form/Form";
export default function UserInput(props) {
  return (
    <UserInputCont>
      <Form
        addUserHandler={props.addUserHandler}
        messageHandler={props.messageHandler}
      />
    </UserInputCont>
  );
}

const UserInputCont = styled.div`
  background-color: #88b9d7;
  width: 100%;
  height: 30%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
