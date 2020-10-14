let add1 = 1;
// 入口函数
$(function () {

    shop();
    add();
    prve();
    join();
    addCar();
    jump();
});

// 商品列表
function shop() {
    $.get('http://www.shop.com/api/goods/getlist', (res) => {
        if (res.code !== 2000) return alert('获取失败');
        // 调用template方法
        let data = template('page', res.page);


        //放到容器里
        $('#pagebox').html(data);
        // 调用template方法
        let data1 = template('tpl-data', res);

        // 放到容器
        $('#tpl').html(data1);
    });
}


// 按钮模块加功能
function add() {
    $('.aui-pagination-next').on('click', () => {
        add1++;
        console.log(add1);
        $.get('http://www.shop.com/api/goods/getlist', { page: add1 }, (res) => {
            console.log(res);
            if (add1 > res.page.pageCount) {
                return add1 = res.page.pageCount;
                // $('.aui-pagination-next').addClass('disabled');
            }
            // 调用template方法
            let data = template('page', res.page);


            //放到容器里
            $('#pagebox').html(data);
            // 调用template方法
            let data1 = template('tpl-data', res);

            // 放到容器
            $('#tpl').html(data1);
        });
    });
}

// 按钮模块减功能

function prve() {

    $('.aui-pagination-prev').on('click', () => {
        $('.aui-pagination-prev').removeClass('disabled');
        // console.log(1);
        add1--;
        console.log(add1);
        $.get('http://www.shop.com/api/goods/getlist', { page: add1 }, (res) => {
            console.log(res);
            if (add1 < 1) {
                return add1 = 1;
            }
            // 调用template方法
            let data1 = template('page', res.page);


            //放到容器里
            $('#pagebox').html(data1);


            // 调用template方法
            let data = template('tpl-data', res);

            // 放到容器
            $('#tpl').html(data);



        });
    });
}


// 点击进入详情页

function join() {
    $('#tpl').on('click', '.aui-list-theme-img', function () {
        // e.preventDefault();
        console.log(11);
        let id = $(this).attr('data-id');
        console.log(id);
        // location.href = 'goodsInfo.html?id =' + id;
        location.href = 'goodsInfo.html?id=' + id;
    });
}


// 加入购物车

function addCar() {
    $('#tpl').on('click', '.icon-gouwuche', function () {
        let id = $(this).attr('data-id');
        let price = $(this).attr('data-price');
        let token = localStorage.getItem('token');
        console.log(token);
        $.get('http://www.shop.com/api/cart/add', {
            gid: id,
            price: price,
            token: token
        }, (res) => {
            console.log(res);
        });
    });
}



// 查看购物车页面

function jump() {
    $('.van-tabbar-item').on('click', () => {
        let token = localStorage.getItem('token');
        console.log(token);
        // location.href = 'cart.html?token=' + token;
    });
}