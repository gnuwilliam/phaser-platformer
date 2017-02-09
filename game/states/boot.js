class Boot extends Phaser.State {
    create () {
        this.game.state.start('load');
        this.game.stage.smoothed = false;
        // this.game.scale.pageAlignVertically = true;
    }
}