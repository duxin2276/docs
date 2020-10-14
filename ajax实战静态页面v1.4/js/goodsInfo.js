$(function () {
    getId();
});

// 拿到传过来的id
function getId() {
    let data = location.search.substr(4);
    // console.log(data);
    $.get('http://www.shop.com/api/goods/getinfo', {id: data}, (res) => {
        
        // 调用template方法
        let data = template('tpl', res.data);

        // 放到容器中
        $('#tpl-box').html(data);
    });
}