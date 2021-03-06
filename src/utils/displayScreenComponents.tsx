import AddProductScreen from '@/screens/AddProductScreen';
import AmountPaidScreen from '@/screens/AmountPaidScreen';
import AvailableBalanceScreen from '@/screens/AvailableBalanceScreen';
import DashboardScreen from '@/screens/DashboardScreen';
import EditProductScreen from '@/screens/EditProductScreen';
import LoginScreen from '@/screens/LoginScreen';
import OnboardingScreen from '@/screens/OnboardingScreen';
import OrdersScreen from '@/screens/OrdersScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import SettlementDetailsScreen from '@/screens/SettlementDetailsScreen';
import SignupScreen from '@/screens/SignupScreen';
import StatisticsScreen from '@/screens/StatisticsScreen';
import StoreAddressScreen from '@/screens/StoreAddressScreen';
import StoreDetailsScreenOne from '@/screens/StoreDetailsScreenOne';
import StoreDetailsScreenTwo from '@/screens/StoreDetailsScreenTwo';
import ViewStoreScreen from '@/screens/ViewStoreScreen';
import {RootStackParamList} from '../customTypes';
import ProductScreen from '@/screens/ProductScreen';
import AddProductScreenMethod from '@/screens/AddProductScreenMethod';
import FoodCategoryScreen from '@/screens/FoodCategoryScreen';
import AddExtraScreen from '@/screens/AddExtraScreen';
import AddProductOtherDetailsScreen from '@/screens/AddProductOtherDetailsScreen';
import UploadStoreLogoScreen from '@/screens/UploadStoreLogoScreen';
import UploadStoreImageScreen from '@/screens/UploadStoreImageScreen';
import MyStoreScreen from '@/screens/MyStoreScreen';
import ConfirmRiderScreen from '@/screens/ConfirmRiderScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import HelpScreen from '@/screens/HelpScreen';
import RequestARiderScreen from '@/screens/RequestARiderScreen';
import ConfirmPayment from '@/screens/ConfirmPaymentScreen';
import PaymentApprovedScreen from '@/screens/PaymentApprovedScreen';
import FailedPaymentScreen from '@/screens/FailedPaymentScreen';
import DeliveryAddressScreen from '@/screens/DeliveryAddressScreen';
import ProductWithISBNScreen from '@/screens/ProductWithISBNScreen';
import ViewOrderScreen from '@/screens/ViewOrderScreen';
import AddProductCategoryScreen from '@/screens/AddProductCategoryScreen';
import FreshFoodProductScreen from '@/screens/FreshFoodProductScreen';
import AddFreshFoodOtherDetailsScreen from '@/screens/AddFreshFoodOtherDetailsScreen';
import ProductReplacementScreen from '@/screens/ProductReplacementScreen';
import BarCodeScannerScreen from '@/screens/BarCodeScannerScreen';
import OrdersViewScreen from '@/screens/OrdersViewScreen';
import CompletedOrderViewScreen from '@/screens/CompletedOrderViewScreen';

export default function displayScreenComponent(
  name: string | RootStackParamList,
): any {
  switch (name) {
    case 'OrderScreen':
      return OrdersScreen;
    case 'AddProductScreen':
      return AddProductScreen;
    case 'ViewStoreScreen':
      return ViewStoreScreen;
    case 'EditProductScreen':
      return EditProductScreen;
    case 'DashboardScreen':
      return DashboardScreen;
    case 'ProductScreen':
      return ProductScreen;
    case 'ProfileScreen':
      return ProfileScreen;
    case 'OnboardingScreen':
      return OnboardingScreen;
    case 'SignupScreen':
      return SignupScreen;
    case 'LoginScreen':
      return LoginScreen;
    case 'StoreDetailsScreenOne':
      return StoreDetailsScreenOne;
    case 'StoreDetailsScreenTwo':
      return StoreDetailsScreenTwo;
    case 'UploadStoreImageScreen':
      return UploadStoreImageScreen;
    case 'StoreAddressScreen':
      return StoreAddressScreen;
    case 'AvailableBalanceScreen':
      return AvailableBalanceScreen;
    case 'AmountPaidScreen':
      return AmountPaidScreen;
    case 'StatisticsScreen':
      return StatisticsScreen;
    case 'SettlementDetailsScreen':
      return SettlementDetailsScreen;
    case 'AddProductScreenMethod':
      return AddProductScreenMethod;
    case 'FoodCategoryScreen':
      return FoodCategoryScreen;
    case 'AddExtraScreen':
      return AddExtraScreen;
    case 'AddProductOtherDetailsScreen':
      return AddProductOtherDetailsScreen;
    case 'UploadStoreLogoScreen':
      return UploadStoreLogoScreen;
    case 'MyStoreScreen':
      return MyStoreScreen;
    case 'ConfirmRiderScreen':
      return ConfirmRiderScreen;
    case 'SettingsScreen':
      return SettingsScreen;
    case 'HelpScreen':
      return HelpScreen;
    case 'RequestARiderScreen':
      return RequestARiderScreen;
    case 'ConfirmPayment':
      return ConfirmPayment;
    case 'PaymentApprovedScreen':
      return PaymentApprovedScreen;
    case 'FailedPaymentScreen':
      return FailedPaymentScreen;
    case 'ProductWithISBNScreen':
      return ProductWithISBNScreen;
    case 'DeliveryAddressScreen':
      return DeliveryAddressScreen;
    case 'ViewOrderScreen':
      return ViewOrderScreen;
    case 'AddProductCategoryScreen':
      return AddProductCategoryScreen;
    case 'FreshFoodProductScreen':
      return FreshFoodProductScreen;
    case 'AddFreshFoodOtherDetailsScreen':
      return AddFreshFoodOtherDetailsScreen;
    case 'ProductReplacementScreen':
      return ProductReplacementScreen;
    case 'BarCodeScannerScreen':
      return BarCodeScannerScreen;
    case 'OrdersViewScreen':
      return OrdersViewScreen;
    case 'CompletedOrderViewScreen':
      return CompletedOrderViewScreen;
    default:
      return null;
  }
}
