$(document).ready(function () {
  $("#resume").change(function () {
    var path = $(this).val();
    $("#file_label").text(path);
    $("#file_label").addClass("new-path");
  });

  $(".button_apply").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".careerform_container").offset().top - 120,
      },
      "slow"
    );
  });

  $(".button_apply").click(function () {
    //var designation = $(this).attr('data-label');
    //console.log(designation);
    //$('#position option').text(designation);
    //$('#position option').value('');
    var a = $(this).attr("data-label");
    $("#position option").each(function () {
      if ($(this).val() == a) {
        $(this).attr("selected", "selected");
      }
    });
  });
});
$(document).ready(function () {
  $('.Show').click(function() {
    $('#target').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#target').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#target').toggle();
});
$('.toggle1').click(function() {
  $('#target1').toggle();
});
$('.toggle2').click(function() {
 $('#target2').toggle();
});
$('.toggle3').click(function() {
 $('#target3').toggle();
});
$('.toggle4').click(function() {
  $('#target3').toggle();
 });
 $('.toggle5').click(function() {
  $('#target3').toggle();
 });
});

$(document).ready(function () {
 
  $('.apply-now').click(function () {
      $('.career-popup').addClass('open');
      var designation = $(this).attr('data-label');
      console.log(designation);
      $('#apply_for').text(designation);
      $('#job-title').val(designation);

  });
  $('.career-popup-close').click(function () {
      $('.career-popup').removeClass('open');
      $('#apply_for').innerHTML('');
      $('#job-title').value('');
  });
  $('.wpcf7-file').change(function () {
      var path = $(this).val();
      $('.input-file-name').text(path);
  });

 
});