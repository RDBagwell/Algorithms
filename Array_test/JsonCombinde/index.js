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

async function getCustomersWithAddress(){
    const customers = await fetchCustomerJSON();
    const address = await fetchCustomerAddressJSON();
    const finalArray = [];
    customers.map((customer)=>{
       for (let i = 0; i < address.length; i++) {
           if(customer.entity_id === address[i].parent_id ){
            customer.address = {
                "city": address[i].city || '',
                "company": address[i].company || '',
                "country_id": address[i].country_id || '',
                "fax": address[i].fax || '',
                "postcode": address[i].postcode || '',
                "prefix": address[i].prefix || '',
                "region": address[i].region || '',
                "street": address[i].street || '',
                "telephone": address[i].telephone || '',
            };
            finalArray[customer.entity_id] = customer
           }
        }
    })
    return finalArray;  
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