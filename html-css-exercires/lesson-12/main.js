const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
	const result = document.getElementById('result');
	result.style.color = 'brown';
	result.innerHTML = 'Bạn đã đăng ký thành công !!!';
});