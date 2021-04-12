/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ value, changeTab }) {
  
  const handleChangeFilter = (value, event) => {
    event.preventDefault();
    changeTab(value);
  };

  return (
     <div className="panel-tabs">
      <a href="#" 
        className={value === 'ALL' ?  'is-active' : ''}
        onClick={handleChangeFilter.bind(null, 'ALL')}  
      >全て</a>
      <a href="#" 
        className={value === 'DOING' ?  'is-active' : ''}
        onClick={handleChangeFilter.bind(null, 'DOING')}  
      >未完了</a>
      <a href="#" 
        className={value === 'DONE' ?  'is-active' : ''}
        onClick={handleChangeFilter.bind(null, 'DONE')}  
      >完了済み</a>
    </div>
  );
}

export default Filter