<script setup>
  import PictureComp from '../../components/PictureComp.vue'
  import Location from '../../components/Location.vue'
  const homeUrl = `${location.origin}/systemStandard/index`
</script>
<Location :homeUrl="homeUrl"/>

# 埃森哲内购操作手册

## 登录
> 如下图所示，请在输入框内输入管理员账号，点击进行登录

<PictureComp :imgUrl="'../../public/omsb2c/login.PNG'"/> 

## 首页功能

<PictureComp :imgUrl="'../../public/omsb2c/home.png'"/> 