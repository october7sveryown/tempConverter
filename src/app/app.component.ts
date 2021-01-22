import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tempConverter';
  enteredVal;
  result;
  onSubmit:boolean=false;

  convertForm=new FormGroup({});

  convertFormData={
    degrees:0.00,
    type:'Fahrenheit'
  };

  convertFormFields:FormlyFieldConfig[]=[
    {
      key: 'degrees',
      type: 'input', // input type
      templateOptions: {
        type: 'number',
        label: 'Degrees',
        placeholder: 'Enter Degrees',
        required:true
      },
    },
    {
      key: 'type',
      type: 'select',
      templateOptions: {
        label: 'Type',
        options: [
          { label: 'Fahrenheit', value: 'fa' },
          { label: 'Kelvin', value: 'ke' },
        ],
        required:true
      }
    },
  ];

  compute(){
    this.enteredVal=this.convertFormData.degrees;
    console.log(this.enteredVal);
    if(this.convertFormData.type=='fa'){
      this.onSubmit=true;
      this.result=Math.round((this.enteredVal-32)/1.8); 
    }
    else if(this.convertFormData.type=='ke'){
      this.onSubmit=true;
      this.result=Math.round(this.enteredVal-273.15);
    }
    else{
      alert('Please select temperature type');
    }
  }

}
