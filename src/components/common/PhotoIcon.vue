<template>
  <div class="wrapper">
   <div>
     <span>{{ url }}</span>
   </div>
    <div>
      <span @click="delBtnClicked">X</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    delBtnClicked() {
      this.$emit('delBtnClicked', this.id)
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100px;
  display: flex;
  border: 1px solid lightblue;
  border-radius: 30px;
  background-color: skyblue;
  padding-left: 2px;
}
.wrapper div:nth-child(1) {
  height: 25px;
  width: 80px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
.wrapper div:nth-child(2) {
  width: 20px;
  margin-left: 4px;
}
.wrapper div:nth-child(2) span {
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
</style>