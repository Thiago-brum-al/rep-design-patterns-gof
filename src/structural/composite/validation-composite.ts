export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
    validate(value: unknown): boolean {
        if(typeof value !== "string") return false;
        return /@/.test(value);
    }
}

export class ValidateString extends ValidationComponent {
    validate(value: unknown): boolean {
        return typeof value === "string";
    }
}

export class ValidateNumber extends ValidationComponent {
    validate(value: unknown): boolean {
        return typeof value === "number";
    }
}

export class Validator extends ValidationComponent {

    private readonly children: ValidationComponent[] = [];

    validate(value: unknown): boolean {
        for(const child of this.children){
            const validation = child.validate(value);
            if(!validation) return false;
        }

        return true;
    }

    add(...validator: ValidationComponent[]): void{
        validator.map((v: ValidationComponent, _: number) => this.children.push(v));
        return;
    }
}

const validatorEmail = new ValidateEmail();
const validatorString = new ValidateString();
const validatorNumber =  new ValidateNumber(); 

const validator = new Validator();
validator.add(validatorEmail, validatorNumber, validatorString);
console.log(validator.validate("Teste@gmail.com"));