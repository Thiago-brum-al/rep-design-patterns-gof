import validator from "validator";
import type { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./email-validator-protocol";

export class EmailValidatorAdapter implements EmailValidatorProtocol {
    isEmail(value: string): boolean {
        return validator.isEmail(value);
    }
}

export const emailValidatorAdapterFn: EmailValidatorFnProtocol = (value: string): boolean => {
    return validator.isEmail(value);
}