//使用articals.js对项目中与[文章分类相关的请求]
var articles = {
    getCate: function (options) {
        $.ajax({
            url: GETCATE,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res)
                }
            }
        })
    }
}