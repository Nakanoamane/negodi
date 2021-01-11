<template>
    <div class="header">
        <h1>でがネゴぢ</h1>
        <button class="menuBtn" :class="{active:isDisplay}" @click="isDisplay = !isDisplay">
            <fa-icon icon="bars" />
        </button>

        <transition name="accordion" appear>
            <ul class="menu" v-if="isDisplay">
                <li><a href="./">ホーム</a></li>
                <li><a href="./about">ネゴぢとは</a></li>
                <li><a href="./generator">ネゴぢジェネレーター</a></li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data (){
            return {
                isDisplay: false
            }
        }
    }
</script>

<style scoped>
    .header {
        background: #fa9e5c;
        padding: 4px 0;
        position: relative;
        color: #fff;
        text-shadow: 2px 2px 4px #EF9250, -2px -2px 4px #ffb368;
        height: 30px;
    }

    h1 {
        display: inline-block;
        width: 90%;
    }

    .menuBtn {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-block;
    }

    .menuBtn.active {
        color: #fa9e5c;
        background: #fff;
    }

    .menu {
        width: 100%;
        height: 237px;
        background: rgba(255,255,255, 0.95);
        position: absolute;
        z-index: 10;
        top: 30px;
        color: #fa9e5c;
        text-shadow: none;
        overflow: hidden;
    }

    .menu li {
        display: block;
        width: 100%;
        padding: 30px 0;
        border-bottom: solid 1px #fff;
    }

</style>