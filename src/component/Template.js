import React from 'react';
import styled from 'styled-components';

const TodoTemplate = styled.div`
  width: 380px;
  height: 600px;
  background: white;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 4px 1px black;
`;

function Template(props) {
    return (
    <TodoTemplate>
      {props.children}
      </TodoTemplate>
    )
 
}
  
  export default Template;