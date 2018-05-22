/*

Copyright 2018 Maximilian Negedly

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

$(document).ready(function(){
  window.setInterval(function(){
    var info = getInfo();
    if(info.classification != "none"){
      var c = new Date().getTime();
      var v = ((c - info.start) / (info.end - info.start))*100;

      $(".wrapper").css("background", "linear-gradient(90deg, #bf2121 " + v + "%, #fafafafa 0%)");
      $(".wrapper").html(Math.round(v) + "%");
      $(".status").html(info.name);
      if(info.classification == "lesson"){
        $(".status").css("background", "#00a302");
      }else if(info.classification == "wait"){
        $(".status").css("background", "#e0af0a");
      }
      var diff = Math.round((info.end - c) / 1000);
      var m = Math.floor(diff/60);
      var s = diff % 60;
      $(".remaining").html((m < 10 ? "0" + m: m) + ":" + (s < 10 ? "0" + s: s));
  }else{
    $(".status").css("background", "#8e8e8e");

    $(".wrapper").css("background", "linear-gradient(90deg, #bf2121 0%, #fafafafa 0%)");
    $(".wrapper").html("-");
    $(".status").html(info.name);
    $(".remaining").html("-");
  }
  }, 0, 500);
});

function getRandomColour() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getInfo(){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();

  var na = "";
  var cl = "";
  var st = 0;
  var en = 0;
  if(d.getDay() != 0 && d.getDay() != 6){
    if(h == 7 && m >= 45){
      na = "Waiting";
      cl = "wait";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 7, 45).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 8, 0).getTime();
    }else if(h == 8 && m < 50){
      na = "Lesson 1";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 8, 0).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 8, 50).getTime();
    }else if(h == 8 && m < 55){
      na = "Pause";
      cl = "wait";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 8, 50).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 8, 55).getTime();
    }else if((h == 8 && m <= 59) | (h == 9 && m < 45)){
      na = "Lesson 2";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 8, 55).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 9, 45).getTime();
    }else if(h == 9 && m <= 59){
      na = "Pause";
      cl = "wait";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 9, 45).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 10, 0).getTime();
    }else if(h == 10 && m < 50){
      na = "Lesson 3";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 10, 0).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 10, 50).getTime();
    }else if(h == 10 && m < 55){
      na = "Pause";
      cl = "wait";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 10, 50).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 10, 55).getTime();
    }else if((h == 10 && m <= 59) | (h == 11 && m < 45)){
      na = "Lesson 4";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 10, 55).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 45).getTime();
    }else if(h == 11 && m < 50){
      na = "Pause";
      cl = "wait";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 45).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 50).getTime();
    }else if((h == 11 && m <= 59) | (h == 12 && m < 45)){
      na = "Lesson 5";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 55).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 45).getTime();
    }else if(h == 12 && m < 50){
      na = "Pause";
      cl = "wait";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 45).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 50).getTime();
    }else if((h == 12 && m <= 59) | (h == 13 && m < 40)){
      na = "Lesson 6";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 50).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 13, 40).getTime();
    }else if((h == 13 && m <= 59) | (h == 14 && m < 30)){
      na = "Lesson 7";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 13, 40).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 14, 30).getTime();
    }else if((h == 14 && m <= 59) | (h == 15 && m < 20)){
      na = "Lesson 8";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 14, 30).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 15, 20).getTime();
    }else if((h == 15 && m <= 59) | (h == 16 && m < 10)){
      na = "Lesson 9";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 15, 20).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 16, 10).getTime();
    }else if(h == 16 && m <= 59){
      na = "Lesson 10";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 16, 10).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 0).getTime();
    }else if(h == 17 && m < 50){
      na = "Lesson 11";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 0).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 50).getTime();
    }else if((h == 17 && m <= 59) | (h == 18 && m < 40)){
      na = "Lesson 12";
      cl = "lesson";
      st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 50).getTime();
      en = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 18, 40).getTime();
    }else{
      na = "None";
      cl = "none";
    }
  }else{
    na = "None";
    cl = "none";
  }
  return {
    name: na,
    classification: cl,
    start: st,
    end: en
  };
}
