$(function () {
    lookCar();
    removeCar();
    edit();

});

// 查看购物车
function lookCar() {
   var token =  localStorage.getItem('token')
    $.get('http://www.shop.com/api/cart/getlist', {
        token: token
    }, (res) => {
            console.log(res);

        // 调用template函数
        let data = template('tpl', res);
        // 放到容器中
        $('#tpl-box').html(data);
    });
};


// 删除购物车

function removeCar() {
    $('#tpl-box').on('click', '.icon-shanchu', function () {
        let id = $(this).attr('data-id');
        let token = localStorage.getItem('token');
        $.get('http://www.shop.com/api/cart/remove', {
            id: id,
            token: token
        }, (res) => {
            // console.log(res);
            // 调用template函数
            // let data = template('tpl', res);
            // // 放到容器中
            // $('#tpl-box').html(data);
            lookCar();
        });
    });
}


// 修改功能
function edit() {
    // 添加功能
    $('#tpl-box').on('click', '.product-add', function () {
        let id = $(this).attr('data-id')*1;
        let num = $(this).attr('data-num');
        num++;
        let token = localStorage.getItem('token');
        var data = {
            num: num,
            token: token,
            id:id
        }

        console.log(data);
        $.get('http://www.shop.com/api/cart/edit', data, function (res) {
            console.log(res);
            lookCar()
        })
    });

    $('#tpl-box').on('click', '.product-jian',function () {
        let id = $(this).attr('data-id')*1;
        let num = $(this).attr('data-num');
        num--;
        let token = localStorage.getItem('token');
        var data = {
            num: num,
            token: token,
            id:id
        }

        console.log(data);
        $.get('http://www.shop.com/api/cart/edit', data, function (res) {
            console.log(res);
            lookCar()
        })
    });

}