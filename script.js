let selected_column = -1;
let first_layer = new String("QWERTYUIOP");
let second_layer = new String("ASDFGHJKL");

var input = document.getElementById("search");
var button = document.getElementById("ara");
var select = document.getElementById("select");
var tablo = document.getElementById("tablo");

document.addEventListener('keydown', function(event) {
    
    if (document.activeElement != input){ 
        if (event.key == "Enter"){
            sec(-1);
            document.getElementById("search").focus();
        }else if (event.key == "Escape"){
            //document.activeElement.blur();
            sec(-1);
        }
        let harf = event.key.toUpperCase();
        if (first_layer.includes(harf)){
            let column_number = first_layer.indexOf(harf);
            selected_column = column_number;
            sec(column_number);
        }
        if (second_layer.includes(harf) && selected_column > -1){
            //go to website
            let n = document.getElementsByTagName("th").length;
            let d = second_layer.indexOf(harf);
            let tds = document.getElementsByTagName("td");
            let link_number = d * n + selected_column;
            let link = tds[link_number].getElementsByTagName("a")[0].href;
            console.log(link);
            window.location.href = link;
        }

    }else{
        if (event.key == "Enter"){
            button.click();
        }else if (event.key == "Escape"){
            document.activeElement.blur();
        }
    }
    console.log(event.key);

    if(event.key == "ArrowUp"){
        console.log("Up")
        let options = document.getElementsByTagName("option")
        console.log(options[0].selected);
        let l = options.length
        for(var i=0;i<l;i++){
            if (options[i].selected){
                console.log(options[i].selected,i)
                options[i].selected = false;
                options[((i-1)+l)%l].selected =true
                break;
            }
        }
    }
    else if(event.key == "ArrowDown"){
        console.log("Down")
        let options = document.getElementsByTagName("option")
        let selektor = document.getElementsByTagName("select")
        console.log(options[0].selected);
        let l = options.length
        for(var i=0;i<l;i++){
            if (options[i].selected){
                console.log(options[i].selected,i)
                options[i].selected = false;
                options[(i+1)%l].selected =true
                break;
            }
        }
    }
});

sec(-1)

function sec(n){
    let trs = document.getElementsByTagName("tr");
    let ths = document.getElementsByTagName("th");
    let width =ths.length;
    let tds = document.getElementsByTagName("td");
    // console.log(trs,trs.length,
    //             tds,tds.length,
    //             ths,ths.length,
    //             tds[0]);
    for (var i=0;i<ths.length;i++){
        if(i==n){
            ths[i].classList.add("ilk");
            //tds[i].classList.add("ilk");
            ths[i].classList.remove("son");
            //tds[i].classList.remove("son");
        }
        else{
            ths[i].classList.remove("ilk");
            //tds[i].classList.remove("ilk");
            ths[i].classList.add("son");
            //tds[i].classList.add("son");
        }
    }
    for (let i = 0; i < tds.length; i++){
        if (i % width == n){
            tds[i].classList.add("ilk");
            tds[i].classList.remove("son");
        }else{
            tds[i].classList.remove("ilk");
            tds[i].classList.add("son");
        }
    }
}

let n = 0;
function f (){
console.log("asd",n)
n+=1
var e = document.getElementById("motor")
s = e.value;
var t = document.getElementById("search").value;
if (t != ""){
    window.location.href = s + t;
}
}