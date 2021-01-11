<template>
  <div class="about">
    <Header></Header>

    <transition-group name="fade" appear>
      <h2 :key="0">...ネゴぢとは？</h2>
      <img :key="1" alt="元祖でがネゴぢ" src="../assets/origin.png" class="origin" width="300" height="300">

      <div class="call" :key="2">
        <p>みんなの意見を募集中！</p>
        <input id="hashTags" value="#ネゴぢとは #でがネゴぢ #ネゴぢ">
        <button @click="copyTags">{{ copied ? 'コピーしました' : 'タグをコピー' }}</button>
      </div>
    </transition-group>

  </div>
</template>

<script>
  import Header from '../components/Header.vue';

  export default {
    name: 'About',
    components: {
      Header
    },
    data (){
      return {
        copied: false
      }
    },
    methods: {
      copyTags(){
        let tags = document.getElementById("hashTags")
        tags.select()
        document.execCommand("Copy")
        this.copied = true
      }
    }
  }

</script>

<style scoped>
  h2 {
    color: #543;
    font-size: 18px;
    margin: 20px auto;
  }

  .origin {
    width: 100%;
    height: auto;
  }

  .call {
    width: 90%;
    color: #543;
    margin: 30px auto;
    border-radius: 20px;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow:  15px 15px 30px #d9d9d9,
    -15px -15px 30px #ffffff;
    overflow: hidden;
  }
  .call p {
    margin-top: 20px;
  }

  .call input{
    width: 90%;
    color: #fa9e5c;
    display: inline-block;
    border-bottom: solid 1px #aaa;
    margin: 20px auto 10px;
    font-size: 18px;
  }

  .call button{
    color: #fff;
    background: #fa9e5c;
    border-radius: 10px;
    padding: 8px 20px;
    margin-bottom: 20px;
  }

  .call span {
    display: block;
  }

</style>