wow = new WOW(
    {
        boxClass: 'wow',      // 默认属性名
        animateClass: 'animated', // 默认触发的动画类(包含在animate css中)
        offset: 0,          // 为所有添加wow的元素设置 data-wow-delay属性 的默认值
        mobile: true,       // 是否在移动设备中开启动画
        live: true        // 持续监测页面中是否插入新的wow元素
    }
);
wow.init();