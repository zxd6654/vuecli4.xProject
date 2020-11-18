<template>
  <div>
    <!-- 展示 -->
    <!-- <pdf ref="pdf" :src="url"></pdf> -->
    <!-- 显示多页 -->
    <!-- <pdf ref="pdf" :src="url" v-for="i in numPage" :key="i" :page="i"></pdf> -->
    <!-- pdf 按页预览 -->
    <el-button-group>
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        size="mini"
        @click="prePage"
        >上一页</el-button
      >
      <el-button type="primary" size="mini" @click="nextPage"
        >下一页<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </el-button-group>
    <div style="margin-top: 10px; color: #409EFF">
      {{ pageNum }} / {{ pageTotalNum }}
    </div>
    <pdf
      :page="pageNum"
      :src="url"
      @progress="loadedRatio = $event"
      @num-pages="pageTotalNum = $event"
    ></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      url: "http://image.cache.timepack.cn/nodejs.pdf",
      numPage: null,
      pageNum: 1,
      pageTotalNum: 1, // 总页数
      loadedRatio: 0, //当前页面的加载进度，范围是0-1 ，等于1的时候代表当前页已经完全加载完成了
    };
  },
  mounted() {
    this.getNumPages();
  },
  methods: {
    //计算pdf页码总数
    getNumPages() {
      let loadingTask = pdf.createLoadingTask(this.url);
      loadingTask.promise
        .then((pdf) => {
          this.numPage = pdf.numPage;
        })
        .catch((err) => {
          const toast = this.$createToast({
            time: 1000,
            txt: `pdf 加载失败${err}`,
          });
          toast.show();
        });
    },
    // 上一页
    prePage() {
      let page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },

    // 下一页
    nextPage() {
      let page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
  },
};
</script>

<style></style>
