class Load extends Phaser.State {
    preload () {
        this.game.load.image('player', 'assets/player.bmp');
        this.game.load.image('floor1', 'assets/floor1.bmp');
        this.game.load.image('coin', 'assets/coin.bmp');
        this.game.load.image('lava', 'assets/lava.bmp');
        
        this.loadingText = this.game.add.text(
            32, 32,
            'Loading...',
            { font: '20px Courier', fill: '#FFF' }
        );
    }

    create () {
        setTimeout(function() {
            this.game.state.start('menu');
        }, 0);
    }
}