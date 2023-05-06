const helpText = document.getElementById("helpText");

function updateBoard() {
	let rows = document.getElementsByClassName("row");

	for (let r = 0;r < rows.length;r ++) {
		let children = rows[r].children;

		for (let c = 0;c < children.length;c ++) {
			let currentBox = children[c];
	
			currentBox.onclick = () => {
				b.toggle(c,r);
				updateBoard();
			};

			let currentSpot = b.board[r][c];
			if (currentSpot === 1) {
				currentBox.classList.add("box-light");
				currentBox.style.background = `rgba(255,255,255,${Math.random() * 0.3 + 0.7})`; // Assign a random value to the color value so that is it actually a little different each time. However, don't change it more than once.
				if (currentBox.classList.contains("box-dark")) {
					currentBox.classList.remove("box-dark");
				}
			} else {
				currentBox.classList.add("box-dark");
				currentBox.style.background = 'inherit';
				if (currentBox.classList.contains("box-light")) {
					currentBox.classList.remove("box-light");
				}
			}
		}
	}
}

const b = new Board(5, 5);

updateBoard();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("keypress", (e) => {
	if (e.key === "r" || e.key === "R") {
		b.refreshBoard();
		updateBoard();
	}

	if (e.key === "s" || e.key === "S") {
		let s = setInterval(() => {
			console.info("Solving...");
			let res = b.solveNextMove();
			updateBoard();
			if (res === -1) {
				console.info("Board Solved!");
				clearInterval(s);
			}
		}, 250);
	}
	
	if (e.key === "h" || e.key === "H") {
		if (helpText.style.display == 'none' || helpText.style.display == '') {
			helpText.style.display = 'block';
			for (let element of document.getElementsByClassName("row")) {
				element.style.display = 'none';
			}
		} else {
			helpText.style.display = 'none';
			for (let element of document.getElementsByClassName("row")) {
				element.style.display = "flex";
			}
		}
	}
});
