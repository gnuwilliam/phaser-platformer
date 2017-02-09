class Player extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'player');

        this.cursor = game.input.keyboard.createCursorKeys();
        
        this.game.add.existing(this);
        this.body.gravity.y = 600;
    }

    update () {
        if (this.cursor.left.isDown) {
            this.body.velocity.x = -200;
        } else if (this.cursor.right.isDown) {
            this.body.velocity.x = 200;
        } else {
            this.body.velocity.x = 0;
        }

        // Make the player jump if he is touching the ground
        if (this.cursor.up.isDown && this.body.touching.down) {
            this.body.velocity.y = -250;
        }
    }
}