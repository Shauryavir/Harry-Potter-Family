var picture=["Jp.jpeg","Lp.jpeg","Hp.jpeg","Gp.jpeg"];
var names=["James Potter","Lily Potter","Harry Potter","Ginny Potter"];
var i=0;
function changepic(){
    document.getElementById("Potter").innerHTML=names[i];
    document.getElementById("photo").src=picture[i];
    i++;
    if(i==4){
        i=0;
    }
}