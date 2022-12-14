// input 없을때 create 안되게 하기

import { useState } from "react";
import styled from "styled-components";

const TodoCreateForm = styled.form`
    padding: 6px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid darkgray;
`;

const Input = styled.input`
    padding: 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width: 85%;
    height: 40px;
    border: 1px solid gray;
    box-sizing: border-box;  // padding 때문에 width 100%하면 Template 밖으로 나가버림
`;

const Button = styled.button`
    width: 15%;
    height: 40px;
    padding: 10px;
    font-size: 1px;
    border: 1px solid gray;
    border-left: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

`;


const Create = ({ todoCreate }) => {
    const [value, setValue] = useState("");
    
    // input이 변경될때마다 실행
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();  // 새로고침 방지
        todoCreate(value);
        setValue("");
    }

    return (
        <TodoCreateForm onSubmit={onSubmit}>
        <Input 
        placeholder="입력"
        value={value}
        type="text"
        onChange={onChange}
         />
        <Button type="submit">추가</Button>
        </TodoCreateForm>
    )
}

export default Create;