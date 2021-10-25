import useGetRequest from '@/network/getRequest';

export default function useGetExistingStoreProfile() {
  const {getStoreProfileRequest} = useGetRequest();

  async function getStoreProfile() {
    await getStoreProfileRequest()
      .then(response => {
        console.log('useGetExistingStoreProfile', response);
        const {data} = response.data;
        const isBankRegisted = Object.keys(data).includes('bank');
        return {bank: isBankRegisted, name: data.name, id: data._id};
      })
      .catch(error => {
        console.log('error', error);
        return {error, errorOccured: true};
      });
  }

  return {
    getStoreProfile,
  };
}
