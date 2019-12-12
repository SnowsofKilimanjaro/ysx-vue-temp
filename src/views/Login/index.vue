<script>
import cookies from 'js-cookie'
import md5 from 'js-md5'
import { decrypts } from '@/utils/index'
import { domain } from '../../../config'

export default {
  data() {
    return {
      visible: false,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectedNodeLabel: null,
      width: 0,
      formLogin: {
        account: '',
        accountPasswork: '',
        logCode: ''
      },
      rulesLogin: {
        account: [
          { required: false, message: '请输入用户名', trigger: 'blur' }
        ],
        accountPasswork: [
          { required: false, message: '请输入密码', trigger: 'blur' }
        ]
      },
      // 验证码
      formCodeLogin: {
        accountTel: '',
        accountCode: ''
      },
      rulesCodeLogin: {
        accountTel: [
          { required: false, message: '请输入手机号', trigger: 'blur' }
        ],
        accountCode: [
          { required: false, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      isRememberPwd: false,
      loginKey: '',
      isBlur: false,
      codePic: '',
      tokenId: '',
      loginType: 1
    }
  },
  mounted() {
    this.authCode()
  },
  methods: {
    handleRemember() {
      this.setCookies()
    },
    handleCode() {
      this.authCode()
    },
    // 手机微信端页面失去焦点,页面下滑
    handleBlur() {
      this.isBlur = true
      setTimeout(() => {
        let ua = navigator.userAgent.toLowerCase()
        this.isBlur &&
          ua.match(/MicroMessenger/i) == 'micromessenger' &&
          window.scrollTo(0, document.documentElement.clientHeight) // eslint-disable-line
      }, 200)
    },

    handleFoucs() {
      this.isBlur = false
    },
    authCode() {
      this.$store
        .dispatch('app/getCode')
        .then(res => {
          const { tokenId, verifyCodeImg } = res.data
          this.codePic = `data:image/png;base64,${verifyCodeImg}` || ''
          this.tokenId = tokenId
        })
        .catch(() => {
          this.loading = false
        })
    },
    // 是否保存密码 1: 账号密码登录 2: 验证码登录
    setCookies() {
      if (this.isRememberPwd) {
        let loginData = decrypts(JSON.stringify(this.formLogin))

        cookies.set('LOGININFO', loginData, {
          expires: 3,
          path: '',
          domain
        })
      } else {
        cookies.get('LOGININFO') &&
          cookies.remove('LOGININFO', { path: '', domain }) // eslint-disable-line
      }
      // }
    },
    async handleLogin() {
      this.setCookies()

      let params = {
        ...this.formLogin,
        ...this.formCodeLogin
      }
      // eslint-disable-line
      if (!params.account) {
        this.$message({
          message: '用户名不能为空~',
          type: 'warning'
        })
        return
      }
      if (!params.accountPasswork) {
        this.$message({
          message: '密码不能为空~',
          type: 'warning'
        })
        return
      }
      if (!params.logCode) {
        this.$message({
          message: '验证码不能为空~',
          type: 'warning'
        })
        return
      }
      this.loading = true
      let v = {
        username: params.account,
        password: md5(params.accountPasswork),
        verifyCode: params.logCode,
        tokenId: this.tokenId,
        sso_app_id: 'scrm-dashboard' // eslint-disable-line
      }
      this.$store
        .dispatch('app/login', { ...v })
        .then(response => {
          console.log(process.env.VUE_APP_BASE_SSO, 'response')
          if (response && response.code == '0') {
            let resData = response.data
            cookies.set('sso_sessionid', resData.sessionId, {
              expires: 7,
              path: '',
              domain
            })
            let userInfo = {
              username: resData.username,
              userId: resData.userId
            }
            cookies.set('user_info', JSON.stringify(userInfo || {}))
            this.loading = false
            this.$router.push('/')
          } else {
            this.loading = false
            this.$message({
              message: response.msg,
              type: 'warning'
            })
            this.getData()
            this.formLogin = {
              ...this.formLogin,
              logCode: ''
            }
          }
        })
        .catch(() => {
          this.loading = false
        })
      this.loading = false
    }
  }
}
</script>

<template src="./index.html"></template>
<style src="./index.scss" lang="scss"></style>
