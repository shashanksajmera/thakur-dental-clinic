import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../service';
import { Services } from '../services';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  services = new Services();
  youtubeUrl : any;
  title : string | undefined;
  service: Service | undefined;
  constructor(private route:ActivatedRoute,private router:Router,private santizer:DomSanitizer){

  }
  ngOnInit(){
    this.title = this.route.snapshot.paramMap.get('service') as string;
    // console.log(this.title);
    if(this.title == null)
    this.router.navigate(['**']);
    switch(this.title){
     case 'dental-implants' : this.service = this.services.dental_implants;break;
     case 'aesthetic-dentistry' : this.service = this.services.aesthetic_dentistry;break;
     case 'root-canal-treatment' : this.service = this.services.root_canal;break;
     case 'crowns-bridges-dentures':this.service = this.services.crowns;break;
     case 'dentistry-for-kids':this.service = this.services.dentistry;break;
     case 'braces-and-aligners':this.service = this.services.braces;break;
     case 'wisdom-tooth-extraction':this.service = this.services.wisdom;break;
     case 'oral-surgery':this.service = this.services.oral_surgery;break;
    }
    this.youtubeUrl =  this.service?.youtube == undefined ? undefined : this.santizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + this.service!.youtube + '?modestbranding=1&rel=0&autoplay=1&mute=1&showinfo=0')
    console.log(this.youtubeUrl)
  }
}

// <iframe width="768" height="359" src="https://www.youtube.com/embed/KaBMBtgo8so" title="Dental Implant Procedure #dental #dentist #implant #animation #Shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe