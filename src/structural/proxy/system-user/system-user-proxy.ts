import { AdminUser } from "./admin-user";
import type { SystemUserAddressProtocol, SystemUserProtocol } from "./system-uer-protocol";

export class SystemUserProxy implements SystemUserProtocol {

    private rootUser: SystemUserProtocol | null = null;
    private rootUserAddresses: SystemUserAddressProtocol[] | null = null;

    constructor(
        public name: string
    ){}

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        this.rootUser = this.createUser();

        if(!this.rootUserAddresses) {
            this.rootUserAddresses = await this.rootUser.getAddresses();
        }
        
        return this.rootUserAddresses;
    }

    private createUser(): SystemUserProtocol {
        if(!this.rootUser) this.rootUser = new AdminUser(this.name);
        return this.rootUser;
    }
}