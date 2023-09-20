import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import PostListItem from '../components/PostListItem';
import LoadingIndicator from '../components/LoadingIndicator';
import styles from '../Styles'; 

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <PostListItem
            post={item}
            onPress={() => navigation.navigate('Details', { post: item })}
          />
        )}
      />
    </View>
  );
};

export default PostsScreen;