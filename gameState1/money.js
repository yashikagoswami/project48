class Money {
    constructor() {
        this.button1 = createButton('100');
        this.button2 = createButton('500');
        this.button3 = createButton('1000');
        this.button4 = createButton('5000');
        this.button5 = createButton('10000');
        
        this.buttonA = createButton('100');
        this.buttonB = createButton('500');
        this.buttonC = createButton('1000');
        this.buttonD = createButton('5000');
        this.buttonE = createButton('10000');
    } 

    display(){
        this.button1.position(displayWidth/2+490,displayHeight/2-100);
        this.button2.position(displayWidth/2+540,displayHeight/2-100);
        this.button3.position(displayWidth/2+480,displayHeight/2-50);
        this.button4.position(displayWidth/2+540,displayHeight/2-50);
        this.button5.position(displayWidth/2+510,displayHeight/2);

        this.buttonA.position(displayWidth/2-550,displayHeight/2-100);
        this.buttonB.position(displayWidth/2-600,displayHeight/2-100);
        this.buttonC.position(displayWidth/2-550,displayHeight/2-50);
        this.buttonD.position(displayWidth/2-610,displayHeight/2-50);
        this.buttonE.position(displayWidth/2-580,displayHeight/2);

        this.button1.mousePressed(()=>{

        });
    }
}