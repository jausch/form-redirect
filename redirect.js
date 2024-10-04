function doRedirect() {
	const formUrls = [
		"https://dsl.sk/",
		"https://zive.sk/"
	]

	window.location = formUrls[Math.floor(Math.random() * formUrls.length)];
}
