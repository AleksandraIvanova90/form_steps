import { useState } from "react"

import StoredData  from "./StoredData.jsx"

function Steps() {
    
    const [content, setContent] = useState(null)
    

    const dataTransfer = (event) => {
        event.preventDefault()
        const { target } = event;
        const formData = new FormData(target)
        const data = Object.fromEntries(formData)
        const value = data.date
        if (value === '' || data.distance === '') {
            alert('Не заполнены обязательные поля!')
            return
        } else if (validDate(value) !== true) {
            alert('Неверный формат даты!')
            return
        } else {
            
        const listDates = []
           const content = document.querySelector('.stored-data__content')
           const dates = Array.from(content.children)
           dates.forEach((data) => {
            listDates.push(
                {
                date: data.children[0].textContent,
                distance: data.children[1].textContent
                }
            )
           })
        
    
        let count = 0
        listDates.forEach((num) => {
            console.log(num)
            if (num['date'] === data.date) {
                num.distance = Number(num.distance) + Number(data.distance)
                count +=1
            } 
        })

        if (count === 0) {
            listDates.push({
                date: data.date,
                distance: data.distance
            })
        }

        listDates.sort((a, b) => {
        const parseDate = (dateStr) => {
            const parts = dateStr.split('.'); 
            const year = '20' + parts[2];
            const month = parts[1] - 1;
            const day = parts[0];
            return new Date(year, month, day);
        };

        return parseDate(b.date) - parseDate(a.date);
        });

        setContent(listDates)
        }
    }

    const validDate = (date) => {
        const RegExp = /^[0-3][0-9]\.[0-1][0-9]\.[0-9]{2}$/
        const data = RegExp.test(date)
        return data
    }

    

    return (
        <div className="steps-container">
            <form className="initial-data" onSubmit={dataTransfer}>
                <div className="initial-data__date"> 
                    <label className="initial-data__date_name">Дата (ДД.ММ.ГГ)</label>
                    <input className="initial-data__date_content" name='date'></input>
                </div>
                <div className="initial-data__distance">
                    <label className="initial-data__distance_name">Пройдено (км)</label>
                    <input className="initial-data__distance_content" name='distance'></input>
                </div>
                <div className="initial-data__button">
                    <button className="initial-data__button_btn">OK</button>
                </div>
            </form>
            <StoredData content={content} />
        </div>
    )
}

export default Steps