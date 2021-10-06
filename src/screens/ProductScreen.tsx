import React, {useState, useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {ListItem, Switch, Image} from 'react-native-elements';
import {DrawerStackParamList} from '@/customTypes/.';
import {colors, showToast} from '@/utils/.';
import Fab from '@/components/Fab';
import displayAsset from '@/utils/displayAsset';
import {
  getAllProductsRequest,
  toggleSpecificationStatusRequest,
} from '@/network/postRequest';
import {RootState} from '@/store/RootReducer';
import ProductLoader from '@/components/Loader/ProductLoader';
import {styles} from '@/styles/ProductScreen.style';

type ProductScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'ProductScreen'
>;

type ProductScreenRouteProps = RouteProp<DrawerStackParamList, 'ProductScreen'>;

type Props = {
  route: ProductScreenRouteProps;
  navigation: ProductScreenNavigationProps;
};

interface productType {
  products: [] | null;
}

function ListView({item}: any) {
  const [toggle, setToggle] = useState(false);

  function postSpecificationStatus() {
    toggleSpecificationStatusRequest({
      specificationId: item._id,
      status: toggle,
    })
      .then(response => {
        showToast(`${item.name}, ${response.data.message}`);
      })
      .catch(error => {
        if (error.response) {
          showToast(error.response.data.message);
        } else if (error.request) {
          showToast('Oops, unable to update, due to poor network');
        }
      });
  }

  return (
    <ListItem bottomDivider style={styles.listItem}>
      <ListItem.Content>
        <View style={styles.listViewContent}>
          <Text style={styles.meal}>{item.name}</Text>
          <Text style={styles.edit}>
            <Image source={displayAsset('editIcon')} style={styles.editIcon} />
          </Text>
          <Switch
            value={toggle}
            onValueChange={() => {
              setToggle(!toggle);
              postSpecificationStatus();
            }}
            style={styles.switch}
            color={colors.cloudOrange5}
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

function ProductListView({products}: productType) {
  return (
    <>
      {products?.map((item: any) => (
        <ListView item={item} key={item._id} />
      ))}
    </>
  );
}

export default function ProductScreen({navigation}: Props) {
  const [storeProducts, setStoreProducts] = useState<null | []>(null);
  const [netError, setNetError] = useState(false);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  useEffect(() => {
    getAllProductsRequest({storeId: storeProfile._id})
      .then((response: any) => {
        console.log('response.data', response.data);
        const {products} = response.data.data;
        setStoreProducts(products);
        setNetError(false);
      })
      .catch((error: any) => {
        if (error) {
          setNetError(true);
        }
        console.log('getAllProductsRequest error', error);
      });
  }, [storeProfile]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.productView}>
          {storeProducts !== null && storeProducts?.length > 0 ? (
            <ProductListView products={storeProducts} />
          ) : storeProducts !== null &&
            !netError &&
            storeProducts?.length === 0 ? (
            <Text style={styles.indicator}>
              No Product available, you can add products, by clicking on the
              plus button
            </Text>
          ) : !netError ? (
            <ProductLoader />
          ) : (
            <Text style={styles.error}>
              Oops, unable to fetch your Products, due to poor network
            </Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.fabView}>
        <Fab onPress={() => navigation.navigate('AddProductScreenMethod')} />
      </View>
    </View>
  );
}
