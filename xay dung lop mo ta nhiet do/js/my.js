let Temperature = function (c) {
this.temperature = c;
this.getC = function () {
return this.temperature;
};
this.getF=function () {
return (this.temperature*1.8)+32;
};
this.getK = function () {
return this.temperature + 273.15;
};
};
function display(){
    let c = parseInt(prompt('hay nhap nhiet do theo do c'));
    let temperature = new Temperature(c);
    let f = temperature.getF();
    let k = temperature.getK();
    document.getElementById('write').innerHTML = 'Do f: '+f+' Do k: '+k;
}
display();