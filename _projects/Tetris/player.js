class Player
{
    constructor(tetris)
    {
        this.tetris = tetris;
        this.arena = this.tetris.arena;

        this.pos = { x: 0, y: 0 };
        this.dropCounter = 0;
        this.dropInterval = 1000;
        this.matrix = null;
        this.queue = null;
        this.hold = null;
        this.gameOver = false;
        this.paused = false;
        this.score = 0;

        this.reset();
    }
    
    drop()
    {
        this.pos.y++;
        if (this.arena.collide(this)) {
            this.pos.y--;
            this.arena.merge(this);
            this.reset();
            this.score += this.arena.sweep();
            updateScores();
        }
        this.dropCounter = 0;
    }
    
    freeFall() {
        let falling = true;
        while (falling) {
            this.pos.y++;
            if (this.arena.collide(this)) {
                this.pos.y--;
                this.drop();
                falling = false;
            }
        }
    }
    
    holdPiece() {
        var temp = this.matrix;
    
        if (this.hold === null) {
            this.reset();
        } else {
            this.matrix = this.hold;
        }
        
        this.hold = temp;
    
        if (this.arena.collide(this)) {
            this.rotate();
        }
    }
    
    move(dir)
    {
        this.pos.x += dir;
        if (this.arena.collide(this)) {
            this.pos.x -= dir;
        }
    }
    
    reset()
    {
        const pieces = 'ILJOTSZ';
        if (this.queue === null) {
            this.queue = this.tetris.createPiece(pieces[pieces.length * Math.random() | 0]);
        }
        this.matrix = this.queue;
        this.queue = this.tetris.createPiece(pieces[pieces.length * Math.random() | 0]);
        this.pos.y = 0;
        this.pos.x = (this.arena.matrix[0].length / 2 | 0) -
            (this.matrix[0].length / 2 | 0);
        if (this.arena.collide(this)) {
            this.gameOver = true;
        }
    }
    
    rotate(dir)
    {
        const pos = this.pos.x;
        let offset = 1;
        this.rotateMatrix(this.matrix, dir);
        while (this.arena.collide(this)) {
            this.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > this.matrix[0].length) {
                this.rotateMatrix(this.matrix, -dir);
                this.pos.x = pos;
                return;
            }
        }
    }
    
    rotateMatrix(matrix, dir) {
        for (let y = 0; y < matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    matrix[x][y],
                    matrix[y][x],
                ] = [
                        matrix[y][x],
                        matrix[x][y],
                    ];
            }
        }
    
        if (dir > 0) {
            matrix.forEach(row => row.reverse());
        } else {
            matrix.reverse();
        }
    }

    update(deltaTime)
    {
        this.dropInterval = 1000 * Math.pow(0.95, ((this.score / 50) | 0));
        this.dropCounter += deltaTime;

        if (this.dropCounter > this.dropInterval) {
            this.drop();
        }
    }
}