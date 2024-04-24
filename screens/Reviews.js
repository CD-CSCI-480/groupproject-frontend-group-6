import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../assets/background.png'; // Import your background image

const reviews = [
  { id: 1, author: 'John Doe', rating: 4, comment: 'Great app!' },
  { id: 2, author: 'Jane Smith', rating: 5, comment: 'Love it!' },
  { id: 3, author: 'Bob Johnson', rating: 3, comment: 'Could be better.' },
  { id: 4, author: 'Alice Adams', rating: 4, comment: 'Very useful!' },
  { id: 5, author: 'David Brown', rating: 5, comment: 'Excellent features!' },
  { id: 6, author: 'Emma White', rating: 2, comment: 'Disappointing experience.' },
  { id: 7, author: 'Michael Clark', rating: 3, comment: 'Needs improvement.' },
  { id: 8, author: 'Sarah Green', rating: 4, comment: 'Good app overall.' },
  { id: 9, author: 'Ryan Taylor', rating: 5, comment: 'Highly recommend!' },
  { id: 10, author: 'Olivia King', rating: 3, comment: 'Average app.' },
  // Add more reviews as needed
];

const ReviewItem = ({ author, rating, comment }) => (
  <View style={styles.reviewItem}>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.rating}>Rating: {rating}</Text>
    <Text style={styles.comment}>{comment}</Text>
  </View>
);

const ReviewsScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ReviewItem
              author={item.author}
              rating={item.rating}
              comment={item.comment}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  reviewItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add opacity to make the background image slightly visible
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#4caf50',
    marginBottom: 5,
  },
  comment: {
    fontSize: 16,
  },
});

export default ReviewsScreen;
