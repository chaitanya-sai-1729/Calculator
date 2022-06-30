function display(input){
  document.getElementById('textarea').value += input

}
function calculate(){
  var number = document.getElementById('textarea').value
  var answer = eval(number)
  document.getElementById('textarea').value = answer
}
function clr(){
  document.getElementById('textarea').value = ''
}
