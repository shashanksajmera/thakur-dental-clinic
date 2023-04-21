import { Component } from '@angular/core';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css']
})
export class MeetTheTeamComponent {
  team: any = [
    {
      pic: 'assets/clinic_chair_edited.png',
      name: 'Dr. Neil Suresh Thakur',
      degree: '(B.D.S., Implantology-South Korea)',
      details: 'Dr. Neil Thakur is a renowned Dental Surgeon and Implantologist. He completed his B.D.S from the prestigious K.L.E VK Institute of Dental Sciences, Belagavi, Karnataka, in 1992. He then procured a Diploma in Implantology from the world renowned Korean Institute, Seoul, South Korea in 2011. '+
      '\nDr. Neil\'s main area of expertise lies in Dental Implants, Hard and Soft Tissue Surgeries and Full Mouth Reconstruction along with Cosmetic and General Dentistry.'+
      '\nHe is known for his exceptional diagnostic and clinical skills to handle the most complicated of the cases. Over the years, he has become a trusted expert in this niche, garnering patients from all over. His exceptional communication skills and honest demeanour makes him a favourite of patients and colleagues alike.'+
      '\nHis exceptional leadership and administration skills can be seen greatly in his work. His honesty, passion, integrity and dedication is applauded by his colleagues and patients.'
      
    },
    {
      pic: 'assets/clinic_chair_edited.png',
      name: 'Dr. Mrs. Genevieve Neil Thakur',
      degree: '(B.D.S., Implantology-South Korea)',
      details: 'Dr. Genevieve Thakur is a renowned Dental Surgeon and Implantologist. She completed his B.D.S from the prestigious K.L.E VK Institute of Dental Sciences, Belagavi, Karnataka, in 1992. She then procured a Diploma in Implantology from the world renowned Korean Institute, Seoul, South Korea in 2011.' + 

      '\nBecause of her passion towards child dentistry, Dr. Genevieve, strives to provide a safe and comfortable environment for children, to ensure safe and anxiety-free treatment.  She creates a trusting and compassionate relationship with her patients, while welcoming parents to be involved in their child’s treatment. Beyond treatment for children, she also excels in Dental Implants, Hard and Soft Tissue Surgeries and Full Mouth Reconstruction along with Cosmetic and General Dentistry. Her kind and nature makes her popular with the paediatric patients. '
    },
    {
      pic: 'assets/clinic_chair_edited.png',
      name: 'Dr. Kashmira Shah',
      degree: '(B.D.S., Implantology-Mumbai)',
      details: 'Dr. Kashmira Shah is a renowned Dental Surgeon and Implantologist. She completed his B.D.S from the prestigious Terna Dental College, Navi Mumbai in 2007. She then did her Advanced Implantology with Osstem (S. Korea) in Implantology in 2009. '+

      '\nDr. Kashmira\'s expertise lies in Prosthetic Dentistry, Dental Implants, Hard and Soft Tissue Surgeries and Full Mouth Reconstruction along with Cosmetic and General Dentistry. Her impeccable prosthetic skills set her apart from her other counterparts. Dr. Kashmira has been working with us since 2008, making her a very experienced doctor, having more than 15 years of work experience. She is a favorite among patients when it comes to Prosthesis.'
    },
    {
      pic: 'assets/clinic_chair_edited.png',
      name: 'Dr. Chitrang Shah',
      degree: '(M.D.S. Orthodontics)',
      details: 'Dr. Chitrang Shah is a renowned orthodontist in Mumbai and works with us as a consulting Orthodontist. He holds qualification in the capacity of MDS – Orthodontics & Dentofacial Orthopaedics from AECS Maaruti Dental College, Bangluru, Karnataka in 2011. Dr Chitrang has in-depth knowledge of Orthodontic treatment and specializes in Braces and Aligners. He is very receptive to the needs of the patients and is very approachable, making patients, specially young adults, feel at ease. He has over 12 years of experience as an orthodontist and is a great addition to our dental family.'
    },
    {
      pic: 'assets/clinic_chair_edited.png',
      name: 'Dr. Simran Neil Thakur',
      degree: '(B.D.S, Implantology, M.Sc. Periodontology-Germany)',
      details: 'Dr. Simran Thakur is a next generation dentist, completing her B.D.S from Terna Dental College, Navi Mumbai in 2020. She completed her diploma in Implantology from Mumbai in 2021 with Osstem. She is currently pursuing her M.Sc. in Periodontology from the University of Duisburg-Essen, Germany. '+

      '\nFollowing the footsteps of her parents, she worked in the clinic for 2 years before pursuing her M.Sc. She works in the clinic under the senior doctors to learn what they have to teach her. She worked for the Municipal Corporation of Greater Mumbai (B.M.C) as a \"Covid Warrior\" at the Nesco Jumbo Facility during the COVID-19 Pandemic.'}
  ]
}
