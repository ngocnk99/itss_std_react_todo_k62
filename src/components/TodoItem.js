/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item}) {
  const handleCheck = () => {
    item.done = !item.done;
    console.log(item)
  }

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleCheck}
      />
      <span className={item.done ? 'has-text-grey-light' : ''}>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;