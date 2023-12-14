/*eslint-disable*/

import {useState} from 'react';
import './App.css';

function App() {
  let [posts, setPosts] = useState('강남 고기 맛집');
  let [thumbs, setThumbs] = useState(0);
  var data = '안녕하세요.';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>
      <div className="list">
        <h3>{ posts } <span onClick={ ()=>{setThumbs(prev => prev+1)} }>👍</span> {thumbs}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>      
    </div>
  );
}

export default App;
