function List (props)  {
  const {listItems} = props
return (
  <>
  <div className="ui list">
    {listItems.map((obj, index) => {
        return <div key={index} className="item">{obj}</div>
    })}
    </div>
  </>
)
};

export default List