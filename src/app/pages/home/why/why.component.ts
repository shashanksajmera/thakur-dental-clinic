import { Component } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent {
  why_cards = [
    {
      title:'Highly Trained and Qualified Dental Team',content:'At Thakur dental clinic, all the in house and consulting doctors are trained in their respective fields from some of the best Universities in India and Internationally. We constantly update ourselves with the latest advances in dental technology and treatment procedures by attending an array of Continuing Education Programs held in India and Internationally.'
  },{
    title:'Advanced Dental Treatment Procedures and Equipments',content:'At Thakur dental clinic, we provide a variety of dental treatments for every age group, right from the first checkup of a toddler at the age of 1 to full mouth rehabilitation of elderly patients.  We pride ourselves on our world-class sterilization procedures and state-of-the-art equipment. We also collaborate with the best dental labs in Mumbai and throughout India. '
},{
  title:'Extensive Range of Dental Services',content:'All your dental needs are taken care of, under one roof, at Thakur dental clinic. From X-Rays, fillings and root canals to complex bone and gum surgeries and aesthetic rehabilitation, our highly trained doctors can fix it all. We have an accessible clinic, with treatment for Special Needs children and adults, as well as geriatric patients. We also provide Orthodontic treatment using braces and aligners'
},{
  title:'Visible Results and Radiant Smiles',content:"We, at Thakur dental clinic, focus  on Quality of our treatment and maintaining good patient relations.\n'Word of Mouth' and Personal relations, along with referrals from other dentists in India and Internationally, is what makes our practice reliable. We provide the highest quality of services at an affordable price range, thus giving access to excellent dental care to everybody."
},];
  why_card = 'card2';
}
