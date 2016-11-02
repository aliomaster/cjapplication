const links = document.querySelectorAll('link[rel="import"]');

Array.prototype.forEach.call(links, (link) => {
	let template = link.import.querySelector('.page-template');
	let clone = document.importNode(template.content, true);

	document.querySelector('.content').appendChild(clone)
});
