var itemCount = 0;

document.getElementById('add').addEventListener('click', function() {
	var ul = document.getElementById('list');
	var li = document.createElement('li');
	itemCount++
	li.appendChild(document.createTextNode('Item ' + itemCount));
	ul.appendChild(li);

	li.addEventListener('click', function() {
		ul.removeChild(li);
	});
});

document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	var name = document.getElementById('name').value;
	var message = document.getElementById('message').value;
	if (name === '' || message === '') {
			alert('Por favor, preencha todos os campos.');
	} else {
			this.submit();
	}
});