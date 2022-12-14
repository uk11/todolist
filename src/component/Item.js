// item 흰색으로 (테두리만들기)

import React from "react";
import styled from "styled-components";
import { AiOutlineCheckSquare, AiOutlineBorder } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = styled.div`
    padding: 18px;
    margin: 14px;
    border-radius: 10px;
    box-shadow: 1px 2px 4px 1px black;

    .checked .text {
        text-decoration: line-through;
        opacity: 0.5;
    }
    .checked .check {
        color: green;
    }
`;

const CheckButton = styled.div`
    display: flex;
    align-items: center;
    svg {  // react icon
        margin-right: 12px;
        font-size: 22px;
        cursor: pointer;
    }
    .text {
        flex: 1;
    }
    .trash {
        text-align: end;
        margin: 0;
    }
`;

const Item = ({ todo, onCheck, onRemove, todoLen }) => {
    const { id, text, checked } = todo;


    const onChecked = () => {
       onCheck(id)
    }


    return (
        <TodoItem>

            <CheckButton className={`items ${checked ? "checked" : ""}`}>
                   {checked ? <AiOutlineCheckSquare className="check" onClick={onChecked}/> 
                   : <AiOutlineBorder onClick={() => {onCheck(id)}}/>}
                   <div className="text">{text}</div>
            <AiOutlineDelete className="trash" onClick={() => {onRemove(id)}}/>
            </CheckButton>
        </TodoItem>
    )
}
 
export default Item;