import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem ,Button} from '@ui-kitten/components';

const data = new Array(10).fill({
  title: 'Item',
  description: 'Description for Item',
});
export default function Transaction() {
    const renderItemAccessory = (props) => (
        <Button size='tiny'>Withdraw</Button>
      );

    const renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
          accessoryRight={renderItemAccessory}
        />
      );
    
      return (
        <List
          style={styles.container}
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
          
        />
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        maxHeight: 200,
      },
    });