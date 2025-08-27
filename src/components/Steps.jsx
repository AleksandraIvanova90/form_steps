import { useState } from "react"

import StoredData  from "./StoredData.jsx"

function Steps() {
    
    const [content, setContent] = useState([])
    

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
             if (content.length === 0) {
                listDates.push({
                    date: data.date,
                    distance: data.distance
                })
            } else {
                content.forEach((data) => {
                    listDates.push(data)
                }
            )
            let count = 0
                listDates.forEach((num) => {
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

    const deleteItem = (event, dt) => {
        event.preventDefault()
        let list = content
        if (event.target.className.includes('close-content')) {
            const element = event.target.parentElement.parentElement
            list.forEach((data) => {
                    if (data['date'] === dt) {
                    let indexElement = list.findIndex(date => date.date == element)
                list.splice(indexElement, 1)
                
                    }
            })
        setContent(list)
        }
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
            <StoredData content={content} deleteItem={deleteItem} />
        </div>
    )
}

export default Steps