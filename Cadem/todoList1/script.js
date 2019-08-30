window.onload = function(){

    var todoList = [];

    document.getElementById('add').onclick = function(){
            var d = document.getElementById('in').value;
            //{todo : Добавить хлеб, check: false}
            var temp = {};
            temp.todo = d;
            temp.check = false;
            var i = todoList.length;
            todoList[i] = temp;
            console.log(todoList);
            out();
    }

    function  out() {
        var out = '';
        for (var key in todoList) {
            out += todoList[key].todo + '<br>';
            if (todoList[k].check == true)
        }
    doocument.getElementById('out').innerHTML = out;
    }
}