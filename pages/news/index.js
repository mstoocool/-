// pages/news/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    // 当前页数
    currentPage:1,
    // 总页数
    totalPage:Number,
    // 是否在加载
    isLoad:true,
    // 是否没有跟好多了
    isMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },
  /**qingqiushujv */
  getList(){
    wx.request({
      url: 'https://route.showapi.com/255-1',
      data:{
        showapi_appid:"91611",
        showapi_sign:"8f05a91867a740d697c6fadcaff87956",
        page:this.data.currentPage
      },
      success:res => {
        console.log(res)
        this.setData({
          isLoad:false,
          list: this.data.list.concat(res.data.showapi_res_body.pagebean.contentlist),
          totalPage: res.data.showapi_res_body.pagebean.allPages
        })
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var page = this.data.currentPage
    if(page < this.data.totalPage){
      page ++
      this.setData({
        isLoad: true,
        currentPage:page
      })
      this.getList()
    }else{
      this.setData({
        isLoad:true,
        isMore:true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})