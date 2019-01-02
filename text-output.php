<?php
  function is_ajax_request() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
  }

  $text_output = isset($_POST['text']) ? $_POST['text'] : '';


  if(!is_ajax_request()) {
    echo "text: " . $text_output;
  } else {
    echo $text_output;
  }

?>
