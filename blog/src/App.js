/*eslint-disable*/

import {useEffect, useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);
  useEffect(()=>{
    if(count != 0 && count < 3){ // count가 0일 때는 (페이지 처음 로드되었을 때는) 내부 코드를 동작시키지 않음.
      setAge(prev => prev+1);
    }
  },[count]);
  let [posts, setPosts] = useState('강남 고기 맛집');
  let [thumbs, setThumbs] = useState(0);
  var data = '안녕하세요.';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div>
      </div>
      <div>
        <div>안녕하십니까 전 {age}, count : {count}</div>
        <button
          onClick={()=>{
          setCount(prev => prev+1);
          // if(count < 3){
            // setAge(prev => prev+1); // setState가 async 함수이므로, 이 방법은 안 된다. if문 먼저 실행.
          // }
        }}>누르면한살먹기</button>
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
