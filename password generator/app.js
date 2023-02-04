var show = document.getElementById('show')
var press = document.getElementById('press')



function myFun(){
    var char = 0
    var code = ''
  
    for(var i=0; i<10; i++){
        var password = Math.floor(Math.random()*122 )
    
        if(password >96 && password < 123){
            char = String.fromCharCode(password)
            code += char
        }
    }
    var password = Math.floor(Math.random()*99999999 )
    code = `${code}-${password}`
    show.innerHTML = code

}
