
var list = require("../../../data/word-list.js");

Page({
  data: {
      content:"",
      pron:"",
      definition:"",
      audio:"",
      show:false
  },

  onLoad: function () {
        var id = Math.floor(Math.random()*499) + 1;
        var word = list.wordList[id];
        this.setData({
          content:word.content,
          pron: word.pron,
          definition: word.definition,
          audio: word.audio,
          show:false
        });
  },
  onShow: function () {
  
  },

  onShareAppMessage: function () {
  
  },
  show:function() {
        this.setData({
          show:true
        })
  },
  next:function() {
      this.onLoad();
  }
})