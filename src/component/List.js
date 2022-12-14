import React from "react";
import styled from "styled-components";
import Item from "./Item";

const TodoList = styled.div`
    flex: 1;  // 차지하는 영역 꽉 채우기
    overflow-y: auto;
`;
const List = ({ todos, onCheck }) => {
    return (
        <TodoList>
            {todos.map(todo => 
                <Item todo={todo} key={todo.id} onCheck={onCheck} />
            )}
        </TodoList>
    )
}

export default List;