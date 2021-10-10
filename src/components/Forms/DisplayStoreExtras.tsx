import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from 'react-query';

import {DisplayCheckbox} from './DisplayCheckbox';
import {styles} from './AddProductOtherDetailsForm.style';
import {getAllStoreExtrasRequest} from '@/network/getRequest';

interface DisplayStoreExtrasProps {
  name: 'Main' | 'Secondary';
}

type extrasType = {
  _id: string;
  name?: string;
  isCompulsory: boolean;
  price: string;
}[];

async function fetchStoreExtras() {
  const {data} = await getAllStoreExtrasRequest();
  const extras = data.data;
  return extras;
}
export default function DisplayStoreExtras({name}: DisplayStoreExtrasProps) {
  const {data: storesExtras, status} = useQuery(
    'productExtras',
    fetchStoreExtras,
  );
  const filterStoreType = name === 'Main' ? true : false;

  function getExtra(extraStatus: boolean): extrasType {
    const filteredExtra = storesExtras.filter(
      (filteredextra: {isCompulsory: boolean}) =>
        filteredextra.isCompulsory === extraStatus,
    );
    return filteredExtra;
  }
  return (
    <View>
      <Text style={styles.extra}>{name} Extras</Text>
      {status === 'error' ? (
        <Text>Unable to fetch {name} Extras</Text>
      ) : status === 'loading' ? (
        <Text>Fetching main extras...</Text>
      ) : (
        <View style={styles.checkboxView}>
          {getExtra(filterStoreType).length > 0 ? (
            getExtra(filterStoreType).map(extra => (
              <DisplayCheckbox key={extra._id} title={extra} />
            ))
          ) : (
            <Text style={styles.noExtra}>
              There is no {name.toLowerCase()} extra
            </Text>
          )}
        </View>
      )}
    </View>
  );
}
