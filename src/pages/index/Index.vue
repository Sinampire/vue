<template>
  <div id="main">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue';

export default {
  name: 'Index',
  components: {
    HelloWorld,
  },
  data() {
    return {}
  },
  created() {
    this.getData();
    this.postData();
  },
  methods: {
    getData() {
      this.$axios.get('/word/clock/getChannelInfo?channel=111')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    postData() {
      const url = '/trainingCamp/union/productInfo';
      const params = {
        uid: 1,
        id: 118,
        type: 13,
        channel: 'h5'
      };
      this.$axios.get(url, {params: params})
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }
};
</script>

<style lang="less">

</style>