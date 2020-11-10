const video = document.querySelector(`video`);
const button = document.querySelector("button");

function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function() {
    if(this.media.paused) {
        this.media.play();
    }else {
        this.media.pause()
    }
}
const player = new MediaPlayer({el:video});
button.onclick = () => player.play();
//button.onclick = () => toggle();
//video.play();