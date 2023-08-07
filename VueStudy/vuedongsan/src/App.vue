<template>

  <!-- 모달창 -->
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지내용임</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>



  <!-- vue 반복문 -->
  <div class="menu">
    <!-- 1. 자료 안의 데이터 갯수만큼 반복됨 -->
    <!-- 2. 작명한 변수는 데이터안의 자료가 됨 -->
    <!-- :key=""의 용도 반복문 쓸 떄 꼭 써야함 -->
    <!-- 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
  </div>




  <div v-for="(a,i) in 원룸들" :key="i">
    <img :src="원룸들[i].image"/>
    <h4 @click="모달창열렸니 = true" :style="스타일">{{원룸들[i].title}}</h4>
    <p>{{원룸들[i].price}}원</p>
    <button @click="increase(i)">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span>
  </div>
</template>

<script>
import data from './oneroom.js';


// 데이터 바인딩 - JS 데이터를 HTML에 꽂아넣는 문법
// 데이터 바인딩{{}} 하는 이유
// 1. Vue의 실시간 자동 렌더링 쓰기위함
// data를 변경하면 실시간으로 HTML에서 렌더링
// web-app 만들기에 유용하다.
export default {
  name: 'App',
  // 데이터 보관함
  data() {
    return {
      // object 자료로 저장
      원룸들 : data,
      신고수 : [],
      메뉴들 : ['Home', 'Shop', 'About'],
      스타일 : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      // 동적인 UI 
      // 0. HTML,CSS 디자인해두고
      // 1. UI의 현재 상태를 데이터로 저장
      모달창열렸니 : false 
      // 2. 데이터에 따라 UI가 어떻게 보일지 작성

    }
  },
  methods : {
    increase(i) {
      if(isNaN(this.신고수[i])) {
        this.신고수[i] = 0;
      }
      this.신고수[i]++;
    }
  },
  components: {

  }
}
</script>

<style>
img {
  width: 50%;
}
/* 모달창 */ 
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
