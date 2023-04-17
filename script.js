
$(function () {
  
  $('.saveBtn').on('click', function () {
    var blockTime = $(this).parent().attr('id');
    var textArea = $(this).siblings('.description').val();
    //console.log(blockTime, textArea);
    localStorage.setItem(blockTime, textArea);
  })
 
  function setColorsToReflectTime() {
    var timeNow = parseInt(dayjs().format('HH'));
    
    $('.time-block').each(function () {
      var blockTime = parseInt($(this).attr("id"));
      if (blockTime < timeNow) {
        $(this).addClass('past');

      } else if (blockTime === timeNow) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');

      }
    })
  }
  setColorsToReflectTime();
  
  function loadText() {
     

     $("#9 .description").text(localStorage.getItem("9"));
     $("#10 .description").text(localStorage.getItem("10"));
     $("#11 .description").text(localStorage.getItem("11"));
     $("#12 .description").text(localStorage.getItem("12"));
     $("#13 .description").text(localStorage.getItem("13"));
     $("#14 .description").text(localStorage.getItem("14"));
     $("#15 .description").text(localStorage.getItem("15"));
     $("#16 .description").text(localStorage.getItem("16"));
     $("#17 .description").text(localStorage.getItem("17"))
   




    
  }
  loadText();
 
  $('#currentDay').text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'))

});
