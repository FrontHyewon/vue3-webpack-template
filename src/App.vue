<template>
  <h1>{{ message }}</h1>
  <HelloWorld/>
  <!-- 위 에러는 원래 vue2에서 뜨는 에러고 vue3에서는 뜨지 않아야 정상
  vue3 사용중이면 무시해도 상관 없음 -->
</template>

<script>
import HelloWorld from '~/components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue!!!'
    }
  }
}
</script>