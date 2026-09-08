export interface EmailValidatorProtocol {
    isEmail: EmailValidatorFnProtocol;
}

export type EmailValidatorFnProtocol = (value: string) => boolean;