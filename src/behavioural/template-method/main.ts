import { resolve } from "path";
import { CustomerDataParserTxt } from "./customer-data-parser-txt";
import { CustomerDataParserJSON } from "./customer-data-parser-json";

async function run(){
    const filePathTxt = resolve(__dirname, "files", "customer.txt");
    const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
    await customerDataParserTxt.fixCustomerData();
    console.log('[TXT]: ');
    console.log(customerDataParserTxt.customerData);

    const filePathJSON = resolve(__dirname, "files", "customer.json");
    const customerDataParserJSON = new CustomerDataParserJSON(filePathJSON);
    await customerDataParserJSON.fixCustomerData();
    console.log('[JSON]: ');
    console.log(customerDataParserJSON.customerData);
};

run();