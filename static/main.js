
/* Submit letter */

$('#letter-form').submit(function(e) {
  var letter = $("#letter-form").find('input[name="letter"]').val().toUpperCase();
  /* Empty input */
  $('#letter-form input').val('');
  if (!/[^A-Z]/.test(letter)  && tried.indexOf(letter) == -1){
      tried += letter;

      /* If letter in word */
      if (word.indexOf(letter) > -1){
          console.log('word');
          console.log(word);
          /* Update current */
          for (var i = 0; i < word.length; i++) {
               if (tried.indexOf(word[i]) > -1){
                    current = current.substring(0,i) + word[i] + current.substring(i+1)
                }
           }
          /* ************** */
          console.log('current')
          console.log(current)
      }
      /* Letter not in word */
      else{
          errors += letter;
      }
      console.log('Errors');
      console.log(errors);

      /* Update current */
      $('#current').text(current);

      /* Update errors */
      $('#errors').html('Errors (' + errors.length + '/6): ' + '<span class="text-danger spaced">' + errors + '</span>');

      /* Update drawing */
      updateDrawing(errors);

      if (errors.length == 6 || current == word){
          $.ajax({
            type: "POST",
            url: '',
            data: 'tried='+tried,
            success: function(data) {
                location.reload();
              }
            });
      }

  }
  e.preventDefault();
});

function updateDrawing(errors) {
  $('#hangman-drawing').children().slice(0, errors.length).show();
}