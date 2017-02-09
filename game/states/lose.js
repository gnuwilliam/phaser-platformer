class Lose extends Phaser.State {
    create () {
        this.loseText = this.game.add.text(
            32, 32,
            'You Lost! Press space to restart',
            { font: '20px Courier', fill: '#FFF' }
        );

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.restart, this);
    }

    restart () {
        this.game.state.start('menu');
    }
}