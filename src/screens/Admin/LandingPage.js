import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Appbar, Card, BottomNavigation, Button} from 'react-native-paper';
import TopBar from '../../components/TopBar';
import appColors from '../../assets/config/Appcolor';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ClientsCard from '../../components/ClientsCard.mjs';

import car11 from '../../assets/images/caresoulImg/car111.jpg';
import car33 from '../../assets/images/caresoulImg/car222.jpg';
import car22 from '../../assets/images/caresoulImg/car333.jpg';

import firestore from '@react-native-firebase/firestore';



const LandingPage = () => {
  const navigation = useNavigation();
  const [leadsCount, setleadsCount] = useState(0);
  const [usersCount, setusersCount] = useState(0);
  const [leadsList, setLeadsList] = useState([]);
  
  const handleonFaviconButton = () => {
    navigation.navigate('FormScreen');
  };

  const data = [
    {id: '1', title: 'Item 1', image: car11},
    {id: '2', title: 'Item 2', image: car22},
    {id: '3', title: 'Item 3', image: car33},
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );

  useFocusEffect(
    React.useCallback(() => {
      const fetchLeadsData = async () => {
        try {
          const datas = await firestore().collection('Leads').get();
          if (!datas.empty) {
            setLeadsList(datas.docs.map(doc => doc.data()));
            setleadsCount(datas.size);
            console.log(datas.size);
          } else {
            setleadsCount(0);
          }
        } catch (e) {
          console.log(e.message);
        }
      };

      const fetchStaffData = async () => {
        try {
          const usersdatas = await firestore().collection('users').get();
          if (!usersdatas.empty) {
            setusersCount(usersdatas.size);
            console.log(usersdatas.size);
          } else {
            setusersCount(0);
          }
        } catch (e) {
          console.log(e.message);
        }
      };

      fetchStaffData();
      fetchLeadsData();
    }, [])
  );



  const handleOnClickViewDetails = card => {
    console.log('View Details Clicked...', card.name);
    navigation.navigate('LeadDetailsScreen', {cards: card});
  };


  return (
    <>
      <TopBar heading={'Car Clean Plus'} />
      <Text style={styles.headerText}>Overview</Text>

      <ScrollView style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
        />

        {/* sider of card  */}
        <View style={styles.overviewCards}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.cardText}>Number of clients</Text>
              <Text style={styles.cardNumber}>{leadsCount}</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.cardText}>Number of Staff</Text>
              <Text style={styles.cardNumber}>{usersCount}</Text>
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
          {leadsList.map(card => (
            <ClientsCard
              key={card.id}
              name={card.customerName}
              date={card.date}
              time={card.time}
              status={card.status}
              mobNum={card.mobileNumber}
              address={card.address}
              onPress={() => {
                handleOnClickViewDetails(card);
              }}
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleonFaviconButton}>
        <View style={styles.favIcon}>
          <Image
            style={{height: 20, width: 20, marginRight: 5}}
            source={require('../../assets/images/png/plusicon.png')}
          />
          <Text
            style={{color: appColors.white, fontWeight: '800', fontSize: 15}}>
            Create New Lead{' '}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingVertical: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  itemImage: {
    width: 310,
    height: 200,
    borderRadius: 8,
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 16,
  },
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
