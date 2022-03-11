async function fetchProductEntity() {
    const productObj = await fetch('./lsp2_stage_catalog_product_entity.json');
    return await productObj.json();
}

async function fetchProductFlat() {
    const productObj = await fetch('./lsp2_stage_catalog_product_flat_1.json');
    return await productObj.json();
}

async function getProductData() {
    const productEntity = await fetchProductEntity();
    const productFlat = await fetchProductFlat();
    const productData = [];
    productEntity.map(products=>{
        for (let i = 0; i < productFlat.length; i++) {
            if(
                products.sku === productFlat[i].sku){
                productData.push({
                    id: products.entity_id,
                    name: productFlat[i].name,
                    type: productFlat[i].type_id,
                    sku: productFlat[i].sku,
                    description: productFlat[i].description,
                    weight: productFlat[i].weight,
                    price: productFlat[i].price,
                    cost_price: productFlat[i].cost,
                    retail_price: productFlat[i].retail_price,
                    tax_class_id: productFlat[i].tax_class_id,
                })
            }
        }
    })

    return productData;
}

(async ()=>{
    console.log(await getProductData())
})();