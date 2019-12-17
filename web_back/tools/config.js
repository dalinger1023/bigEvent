//js中用来保存网站中的一些统一的配置信息
//  -如所有的接口地址
//  -为避免这些信息的变量名和其他代码中的变量名冲突
//  -可以将变量名书写为全大写的格式
//  -命名的多个部分使用_连接

var BASE_URL = 'http://localhost:8000/';

var LOGIN = BASE_URL + 'admin/login';//登录
var LOGOUT = BASE_URL + 'admin/logout';//退出
var GETUSER = BASE_URL + 'admin/getuser';//获取用户信息