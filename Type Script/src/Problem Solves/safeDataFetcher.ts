type UserResponse = {
    info?: {
        address?: {
            zipCode?: string | null;
        }
    }
};

const getZipCode = (response: UserResponse): string => {
    return response?.info?.address?.zipCode ?? "00000"
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
            zipCode: null
        }
    }
}

console.log(getZipCode(zipcode2))