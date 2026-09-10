import { SystemUserProxy } from "./system-user-proxy";

async function clientCode(): Promise<void> {
    try {
        const user = new SystemUserProxy("Thiago");
        const addresses = await user.getAddresses();

        console.log("[ASYNC]", addresses);

        const cacheAddresses = await user.getAddresses();
        
        console.log("[CACHE]", cacheAddresses);
    } catch (error) {
        console.log(error);
    }
}

clientCode();