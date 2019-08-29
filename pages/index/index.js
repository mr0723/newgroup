Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    scrollTop: 0, // 当前滚动的距离
    swiperCurrent1: 0,
    hot_recommended: [
        {
          group_price: "500.00",
          group_title: "（JMN）伯纳天纯生鲜-农场派对全价猫粮7kg",
          id: 1904,
          sku_img: "https://cdn.petlemon.com/upload/item/2019/08/23/201908231702321341.jpg"
        },
        {
          group_price: "340.05",
          group_title: "Instinct本能原食生鲜猫粮 ",
          id: 1904,
          sku_img: "https://cdn.petlemon.com/upload/item/2019/08/23/201908231702321341.jpg"
        }, 
        {
          group_price: "23.98",
          group_title: "6(jmn)三角形猫抓板（镂空猫脸款）",
          id: 1904,
          sku_img: "https://cdn.petlemon.com/upload/item/2019/05/25/201905251616560207.jpg"
        }, 
        {
          group_price: "1000.00",
          group_title: "哆啦A梦",
          id: 1904,
          sku_img: "https://cdn.petlemon.com/static/images/cat.png"
        },
        {
          group_price: "88.88",
          group_title: "Instinct本能原食生鲜猫粮 ",
          id: 1904,
          sku_img: "https://cdn.petlemon.com/static/images/cat2.png"
        },
        {
          group_price: "999.00",
          group_title: "樱桃小丸子啊！",
          id: 1904,
          sku_img: "https://cdn.petlemon.com/static/images/cat.png"
        }, 
      ],
  },
    //轮播点
    swiperChange1(e) {
      let current = e.detail.current;
      let that = this;
      that.setData({
        swiperCurrent1: current,
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
    if (that.data.hot_recommended && that.data.hot_recommended.length > 0) {
      var big = that.data.hot_recommended;
      //拆分价格成整数部分和小数部分
      for (var i in big) {
        if (("group_price" in big[i])) {
          var g_p = big[i].group_price.split(".");
          big[i].group_price_1 = g_p[0];//整数部分
          big[i].group_price_2 = g_p[1];//小数部分
        }
      }
      var length = big.length;
      var num = parseInt(length / 3);
      //将一个数组三个为一组重组新的数组（为了放在轮播里面）
      var arr = [];
      for (var i = 0; i < that.data.hot_recommended.length; i += 3) {
        arr.push(big.slice(i, i + 3));
      }
      arr.push()
      console.log(arr)
      that.setData({
        hot_recommended: arr
      })
    }
  },

})