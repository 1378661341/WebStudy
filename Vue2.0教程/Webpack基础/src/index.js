import $ from "jquery"
import './css/index.css'
 import './css/index.less'

import logo from'./images/logo.jpg'
 

$(function () {
  $('.box').attr('src',logo);
  $('li:odd').css('background-color', 'red');
  $('li:even').css('background-color', 'pink');
})



function info(target){
  target.info="inll";
}

@info
class Person {}
consle.log(Person.info);