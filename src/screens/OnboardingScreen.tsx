import {StackScreenProps} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, ImageSourcePropType} from 'react-native';
import {Button, Image} from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';

import {RootStackParamList} from '@/customTypes/.';
import onboardingScreenJson from '@/json/onboarding.json';
import displayAsset from '@/utils/displayAsset';
import {styles} from '@/styles/OnboardingScreen.style';
import {colors} from '@/utils';

type itemTypes = {
  key: number;
  title: string;
  image: ImageSourcePropType;
};

interface RenderItemProps {
  item: itemTypes;
}

export default function OnboardingScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'SignupScreen'>) {
  const [showApp, setShowApp] = useState(false);

  function onDone() {
    return setShowApp(true);
  }
  function onSkip() {
    return setShowApp(true);
  }

  useEffect(() => {
    showApp && navigation.push('SignupScreen');
  }, [showApp, navigation]);

  const slides: itemTypes[] = onboardingScreenJson.map(item => ({
    key: item.key,
    title: item.title,
    image: displayAsset(item.image),
  }));

  function RenderItem({item}: RenderItemProps) {
    return (
      <View style={styles.renderItem} key={item.key}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={item.image}
          style={styles.image}
          PlaceholderContent={
            <ActivityIndicator size="large" color={colors.cloudOrange5} />
          }
        />
      </View>
    );
  }

  function renderNextButton() {
    return (
      <View style={styles.nextButton}>
        <Text style={styles.text}>Next</Text>
      </View>
    );
  }

  const renderSkipButton = () => (
    <Button
      buttonStyle={styles.renderSkipButton}
      onPress={onSkip}
      type="outline"
      title="Skip"
    />
  );
  const renderDoneButton = () => (
    <Button buttonStyle={styles.doneButton} onPress={onDone} title="Done" />
  );

  return (
    <AppIntroSlider
      data={slides}
      keyExtractor={item => item.key.toString()}
      renderItem={RenderItem}
      showSkipButton={true}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      bottomButton
    />
  );
}
