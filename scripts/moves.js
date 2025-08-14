const button = document.querySelector(".extra1");
const mainLink = document.querySelector("link:first-of-type");
const styles = mainLink.dataset.css.split(",");
let currentIndex = 0;

function changeStylesheet() {
	(currentIndex <= styles.length - 1) ? currentIndex++ : currentIndex = 0;

	// if (currentIndex <= styles.length -1) {
	// 	currentIndex++
	// } else {
	// 	currentIndex = 0;
	// }

	mainLink.href = styles[currentIndex - 1];
}

button.addEventListener("click", changeStylesheet); changeStylesheet();