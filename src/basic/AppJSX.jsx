import './App.css';

function AppJSX() {
  const name = 'Son';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h1>Hello! {name}</h1>
      <ul>
        {list.map(function(item){
          return  
          <li>{item}</li>
        })}
      </ul>
      <img 
      style={{width:'200px',height:'200px'}}
      src="https://images.unsplash.com/photo-1561389881-a5d8d5549588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8JUVDJTgyJUFDJUVCJTlFJTkxJUVDJThBJUE0JUVCJTlGJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
      alt='cat n dog' />
    </>
  );
}

export default AppJSX;
