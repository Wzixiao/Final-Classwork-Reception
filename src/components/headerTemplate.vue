<template>
  <div
    class="headerTemplate"
    ref="globalHeader"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <div class="midel">
      <loading-outlined />
      <div style="padding-left: 5px">测试</div>
    </div>
    <div class="midel">
      <wifi-outlined />
      <div style="padding-left: 5px">订阅</div>
    </div>
    <div class="midel">
      <gold-outlined />
      <div style="padding-left: 5px">管理</div>
    </div>
    <div class="midel">
      <setting-outlined />
      <div style="padding-left: 5px">设置</div>
    </div>
    <div class="midel">
      <github-outlined />
      <div style="padding-left: 5px">GitHub</div>
    </div>
    <div class="midel">
      <usergroup-delete-outlined />
      <div style="padding-left: 5px">友链</div>
    </div>
  </div>
</template>

<script>
import {
  LoadingOutlined,
  WifiOutlined,
  GoldOutlined,
  SettingOutlined,
  GithubOutlined,
  UsergroupDeleteOutlined,
  MenuFoldOutlined
} from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "headerTemplate",
  components: {
    LoadingOutlined,
    MenuFoldOutlined,
    UsergroupDeleteOutlined,
    GithubOutlined,
    SettingOutlined,
    GoldOutlined,
    WifiOutlined,
  },
  setup() {

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    let globalHeader = ref(null);
    let currentLocation = ref(0);

    onMounted(() => {
      window.onscroll = () => {
        if (
          document.documentElement.scrollTop > 0 && currentLocation.value == 0 ) {
          if (globalHeader.value != null) {
            globalHeader.value.style.opacity = 0.8;
            globalHeader.value.style.transform = "translateX(0px)";
            currentLocation.value = 1;
          }
        }
        if (
          document.documentElement.scrollTop == 0 && currentLocation.value == 1 ) {
          if (globalHeader.value != null) {
            globalHeader.value.style.opacity = 0;
            globalHeader.value.style.transform = "translateX(-7%)";
            currentLocation.value = 0;
          }
        }
      };
    });

    let mouseover = () => {
      globalHeader.value.style.opacity = 0.8;
      globalHeader.value.style.transform = "translateX(0px)";
    };

    let mouseout = () => {
      if (document.documentElement.scrollTop == 0) {
        globalHeader.value.style.opacity = 0;
        globalHeader.value.style.transform = "translateX(-7%)";
      }
    };

    return {
      globalHeader,
      mouseover,
      mouseout,
    };
  },
};
</script>

<style scoped>
.headerTemplate {
  z-index: 1;
  width: 100%;
  height: 7vh;
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateX(-7%);
  transition: 0.5s;
  background: linear-gradient(90deg, rgba(93, 93, 93, 0.5), rgba(0, 0, 0, 0));
}
.headerTemplate:hover {
  opacity: 0.8;
  transform: translateX(0px);
}

.midel {
  width: 6em;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 5px;
  cursor: pointer;
}

.midel:hover {
  color: rgba(63, 177, 222, 0.994);
}

.midel::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0%;
  border-bottom: 3px skyblue solid;
  transition: 0.5s;
  left: 0;
}

.midel:hover::before {
  width: 100%;
}

.midel > div {
  font-size: 16px;
  font-weight: 500;
}
</style>