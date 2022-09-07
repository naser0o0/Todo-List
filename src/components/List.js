import "../App.css";

const List = ({ itemList, updateItemList }) => {
  // console.log("props", props)
  // const[] = useState();

  const deletItemFomList = (key) => {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  };

  return (
    <div className="liste">
      <div>
        {itemList.map((itemObj) => {
          return (
            <div key={itemObj.key} className="list">
              {itemObj.item}
              <button
                onClick={() => deletItemFomList(itemObj.key)}
                className="delet-btn"
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
