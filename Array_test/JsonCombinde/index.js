async function getCustomersWithAddress(i = 0, finalArray = []){
    const filePath1 = './lsp2_stage_customer_entity.json';
    const res1 = await fetch(filePath1);
    const customer = await res1.json();
    const filePath2 = './lsp2_stage_customer_address_entity.json';
    const res2 = await fetch(filePath2);
    const address = await res2.json();
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
   const filePath1 = './lsp2_stage_customer_entity.json';
   const res1 = await fetch(filePath1);
   const customer = await res1.json();
   if(i === customer.length){return finalArray}

   if(customer[i].entity_id in customersWithAddress){
    finalArray.push(customersWithAddress[customer[i].entity_id])
   } else {
    finalArray.push(customer[i]);
   }
   return getAllCustomers(i + 1, finalArray);
}

async function renderAllCustomers() {
    console.log(await getAllCustomers())
};

renderAllCustomers()