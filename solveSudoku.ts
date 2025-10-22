function solveSudoku(board: string[][]): void {
    const isValid = (r: number, c: number, ch: string): boolean => {
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === ch || board[i][c] === ch) return false;
            const br = 3 * Math.floor(r / 3) + Math.floor(i / 3);
            const bc = 3 * Math.floor(c / 3) + (i % 3);
            if (board[br][bc] === ch) return false;
        }
        return true;
    };

    const solve = (): boolean => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let ch = 1; ch <= 9; ch++) {
                        const s = ch.toString();
                        if (isValid(r, c, s)) {
                            board[r][c] = s;
                            if (solve()) return true;
                            board[r][c] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
}
