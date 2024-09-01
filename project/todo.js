var input = document.querySelector("#input")
    var list = document.querySelector('#list')
    var btn = document.querySelector('#btn')
    function add(){
        var listitem = document.createElement("li")
        listitem.innerHTML = input.value
        list.append(listitem);
        input.value = " ";
        listitem.addEventListener('click',function(){
            listitem.style.textDecoration = "line-through";
        })


    }
     function dele(){
         var listitem = document.createElement("li")
         listitem.textContent = input.value
         list.remove(listitem)
     }
   