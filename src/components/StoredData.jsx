function StoredData(props) {
    const content = props.content
    
    if(content.length === 0) {
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
        
        const list = content.map((intelligence) => 
                        <div key={intelligence.date.toString()} className="stored-data__content__data">
                            <div className="stored-data__content__data__date">{intelligence.date}</div>
                            <div className="stored-data__content__data__distance">{intelligence.distance}</div>
                            <div className="stored-data__content__data__actions">
                                <span>&#9998;</span>
                                <span className="close-content" onClick={evt =>props.deleteItem(evt, intelligence.date)}>&#10006;</span>
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
