function myFunction() {
    var x = document.getElementById("demo").value;
    if (x == "" || isNaN(x)) {
        alert("NOT Numeric");
//            document.write("<h1>这个是插入的标题</h1>")
    }
    else {
        alert("success!!！")
    }

}