import { GET } from '../Servicess/API';

class DataStore {

    getRestAurentList = async (callback: (status: boolean, result: any) => void) => {
        try {
            let response = await GET('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json')
            if (response) {
                callback(true, response)
            } else {
                callback(false, null)
            }
        } catch (error) {
            callback(false, error)
        }
    }

    getNodleImage = async (callback: (status: boolean, result: any) => void) => {
        try {
            let response = await GET('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json')
            if (response) {
                callback(true, response)
            } else {
                callback(false, null)
            }
        } catch (error) {
            callback(false, error)
        }
    }



}

const dataStore = new DataStore()
export default dataStore