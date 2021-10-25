import {useSelector} from 'react-redux';
import {RootState} from '@/store/RootReducer';

export default function useStoreData() {
  const {storeDetails} = useSelector((state: RootState) => state.storeDetails);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const {name}: any | string = storeDetails;
  const storeName = name.length === 0 ? storeProfile?.name : name;

  return {
    storeName,
  };
}
