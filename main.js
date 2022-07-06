const ballImg = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const exampleAnswers = [
	"Tak",
	"Nie",
	"Nie chcesz znać odpowiedzi na to pytanie",
];

const addAnimationClass = () => {
	ballImg.classList.add("shake-animation");
};

const removeAnimationClass = (params) => {
	if (ballImg.classList.contains("shake-animation")) {
		ballImg.classList.remove("shake-animation");
	}
};

const executions = (input) => {
	if (input.value == "") {
		error.textContent = "Proszę o podanie treści pytania!";
		answer.textContent = "";
	} else if (input.value.length == 1) {
		error.textContent = "Pytanie nie może składać się z tylko jednego znaku!";
		answer.textContent = "";
	} else if (input.value.charAt(input.value.length - 1) !== "?") {
		error.textContent = "Pytanie ma być zakończone pytajnikiem";
		answer.textContent = "";
	} else {
		let number = Math.floor(Math.random() * exampleAnswers.length);
		answer.textContent = exampleAnswers[number];
		error.textContent = "";
	}
};

ballImg.addEventListener("click", () => {
	[ballImg, input, answer, error];
	addAnimationClass();
	setTimeout(removeAnimationClass, 1000);
	executions(input);
});
