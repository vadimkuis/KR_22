import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
  static formNameValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^[А-ЯA-Zа-яa-z]+$/.test(control.value);
    return result? null : {name: {value: control.value}}
  }
  static formPhoneValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^\+?([0-9]{11})$/.test(control.value);
    return result? null : {phone: {value: control.value}}
  }
  static formAddressValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^[А-ЯA-Zа-яa-z\s\/\-0-9]+/.test(control.value);
    return result? null : {address: {value: control.value}}
  }
  static formZipValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^[0-9]{6,9}/.test(control.value);
    return result? null : {zip: {value: control.value}}
  }
}
