type UserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};

const getZipCode = (response: UserResponse) => {
    const res = response.info?.address?.zipCode ?? "00000"
    return res
}

const zipcode: UserResponse = {
    info: {
        address: {
            zipCode: "4213"
        }
    }
}
const zipcode2: UserResponse = {
    info: {
        address: {
            zipCode: ''
        }
    }
}

console.log(getZipCode(zipcode2))