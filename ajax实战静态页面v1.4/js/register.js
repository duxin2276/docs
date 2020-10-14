$(function () {
    register();

    // 跳转登录页面
    $('.login-link').on('click', () => {
        location.href = 'login.html';
    });
});


// 注册功能
function register() {
    // 绑定事件
    $('#myForm').on('submit', (e) => {
        e.preventDefault();
        // 获取表单所有数据
        let data = $('#myForm').serialize();
        $.post('http://www.shop.com/api/member/register', data, (res) => {
            
            if (res.code !== 2000) {
                return alert('注册失败');
            }
            console.log(res);
            console.log(res.token);
        });
    });
}