const ourInputOnPage = document.querySelector('#input');
const ourList = document.querySelector('#list');
const buttonNeeded = document.querySelector('#button');
const containerBody = document.querySelector('.container')
const ourErrorTag = document.querySelector('.body__error')

containerBody.addEventListener('click', (event) => {
	if (event.target === buttonNeeded && ourInputOnPage.value !== '') {
		if (ourInputOnPage.value.match(/^[a-zA-Z0-9]{2,25}$/g)) {
			let newLiInList = document.createElement('li');
			newLiInList.innerHTML = `${ourInputOnPage.value} <button class = "remove">REMOVE</button>`
			ourInputOnPage.value = '';
			ourList.appendChild(newLiInList).setAttribute('class', 'process');
			ourErrorTag.classList.add('body__error-done');
			ourInputOnPage.classList.remove('rejected');
			ourInputOnPage.addEventListener('change', (event) => {
				if (ourInputOnPage.value.match(/^[a-zA-Z0-9]{2,25}$/g))
					console.log('change', event)
				return;
			})
			return;
		}

		else {
			ourInputOnPage.setAttribute('class', 'rejected');
			ourErrorTag.classList.remove('body__error-done');
			ourErrorTag.innerHTML = 'Ошибка, введите верные данные';
			return;
		}
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

// function acceptanceOfValues(changes) {
// 	const regExp = /[\w]{2,25}/ig;
// 	let validation = regExp.text(changes);
// 	if (!validation) {
// 		ourInputOnPage.setAttribute('class', 'rejected');
// 		ourErrorTag.classList.remove('body__error-done');
// 		ourErrorTag.innerHTML = 'Ошибка, введите верные данные';
// 	}
// 	else
// }

// ourInputOnPage.addEventListener('input', (event) => {
// 	event.target.value.match((/[\w]{2,25}/g));
// })