import React from 'react';
import {View, Text, FlatList} from 'react-native';

import BadgeCard from '../components/BadgeCard';

import {badgesCardData} from '../utils/DummyData';

import GlobleStyles from '../styles/GlobleStyles';
import BadgesScreenStyle from '../styles/BadgesScreenStyle';
import {Colors} from '../utils/StyleConstants';

const BadgesScreenView = () => {
  return (
    <View
      style={{
        ...GlobleStyles.appContainer,
        paddingTop: 20,
        paddingHorizontal: 14,
        backgroundColor: Colors.extraLightPurple,
      }}>
      <FlatList
        data={badgesCardData}
        renderItem={({item}) => (
          <BadgeCard
            image={item.image}
            title={item.title}
            description={item.description}
            cardCount={item.cardCount}
            style={BadgesScreenStyle.badgecard}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BadgesScreenView;
