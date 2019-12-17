//使用articals.js对项目中与[文章分类相关的请求]
var articles = {
    //获取文章分类信息
    getCate: function (options) {
        $.ajax({
            url: GETCATE,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res)
                }
            }
        })
    },
    //添加文章分类功能
    addCate: function (options) {
        $.ajax({
            type: 'post',
            url: ADDCATE,
            data: options.data,
            success: function (res) {
                if (res.code === 200) {
                    // console.log(res);

                    options.success();
                } else if (res.code == 400) {
                    options.fail();
                }
            }
        })
    },

    //编辑文章分类功能
    editCate: function (options) {
        $.ajax({
            type: 'post',
            url: EDITCATE,
            data: options.data,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },

    //文章分类删除功能
    delCate: function (options) {
        $.ajax({
            type: 'post',
            url: DELCATE,
            data: options.data,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    }

}