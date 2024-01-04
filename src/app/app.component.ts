import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiserService } from './api/apiser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech';
  // isSubmitted: boolean = false;
  submitted = false;
  data: any;
  dataDetails: any;
  editButton: boolean = false;
  genValue: any =  ['Male','Female']
  // websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']

  constructor(public fb:FormBuilder,public service:ApiserService){
    
  }
  contactForm = this.fb.group({
    id:0,
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    gender: new FormControl('Male',Validators.required),
  })
  
  ngOnInit(): void {
    this.getData();
  
  }
  get contactFormControl() {
    return this.contactForm.controls;
  }
  onSubmit(){
    this.service.postDetails(this.contactForm.value).subscribe((res)=>{
      this.getData(); 
    })
    this.contactForm.reset();

    
  }
  getData(){
    this.service.getAllDetail().subscribe((datas)=>{
      this.data = datas
    })
  }
  update(){

  }
   editData(id:any){
    this.editButton = true;
    let currenrValue = this.data.find((dataId:any)=>{ return dataId.id === id})
    console.log(currenrValue)
    this.contactForm.setValue({
      id:currenrValue.id,
      name:currenrValue.name,
      address:currenrValue.address,
      email: currenrValue.email,
      phone: currenrValue.phone,
      gender: currenrValue.gender
    })
   }

   deleteData(id:any){
    this.service.deleteById(id).subscribe((ress=>{
      this.getData();
    }))
   }

   getDetailById(id:any){
    this.service.getById(id).subscribe((resss)=>{
      console.log(resss)
    })
   }
   updateDetail(datasss:any){
    this.service.updateData(datasss.id, this.contactForm.value).subscribe((val)=>{
      this.contactForm.reset();
      this.getData();
      this.editButton = false;
    })
   }
}
