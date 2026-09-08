import { EmailValidatorAdapter, emailValidatorAdapterFn } from "./validation/e-mail-validator-adapter";
import type { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validateEmailByClass(emailValidator: EmailValidatorProtocol, value: string): boolean{
    return emailValidator.isEmail(value);
}

function validateEmailByFn(emailValidator: EmailValidatorFnProtocol, value: string): boolean {
    return emailValidator(value);
}

const emailValidatorAdapter = new EmailValidatorAdapter();
console.log(validateEmailByClass(emailValidatorAdapter, "thiagogmail.com"));
console.log(validateEmailByFn(emailValidatorAdapterFn, "thiagogmail.com"));