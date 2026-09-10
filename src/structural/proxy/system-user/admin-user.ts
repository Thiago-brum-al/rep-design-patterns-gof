import type { SystemUserAddressProtocol, SystemUserProtocol } from "./system-uer-protocol";

export class AdminUser implements SystemUserProtocol {

    constructor(
        public name: string
    ){}

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((res, _) => {
            return setTimeout(() => res([
                {
                    street: "Av. Brasil",
                    number: 50
                },
                {
                    street: "Av. Anchieta",
                    number: 100
                }
            ]), 2000);
        })
    }
}