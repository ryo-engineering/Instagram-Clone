<template>
  <div @click.self="modalClicked" class="overlay">
    <div class="selection" :style="{height: optionsHeight + 'px', width: optionsWidth + 'px'}">
      <div class="title">
        <span>投稿する画像のURLを貼り付けてください</span>
      </div>
      <div class="inputArea">
        <dl class="field">
          <dt>画像URL</dt>
          <dd>
            <input v-model="imageUrl" type="text" />
            <span @click.self="addNewUrl" class="plusBtn" :class="{ colorBlue: isImageUrlFilled, colorGray: !isImageUrlFilled }">+</span>
          </dd>
        </dl>
      </div>
      <div class="list">
        <PhotoIcon v-for="(urlInfo, idx) in urlArr" :key="idx" :url="urlInfo.url" :id="urlInfo.id" @delBtnClicked="delBtnClicked"/>
      </div>
      <div class="detail">
        <span>説明</span>
      </div>
      <textarea v-model="detail"></textarea>
      <button @click="confirm" :disabled="!canAddPhoto" :class="{ btnColor: !canAddPhoto }">確定</button>
    </div>
  </div>
</template>
<script>
import PhotoIcon from "@/components/common/PhotoIcon";

export default {
  components: {
    PhotoIcon
  },
  data() {
    return {
      optionsHeight: 900,
      optionsWidth: 900,
      timer: null,
      imageUrl: '',
      detail: '',
      urlArr: []
    };
  },
  computed: {
    isImageUrlFilled() {
      return !!this.imageUrl
    },
    canAddPhoto() {
      return this.urlArr.length > 0
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.optionsWidth -= 20;
      this.optionsHeight -= 20;
      if (this.optionsHeight < 450) {
        clearInterval(this.timer);
      }
    }, 0.3);
  },
  methods: {
    delBtnClicked(targetId) {
      console.log(targetId, 'targetId')
      this.urlArr = this.urlArr.filter((item) => item.id !== targetId)
    },
    addNewUrl() {
      if (!this.isImageUrlFilled) return false
      if (this.urlArr.length > 3) {
        alert('一度に投稿できる写真は3枚までです。')
        return  false
      }
      const urlObj = {
        url: this.imageUrl,
        id: this.createRandomStr()
      }
      this.urlArr.push(urlObj)
      this.imageUrl = ''
    },
    createRandomStr() {
      const char = "abcdefghijklmnopqrstuvwxyz0123456789";

      const cl = char.length;
      let r = "";
      for(let i=0; i<cl; i++){
        r += char[Math.floor(Math.random()*cl)];
      }
      return r
    },
    modalClicked() {
      this.$emit("closeModal");
    },
    confirm() {
      const result = window.confirm('画像を投稿しますか？')
      if (!result) return false
      const obj = {
        "userName": "user name",
          "images": this.urlArr.map((item) => item.url),
          "likedInfo": "username、他1.5万人が「いいね！」しました",
          "detail": this.detail
      }
      this.$emit('postPhoto', obj)
    },
  },
};
</script>
<style scoped>
* {
  outline-style: none;
}
.inputArea {
  padding-left: 40px;
}
.overlay {
  height: 100vh;
  width: 100vw;
  position: fixed;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  bottom: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  left: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  position: fixed;
  right: 0;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  z-index: 200;
}
.selection {
  background: #fff;
  background: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  margin: 100px auto auto;
  border-radius: 10px;
}
.title {
  height: 50px;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  text-align: center;
  margin-bottom: 40px;
}
.title span {
  height: 50px;
  line-height: 50px;
}
.field {
  padding-top: 50px;
  height: 30px;
}
.field dt {
  float: left;
}
.field dt::after {
  content: " :";
}
input {
  width: 210px;
  margin-left: 20px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding: 5px;
  outline-style: none;
}
.detail {
  margin-left: 40px;
}
textarea {
  margin-left: 40px;
  height: 100px;
  width: 80%;
}
button {
  height: 50px;
  width: 100px;
  float: right;
  margin-top: 40px;
  margin-right: 30px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 10px;
  cursor: pointer;
}
.btnColor {
  color: darkgrey;
}
.list {
  margin-left: 40px;
  height: 30px;
  display: flex;
  flex-direction: row;
}
.plusBtn {
  cursor: pointer;
  margin-left: 3px;
  display: inline-block;
  justify-content: center;
  text-align: center;
  color: white;
  font-weight: bold;
  height: 25px;
  width: 25px;
  border-radius: 100px;
}
.colorBlue {
  background-color: skyblue;
}
.colorGray {
  background-color: darkgrey;
}
</style>