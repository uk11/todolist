// item 흰색으로 (테두리만들기)

import React from "react";
import styled from "styled-components";
import { AiOutlineCheckSquare, AiOutlineBorder } from "react-icons/ai";


const TodoItem = styled.div`
    background-color: powderblue;
    padding: 16px;
    margin: 10px;
    border-radius: 10px;

    .checked .text {
        text-decoration: line-through;
        opacity: 0.5;
    }
`;

const CheckButton = styled.div`
    display: flex;
    align-items: center;
    svg {  // react icon
        margin-right: 10px;
        font-size: 22px;
    }
`;

const Item = ({ todo, onCheck }) => {
    const { id, text, checked } = todo;
    return (
        <TodoItem>

            <CheckButton className={`items ${checked ? "checked" : ""}`}>
                   {checked ? <AiOutlineCheckSquare /> : <AiOutlineBorder />}
                   <div className="text">{text}</div>
            </CheckButton>

        </TodoItem>
    )
}
 
export default Item;