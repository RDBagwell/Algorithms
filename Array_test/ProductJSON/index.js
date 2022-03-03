async function fetchProductEntity() {
    const productObj = await fetch('./lsp2_stage_catalog_product_entity.json');
    return await productObj.json();
}

async function fetchProductFlat() {
    const productObj = await fetch('./lsp2_stage_catalog_product_flat_1.json');
    return await productObj.json();
}

async function getProductData(i=0, productData = []) {
    const productEntity = await fetchProductEntity();
    const productFlat = await fetchProductFlat();
    if(i == productFlat.length){ return }
    for (let j = 0; j < productFlat.length; j++) {
        if(productEntity[i].sku === productFlat[j].sku){
            productData.push({
                id: productEntity[i].entity_id,
                name: productFlat[j].name,
                type: productFlat[j].type_id,
                sku: productFlat[j].sku,
                description: productFlat[j].description,
                weight: productFlat[j].weight,
                price: productFlat[j].price,
                cost_price: productFlat[j].cost,
                retail_price: productFlat[j].retail_price,
                tax_class_id: productFlat[j].tax_class_id,
            })
        }
    }
    i++;
    getProductData(i, productData)
    return productData;
}
(async ()=>{
    console.log(await getProductData())
})();