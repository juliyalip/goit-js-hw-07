const categoryList = document.querySelector('#categories')

const categories = categoryList.querySelectorAll('.item')
console.log("Number of categories: ", categories.length)

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    console.log(`Category: ${title}`)
    const subCategoryList = category.querySelector('.sub-category-list')
    const subCategoryCount = subCategoryList.children.length;
    console.log(`Elements: ${subCategoryCount}`)

})

