// specific class selector element
// athuku enna selector kupduvomna document.getElementByClassName
// namma apdi kupta athu veliya varum
// ana array ah varum
// namma kudukatha class name ah kupta it is an empty array
// tagname kudukalam class name kudukala
var res = document.getElementsByClassName("main");
console.log(res.length);
// log kullama res.length kudutha total length kamikum
for (var i = 0; i < res.length; i++) {
    console.log(res[i].innerHTML);
    // .innerhtml kudutha athuka ulla ulla content varum
}
// div span p ethuva irunthalum nariya vetti kuduthu athula first irukuratha matuum epdi eduka
// athukutha namma query selector use pannuvom
// ithu html base panni varum namma class illana id select pannalam ethuna irunthalum
// nariya class name id name nariya irukalam namku 1st class mattum varanumna ithu use pannalam
// Documenet.querySelector(.Classname/#IDname/tagname)
// querySelectorAll will select all the
// var foo = document.querySelector(".main1").innerHTML;
// console.log(foo);
// // querySelectorAll kuduthu namma innerHTML kudutha we have to print it
// var foo = document.querySelectorAll(".main");
// console.log(foo);
// for (var i = 0; foo.length; i++) {
//     console.log(foo[i].innerHTML);
// }


// Events:specific task
// namma event ah add pannalam epdina addevent listener ah use panni
// .addEventListener("eventname","function name")
var button = document.createElement("button");
button.innerHTML = "clickme";
// button.addEventListener("click", display)
button.addEventListener("click", () => console.log("Hello World"));      //this is  function
document.body.append(button);

function display() {
    console.log("hello world");
};


// function display() {
//     var ele = document.createElement("div");
//     ele.innerHTML = "this is div";
//     ele.style.color = "green";
//     ele.style.fontSize = "32px";
//     document.body.append(ele);
// };


// var span = document.createElement("button");
// span.innerHTML = "click Me";
// span.addEventListener("click", foo);
// document.body.append(span);

// function foo() {
//     console.log("Welcome Page");
// }

// function foo() {
//     var ele = document.createElement("div");
//     ele.innerHTML = "Welcome Page";
//     ele.style.color = "blue";
//     ele.style.fontSize = "20px";
//     document.body.append(ele);
// }

// var table = document.createElement("table");
// table.setAttribute("class", "table");

// var thead = document.createElement("thead");
// thead.setAttribute("class", "thead-dark");

// var tr = document.createElement("tr");

// var th1 = document.createElement("th");
// th1.setAttribute("scope", "col");
// th1.innerHTML = "First";

// var th2 = document.createElement("th");
// th2.setAttribute("scope", "col");
// th2.innerHTML = "Middle";

// var th3 = document.createElement("th");
// th3.setAttribute("scope", "col");
// th3.innerHTML = "Last";

// var tbody = document.createElement("tbody");
// tbody.setAttribute("class", "tbody");

// var tr1 = document.createElement("tr");

// var td1 = document.createElement("td");
// td1.innerHTML = "Geno";

// var td2 = document.createElement("td");
// td2.innerHTML = "David";

// var td3 = document.createElement("td");
// td3.innerHTML = "king";


// table.append(thead);
// thead.append(tr);
// tr.append(th1, th2, th3);
// table.append(tbody);
// tbody.append(tr1);
// tr1.append(td1, td2, td3);
// document.body.append(table);


// next method
function table(tagname, attrname, attrvalue) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
}

function line(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}

function head(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

function tag(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}

var first = table("table", "class", "table");
var secound = table("thead", "class", "thead-dark")
var single = line("tr");
var hd1 = head("th", "scope", "col", "First");
var hd2 = head("th", "scope", "col", "Middle");
var hd3 = head("th", "scope", "col", "Last");
var wrap = line("tbody");
var single1 = line("tr");
var td1 = tag("td", "Geno");
var td2 = tag("td", "David");
var td3 = tag("td", "King");

first.append(secound);
secound.append(single);
single.append(hd1, hd2, hd3);
first.append(wrap);
wrap.append(single1);
single1.append(td1, td2, td3);
document.body.append(first);