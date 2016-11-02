const storage = require('electron-json-storage');

storage.get('activeSectionButtonId', (err, id) => {
	if (err) return console.error(err);

	if (id && id.length) {
		showMainContent();
		const section = document.getElementById(id);
		if (section) section.click();
	} else {
		activateDefaultSection();
	}
});

document.body.addEventListener('click', (event) => {
	if (event.target.dataset.section) {
		handleSectionTrigger(event);
	} else if (event.target.dataset.modal) {
		handleModalTrigger(event);
	} else if (event.target.classList.contains('modal-hide')) {
		hideAllModals();
	}
});

function handleSectionTrigger (event) {
	hideAllSectionsAndDeselectButtons();

	event.target.classList.add('active');

	const sectionId = event.target.dataset.section + '-section';
	document.getElementById(sectionId).classList.add('active');

	const buttonId = event.target.getAttribute('id');
	storage.set('activeSectionButtonId', buttonId, (err) => {
		if (err) return console.error(err);
	});
}

function activateDefaultSection () {
	document.getElementById('button-plans').click();
}

function showMainContent () {
	document.querySelector('.js-nav').classList.add('active');
	document.querySelector('.js-content').classList.add('active');
}

function handleModalTrigger (event) {
	hideAllModals();
	const modalId = event.target.dataset.modal + '-modal';
	document.getElementById(modalId).classList.add('active');
}

function hideAllModals () {
	const modals = document.querySelectorAll('.modal.active');
	Array.prototype.forEach.call(modals, (modal) => {
		modal.classList.remove('active');
	});
	showMainContent();
}

function hideAllSectionsAndDeselectButtons () {
	const sections = document.querySelectorAll('.js-section.active');
	Array.prototype.forEach.call(sections, (section) => {
		section.classList.remove('active');
	});

	const buttons = document.querySelectorAll('.nav-group-item.active');
	Array.prototype.forEach.call(buttons, (button) => {
		button.classList.remove('active');
	});
}
