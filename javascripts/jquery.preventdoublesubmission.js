jQuery.fn.preventDoubleSubmission = function() {
  $(this).on('submit',function(e){
    var $form = $(this);

    if ($form.data('submitted') === true) {
      // Previously submitted - don't submit again
      e.preventDefault();
    } else {
      // Mark it so that the next submit can be ignored
      $form.data('submitted', true);
    }
  });

  // Keep chainability
  return this;
};

/*
Use it like this:
$('form').preventDoubleSubmission();

If there are AJAX forms that should be allowed to submit multiple times per page load, you can give them a class indicating that, then exclude them from your selector like this:
$('form:not(.js-allow-double-submission)').preventDoubleSubmission();
*/