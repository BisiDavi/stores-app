import useGetRequest from '@/network/getRequest';

export default async function useGetExistingStoreProfile() {
  const {getStoreProfileRequest} = useGetRequest();
  return await getStoreProfileRequest()
    .then(response => {
      const {data} = response.data;
      const isBankRegisted = Object.keys(data).includes('bank');
      return {bank: isBankRegisted, name: data.name, id: data._id};
    })
    .catch(error => {
      console.log('error', error);
      return {error, errorOccured: true};
    });
}
