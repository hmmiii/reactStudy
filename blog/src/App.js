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
  let [posts, setPosts] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [postDates, setPostDates] = useState(['12월 10일', '12월 11일', '12월 12일']);
  let [thumbs, setThumbs] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');
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
        {
          posts.map((a, i)=>(
            <div className="list" key={i}>
              <h3 onClick={()=>{
                setTitle(i);
                setModal(!modal)
              }}>{ a } <span
              onClick={ (e)=>{
                e.stopPropagation();
                var copy = [...thumbs];
                copy[i]++;
                setThumbs(copy);
              } }>👍</span> {thumbs[i]}</h3>
              <p>{postDates[i]} 발행</p>
              <button onClick={ ()=>{ 
                let copy = [...posts];
                copy[0] = '여자코트 추천';
                setPosts(copy);
              } }> 수정버튼 </button>
              <button onClick={ ()=>{ 
                let copy = [...posts];
                copy.sort();
                setPosts(copy);
              } }> 정렬버튼 </button>
              <button onClick={()=>{
                var copy = [...posts];
                copy.splice(i, 1);
                setPosts(copy);
              }}>삭제</button>
              <hr/>
            </div>      
          ))
        }
        <input onChange={(e)=>{setInput(e.target.value)}} type="text" />
        <button onClick={()=>{
          if(input){
            var copy = [...posts];
            copy.push(input);
            var copy2 = [...thumbs];
            copy2.push(0);
            var d = new Date();
            var today = `${d.getMonth()+1}월 ${d.getDate()}일`;
            var copy3 = [...postDates];
            copy3.push(today);
            setPostDates(copy3);
            setThumbs(copy2);
            setPosts(copy);
          }else{
            alert('글 내용을 입력해주세요.');
          }
        }}>글발행</button>
      {modal ? <Modal title={title} posts={posts}/> : null}
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{props.posts[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
