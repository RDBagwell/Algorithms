async function  fetchShipping() {
    const shippingJSON = await fetch('./lsp2_stage_shipping_tablerate.json');
    return await shippingJSON.json();
}

async function getShipping(){
    const shipping = await fetchShipping();
    const shippingArray = [];
    shipping.map((ship)=>{
        if(ship.dest_country_id !== "AU"){
            shippingArray.push(ship)
        }
    })
    return shippingArray;
}

(async()=>{
    console.log(await getShipping())
})()