import styled from 'styled-components';

const TodoHeader = styled.div`

  border-bottom: 1px solid lightgray;
  
  .title {
    margin: 0;
    padding: 10px 0;
    text-align: center;
    font-size: 46px;
  }
  .date {
    margin: 0;
    padding-bottom: 20px;
 
    font-weight: bold;
    padding: 0px 0px 10px 20px;
  }
  .work {
    font-weight: bold;
    padding: 0px 0px 10px 20px;
  }
`;

function Header({ todos }) {
  // 체크된거 빼기
  const too = todos.filter(todo => !todo.checked);
  
  // 객체 - Tue Dec 13 2022 09:11:19 GMT+0900 (한국 표준시)
  const today = new Date();

  // 년 월 일
  const day = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // 요일
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeader>
      <div className='title'>TO DO LIST</div>
      <div className='date'>{day} {dayName}</div>
      <div className="work">남은 할 일 {too.length}개</div>
    </TodoHeader>
  );
}

export default Header;