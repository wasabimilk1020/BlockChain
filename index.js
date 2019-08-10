class BlockGenerator {
    constructor(seconds){
        this.seconds = seconds;
        this.genesis = {blockNumber : 1};
    }

    start(){
        this.started = true;
        var logBlock = () => {
            console.log(this.genesis);
            this.genesis.blockNumber += 1;
            if (this.started === true){
                // return new Promise ((resolve, reject) => {
                //     setTimeout (logBlock, this.seconds * 1000 );
                // })
                setTimeout (logBlock, this.seconds * 1000 );
            }
        };
        setTimeout(logBlock, this.seconds * 1000);
    }

    stop(){
        this.started = false;
    }
}

var gen = new BlockGenerator(1);
gen.start();
setTimeout(() =>{gen.stop()}, 5000);