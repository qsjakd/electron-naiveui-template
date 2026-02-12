<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NButton, NForm, NFormItem, NInput, NIcon } from "naive-ui";
import { Person, LockClosed } from "@vicons/ionicons5";
import electronLogo from "../assets/electron.svg";

const AUTH_TOKEN_KEY = "auth:token";
const AUTH_NAME_KEY = "auth:name";

const router = useRouter();
const route = useRoute();

const username = ref(localStorage.getItem(AUTH_NAME_KEY) ?? "Lin");
const password = ref("");
const loading = ref(false);
const errorText = ref("");

function login(): void {
  errorText.value = "";
  const name = username.value.trim();
  if (!name) {
    errorText.value = "请输入用户名";
    return;
  }

  loading.value = true;
  window.setTimeout(() => {
    localStorage.setItem(AUTH_TOKEN_KEY, `demo-${Date.now()}`);
    localStorage.setItem(AUTH_NAME_KEY, name);
    loading.value = false;

    const redirect =
      typeof route.query.redirect === "string"
        ? route.query.redirect
        : "/overview";
    router.replace(redirect);
  }, 800);
}
</script>

<template>
  <!-- 背景图 -->
  <!-- <div class="login-container">
    <div class="background"></div>
    <div class="login-card"></div>
  </div> -->

  <div class="login-wrapper">
    <div class="drag-region"></div>

    <div class="login-left">
      <div class="brand-content">
        <img :src="electronLogo" alt="应用标志" class="logo" />
        <h1 class="brand-title">占位符</h1>
        <!-- <p class="brand-desc">XXXXXXXXXXX</p> -->
      </div>
      <div class="decoration-circle"></div>
      <div class="decoration-circle-small"></div>
    </div>

    <div class="login-right">
      <div class="login-form-container">
        <div class="header-text">
          <h2>欢迎回来</h2>
          <p>请输入账号信息以登录。</p>
        </div>

        <n-form size="large" class="login-form">
          <n-form-item :show-label="false">
            <n-input
              class="login-input"
              v-model:value="username"
              placeholder="用户名"
              clearable
              @keyup.enter="login"
            >
              <template #prefix>
                <n-icon :component="Person" :color="'#000000'" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item :show-label="false">
            <n-input
              class="login-input"
              v-model:value="password"
              type="password"
              show-password-on="click"
              placeholder="密码"
              @keyup.enter="login"
            >
              <template #prefix>
                <n-icon :component="LockClosed" :color="'#000000'" />
              </template>
            </n-input>
          </n-form-item>
        </n-form>

        <div v-if="errorText" class="login-error">{{ errorText }}</div>

        <n-button
          class="login-button"
          :loading="loading"
          size="large"
          dashed
          block
          @click="login"
        >
          登录
        </n-button>

        <div class="footer-links">
          <span>还没有账号？</span>
          <span class="link">创建账号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
  /* 替换成你自己的背景图地址 */
  background: url("../image/loginBackImg.jpg") no-repeat center center;
  background-size: cover;
  /* 轻微模糊背景，增强层次感 */
  /* filter: blur(2px); */
  z-index: 1;
}

:global(.is-dark) .login-wrapper {
  background-color: #101014;
}

.drag-region {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  -webkit-app-region: drag;
  z-index: 9999;
  pointer-events: none;
}

.login-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.brand-content {
  z-index: 2;
  text-align: center;
  padding: 0 40px;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  user-select: none;
}

.brand-title {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
  user-select: none;
}

.brand-desc {
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 400px;
  user-select: none;
}

.decoration-circle {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
}

.decoration-circle-small {
  position: absolute;
  bottom: -5%;
  right: -5%;
  width: 30vw;
  height: 30vw;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
}

.login-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* 毛玻璃核心属性：backdrop-filter */
  backdrop-filter: blur(8px);
  /* 半透明背景 + 边框，增强毛玻璃质感 */
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  /* 圆角 + 阴影，提升视觉效果 */
  border-radius: 2px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  /* 桌面端鼠标悬浮效果 */
  transition: transform 0.3s ease;
  user-select: none;
}

:global(.is-dark) .login-right {
  background-color: #101014;
}

.login-form-container {
  width: 100%;
  max-width: 380px;
  padding: 40px;
  z-index: 10;
}

.header-text {
  margin-bottom: 40px;
}

.header-text h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px;
  color: rgb(239, 241, 230);
}

.header-text p {
  color: white;
  font-size: 14px;
}

.login-form {
  margin-bottom: 24px;
}

.login-error {
  margin-bottom: 16px;
  color: #d03050;
  font-size: 13px;
  text-align: center;
}

.login-input {
  border: none;
  border-radius: 12px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.247);
  background: linear-gradient(
    180deg,
    rgba(234, 243, 250, 1) 0%,
    rgba(236, 245, 250, 1) 50%,
    rgba(250, 251, 255, 1) 100%
  );
  border: none !important;
  font-size: 14px;
  color: #5f6e86;
  letter-spacing: 2px;
}
.login-button {
  font-weight: 600;
  height: 50px;
  font-size: 16px;
  background: #0f1527;
  border-radius: 10px;
  border: none !important;
  color: white;
  /* letter-spacing: 8px; */
}

.footer-links {
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: white;
}
.link {
  color: #18a058;
  font-weight: 600;
  cursor: pointer;
  margin-left: 8px;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-left {
    display: none;
  }
}
</style>
