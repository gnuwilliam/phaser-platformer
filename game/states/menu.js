class Menu extends Phaser.State {
    create () {
        this.game.stage.smoothed = false;

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);

        this.menuText = this.game.add.text(
            32, 32,
            'Press space to start',
            { font: '20px Courier', fill: '#FFF' }
        );
    }

    start () {
        this.game.state.start('play');
    }
}