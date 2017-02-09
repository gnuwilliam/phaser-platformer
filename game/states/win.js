class Win extends Phaser.State {
    create () {
        this.wonText = this.game.add.text(
            32, 32,
            'You Won! Press space to restart',
            { font: '20px Courier', fill: '#FFF' }
        );

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.restart, this);
    }

    restart () {
        this.game.state.start('menu');
    }
}