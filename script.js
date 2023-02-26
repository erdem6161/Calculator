"use";
var _buttons = document.getElementsByTagName("button"),
_length = _buttons.length,
i=0,
_result = document.getElementById("result");

for (i=0; i<_length; i++){
    _buttons[i].onclick = calculate;
}

function calculate(){
    var _value = this.innerHTML;
    if(_value == "="){
        try {
            _result.value = eval(_result.value);
        } catch(e){
            _result.value = "0";
        }
        return;
    }
    
    _result.value += _value;
}
