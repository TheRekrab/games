function updateBoard() {
	let rows = document.getElementsByClassName("row");

	for (let r = 0;r < rows.length;r ++) {
		let children = rows[r].children;

		for (let c = 0;c < children.length;c ++) {
			let currentBox = children[c];
	
			currentBox.onclick = () => {
				b.toggle(r,c);
				updateBoard();
			};

			let currentSpot = b.board[r][c];
			if (currentSpot === 1) {
				if (currentBox.classList.contains("box-dark")) {
					currentBox.classList.remove("box-dark");
				}
				currentBox.classList.add("box-light");
			} else {
				if (currentBox.classList.contains("box-light")) {
					currentBox.classList.remove("box-light");
				}
				currentBox.classList.add("box-dark");
			}
		}
	}
}

const b = new Board(5, 5);

updateBoard();
