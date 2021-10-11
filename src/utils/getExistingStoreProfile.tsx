import {getStoreProfileRequest} from '@/network/getRequest';

export default async function getExistingStoreProfile() {
  return await getStoreProfileRequest()
    .then(response => {
      const {data} = response.data;
      const isBankRegisted = Object.keys(data).includes('bank');
      return {bank: isBankRegisted, name: data.name, id: data._id};
    })
    .catch(() => {
      return null;
    });
}
