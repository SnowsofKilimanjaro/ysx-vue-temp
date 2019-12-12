<template>
  <div class="navbar">
    <!-- <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />-->
    <div class="header-menu-container">
      <a
        v-for="item in headerMenuData"
        :key="item.id"
        :class="{ 'menu-item': true, active: item.appId === appId }"
        :href="item.url"
        target="_blank"
        >{{ item.name }}</a
      >
    </div>
    <div class="right-menu">
      <div class="line">|</div>
      <div class="current-env">当前登录环境:{{ env }}</div>
      <div class="line">|</div>
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          欢迎:{{ userName }}
          <!-- <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" /> -->
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Hamburger from '@/components/Hamburger'
import { appId } from '../../../config'
import { getCookie } from '@/utils/auth'
export default {
  components: {
    // Hamburger
  },
  data() {
    return {
      appId
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'headerMenuData']),
    userName() {
      let userInfo = getCookie('user_info')
      return JSON.parse(userInfo).username
    },
    env() {
      let envFlag = getCookie('env_flag')
      let envNum = getCookie('env_num')
      return envFlag + envNum ? envFlag + envNum : ''
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      const params = {
        sso_app_id: appId,
        sessionId: ''
      }
      await this.$store.dispatch('app/loginOut', params)
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 54px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .header-menu-container {
    flex-grow: 1;
    display: flex;
    line-height: 54px;
    font-size: 14px;

    .menu-item {
      margin: 0 10px;
      color: #8091a5;

      &.active {
        color: #3582fb;
      }
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 54px;
    display: flex;
    &:focus {
      outline: none;
    }

    .line {
      color: lightgray;
    }

    .current-env {
      color: #303133;
      padding: 0 23px;
      font-size: 14px;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 14px;
      color: #303133;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 38px;
      margin-left: 15px;
      .avatar-wrapper {
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
