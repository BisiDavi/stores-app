import React from 'react';
import {Card} from 'react-native-elements';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './DashboardCard.style';

interface DashboardCardProps {
  content: {
    title: string;
    amount: string;
    link?: string | undefined;
  };
  navigation: any;
}

export default function DashboardCard({
  content,
  navigation,
}: DashboardCardProps) {
  return (
    <View style={styles.dashboardCard}>
      <Text style={styles.title}>{content.title}</Text>
      {content.link ? (
        <TouchableOpacity onPress={() => navigation.navigate(content.link)}>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardText}>{content.amount}</Text>
          </Card>
        </TouchableOpacity>
      ) : (
        <Card containerStyle={styles.card}>
          <Text style={styles.cardText}>{content.amount}</Text>
        </Card>
      )}
    </View>
  );
}
