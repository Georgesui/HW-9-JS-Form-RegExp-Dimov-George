const ourInputOnPage = document.querySelector('#input');
const ourList = document.querySelector('#list');
const buttonNeeded = document.querySelector('#button');
const containerBody = document.querySelector('.container')
const ourErrorTag = document.querySelector('.body__error')

containerBody.addEventListener('click', (event) => {
	if (event.target === buttonNeeded && verifyInput(ourInputOnPage.value)) {
		let newLiInList = document.createElement('li');
		newLiInList.innerHTML = `${ourInputOnPage.value} <button class = "remove">REMOVE</button>`;
		ourInputOnPage.value = '';
		ourList.appendChild(newLiInList).setAttribute('class', 'process');
		return;
	}

	else if (event.target.className === "remove") {
		event.target.closest('li').remove();
		return;
	}

	else if (event.target.closest('li')) {
		event.target.closest('li').classList.toggle('done');
		return;
	}
})

ourInputOnPage.addEventListener('change', (event) => {
	if (event.target === buttonNeeded) {
		verifyInput(event.target.value);
	}
})

function verifyInput(value) {
	const verify = /^[a-zA-Z0-9]{2,25}$/g
	let checking = verify.test(value)
	if (!checking) {
		ourInputOnPage.setAttribute('class', 'rejected');
		ourErrorTag.classList.remove('body__error-done');
		ourErrorTag.innerHTML = 'Ошибка, введите верные данные';
	}
	else {
		ourErrorTag.classList.add('body__error-done');
		ourInputOnPage.classList.remove('rejected');
	}
	return checking
}