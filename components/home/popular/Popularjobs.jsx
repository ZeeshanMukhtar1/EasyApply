import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { useRouter } from 'expo-router';
import Styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobsCard from '../../common/cards/popular/PopularJobCard';

import styles from './popularjobs.style';

import useFetch from '../../../hook/useFetch';

// const isLoading = false;
// const error = false;

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1,
  });

  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Error while loading popular jobs</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({ item }) => <PopularJobsCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
