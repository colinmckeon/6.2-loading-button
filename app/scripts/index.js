var Backbone = require('backbone');
var $ = require('jquery');

var LoadBtnCollection =  require('./models/load.js').LoadBtnCollection;

$(function(){

  $('.data-holder').append('<ul></ul>');



$(document).on('click', '.load-button', function(){
    $('.load-button').prop('disabled', true);
    $('.load-button').html('Loading...');

  var load = new LoadBtnCollection();
  load.fetch().then(function(){
    console.log(load);

    $('.load-button').html('Submit');
    $('.load-button').prop('disabled', false);
  })




  load.on("add", function(data){
    $('.data-holder ul').append('<li>' + data.get('title') + '</li>');
  });





});





});
