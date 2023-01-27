import React, {useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

import {fetchingDataById} from '../redux/actions/getDataById';
import {useDispatch, useSelector} from 'react-redux';

const Detail = props => {
  const dispatch = useDispatch();
  const {navigation, route} = props;
  const {params} = route;

  const dataId = useSelector(state => state.dataByIdReducer.data);
  console.log('dataId =>', dataId);

  useEffect(() => {
    dispatch(fetchingDataById(params.data.id));
  }, []);

  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView>
        <Text style={styles.title}>Company</Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20,
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
              source={{uri: dataId.company_logo}}
              style={{width: 400, height: 400}}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 50,
            }}>
            <Text>{dataId.company}</Text>
            <Text>{dataId.location}</Text>
            <Text>Go To Website</Text>
          </View>
        </View>
        <Text style={styles.title}>Job Description</Text>

        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <Text>Title</Text>
          <Text style={styles.descTitle}>{dataId.title}</Text>
          <Text>Fulltime</Text>
          <Text style={styles.descTitle}>
            {dataId.type === 'Full Time' ? 'Yes' : 'No'}
          </Text>
          <Text>Description</Text>
          <Text style={styles.descTitle}>{dataId.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    dataId: state.data,
  };
};

export default connect(mapStateToProps, {fetchingDataById})(Detail);

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 20,
    color: '#000',
  },

  descTitle: {
    marginBottom: 5,
  },
});
