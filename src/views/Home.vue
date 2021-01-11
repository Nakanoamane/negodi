<template>
  <div class="home">
    <div class="top">
      <h1>でがネゴぢ</h1>
      <div class="image">
        <img :alt="negodis[negodi].name" :src="negodis[negodi].src" width="300" height="300">
      </div>
    </div>

    <ul class="link">
      <li><router-link to="/about"><span class="btn-big">ネゴぢとは</span></router-link></li>
      <li><router-link to="/generator"><span class="btn-big">ネゴぢジェネレーター</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      negodi: 0,
      negodis: [
        {name: 'ベージュネゴぢ', src: require('../assets/negodis/beige.png')},
        {name: 'くろネゴぢ', src: require('../assets/negodis/black.png')},
        {name: 'ブラウンネゴぢ', src: require('../assets/negodis/brown.png')},
        {name: 'チェン柄ネゴぢ', src: require('../assets/negodis/chen.png')},
        {name: '店員ネゴぢ', src: require('../assets/negodis/clerk.png')},
        {name: 'エリザベスカラーネゴぢ', src: require('../assets/negodis/collar.png')},
        {name: '乳牛ネゴぢ', src: require('../assets/negodis/dairy_cow.png')},
        {name: 'エメラルドネゴぢ', src: require('../assets/negodis/emerald.png')},
        {name: 'ガーリーネゴぢ', src: require('../assets/negodis/girly.png')},
        {name: 'ハナ柄ネゴぢ', src: require('../assets/negodis/hana.png')},
        {name: '頭巾ネゴぢ', src: require('../assets/negodis/hood.png')},
        {name: 'キーホルダーネゴぢ', src: require('../assets/negodis/key_holder.png')},
        {name: 'オーバーオールネゴぢ', src: require('../assets/negodis/overall.png')},
        {name: 'パンダネゴぢ', src: require('../assets/negodis/panda.png')},
        {name: 'ピンクネゴぢ', src: require('../assets/negodis/pink.png')},
        {name: 'ロシアンネゴぢ', src: require('../assets/negodis/russian.png')},
        {name: 'おくるみネゴぢ', src: require('../assets/negodis/swaddle.png')},
        {name: 'しろネゴぢ', src: require('../assets/negodis/white.png')},
        {name: 'ユン柄ネゴぢ', src: require('../assets/negodis/yun.png')},
      ]
    }
  },
  mounted(){
    setInterval(() => {
      this.negodi = this.negodi < this.negodis.length-1 ? this.negodi+1 : 0
    }, 3000)
  }
}
</script>

<style scoped>
  .home {
    height: 100%;
    background: #fa9e5c;
  }

  .top {
    margin-bottom: 40px;
  }

  h1 {
    font-weight: bold;
    color: #fff;
    font-size: 32px;
    letter-spacing: 4px;
    padding: 20px 0 10px;
    text-shadow: 2px 2px 4px #EF9250, -2px -2px 4px #ffb368;
  }

  .image {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 50%;
    box-shadow:  30px 30px 60px #EF9250,
    -30px -30px 60px #ffb368;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
  }

  img {
    width: 100%;
    height: auto;
  }

  .btn-big {
    display: inline-block;
    width: 100%;
    max-width: 350px;
    padding: 11px;
    margin: 20px auto;
    border-radius: 20px;
    background: linear-gradient(145deg, #ffa962, #EF9250);
    box-shadow:  10px 10px 20px #da8950,
    -10px -10px 20px #ffb368;
  }

  .btn-big:hover {
    background: linear-gradient(145deg, #FFAD6A, #F59653);
    box-shadow:  8px 8px 15px #da8950,
    -8px -8px 15px #ffb368;
  }
</style>
