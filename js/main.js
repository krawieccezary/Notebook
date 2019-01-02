var button = document.getElementById('button');
var textarea = document.getElementById('textarea');
var div_output = document.getElementById('div_output');
var site_1 = document.getElementById('site_1');
var site_2 = document.getElementById('site_2');


function showEntryText(){
   var length = textarea.value.length;
   console.log(length);
  if (length == 0) {
     site_1.innerHTML = "<span>Napisz coś..</span>";
  }
}

function gatherFormData(){
  var text = '&' + textarea.name + '=' + textarea.value;
  return text;
}

function add_text(){
  var action = document.getElementById('form').getAttribute('action');

  var form_text = gatherFormData();
  // console.log(form_text);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200) {
        var result = xhr.responseText;
     //  console.log(result);

        var length = textarea.value.length;
        if (length == 0) {
           site_1.innerHTML = "<span>Napisz coś..</span>";
        } else if (length < 200) {
          site_1.innerHTML = result;
        } else {
          site_2.innerHTML = result;
        }
        console.log(length);
    }
  }
  xhr.send(form_text);
}

showEntryText();

window.addEventListener('keyup', add_text);
div_output.addEventListener('click', function(){
    textarea.focus();
});
