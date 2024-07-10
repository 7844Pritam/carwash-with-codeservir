import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import appColors from '../assets/config/Appcolor';

const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.itemTouchable}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.itemContent}>
          <Text>{item.content}</Text>
        </View>
      )}
    </View>
  );
};

const LeadDetailsScreen = ({ route, navigation }) => {
  const { cards } = route.params;

  const data = [
    {
      id: 1,
      title: 'What Is JavaScript',
      content:
        'JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments. JavaScript also known as a scripting language for web pages.',
    },
    {
      id: 2,
      title: 'Geeksforgeeks',
      content:
        'A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles.',
    },
    {
      id: 3,
      title: 'What Is Python',
      content:
        'Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting-edge technology in Software Industry.',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <Button style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={{ color: appColors.white }}>Back</Text>
      </Button>
      <View style={styles.bgRectangle}>
        <View style={styles.cardOne}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Name: {cards.name}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Number: {cards.mobNum}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Address: {cards.address}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Vehicle Number: {cards.vehicleNumber}</Text>
          </View>
        </View>


        
       
        <FlatList
          style={styles.expandable}
          ListHeaderComponent={<Text style={styles.heading}>Work History</Text>}
          data={data}
          renderItem={({ item }) => <ExpandableListItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  rectangle: {
    position: 'absolute',
    width: '100%',
    height: 300,
    backgroundColor: appColors.secondary,
    zIndex: 0,
  },
  bgRectangle: {
    backgroundColor: appColors.primary,
    alignSelf: 'center',
    width: '95%',
    height: '80%',
    borderRadius: 34,
    marginTop: 50,
    padding: 20,
  },
  button: {
    backgroundColor: appColors.primary,
    width: 100,
    margin: 20,
  },
  cardOne: {
    width: '100%',
    backgroundColor: appColors.secondary,
    borderRadius: 25,
    padding: 20,
  },
  cardContent: {
    marginBottom: 10,
  },
  cardText: {
    color: appColors.white,
    fontSize: 16,
  },
  expandable: {
    marginTop: 20,
  },
  heading: {
    color: appColors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  itemTouchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContent: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});

export default LeadDetailsScreen;
