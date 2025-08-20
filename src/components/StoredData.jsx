function StoredData(props) {
    const content = props.content
    
    
    if(content === null) {
        return (
        <div className="stored-data">
                <div className="stored-data__name">
                    <p>Дата (ДД.ММ.ГГ)</p>
                        <p>Пройдено (км)</p>
                        <p>Действия</p>
                </div>
                <div className="stored-data__content">
                   Информация отсутствует. Добавьте данные.
                </div>
            </div>
    )
    } else {
        const deleteItem = (event) => {
        event.preventDefault()
        if (event.target.className.includes('close-content')) {
            const element = event.target.parentElement.parentElement
            element.remove()
        }
    } 
        const list = content.map((intelligence) => 
                        <div className="stored-data__content__data">
                            <div className="stored-data__content__data__date">{intelligence.date}</div>
                            <div className="stored-data__content__data__distance">{intelligence.distance}</div>
                            <div className="stored-data__content__data__actions">
                                <span>&#9998;</span>
                                <span className="close-content" onClick={deleteItem}>&#10006;</span>
                            </div>
                        </div>)
    
        return (
        <div className="stored-data">
                <div className="stored-data__name">
                    <p>Дата (ДД.ММ.ГГ)</p>
                        <p>Пройдено (км)</p>
                        <p>Действия</p>
                </div>
                <div className="stored-data__content">
                     <>
                    {list}
                    </>
                </div>
                   
        
                   
        </div>
    )
    }

    

    
}
export default StoredData
