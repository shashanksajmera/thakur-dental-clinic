export class Testimonial{
    videourl : String | undefined;
    experience : String = '';
    name : String = '';
    date: String =''
    constructor( videourl : String | undefined,experience : String = '',name : String = '',date:String=""){
        this.name = name;
        this.experience = experience;
        this.videourl = videourl;
        this.date = date;
    }
}