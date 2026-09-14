import type { CustomerData } from "./customer-data";
import { CustomerDataParser } from "./customer-data-parser";
import { promises } from 'fs';

export class CustomerDataParserJSON extends CustomerDataParser {
    protected async parseData(): Promise<CustomerData[]> {

        const rawData = await promises.readFile(this.filePath);
        const data = JSON.parse(rawData.toString());
        const customerData: CustomerData[] = [];

        for(const customer of data){
            if(customer){
                customerData.push(customer);
            };
        };
        
        return customerData;
    };

    protected hook(): void {
        console.log("Testing Hook!");
    }
};