async function fetchCustomerJSON(){
    const filePath = './lsp2_stage_customer_entity.json';
    const res = await fetch(filePath);
    return await res.json();
}

async function fetchCustomerAddressJSON(){
    const filePath = './lsp2_stage_customer_address_entity.json';
    const res = await fetch(filePath);
    return await res.json();
}

async function getCustomersWithAddress(i = 0, finalArray = []){
    const customer = await fetchCustomerJSON();
    const address = await fetchCustomerAddressJSON();
    if(i === customer.length){return finalArray}

    if(!finalArray.includes(customer[i].entity_id)){
        for (let j = 0; j < address.length; j++) {
            if(customer[i].entity_id === address[j].parent_id){
                customer[i].address = {
                    "city": address[j].city || '',
                    "company": address[j].company || '',
                    "country_id": address[j].country_id || '',
                    "fax": address[j].fax || '',
                    "postcode": address[j].postcode || '',
                    "prefix": address[j].prefix || '',
                    "region": address[j].region || '',
                    "street": address[j].street || '',
                    "telephone": address[j].telephone || '',
                };
                finalArray[customer[i].entity_id] = customer[i]
            }
        }
    }
    return getCustomersWithAddress(i + 1, finalArray);  
}

async function getAllCustomers(i = 0 , finalArray = []){
   const customersWithAddress = await getCustomersWithAddress();
   const customer = await fetchCustomerJSON();
   if(i === customer.length){return finalArray}

   if(customer[i].entity_id in customersWithAddress){
    finalArray.push(customersWithAddress[customer[i].entity_id])
   } else {
    finalArray.push(customer[i]);
   }
   return getAllCustomers(i + 1, finalArray);
}

(async ()=>{
    console.log(await getAllCustomers())
})();