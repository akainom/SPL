class Sudoku {
    constructor() {
        this.board = this.createEmptyBoard();
    }

    // Создание пустой доски 9x9
    createEmptyBoard() {
        return Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    // Генерация правильно заполненной доски
    generateSolvedBoard() {
        this.fill(0, 0);
    }

    // Заполнение доски
    fill(row, col) {
        if (row == 9) return true; // Если дошли до конца, возвращаем true
        if (col == 9) return this.fill(row + 1, 0); // Переходим на следующую строку

        if (this.board[row][col] != 0) return this.fill(row, col + 1); // Если клетка уже заполнена, переходим к следующей

        const nums = this.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (const num of nums) {
            if (this.isValid(row, col, num)) {
                this.board[row][col] = num;
                if (this.fill(row, col + 1)) return true;
                this.board[row][col] = 0; // Сбрасываем, если не удалось
            }
        }
        return false;
    }

    // Перемешивание массива
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Проверка на повторение в строках, столбцах и квадратах
    checkForErrors() {
        for (let i = 0; i < 9; i++) {
            if (!this.checkRow(i)) console.log(`Ошибка в строке: ${i + 1}`);
            if (!this.checkColumn(i)) console.log(`Ошибка в столбце: ${i + 1}`);
            if (!this.checkSquare(i)) console.log(`Ошибка в квадрате: ${i + 1}`);
        }
    }

    // Проверка строки на повторения
    checkRow(row) {
        const seen = new Set();
        for (let col = 0; col < 9; col++) {
            const num = this.board[row][col];
            if (num !== 0) {
                if (seen.has(num)) return false;
                seen.add(num);
            }
        }
        return true;
    }

    // Проверка столбца на повторения
    checkColumn(col) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            const num = this.board[row][col];
            if (num !== 0) {
                if (seen.has(num)) return false;
                seen.add(num);
            }
        }
        return true;
    }

    // Проверка квадрата на повторения
    checkSquare(square) {
        const seen = new Set();
        const startRow = Math.floor(square / 3) * 3;
        const startCol = (square % 3) * 3;
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const num = this.board[row][col];
                if (num !== 0) {
                    if (seen.has(num)) return false;
                    seen.add(num);
                }
            }
        }
        return true;
    }

    // Сброс доски
    resetBoard() {
        this.board = this.createEmptyBoard();
    }

    // Выбор режима игры
    chooseGameMode() {
        const mode = prompt("Выберите режим игры:\n1. Заполнить доску вручную\n2. Сгенерировать заполненную доску\nВведите 1 или 2:");
        if (mode == '1') {
            this.playGame();
        } else if (mode == '2') {
            this.generateSolvedBoard();
            console.log("Сгенерированная заполненная доска:");
            this.printBoard();
        } else {
            console.log("Неверный ввод. Попробуйте снова.");
            this.chooseGameMode();
        }
    }

    // Ввод чисел через prompt
    playGame() {
        let isPlaying = true;
        while (isPlaying) {
            const input = prompt("Введите команду (формат: row col num) или 'exit' для выхода:");
            if (input == 'exit') {
                isPlaying = false;
                continue;
            }

            const [row, col, num] = input.split(' ').map(Number);
            if (this.isValid(row - 1, col - 1, num)) {
                this.board[row - 1][col - 1] = num;
                console.log(`Успешно добавлено: ${num} в клетку (${row}, ${col})`);
            } else {
                console.log(`Ошибка: невалидное число ${num} в клетке (${row}, ${col})`);
            }

            this.checkForErrors(); // Проверяем на ошибки
            this.printBoard(); // Выводим текущее состояние доски
        }
    }

    // Проверка валидности числа
    isValid(row, col, num) {
        return (
            num > 0 && num < 10 &&
            this.board[row].indexOf(num) == -1 && // Проверка строки
            this.board.map(r => r[col]).indexOf(num) == -1 && // Проверка столбца
            this.checkSquareForNum(row, col, num) // Проверка квадрата
        );
    }

    // Проверка квадрата на наличие числа
    checkSquareForNum(row, col, num) {
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (this.board[r][c] == num) return false;
            }
        }
        return true;
    }

    // Метод для вывода доски в консоль
    printBoard() {
        console.log("Текущая доска:");
        this.board.forEach(row => {
            console.log(row.join(" | "));
        });
        console.log("\n"); // Добавляем пустую строку для удобства
    }
}

// Пример использования
const sudokuGame = new Sudoku();
sudokuGame.chooseGameMode();