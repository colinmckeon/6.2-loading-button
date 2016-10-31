var Backbone = require('backbone');
var $ = require('jquery');


var LoadBtn = Backbone.Model.extend();


var LoadBtnCollection = Backbone.Collection.extend({
    model: LoadBtn,
    url: 'https://tiny-lasagna-server.herokuapp.com/collections/posts'
});
module.exports = {
  LoadBtn: LoadBtn,
  LoadBtnCollection: LoadBtnCollection
}
