//使用user.js对项目中与[用户操作相关的请求]
var user = {
    login: function (data, success) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: data.user_name,
                password: data.password
            },
            success: success
        })
    }
}