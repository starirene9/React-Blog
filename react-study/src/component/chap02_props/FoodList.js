import React from 'react'
import FoodItem from "./FoodItem";
import SayHello from "../../SayHello";

const FoodList = () => {

    // fetch를 통해 음식 목록 json을 불러옴
    const foods = {
        id: 327432,
        foodList: [
            {
                fName: '짜장면',
                rice: 6000,
                id: 'chiense'
            },
            {
                fName: '해물파전',
                rice: 12000,
                id: 'Korean'
            },
            {
                fName: '가츠동',
                rice: 8000,
                id: 'japanese'
            },
            {
                fName: '김치찌개',
                rice: 5000,
                id: 'Korean'
            },
            {
                fName: '오향장육',
                rice: 5000,
                id: 'chinese'
            }
        ]
    };
    return (
        <ul>
            <SayHello>
                <a href={'https://www.naver.com'}>네이버 링크</a>
            </SayHello>
            <SayHello>
                <a href={'https://www.google.com'}>구글 링크</a>
            </SayHello>

            {
                foods.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id}/>)
            }

        </ul>
    )
}

export default FoodList