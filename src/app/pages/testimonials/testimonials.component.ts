import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Testimonial } from './testimonial'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials : Testimonial[] = [];
  public test : String[] = [];
  getTestimonials(){
    
    var data : any= this.http.get('assets/testimonials.csv', { responseType: 'text' }).subscribe(data => {
      // console.log(data);
      this.test = data.split('\n');
      // console.log(this.test);
      for(let i=1;i<this.test.length;i++){
        const testimonial_content : String[] = this.test[i].split('\"');
        // console.log(this.test[i].split('\"'));
        const reverseDate = testimonial_content[1].split(' ')[0].split('\/');
        // console.log(reverseDate);
       var date = reverseDate[2] + '/' + reverseDate[1] + '/' + reverseDate[0];
        // console.log(date);
        // console.log(reverseDate);
        this.testimonials.push(new Testimonial(
          testimonial_content[3],
          testimonial_content[5],
          testimonial_content[9],
          date
        ))
      }
    });
    // console.log(data);
    // console.log(this.test);
  }

  constructor(private http : HttpClient){
    this.getTestimonials();
  }
  // constructor(
  //   this.http.get('assets/file.csv', {responseType: 'text'})
  //   .subscribe(
  //       data => {
  //           console.log(data);
  //       },
  //       error => {
  //           console.log(error);
  //       }
  //   );
  // )
}
