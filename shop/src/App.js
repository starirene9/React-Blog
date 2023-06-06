import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Carousel} from 'react-bootstrap';
import './App.css';
import {useState} from "react";
import data from './data';

// import {a, b} from './data.js'; // 경로는 ./부터 시작함
// 보내는 쪽은 export {a, b}

// 이미지 inline 으로 바로 넣고 싶은 경우
// 1. style={{background : 'url('+bg+')'}
// 2. import bg from './img/Qr-crew.jpg';

//public 폴더도 이미지 넣기 쌉가능
//{process.env.PUBLIC_URL + '/'} 이렇게 넣으면 배포할때 문제 없음

// import 해서 {}안에 여러개 쓰기 쌉가능
function App() {

    let [info, setInfo] = useState(data);
    // info는 data 배열에 들어가있는 object 3개가 나옴 , setInfo 는 info를 사용하는 함수임

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">⭐️ B I T N A R A</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*<div className="main-bg"></div>*/}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/maingbg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Do you want to be a cabin crew?</h3>
                        <p>Join Bitna's free Online Crew Course.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/travel.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fly all over the place</h3>
                        <p>You can work, explore, and can reach your dream.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div className="container">
                <div className="row">
                    {
                        // {}에 데이터 배열을 가지고 있는 state info 배열에 map 을 돌리기
                        info.map(function (a,i) {
                            return (
                                <div className="col-md-4">
                                    <img className="secondImg" src={info[i].src} alt={info[i].alt} width="80%"/>
                                    <h3>{info[i].title}</h3>
                                    <p>{info[i].content}</p>
                                </div>
                            )
                        })
                    }

                    {/*컴포넌트 만들기 하단 예시 하나 참고 : function 대문자로 작명 return 후 <작명/>*/}
                    {/*<Component1 info={info}/>*/}

                </div>
            </div>
        </div>
    );
}

//
// function Component1(props){
//     return (
//         <div className="col-md-4">
//             <img className="secondImg" src="/svc.jpg" alt="승무원사진" width="80%"/>
//             <h3>{props.info[0].title}</h3>
//             <p>{props.info[0].content}</p>
//         </div>
//     )
// }

export default App;
