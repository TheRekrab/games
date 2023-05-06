# Lights Off

Another website about the classic strategy game, Lights Off.

The point of the game is to turn off all the lit tiles in a 5x5 grid by clicking them. However, there's a twist: when you click a tile, the tiles adjacent to it are also toggled!

Try if you want.

## Solver

My version of the app has a solver built in. Press `s` to auto-solve the current grid, and the program will set to work.

## User Controls:

`s` - Activate the solver

`r` - refresh, and create a new puzzle

`h` - Open the help panel

## Strategy:

### Basic Game Principles:

Because of the nature of the game, with each tile having only two modes (`on` and `off`), there should never be a *need* to double click a tile.

### Cascading

This is by far the simplest method of solving the game. It starts off by going through each row, and if the tile is lit, click the tile directly beneath it. This will result in either:

a) You get lucky and that gets rid of all lit tiles. Good Job! You can press `r` to go to a new puzzle.

OR, and more likely:

b) You still have a couple tiles left in the bottom row. Because there are no rows beneath that one, we cannot click any more tiles using our cascading method. So, we will click some tiles in the top row, then repeat the process of cascading. This is gaurunteed to (on a solvable grid, which all of mine are) solve the grid.
How will we know which tiles to click? Well, we consule the following table:

**Note:** The tiles are labeled from 1 to 5, 1 is the left, 5 is the right.

| Tiles lit in bottom row | Tiles to click in top row |
| --- | --- |
| 1, 3, & 4 | 5 |
| 3, 4, & 5 | 2 & 3 |
| 1 & 5 | 1 & 2 |
| 1, 2, 4, & 5 | 3 |
| 2, 3, & 5 | 1 |
| 1, 2, & 3 | 4 & 5 |
| 2 & 4 | | 1, 2, & 3 |

Following the table above correctly and 'cascading' down will result in a solved grid.

### Enjoy the Game!
