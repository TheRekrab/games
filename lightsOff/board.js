class Board {
	refreshBoard() {
		this.board = [];
		this.secondTry = false;
		this.firstRowClicked = [];
		for (let w = 0;w < this.width;w++) {
			let r = [];
			for (let h = 0;h < this.height;h++) {
				r.push(0);
			}
			this.board.push(r);
			this.firstRowClicked.push(0);
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
			this.swap(left, y);
		}
		if (right !== null) {
			this.swap(right, y);
		}
		if (above !== null) {
			this.swap(x, above);
		}
		if (below !== null) {
			this.swap(x, below);
		}
		this.swap(x, y);
	}

	solveNextMove() {
		if (this.secondTry === false) {
			for (let c = 0;c < this.height - 1;c ++) {
				for (let r = 0;r < this.width;r ++) {
					if (this.board[c][r] === 1) {
						// Turn that one off!
						this.toggle(r, c + 1);
						return;
					}
				}
			}
		}

		let anyLit = false;
		
		for (let i = 0;i < this.width;i ++) {
			if (this.board[this.height - 1][i] === 1) {
				anyLit = true;
			}
		}

		if (!anyLit) {
			for (let i = 0;i < this.width;i ++) {
				this.firstRowClicked[i] = 0;
			}
			return -1; // Board is solved!
		}

		this.secondTry = true;

		let solutions = {
  		'1,0,1,1,0': [ 0, 0, 0, 0, 1 ],
  		'0,0,1,1,1': [ 0, 1, 1, 0, 0 ],
  		'1,0,0,0,1': [ 1, 1, 0, 0, 0 ],
  		'1,1,0,1,1': [ 0, 0, 1, 0, 0 ],
  		'0,1,1,0,1': [ 1, 0, 0, 0, 0 ],
  		'1,1,1,0,0': [ 0, 0, 1, 1, 0 ],
  		'0,1,0,1,0': [ 1, 1, 1, 0, 0 ],
		};

		let thisSolution = solutions[this.board[this.height - 1]];

		for (let r = 0;r < this.width;r ++) {
			if (thisSolution[r] === 1 && this.firstRowClicked[r] === 0) {
				this.firstRowClicked[r] = 1;
				this.toggle(r, 0);
				return;
			}
		}

		this.secondTry = false;
		this.solveNextMove();
	}

}
