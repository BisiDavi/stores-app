import {useSelector} from 'react-redux';
import {RootState} from '@/store/RootReducer';
import {isDataObjectFilled} from '@/utils/checkData';
import {StoreDetailsStateType} from '@/customTypes/storeDetailsTypes';

export default function useFormValues() {
  const {storeDetails}: StoreDetailsStateType = useSelector(
    (state: RootState) => state.storeDetails,
  );
  const formOneInitialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    category: '',
  };
  const formTwoInitialValues = {
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
  };

  const formThreeInitialValues = {
    settlementPlan: '',
    bankName: '',
    bankCode: '',
    accountNumber: '',
    accountName: '',
  };

  const formOneValues = {
    name: storeDetails.name,
    email: storeDetails.email,
    phone: storeDetails.phone,
    address: storeDetails.address,
    state: storeDetails.state,
    category: storeDetails.category,
  };

  const formTwoValues = {
    ownerName: storeDetails.ownerName,
    ownerEmail: storeDetails.ownerEmail,
    ownerPhone: storeDetails.ownerPhone,
  };

  const formThreeValues = {
    settlementPlan: storeDetails.settlementPlan,
    bankName: storeDetails.bankName,
    bankCode: storeDetails.bankCode,
    accountNumber: storeDetails.accountNumber,
    accountName: storeDetails.accountName,
  };
  const checkFormOneValues: boolean = isDataObjectFilled(formOneValues);

  const checkFormTwoValues: boolean = isDataObjectFilled(formTwoValues);

  const checkFormThreeValues: boolean = isDataObjectFilled(formThreeValues);

  const formOneMainValues: any = checkFormOneValues
    ? formOneValues
    : formOneInitialValues;

  const formTwoMainValues: any = checkFormTwoValues
    ? formTwoValues
    : formTwoInitialValues;

  const formThreeMainValues: any = checkFormThreeValues
    ? formThreeValues
    : formThreeInitialValues;

  return {
    formOneMainValues,
    formTwoMainValues,
    formThreeMainValues,
  };
}
