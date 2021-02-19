$(function () {
    // 粒子线条背景
    $(document).ready(function(){
      $('.layui-container').particleground({
        dotColor:'#7ec7fd',
        lineColor:'#7ec7fd'
      })
    })
    // 登录操作
    var form = layui.form
    $('.layui-form').submit(function (e) {
      e.preventDefault()
      var fd = $(this).serialize()
      $.ajax({
        method: 'POST',
        url: 'api/login',
        data: fd,
        success: function (res) {
            // 登录成功后，跳转到主页面
            if (res.status !== 0) {
                layer.msg(res.message)
            } 
            sessionStorage.setItem('mytoken', res.token)
            // 跳转到主页面
            location.href = './index.html'
        }
      })
    })
  })