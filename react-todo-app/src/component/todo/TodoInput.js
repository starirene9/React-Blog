import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import cn from 'classnames';

import './scss/TodoInput.scss';

const TodoInput = ({addTodo}) => {

    // 입력창이 열리는 여부를 표현하는 상태값
    const [open, setOpen] = useState(false);

    // 할일 입력창에 입력한 내용을 표현하는 상태값
    const [todoText, setTodoText] = useState(''); // 괄호 안에는 todoText의 초기 호은 기본값을 넣어줌 : 우리는 빈 문자열 넣기

    // + 버튼 클릭시 이벤트 처리
    const onToggle = () => {
        setOpen(!open);
    };

    // 서브밋 이벤트 핸들러
    const submitHandler = e => {
        e.preventDefault();
        // console.log("폼이 제출됨!");

       // const $input = document.querySelector('.insert-form input');
       //  console.log($input.value);
       //
       //  $input.value = '';
       //  console.log(todoText); //3

        addTodo(todoText); // 내가원하는 시점에 이 함수를 호출해서 내가 원하는걸 넣어줌

        // 입력이 끝나면 입력창 비우기
        setTodoText(''); //4
    };

    //input change 이벤트 핸들러 함수
    const todoChangeHandler = e => { //2
        // console.log(e.target.value); //입력값이 나옴
        setTodoText(e.target.value);
    };

    return (
        <>
            {
                // 상태값에 따른 조건부 랜더링 : open이면 오른쪽 보고 false이면 바로 실행 안함
                open && (<div className='form-wrapper'>
                    <form className='insert-form' onSubmit={submitHandler}>
                        <input
                            type='text'
                            placeholder='할 일을 입력 후, 엔터를 누르세요!'
                            onChange={todoChangeHandler} //1
                            autoFocus    //이거 넣으면 커서가 입력 칸으로 이 : js 코드임
                            value={todoText}  //5
                        />
                    </form>
                </div>)
            }

            {/* classnames의 cn() : 첫번째 파라미터는 항상 유지할 클래스
             두번째 파라미터는 논리 상태값 => 논리 상태값이 true일 경우 해당클래스가 추가 false일 경우 제거
              const [open, setOpen] = useState(false); 항상 상태 변수가 있어야 함
              */}
            {/*open이 true일때 abc가 붙고 또 사라짐
             {abc: open} 변수 이름을 바꾸지 않고도 사용 가능 함 */}
            <button className={cn('insert-btn', {open})} onClick={onToggle}>
                <MdAdd />
            </button>

        </>
    )
}

export default TodoInput