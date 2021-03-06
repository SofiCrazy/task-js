const products = require('./products');

/*
 * For this task need use standard Js methods for array
 * Array.prototype.*
 * DOC - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/

/**
 * @return product with the passed id
 */
function getById(products, id) {
}

/**
 * @return products sorted in descending order
 */
function sortedDescending(products) {
}

/**
 * @return products sorted in ascending order
 */
function sortedAscending(products) {
}


/**
 * Find product and change name
 * @return update products
 */
function renameById(products, id, newName) {
}

/**
 * Find and delete product
 * @return update products
 */
function deleteById(products, id) {
}

/**
 * Search by name, cost or id
 * Find all product which contain the search string in parameters.
 */
function searchAllParameters(products, search) {
}

/**
 * @return product with max cost
 */
function getMaxCost(products) {
}

/**
 * @return product with min cost
 */
function getMinCost(products) {
}

module.exports = {
    getMaxCost,
    getMinCost,
    getById,
    sortedDescending,
    sortedAscending,
    renameById,
    deleteById,
    searchAllParameters,
};
