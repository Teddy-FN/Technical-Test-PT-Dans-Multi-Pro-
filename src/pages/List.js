import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {connect} from 'react-redux';
import {fetchingDataList} from '../redux/actions/getAllList';
import {useDispatch, useSelector} from 'react-redux';

const List = props => {
  const dispatch = useDispatch();
  // useState
  const [showFilter, setShowFilter] = useState(false);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const dataList = useSelector(state => state.dataListReducer.data);

  useEffect(() => {
    dispatch(fetchingDataList(description));
  }, [description, location]);
  // Styles
  const icons = showFilter ? 'chevron-up' : 'chevron-down';

  const transparentBackground = {
    backgroundColor: 'transparent',
  };

  const containerIconFilter = {
    flex: 0.1,
  };

  function _onFilter() {
    dispatch(
      fetchingDataList(description.length === 0 ? '' : description, location),
    );
  }

  function _renderingItems(items) {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: '#000',
        }}>
        <View
          style={{
            backgroundColor: 'green',
            width: 50,
            height: 50,
          }}>
          <Image
            source={{uri: items.company_logo}}
            style={{width: 400, height: 400}}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text>{items.title}</Text>
          <Text>{items.company}</Text>
          <Text>{items.location}</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Job Detail', {data: items})}
          style={containerIconFilter}>
          <Icon name={'chevron-right'} size={25} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.row}>
        <View style={styles.containerSearch}>
          <View style={styles.containerIcon}>
            <Icon
              style={styles.searchIcon}
              name="search"
              size={25}
              color="#000"
            />
          </View>
          <TextInput
            mode={'outlined'}
            placeholder={'Search'}
            left={<TextInput.Affix text=" " />}
            value={description}
            onChangeText={text => setDescription(text)}
            theme={{roundness: 30}}
            style={transparentBackground}
          />
        </View>
        <TouchableOpacity
          onPress={() => setShowFilter(!showFilter)}
          style={containerIconFilter}>
          <Icon name={icons} size={25} />
        </TouchableOpacity>
      </View>
      {showFilter && (
        <View
          style={{
            marginBottom: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 0.4,
              }}>
              Location
            </Text>
            <TextInput
              mode={'outlined'}
              placeholder={'Location'}
              value={location}
              onChangeText={text => setLocation(text)}
              style={{flex: 1}}
            />
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <Button title="Apply Filter" onPress={() => _onFilter()} />
          </View>
        </View>
      )}
      <FlatList
        data={dataList}
        renderItem={({item}) => _renderingItems(item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    dataList: state.data,
  };
};

export default connect(mapStateToProps, {fetchingDataList})(List);

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    paddingHorizontal: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerSearch: {
    position: 'relative',
    marginBottom: 10,
    flex: 1,
  },

  containerIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
