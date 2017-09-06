export class ChannelCard{
    type: string;
    name:string;
    bullets: any = {};
    donut: any = {}

    constructor(name:string, 
        bullets: any, donut: any){
        this.type = 'channel';
        this.name = name;
        this.bullets = bullets;
        this.donut = donut;
    }

    getBullets(){
        return this.bullets;
    }

    getType(){
        return this.type;
    }

    getName(){
        return this.name;
    }

    getDonut(){
        return this.donut;
    }

    getChannels(){
        return Object.keys(this.bullets) || [];
    }
}