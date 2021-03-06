import {
  storeDetailsActionType,
  StoreDetailsStateType,
} from '@/customTypes/storeDetailsTypes';
import {
  STORETYPE_SELECTED,
  STOREDETAILS_SUBMITTED,
  STORE_DETAILS,
  STORE_OWNER_DETAILS,
  STORE_SETTLEMENT_DETAILS,
  STORE_IMAGE_UPLOAD,
  STORE_LOGO_UPLOAD,
  STORE_ADDRESS_COORDINATES,
  UPDATE_STORE_OPENDAYS,
  UPDATE_STORE_ID,
  TOGGLE_OPEN_DAYS_STATUS,
  SELECT_OPEN_DAYS_TIME,
} from '../constant';

export function StoreDetailsReducer(
  state: StoreDetailsStateType = {
    storeDetails: {
      name: '',
      phone: '',
      address: '',
      category: '',
      type: '',
      openDays: {
        weekDays: {status: false, openingTime: '0:00', closingTime: '0:00'},
        saturday: {status: false, openingTime: '0:00', closingTime: '0:00'},
        sunday: {status: false, openingTime: '0:00', closingTime: '0:00'},
      },
      latitude: null,
      longitude: null,
      ownerName: '',
      ownerPhone: '',
      state: '',
      transactionPin: '',
      ownerEmail: '',
      settlementPlan: '',
      bankName: '',
      bankCode: '',
      accountNumber: '',
      accountName: '',
    },
    storeLogo: '',
    storeImage: '',
    storeId: '',
  },
  action: storeDetailsActionType,
) {
  const {payload, type} = action;

  switch (type) {
    case STORETYPE_SELECTED: {
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          type: payload.type,
        },
      };
    }
    case TOGGLE_OPEN_DAYS_STATUS: {
      const {openDayPeriod, status} = payload;
      let openDaysCopy = state.storeDetails.openDays;
      let period = openDaysCopy[openDayPeriod];
      openDaysCopy = {
        ...openDaysCopy,
        [openDayPeriod]: {...period, status: status},
      };
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          openDays: openDaysCopy,
        },
      };
    }
    case SELECT_OPEN_DAYS_TIME: {
      const {openDayPeriod, time, section} = payload;
      let openDaysCopy = state.storeDetails.openDays;
      let period = openDaysCopy[openDayPeriod];

      openDaysCopy = {
        ...openDaysCopy,
        [openDayPeriod]: {
          ...period,
          [section]: time,
        },
      };

      if (time === '24:00') {
        openDaysCopy[openDayPeriod].closingTime = '0:00';
      }
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          openDays: openDaysCopy,
        },
      };
    }
    case STORE_DETAILS: {
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          name: payload.name,
          phone: payload.phone,
          address: payload.address,
          state: payload.state,
          category: payload.category,
        },
      };
    }
    case STORE_OWNER_DETAILS: {
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          ownerName: payload.ownerName,
          ownerPhone: payload.ownerPhone,
          ownerEmail: payload.ownerEmail,
        },
      };
    }
    case UPDATE_STORE_OPENDAYS: {
      const {period, specificPeriod} = payload;

      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          openDays: {
            ...state.storeDetails.openDays,
            [period]: specificPeriod,
          },
        },
      };
    }
    case STORE_ADDRESS_COORDINATES: {
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          latitude: payload.latitude,
          longitude: payload.longitude,
        },
      };
    }
    case STORE_IMAGE_UPLOAD: {
      return {
        ...state,
        storeImage: payload,
      };
    }
    case STORE_LOGO_UPLOAD: {
      return {
        ...state,
        storeLogo: payload,
      };
    }
    case STORE_SETTLEMENT_DETAILS: {
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          settlementPlan: payload.settlementPlan,
          bankName: payload.bankName,
          bankCode: payload.bankCode,
          transactionPin: Number(payload.transactionPin),
          accountNumber: payload.accountNumber,
          accountName: payload.accountName,
        },
      };
    }
    case UPDATE_STORE_ID: {
      return {
        ...state,
        storeId: payload.storeId,
      };
    }
    case STOREDETAILS_SUBMITTED: {
      return {
        ...state,
        storeDetails: {
          ...state.storeDetails,
          name: payload.name,
          phone: payload.phone,
          address: payload.address,
          category: payload.category,
          type: payload?.type,
          openDays: payload.openDays,
          ownerName: payload.ownerName,
          ownerPhone: payload.ownerPhone,
          ownerEmail: payload.ownerEmail,
          settlementPlan: payload.settlementPlan,
          bankName: payload.bankName,
          bankCode: payload.bankCode,
          accountNumber: payload.accountNumber,
          accountName: payload.accountName,
        },
      };
    }
    default:
      return state;
  }
}
