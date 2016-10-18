
var Backbone = require('backbone');
var $ = require('jquery');


var LoadBtn = Backbone.Model.extend();


var LoadBtnCollection = Backbone.Collection.extend({
    model: LoadBtn,
    url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts'


});

var load = new LoadBtnCollection();
load.fetch().then(function(){
  console.log(load);
})
