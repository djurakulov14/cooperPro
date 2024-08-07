import { useState } from "react"
import ProductsSection from "./Components/ProductsSection"
import Sales from "./Components/Sales"
import SectionFirst from "./Components/SectionFirst"
import Layout from "./Layout/Layout"


function App() {

    const [arr, setArr] = useState([
        {
            "id": 1,
            "img": "first",
            "title": "Медный чайник с фарфоровой ручкой",
            "price": 1953,
            "isOnSale": true,
            "isLike": false
        },
        {
            "id": 2,
            "img": "second",
            "title": "Серебряный чайник с деревянной ручкой",
            "price": 2500,
            "isOnSale": false,
            "isLike": false
        },
        {
            "id": 3,
            "img": "first",
            "title": "Чайник из нержавеющей стали",
            "price": 1750,
            "isOnSale": true,
            "isLike": false
        },
        {
            "id": 4,
            "img": "second",
            "title": "Керамический чайник с узорами",
            "price": 2200,
            "isOnSale": false,
            "isLike": false
        },
        {
            "id": 5,
            "img": "first",
            "title": "Стеклянный чайник с фильтром",
            "price": 1800,
            "isOnSale": true,
            "isLike": false
        },
        {
            "id": 6,
            "img": "second",
            "title": "Чайник из чугунного сплава",
            "price": 2600,
            "isOnSale": false,
            "isLike": false
        },
        {
            "id": 7,
            "img": "first",
            "title": "Эмалированный чайник с цветочным принтом",
            "price": 2100,
            "isOnSale": true,
            "isLike": false
        },
        {
            "id": 8,
            "img": "second",
            "title": "Чайник с автоматическим выключением",
            "price": 2700,
            "isOnSale": false,
            "isLike": false
        },
        {
            "id": 9,
            "img": "first",
            "title": "Антикварный медный чайник",
            "price": 3000,
            "isOnSale": true,
            "isLike": false
        },
        {
            "id": 10,
            "img": "second",
            "title": "Мини-чайник для путешествий",
            "price": 1600,
            "isOnSale": false,
            "isLike": false
        }
    ])

  
  return (
    <>
		<Layout>
            <SectionFirst/>
            <ProductsSection/>
            <Sales arr={arr} sectionName={'Лучшие продажи'}/>
        </Layout>
    </>
  )
}

export default App