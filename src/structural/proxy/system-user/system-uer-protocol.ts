export type SystemUserAddressProtocol = {
    street: string;
    number: number;
};

export interface SystemUserProtocol {
    name: string;
    getAddresses(): Promise<SystemUserAddressProtocol[]>
}