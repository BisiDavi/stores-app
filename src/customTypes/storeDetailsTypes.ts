export type storeDetailsActionType = {
  type:
    | 'STOREDETAILS_SUBMITTED'
    | 'STORETYPE_SELECTED'
    | 'STORE_DETAILS'
    | 'STORE_OWNER_DETAILS'
    | 'STORE_SETTLEMENT_DETAILS'
    | 'STORE_IMAGE_UPLOAD'
    | 'STORE_LOGO_UPLOAD'
    | 'STORE_ADDRESS_COORDINATES'
    | 'UPDATE_STORE_OPENDAYS'
    | 'UPDATE_STORE_ID'
    | 'TOGGLE_OPEN_DAYS_STATUS'
    | 'SELECT_OPEN_DAYS_TIME';
  payload: StoreDetailsPayloadType;
};

export type StoreDetailsStateType = {
  storeDetails: {
    name: string;
    phone: string;
    address: string;
    type: string;
    state: string;
    category: string;
    ownerName: string;
    ownerPhone: string;
    ownerEmail: string;
    transactionPin: string;
    openDays: {
      weekDays: {
        status: boolean;
        openingTime: string;
        closingTime: string;
      };
      saturday: {
        status: boolean;
        openingTime: string;
        closingTime: string;
      };
      sunday: {
        status: boolean;
        openingTime: string;
        closingTime: string;
      };
    };
    latitude: number | null;
    longitude: number | null;
    settlementPlan: string;
    bankName: string;
    bankCode: string;
    accountNumber: string;
    accountName: string;
  };
  storeImage: string;
  storeLogo: string;
  period?: any;
  specificPeriod?: any;
  storeId: string;
};

export type StoreDetailsPayloadType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  type: string;
  state: string;
  category: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  openDayPeriod: 'weekDays' | 'saturday' | 'sunday';
  time: string;
  section: 'openingTime' | 'closingTime';
  status: boolean;
  openDays: {
    weekDays: {
      status: boolean;
      openingTime: string;
      closingTime: string;
    };
    saturday: {
      status: boolean;
      openingTime: string;
      closingTime: string;
    };
    sunday: {
      status: boolean;
      openingTime: string;
      closingTime: string;
    };
  };
  latitude: number | null;
  longitude: number | null;
  settlementPlan: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  transactionPin: string;
  accountName: string;
  storeImage: string;
  storeLogo: string;
  period?: any;
  specificPeriod?: any;
  storeId: string;
};
