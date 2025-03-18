import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export const passwordValidator = function (
//   control: AbstractControl
// ): ValidationErrors | null {
//   console.log('passwrd', control.value);
//   let value: string = control.value || '';
//   if (!value) {
//     return null;
//   }

// let upperCaseCharacters = /[A-Z]+/g;
// if (upperCaseCharacters.test(value) === false) {
//   return { passwordStrength: `Upper case required` };
// }

// let lowerCaseCharacters = /[a-z]+/g;
// if (lowerCaseCharacters.test(value) === false) {
//   return { passwordStrength: `lower case required` };
// }

// let numberCharacters = /[0-9]+/g;
// if (numberCharacters.test(value) === false) {
//   return { passwordStrength: `Number required` };
// }

// let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
// if (specialCharacters.test(value) === false) {
//   return { passwordStrength: `Special char required` };
// }
// return {};
// };
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null; // Allow empty field

    // const hasUpperCase = /[A-Z]/.test(value);
    // const hasLowerCase = /[a-z]/.test(value);
    // const hasSpacial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
    // const hasNumber = /[0-9]/.test(value);

    // const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpacial;

    // return !isValid ? { passwordStrength: true } : null;

    let upperCaseCharacters = /[A-Z]+/g;
    if (upperCaseCharacters.test(value) === false) {
      return { passwordStrength: `Upper case required` };
    }

    let lowerCaseCharacters = /[a-z]+/g;
    if (lowerCaseCharacters.test(value) === false) {
      return { passwordStrength: `lower case required` };
    }

    let numberCharacters = /[0-9]+/g;
    if (numberCharacters.test(value) === false) {
      return { passwordStrength: `Number required` };
    }

    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialCharacters.test(value) === false) {
      return { passwordStrength: `Special char required` };
    }
    return {};
  };
}
