<template>
  <!-- vue 반복문 -->
  <div class="menu">
    <!-- 1. 자료 안의 데이터 갯수만큼 반복됨 -->
    <!-- 2. 작명한 변수는 데이터안의 자료가 됨 -->
    <!-- :key=""의 용도 반복문 쓸 떄 꼭 써야함 -->
    <!-- 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
  </div>
  <div v-for="i in products" :key="i">
    <h4 :style="스타일">{{i}}</h4>
    <p>XX 만원</p>
  </div>
</template>

<script>
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
      메뉴들 : ['Home', 'Shop', 'About'],
      스타일 : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  components: {

  }
}
</script>

<style>
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
