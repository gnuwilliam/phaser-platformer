class Level extends Phaser.Sprite {
    constructor (game) {
        super(game);
        this.create();
    }

    create () {
        this.walls = this.game.add.group();
        this.coins = this.game.add.group();
        this.enemies = this.game.add.group();

        // Design the level. x = wall, o = coin, ! = lava.
        var level = [
            'xxxxxxxxxxxxxxxxxxxxxx',
            'x         !          x',
            'x                 o  x',
            'x         o          x',
            'x                    x',
            'x     o   !    x     x',
            'xxxxxxxxxxxxxxxx!!!!!x',
        ];

        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                // Create a wall and add it to the 'walls' group
                if (level[i][j] == 'x') {
                    var wall = this.game.add.sprite(30+20*j, 30+20*i, 'floor1');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }

                // Create a coin and add it to the 'coins' group
                else if (level[i][j] == 'o') {
                    var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
                    this.coins.add(coin);
                }

                // Create a enemy and add it to the 'enemies' group
                else if (level[i][j] == '!') {
                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
                    this.enemies.add(enemy);
                }
            }
        }
    }
}