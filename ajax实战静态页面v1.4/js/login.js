// 入口函数
$(function () {
    login();
    $('.register-link').on('click', () => {
        e.preventDefault();
        location.href = 'register.html';
    });
});


// 登录模块
function login() {
    $('.login-btn').on('click', (e) => {
        let data = $('#f2').serialize();
        e.preventDefault();
        $.post('http://www.shop.com/api/member/login', data, (res) => {
            if (res.code !== 2000) return alert('登录失败');
            location.href = 'goodsList.html';
            console.log(res.token);

            // 将token存入本地存储中
            localStorage.setItem('token', res.token);
        });
    });
}

