// Inspired by https://codepen.io/JohnPaulFich/pen/MXmzzM

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); // creates new element li

    li.appendChild(document.createTextNode(input.value)); // makes text from input field the li text

    ul.appendChild(li); // adds li to ul

    input.value = ""; // reset input text input field

    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    //END STRIKETHROUGH

    //start add delete button
    dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X")); // the cross for delete
    li.appendChild(dBtn)
    dBtn.addEventListener("click", deleteListItem);
    // end delete button

    // add class delete (display:none)
    function deleteListItem() {
        li.classList.add("delete");
        console.log('delete');
        console.log(ul)
    }
    //end add class delete

}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        console.log('click');
    } // so an empty task can't be created

}

function addListAfterKeypress(event) {
    if (inputLength() > 0 & event.which === 13) {
        createListElement();
        console.log('enter')
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
