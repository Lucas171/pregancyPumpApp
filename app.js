var data = JSON.parse(localStorage.getItem('data')) || []
const stored = JSON.parse(localStorage.getItem('data'));
localStorage.setItem("data", JSON.stringify(data));

function clear(){
    if(confirm('Are you sure?')){
        data = []
    localStorage.setItem("data", JSON.stringify(data));
    
    location.reload();
    }
    
}
function add(){
    var date = new Date().toLocaleDateString()
    var time = document.getElementById('time').value
    var amount = document.getElementById('amount').value

   var text = date + " : " + time + " : " + amount + "mls"

    data.unshift(text);
    localStorage.setItem('data', JSON.stringify(data));
    
    alert('added!')

    document.getElementById('time').value =''
    document.getElementById('amount').value =''


}

var element = document.getElementById('add');
if (element != null) {
    document.getElementById('add').addEventListener('click', add)
}

var element3 = document.getElementById('clear');
if (element3 != null) {
    document.getElementById('clear').addEventListener('click', clear)
}

var element2 = document.getElementById('myList');
if (element2 != null) {

for (i=0;i<data.length;i++)
{
    
    const newNode = document.createElement("p");
    const textNode = document.createTextNode(stored[i]);
    newNode.appendChild(textNode);
    const list = document.getElementById("myList");
    list.insertBefore(newNode, list.children[0]);
}
}