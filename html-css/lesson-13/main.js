const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
	let result = document.getElementById('result');
	result.style.color = 'red';
	result.textContent = 'Đăng ký thành công!!!';
});