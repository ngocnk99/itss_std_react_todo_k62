import React, { useState } from "react";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ addNewItem}) {
  const [item, setItem] = useState("");

  const changeInput = (input) => {
    setItem(input.target.value);
  };

  const addItem = (e) => {
    if (e.key === 'Enter') {
      addNewItem(item)
      setItem('')
    }
  }
  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Todoを入力してください"
        value={item}
        onChange={changeInput}
        onKeyDown={addItem}
      />
    </div>
  );
}

export default Input;
