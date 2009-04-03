// Common JavaScript code across your application goes here.


$(document).ready(function () {
  // confirm deletion
  $('.delete').click(function() {
    var answer = confirm('Are you sure?');
    return answer;
  });
  
  // lava lamp nav effects
  var easing = 'Circ';
  
  $('#lavaLampBasicImage').lavaLamp({
    fx: 'easeIn' + easing,
    speed: 400,
    autoReturn: false,
    homeTop:-1,
    homeLeft:-1
  });

});
