class Board {
	refreshBoard() {

		this.board = [];
		for (let w = 0;w < this.width;w++) {
			let r = [];
			for (let h = 0;h < this.height;h++) {
				r.push(0);
			}
			this.board.push(r);
		}

		for (let i = 0;i < this.width * this.height;i ++) {
			let x = Math.floor(Math.random() * this.width);
			let y = Math.floor(Math.random() * this.height);
			this.toggle(x, y);
		}

	}

	constructor(width,height) {
		this.width = width;
		this.height = height;
		this.refreshBoard();
	}

	swap(x, y) {
		let current = this.board[y][x];
		let opp = 1 - current; // 1 - 0 is 1, and 1 - 1 is 0
		this.board[y][x] = opp;
	}

	toggle(x, y) {
		let left  = (x > 0) ? x - 1 : null;
		let right = (x < 4) ? x + 1 : null;
		let above = (y > 0) ? y - 1 : null;
		let below = (y < 4) ? y + 1 : null;
		
		if (left !== null) {
			this.swap(y, left);
		}
		if (right !== null) {
			this.swap(y, right);
		}
		if (above !== null) {
			this.swap(above, x);
		}
		if (below !== null) {
			this.swap(below, x);
		}
		this.swap(y, x);
	}
}
