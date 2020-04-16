<template>
  <div id="main">
    <img src="../../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
    return {};
  },
  created() {
    this.getData();
    // this.postData();
  },
  methods: {
    getData() {
      const url = '/word/clock/getChannelInfo';
      const params = {
        channel: 111,
      };
      this.AxiosRequest.get(url, { params })
        .then((response) => {
          // handle success
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    postData() {
      const url = '/activityCourse/getActivityCourseList';
      const params = {
        uid: 1,
        activityId: 146,
        courseId: 116,
        start: 1,
        size: 20,
      };
      this.AxiosRequest.post(url, { params })
        .then((response) => {
          // handle success
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
  },
};
</script>

<style lang="less">
</style>
