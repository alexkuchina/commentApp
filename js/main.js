
//function stores the info and post it in the DOM
function myComment() {

	//Vvariables that store information user entered
	var nameInput = document.getElementById('username');
	var textInput = document.getElementById('comment');

	//variables store info the way it will be displayed on the screen
	var userWord = 'user: ';
	var wordSpan = document.createElement('span');
	wordSpan.innerHTML = userWord;
	var commentW = 'comment: ';
	var commentSpan = document.createElement('span');
	commentSpan.innerHTML = commentW;
	var displayName = document.createTextNode(nameInput.value);
	var displayText = document.createTextNode(textInput.value);


	//create new h2 element and adds the info from displayName, then adds the h2 to new li element
	var newNamePost = document.createElement('H3');
	newNamePost.appendChild(wordSpan);
	newNamePost.appendChild(displayName);

	//create new p element 
	var newCommentPost = document.createElement('p');
	newCommentPost.appendChild(commentSpan);
	newCommentPost.appendChild(displayText);


	//create new button and button text
	var hideButton = document.createElement('button');
	var bText = document.createTextNode('Hide');
	hideButton.appendChild(bText);

	//create a remove button and a button text Remove
	var removeButton = document.createElement('button');
	var rText = document.createTextNode('Remove');
	removeButton.appendChild(rText);

	// create new li element and add it to the ul element that already exists 
	// var newLi = document.createElement('LI');
	// newLi.setAttribute('id', 'hideList');
	// newLi.className = "list-group";
	// var addHere = document.getElementById('commentList');
	

	// divB.appendChild(hideButton);
	// divB.appendChild(removeButton);

var divList = document.getElementById('divList');
divList.appendChild(newNamePost);
divList.appendChild(newCommentPost);
divList.appendChild(hideButton);
divList.appendChild(removeButton);



//button remove that will erase comment and a username
removeButton.addEventListener('click', function(){
	newNamePost.style.display = 'none';
	newCommentPost.style.display = 'none'
	removeButton.style.display = 'none';
	hideButton.style.display = 'none';
});



//button toggle hide and show a content of li element
hideButton.addEventListener('click', function(){
	if (newNamePost.style.display == 'none' && newCommentPost.style.display == 'none') {
		hideButton.textContent = 'Hide';
		newNamePost.style.display = 'block';
		newCommentPost.style.display = 'block';
		removeButton.style.display = 'inline-block';
	} else {
		hideButton.textContent = 'Show';
		newNamePost.style.display = 'none';
		newCommentPost.style.display = 'none'
		removeButton.style.display = 'none';
	};
});

nameInput.value = "";
textInput.value = "";
console.log(nameInput);
console.log(textInput);
};




































