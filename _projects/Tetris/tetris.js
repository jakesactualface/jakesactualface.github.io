class Tetris
{
    constructor(canvas, side)
    {
        this.canvas = canvas;
        this.side = side;
        this.context = this.canvas.getContext('2d');
        this.sideContext = this.side.getContext('2d');
        this.sideContext.scale(0.5, 0.5);
        
        this.arena = new Arena(12, 20);
        this.player = new Player(this);

        this.colors = [
            null,
            'blue',
            'red',
            'violet',
            'green',
            'purple',
            'orange',
            'yellow',
        ];


        let lastTime = 0;
        const update = (time = 0) => {
            if (!this.player.gameOver && !this.player.paused) {
                const deltaTime = time - lastTime;
                lastTime = time;
                this.player.update(deltaTime);
        
                this.draw();
            }
            
            requestAnimationFrame(update);
        };

        update();
    }

    createPiece(type)
    {
        if (type === 'T') {
            return [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0],
            ];
        } else if (type === 'O') {
            return [
                [2, 2],
                [2, 2],
            ]
        } else if (type === 'L') {
            return [
                [0, 3, 0],
                [0, 3, 0],
                [0, 3, 3],
            ];
        } else if (type === 'J') {
            return [
                [0, 4, 0],
                [0, 4, 0],
                [4, 4, 0],
            ];
        } else if (type === 'I') {
            return [
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
            ]
        } else if (type === 'S') {
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0],
            ];
        } else if (type === 'Z') {
            return [
                [7, 7, 0],
                [0, 7, 7],
                [0, 0, 0],
            ];
        }
    }
    
    draw()
    {
        this.context.fillStyle = '#000';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawShadow(this.context, this.player);
        this.drawMatrix(this.context, this.arena.matrix, { x: 0, y: 0 });
        this.drawMatrix(this.context, this.player.matrix, this.player.pos);
        this.drawSidePanel(this.player);
    }

    drawMatrix(cont, matrix, offset) {
        let borderColor = '#000';
        let scale = 20;
        let borderWidth = 1;

        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    cont.fillStyle = borderColor;
                    cont.fillRect((x + offset.x) * scale,
                        (y + offset.y) * scale, scale, scale);
                    cont.fillStyle = this.colors[value];
                    cont.fillRect((x + offset.x) * scale + borderWidth,
                        (y + offset.y) * scale + borderWidth,
                        scale - (2 * borderWidth), scale - (2 * borderWidth));
                }
            });
        });
    }
    
    drawShadow(cont, play) {
        let shadowColor = '#111';
        let scale = 20;
    
        cont.fillStyle = shadowColor;
    
        play.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    cont.fillRect((play.pos.x + x) * scale, (play.pos.y + y) * scale,
                        scale, cont.canvas.height);
                }
            });
        });
    }
    
    drawSidePanel(player) {
        this.sideContext.fillStyle = '#000';
        this.sideContext.fillRect(0, 0, this.side.width * 2, this.side.height * 2);
    
        this.drawMatrix(this.sideContext, player.queue, { x: 0, y: 0 });
    
        if (player.hold) {
            this.drawMatrix(this.sideContext, player.hold, { x: 0, y: 5 });
        }
    }

    endGame()
    {
        this.player.gameOver = false;
        this.arena.clear();
        this.player.score = 0;
        updateScores();
    }
}