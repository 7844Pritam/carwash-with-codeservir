import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { Appbar, Card, Button } from 'react-native-paper';
import TopBar from '../../components/TopBar';
import appColors from '../../assets/config/Appcolor';
import { useNavigation } from '@react-navigation/native';
import ClientsCard from '../../components/ClientsCard.mjs';

const { width } = Dimensions.get('window');

const LandingPage = () => {
  const navigation = useNavigation();
  const handleonFaviconButton = () => {
    navigation.navigate('FormScreen');
  };

  const cardData = [
    {
      id: 1,
      name: 'Mohit',
      date: '12/12/12',
      time: '23:34',
      status: 'Active',
      mobNum: '1234567890',
      address: '123 Street, City',
      innerCleaning: '23 times',
      outerCleaning: '3434 times',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'John',
      date: '01/01/23',
      time: '10:00',
      status: 'Inactive',
      mobNum: '2345678901',
      address: '456 Avenue, City',
      innerCleaning: '45667 times',
      outerCleaning: '123 times',
      isAvailable: false,
    },
    {
      id: 3,
      name: 'Jane',
      date: '02/02/23',
      time: '11:30',
      status: 'Active',
      mobNum: '3456789012',
      address: '789 Boulevard, City',
      innerCleaning: '111 times',
      outerCleaning: '22222 times',
      isAvailable: true,
    },
  ];

  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: (currentIndex + 1) % cardData.length,
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  let currentIndex = 0;

  const renderMainCard = ({ item, index }) => {
    const position = index === currentIndex ? 'middle' : index < currentIndex ? 'left' : 'right';
    const cardWidth = position === 'middle' ? width * 0.8 : width * 0.4;
    const mainCardStyle = {
      ...styles.mainCard,
      width: cardWidth,
    };
    return (
      <View style={mainCardStyle}>
        <Text style={styles.mainCardText}>Number of Vehicle </Text>
        <View style={styles.circularProgress}>
          <Text>34</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <TopBar heading={'Car Clean Plus'} />
      <Text style={styles.headerText}>Overview</Text>

      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={cardData}
        renderItem={renderMainCard}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(event) => {
          currentIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        }}
      />

      <View style={styles.overviewCards}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardText}>Number of clients</Text>
            <Text style={styles.cardNumber}>34</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardText}>Number of Staff</Text>
            <Text style={styles.cardNumber}>34</Text>
          </Card.Content>
        </Card>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.headerText2}>Recent Leads</Text>
        <Text style={styles.headerText3}>View More</Text>
      </View>
      <View style={styles.listContainer}>
        {cardData.map((card) => (
          <ClientsCard
            key={card.id}
            name={card.name}
            date={card.date}
            time={card.time}
            status={card.status}
            isAvailable={card.isAvailable}
            mobNum={card.mobNum}
            address={card.address}
            onPress={() => {
              handleOnClickViewDetails(card);
            }}
          />
        ))}
      </View>

      <TouchableOpacity onPress={handleonFaviconButton} style={styles.favIcon}>
        <Image
          style={{ height: 20, width: 20, marginRight: 5 }}
          source={require('../../assets/images/png/plusicon.png')}
        />
        <Text
          style={{
            color: appColors.white,
            fontWeight: '800',
            fontSize: 15,
          }}>
          Create New Lead{' '}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {},
  content: {
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 16,
    marginTop: 8,
  },
  headerText2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  headerText3: {
    fontSize: 14,
    fontWeight: '700',
    color: 'red',
    marginTop: 8,
    marginRight: 8,
  },
  overviewCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#034f84',
    padding: 16,
    borderRadius: 8,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  mainCard: {
    backgroundColor: '#034f84',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: width * 0.1,
  },
  mainCardText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
  },
  circularProgress: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    marginBottom: 16,
  },
  barChart: {
    height: 150,
  },
  addButton: {
    marginTop: 16,
    backgroundColor: '#034f84',
  },
  bottomNavigation: {
    backgroundColor: '#034f84',
  },
  container: {
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingBottom: 120,
  },
  listContainer: {
    flex: 1,
    marginBottom: 74,
  },
  textStyle: {
    color: appColors.primary,
    fontSize: 20,
    marginRight: 10,
    fontWeight: '900',
  },
  favIcon: {
    borderRadius: 65,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: appColors.primary,
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderWidth: 1.5,
    borderColor: appColors.white,
    flexDirection: 'row',
  },
});

export default LandingPage;
