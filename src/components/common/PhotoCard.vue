<template>
  <div class="card-wrapper">
    <div class="account-bar">
      <Icon :source="'https://unsplash.it/630/400'" />
      <div class="account-name">
        <span>icon name</span>
      </div>
      <span @click="showModal = true" class="reader">●●●</span>
    </div>
    <div class="image-area">
      <img :src="photoInfo.images[imageIdx]" alt="pplaceholder" />
      <span class="right-arrow" v-if="showNextImgBtn" @click="imageIdx++">＞</span>
      <span class="left-arrow" v-if="showPrevImgBtm" @click="imageIdx--">＜</span>
      <div class="icon-area">
        <div class="icon-list">
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
        </div>
        <div class="dots">
          <li
            v-for="n of photoInfo.images.length"
            :key="n + 'image'"
            :class="{ colorGray: n !== imageIdx + 1, colorBlue: n === imageIdx + 1 }"
            class="image-dot"
          ></li>
        </div>
        <div class="bookMark"></div>
      </div>
      <div class="likesBelt">
        <Icon :source="'https://unsplash.it/630/400'" :height="20" :width="20" />
        <span>{{ photoInfo.likedInfo }}</span>
      </div>
      <div v-if="showMore" class="photoDetail">
        <span>{{ shortenPhotoDetail }}</span>
        <span @click="showMore = false" class="showMore">続きをみる</span>
      </div>
      <div v-else class="photoDetail">
        <span>{{ photoInfo.detail }}</span>
      </div>
    </div>

    <Modal v-if="showModal" @closeModal="showModal = false" />
  </div>
</template>
<script>
import Modal from "./Modal.vue";
import Icon from "./Icon.vue";

export default {
  components: {
    Modal,
    Icon,
  },
  props: {
    photoInfo: {
      type: Object,
      required: true,
    },
    photoDetailMaxLength: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      imageIdx: 0,
      showModal: false,
      showMore: true,
    };
  },
  computed: {
    showNextImgBtn() {
      return this.imageIdx < this.photoInfo.images.length - 1;
    },
    showPrevImgBtm() {
      return this.imageIdx !== 0;
    },
    showShortenMsg() {
      return this.photoInfo.detail > this.photoDetailMaxLength;
    },
    shortenPhotoDetail() {
      let detail = "";
      if (this.photoInfo.detail.length < this.photoDetailMaxLength) {
        detail = this.photoInfo.detail.slice(0, 100);
        detail += "...";
      } else {
        detail = this.detail;
      }
      return detail;
    },
  },
};
</script>
<style scoped>
.card-wrapper {
  height: 748px;
  width: 618px;
  background: #fff;
  background: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
}
.reader {
  text-align: end;
  font-size: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.account-bar {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 60px;
  padding: 16px;
  display: flex;
  flex-direction: row;
}
.account-name {
  margin-left: 30px;
  width: 480px;
}
.image-area {
  height: 410px;
  width: 614px;
  position: relative;
}
.image-area img {
  height: 410px;
  width: 100%;
}
.left-arrow {
  position: absolute;
  display: inline-block;
  top: 45%;
  left: 3px;
  height: 30px;
  width: 35px;
  background-color: white;
  border: 1px solid white;
  border-radius: 100px;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
  cursor: hand;
  user-select: none;
}
.right-arrow {
  position: absolute;
  display: inline-block;
  top: 45%;
  right: 3px;
  height: 30px;
  width: 35px;
  background-color: white;
  border: 1px solid white;
  border-radius: 100px;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
  cursor: hand;
  user-select: none;
}
.icon-area {
  line-height: 41px;
  height: 41px;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  display: flex;
  flex-direction: row;
  position: relative;
}
.icon-area li:nth-child(1) {
  margin-left: 10px;
}
.icon-list li {
  list-style: none;
  float: left;
  margin-right: 30px;
  cursor: pointer;
  cursor: hand;
}
.dots {
  text-align: center;
  margin-left: 80px;
}
.image-dot {
  display: inline-block;
  height: 8px;
  width: 8px;
  margin-top: 15px;
  margin-right: 10px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 10px;
}
.colorGray {
  background-color: gray;
}
.colorBlue {
  background-color: skyblue;
}
.bookMark {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 80px;
}
.likesBelt {
  margin-top: 30px;
  margin-left: 20px;
  height: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
}
.likesBelt span {
  margin-left: 10px;
}
.photoDetail {
  padding-right: 20px;
  padding-left: 20px;
  height: 54px;
}
.photoDetail span {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}
.showMore {
  margin-left: 20px;
  color: gray;
  cursor: pointer;
}
</style>