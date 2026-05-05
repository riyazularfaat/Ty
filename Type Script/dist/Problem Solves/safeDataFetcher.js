"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getZipCode = (response) => {
    return response?.info?.address?.zipCode ?? "00000";
};
const zipcode = {
    info: {
        address: {
            zipCode: "4213"
        }
    }
};
const zipcode2 = {
    info: {
        address: {
            zipCode: null
        }
    }
};
console.log(getZipCode(zipcode2));
//# sourceMappingURL=safeDataFetcher.js.map