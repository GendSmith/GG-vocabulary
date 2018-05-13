// pages/feedback/feedback.js
Page({
  submitSuggestion: function () {
      wx.showModal({
          title: '提示',
          content: '提交成功！感谢您的反馈！',
          showCancel: false,
          success: function (res) {
              if (res.confirm) {
                  console.log('用户点击确定')
              }
          }
      })
  }
})