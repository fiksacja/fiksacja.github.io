let dataUrl = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#button-take').on('click', function()
{
  if($('#dane-programisty').length===0)
  {
  $("<div id='dane-programisty'>").appendTo('body')
  }
  
$.getJSON(dataUrl, function(dane)
{
$('<p>').text(dane.imie).appendTo('#dane-programisty');
$('<p>').text(dane.nazwisko).appendTo('#dane-programisty');
$('<p>').text(dane.zawod).appendTo('#dane-programisty');
$('<p>').text(dane.firma).appendTo('#dane-programisty');
});
})