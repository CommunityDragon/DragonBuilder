function loadThumbnails() {
	document.querySelector("#list > colgroup").prepend(document.createElement("col"));

	for (let tr of document.querySelectorAll("#list > thead > tr")) {
		tr.prepend(document.createElement("th"));
	}

	for (let tr of document.querySelectorAll("#list > tbody > tr")) {
		let a = tr.querySelector("td > a")
		let filename = a.title;
		let icon;
		if (a.href.endsWith("/")) {
			icon = '<i class="far fa-folder-open"></i>';
		} else if (/\.(jpe?g|gif|png)$/.test(filename)) {
			icon = `<img src="/t${location.pathname}${filename}"/>`;
		} else if (/\.(css|html|styl)$/.test(filename)) {
			icon = '<i class="fas fa-code"></i>';
		} else if (/\.(csv|json|txt|yaml)$/.test(filename)) {
			icon = '<i class="far fa-file-alt"></i>';
		} else if (/\.(ogg|)$/.test(filename)) {
			icon = '<i class="fas fa-music"></i>';
		} else if (/\.(otf|ttf)$/.test(filename)) {
			icon = '<i class="fas fa-font"></i>';
		} else if (/\.(webm)$/.test(filename)) {
			icon = '<i class="fas fa-video"></i>';
		} else if (/\.(svg)$/.test(filename)) {
			icon = `<img src="${filename}" width="50" height="50"/>`;
		} else if (/\.(js)$/.test(filename)) {
			icon = '<i class="fab fa-js-square"></i>';
		} else {
			icon = '<i class="fas fa-question"></i>';
		}
		tr.insertAdjacentHTML('afterbegin', `<td style="text-align: center">${icon}</td>`);
	}
}
