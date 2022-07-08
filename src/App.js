
import './App.css';
import Axios from 'axios';
import {useState} from "react";
import RecipeTile from './RecipeTile.js'

function App() {
  const [query,setquery]=useState("");
  const [recipes,setrecipes]=useState([]);
  const [healthlable, sethealthlable] = useState('vegan');
  
  var url = `https://api.edamam.com/search?q=${query}&app_id=a289d771&app_key=81ea43d2d1cf27f78bcf684caf78c0aa&health=${healthlable}`;
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit=(e) =>{
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="App">
      <h1>Food Recipe's House<img className='image-apply' src={require('./pic-1.jpg')}/></h1>
      <form className='app_search' onSubmit={onSubmit}>
        <input type='text'
        className='input_search' placeholder='Enter Recipe'
        value={query}
        onChange={(e)=> setquery(e.target.value)}
        />
        <input className='app_submit'type='submit'value='Search'></input>
        <select className='app_health'>
          <option onClick={()=>sethealthlable('vegan')}>Vegan</option>
          <option onClick={()=>sethealthlable('wheat-free')}>wheat-free</option>
          <option onClick={()=>sethealthlable('low-sugar')}>low-sugar</option>
          <option onClick={()=>sethealthlable('glutin-free')}>gluten-free</option>
          <option onClick={()=>sethealthlable('dairy-free')}>dairy-free</option>
          <option onClick={()=>sethealthlable('egg-free')}>egg-free</option>
          <option onClick={()=>sethealthlable('paleo')}>paleo</option>
          <option onClick={()=>sethealthlable('fish-free')}>fish-free</option>

        </select>

      </form>
      <div className='app_recipes'>
        {recipes.map((recipe)=> {
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>
      <div className="footer">
    <p>Developed by Tuhin Datta</p>
  </div>
    </div>
  );
}

export default App;
