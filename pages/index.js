// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onCet4: function () {
      wx.navigateTo({
        url: 'word/cet4/cet4',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },
  onCet6:function () {
    wx.navigateTo({
      url: 'word/cet6/cet6',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})