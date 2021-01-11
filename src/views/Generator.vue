<template>
    <div class="generator">
        <Header></Header>

        <div class="editor" v-if="part==='edit'">
            <div id='preview' class="preview">
                <div id="previewInner" class="previewInner" :style="{backgroundColor: negodi.colors.bg, backgroundImage: `url(${negodi.src.bg})`}">
                    <div id="body" class="previewItem"></div>
                    <div id="rightEye" class="previewItem"></div>
                    <div id="leftEye" class="previewItem"></div>
                    <div id="nose" class="previewItem"></div>
                    <div id="mouse" class="previewItem"></div>
                    <p class="negodiName previewItem" v-if="negodi.statuses.name" :style="{color: negodi.colors.name, fontSize: negodi.sizes.name+'px'}">{{ negodi.texts.name }}ネゴぢ</p>
                    <p class="author previewItem" v-if="negodi.statuses.author" :style="{color: negodi.colors.author, fontSize: negodi.sizes.author+'px', top: imageSize-30+'px'}">by {{ negodi.texts.author }}</p>
                </div>
            </div>

            <div class="editMenu">
                <ul class="editMenu_list">
                    <li v-for="(s,i) in steps" :key="i" @click="step=i" :class="{active:step===i}">{{ s }}</li>
                </ul>

                <div class="editMenu_steps">
                    <div class="editMenu_step" v-if="step===0">
                        <button class="color switchBtn" :class="{active: !negodi.statuses.bodySrc}" @click="switchBodyType">色</button>
                        <button class="image switchBtn" :class="{active: negodi.statuses.bodySrc}" @click="switchBodyType">画像</button>
                        <table>
                            <tr v-if="!negodi.statuses.bodySrc">
                                <td>色</td>
                                <td>
                                    <input type="color" v-model="negodi.colors.body" @change="setPreview('body')">
                                </td>
                            </tr>
                            <tr v-if="negodi.statuses.bodySrc">
                                <td>画像</td><td><label for="negodiBodyImage" class="inputFileLabel">画像を選ぶ</label></td>
                                <input type="file" accept="image/*" @change="selectedFile('body', $event)" id="negodiBodyImage">
                            </tr>
                        </table>
                    </div>

                    <div class="editMenu_step" v-if="step===1">
                        <table>
                            <tr>
                                <td>すべて</td><td><input type="color" @change="selectFaceColor"></td>
                            </tr>
                            <tr>
                                <td>右目</td>
                                <td>
                                    <input type="color" v-model="negodi.colors.rightEye" @change="setPreview('rightEye')">
                                </td>
                            </tr>
                            <tr>
                                <td>左目</td>
                                <td>
                                    <input type="color" v-model="negodi.colors.leftEye" @change="setPreview( 'leftEye')">
                                </td>
                            </tr>
                            <tr>
                                <td>はな</td>
                                <td>
                                    <input type="color" v-model="negodi.colors.nose" @change="setPreview( 'nose')">
                                </td>
                            </tr>
                            <tr>
                                <td>くち</td>
                                <td>
                                    <input type="color" v-model="negodi.colors.mouse" @change="setPreview('mouse')">
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="editMenu_step" v-if="step===2">
                        <table>
                            <tr>
                                <td>色</td><td><input type="color" v-model="negodi.colors.bg"></td>
                            </tr>
                            <tr>
                                <td>画像</td>
                                <td>
                                    <label for="negodiBgImage" class="inputFileLabel">画像を選ぶ</label>
                                    <button class="deleteBtn" @click="clearBgImage">画像を削除</button>
                                </td>
                                <input type="file" accept="image/*" @change="selectedFile('bg', $event)" id="negodiBgImage">
                            </tr>
                        </table>
                    </div>

                    <div class="editMenu_step" v-if="step===3">
                        <label class="inputNameLabel">ネゴぢの名前</label>
                        <input class="inputName" type="input" v-model="negodi.texts.name">

                        <button class="statusBtn" @click="negodi.statuses.name = !negodi.statuses.name" :class="{active:negodi.statuses.name}">
                            {{ negodi.statuses.name ? '表示中' : '非表示中' }}
                        </button>

                        <table>
                            <tr>
                                <td>色</td><td><input type="color" v-model="negodi.colors.name"></td>
                            </tr>
                            <tr>
                                <td>サイズ</td><td><input type="input" v-model="negodi.sizes.name"></td>
                            </tr>
                        </table>

                        <label class="inputNameLabel">作者の名前</label>
                        <input class="inputName" type="input" v-model="negodi.texts.author">

                        <button class="statusBtn" @click="negodi.statuses.author = !negodi.statuses.author" :class="{active:negodi.statuses.author}">
                            {{ negodi.statuses.author ? '表示中' : '非表示中' }}
                        </button>

                        <table>
                            <tr>
                                <td>色</td><td><input type="color" v-model="negodi.colors.author"></td>
                            </tr>
                            <tr>
                                <td>サイズ</td><td><input type="number" v-model="negodi.sizes.author"></td>
                            </tr>
                        </table>
                    </div>

                    <div class="editMenu_step" v-if="step===4">
                        <button @click="generateResult" class="generateBtn">ネゴぢを出力する <fa-icon icon="angle-double-right" /></button>
                    </div>
                </div>

                <div class="editMenu_changeStep">
                    <span class="back" :class="{active: step > 0}" @click="changeStep('back')">
                        <fa-icon icon="angle-left" /> 前へ
                    </span>
                    <span>{{ steps[step] }}</span>
                    <span class="next" :class="{active: step < steps.length-1}" @click="changeStep('next')">
                        次へ <fa-icon icon="angle-right" />
                    </span>
                </div>
            </div>
        </div>

        <div class="result" v-if="part==='result'">
            <h2>{{ negodi.texts.name }}ネゴぢ<br>爆誕！</h2>
            <a :href="result" :download="negodi.texts.name+'ネゴぢ.png'">
                <img :src="result" :alt="negodi.texts.name+'ネゴぢ'" :width="imageSize" :height="imageSize">
            </a>
            <p>ダウンロードして使ってね</p>

            <button class="back" @click="backToEdit()"><fa-icon icon="angle-double-left" /> 編集に戻る</button>
            <button class="new"><a href="../">新しいネゴぢを作る</a></button>
        </div>

    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    import Header from '../components/Header.vue';

    export default {
        name: "Generator",
        components: {
            Header
        },
        data () {
            return {
                part: 'edit',
                step: 0,
                steps: ['からだ', 'かお', '背景', '文字', '完成'],
                imageSize: 350,
                imageX: 0,
                imageY: 0,
                negodi: {
                    colors: {
                        body: '#fa9e5c',
                        rightEye: '#ffffff',
                        leftEye: '#ffffff',
                        nose: '#ffffff',
                        mouse: '#ffffff',
                        name: '#fa9e5c',
                        author: '#fa9e5c',
                        bg: '#ffffff'
                    },
                    src: {
                        body: '',
                        bg: ''
                    },
                    parts: {
                        body: require('../assets/generator/body.png'),
                        rightEye: require('../assets/generator/eye_right.png'),
                        leftEye: require('../assets/generator/eye_left.png'),
                        nose: require('../assets/generator/nose.png'),
                        mouse: require('../assets/generator/mouse.png')
                    },
                    texts: {
                        name: 'オリジナル',
                        author: 'ネゴぢファン'
                    },
                    sizes: {
                        name: 20,
                        author: 16
                    },
                    statuses: {
                        name: true,
                        author: true,
                        bodySrc: false
                    },
                    layers: {
                        body: require('../assets/generator/body.png'),
                        rightEye: require('../assets/generator/eye_right.png'),
                        leftEye: require('../assets/generator/eye_left.png'),
                        nose: require('../assets/generator/nose.png'),
                        mouse: require('../assets/generator/mouse.png')
                    }
                },
                result: ''
            }
        },
        mounted (){
            const preview = document.getElementById('preview').getBoundingClientRect()
            this.imageSize = preview.width

            this.setPreviewAll()
        },
        methods: {
            changeStep(direction){
                if (direction === 'next'){
                    this.step = this.step < this.steps.length-1 ? this.step+1 : this.step
                } else {
                    this.step = this.step > 0 ? this.step-1 : this.step
                }
            },
            selectedFile(part, e) {
                this.negodi.src[part] = window.URL.createObjectURL(e.target.files[0])
                if(part === 'body'){
                    this.setPreview(part, this.negodi.src[part])
                }
            },
            selectFaceColor(e) {
                this.negodi.colors.rightEye = e.target.value
                this.negodi.colors.leftEye = e.target.value
                this.negodi.colors.nose = e.target.value
                this.negodi.colors.mouse = e.target.value

                this.setPreviewAll()
            },
            setPreviewAll(){
                if(this.negodi.statuses.bodySrc && this.negodi.src.body){
                    this.setPreview('body', this.negodi.src.body)
                } else {
                    this.setPreview('body')
                }
                this.setPreview('rightEye')
                this.setPreview('leftEye')
                this.setPreview('nose')
                this.setPreview('mouse')
            },
            setPreview(part, src = null) {
                let canvas = document.createElement("canvas")
                canvas.width = this.imageSize
                canvas.height = this.imageSize
                canvas.classList.add('previewItem')
                let ctx = canvas.getContext("2d")

                if (src) {
                    this.setImage(ctx, part, src)
                } else {
                    let color = this.negodi.colors[part]
                    this.setColor(ctx, part, color)
                }

                let div = document.getElementById(part)
                div.innerHTML = ''
                div.appendChild(canvas)
            },
            setColor(ctx, part, color){
                let partImage = new Image()
                partImage.onload = ()=>{
                    ctx.fillStyle = color
                    ctx.fillRect(this.imageX, this.imageY, this.imageSize, this.imageSize)
                    ctx.globalCompositeOperation = 'destination-in'
                    ctx.drawImage(partImage, this.imageX, this.imageY, this.imageSize, this.imageSize)
                }
                partImage.src = this.negodi.layers[part]
            },
            setImage(ctx, part, src){
                let image = new Image()
                image.onload = ()=>{
                    ctx.drawImage(image, this.imageX, this.imageY, this.imageSize, this.imageSize)
                    ctx.globalCompositeOperation = 'destination-in'

                    let partImage = new Image()
                    partImage.onload = ()=>{
                        ctx.drawImage(partImage, this.imageX, this.imageY, this.imageSize, this.imageSize)
                    }
                    partImage.src = this.negodi.layers[part]
                }
                image.src = src
            },
            clearBgImage(){
                this.negodi.background.src = ''
            },
            generateResult(){
                const self = this
                html2canvas(document.getElementById('previewInner')).then(function(canvas){
                    self.result = canvas.toDataURL('image/png');
                    self.part = 'result'
                })
            },
            switchBodyType(){
                this.negodi.statuses.bodySrc = !this.negodi.statuses.bodySrc
                this.setPreviewAll()
            },
            backToEdit(){
                let promise = new Promise((resolve)=>{
                    this.part = 'edit'
                    resolve()
                })
                promise.then(()=>{this.setPreviewAll()})
            }
        }
    }
</script>

<style scoped>
    .generator, .editor, .result {
        width: 100%;
        color: #543;
    }

    .editor, .result {
        max-width: 400px;
        margin: 0 auto;
    }

    .preview {
        width: 98%;
        padding-top: 98%;
        margin: 10px auto;
        border: solid 1px #aaa;
        overflow: hidden;
        position: relative;
    }

    .previewInner {
        width: 100%;
        padding-top: 102%;
        height: auto;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    .previewItem {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
    }

    .previewItem.negodiName {
        top: 10px;
        font-weight: bold;
    }

    .editMenu_list {
        width: 100%;
    }

    .editMenu_list li {
        display: inline-block;
        width: 20%;
        margin: 0 auto;
        padding: 4px 0;
        color: #fa9e5c;
        font-size: 12px;
        border:solid 1px #fa9e5c;
        border-radius: 10px 10px 0 0;
    }

    .editMenu_list li.active {
        color: #fff;
        background: #fa9e5c;
    }

    .editMenu_step {
        margin: 10px 0 40px;
    }

    .editMenu_step table{
        width: 80%;
        min-width: 300px;
        margin: 0 auto;
    }

    .editMenu_step tr{
        line-height: 40px;
        border-bottom: solid 1px #fa9e5c;
    }

    .editMenu_step td{
        width: 50%;
    }

    .switchBtn {
        border: solid 1px #aaa;
        color: #aaa;
        padding: 6px 20px;
        margin-bottom: 10px;
    }

    .switchBtn.active {
        border: solid 1px #fa9e5c;
        background: #fa9e5c;
        color: #fff;
    }

    .switchBtn.color {
        border-radius: 10px 0  0 10px ;
    }

    .switchBtn.image {
        border-radius: 0 10px 10px 0;
    }

    .deleteBtn {
        line-height: 28px;
        color: #aaa;
        border: solid 1px #aaa;
        border-radius: 10px;
        padding: 0 10px;
        margin-bottom: 4px;
    }

    .inputNameLabel {
        display: block;
        margin-top: 20px;
        color: #fa9e5c;
    }

    .inputName {
        width: 80%;
        margin-top: 10px;
        border: solid 1px #ddd;
        padding: 4px;
    }

    .statusBtn {
        display: block;
        color: #aaa;
        border: solid 1px #aaa;
        border-radius: 10px;
        padding: 6px 20px;
        margin: 10px auto 0;
    }

    .statusBtn.active {
        color: #fff;
        background: #fa9e5c;
        border: solid 1px #fa9e5c;
    }

    .generateBtn {
        margin-top: 20px;
        background: #fa9e5c;
        color: #fff;
        padding: 10px 30px;
        border-radius: 10px;
        box-shadow: 0 0 10px #F59653;
    }

    .editMenu_changeStep {
        padding-bottom: 20px;
    }

    .editMenu_changeStep span{
        display: inline-block;
        color: #fa9e5c;
        padding: 4px 20px;
    }

    .editMenu_changeStep .back, .editMenu_changeStep .next {
        border: solid 1px #aaa;
        color: #aaa;
        border-radius: 10px;
    }

    .editMenu_changeStep .back.active, .editMenu_changeStep .next.active{
        color: #fff;
        background: #fa9e5c;
        border: solid 1px #fa9e5c;
    }

    .result h2{
        color: #fa9e5c;
        font-size: 24px;
        font-weight: bold;
        margin: 20px;
    }

    .result img{
        width: 98%;
        height: auto;
    }

    .result p{
        margin: 10px;
    }

    .result button.back, .result button.new{
        display: inline-block;
        width: 80%;
        padding: 6px 20px;
        border: solid 1px #fa9e5c;
        border-radius: 10px;
        margin: 20px auto 10px;
    }

    .result button.back{
        color: #fa9e5c;
    }

    .result button.new {
        color: #fff;
        background: #fa9e5c;
    }

</style>