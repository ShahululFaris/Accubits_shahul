import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TextInput
} from 'react-native';

import color from '../modules/Color';
import CustomSafeAreaView from '../Component/CustomSafeAreaView';
import {navigationType, RestuarentType} from '../global/types';
import HomeHeader from '../Component/HomeHeader'
import dataStore from '../Stores/DataStore';
import RestAurentCard from '../Component/RestAurentCard';

const HomeScreen = (props: navigationType) => {
  const [searchText, setSearchText] = useState("")
  const [filteredData,setFilterdData] = useState([])
  const [restAurents,setRestAurents] = useState([])

  useEffect(()=>{
    let updatedData: any = []
    dataStore.getRestAurentList((status,restAurentResult)=> {
      if (status) {
        dataStore.getNodleImage((status,imageResult) => {
          restAurentResult.forEach((item: RestuarentType,index: number)=> {
            let data = {
              Brand : item.Brand,
              Variety: item.Variety,
              Style: item.Style,
              Country: item.Country,
              Stars: item.Stars,
              Image: imageResult[index] ? imageResult[index]?.Image : imageResult[0].Image
            }
            updatedData.push(data)
          })
          setRestAurents(updatedData)
          setFilterdData(updatedData)
        })
      }
    })
  },[])

  const onItemPress = (item: any, index: number) => {
    props.navigation.navigate("RestAurentDetailScreen",{restAurentData: item})
  }

  const renderRestAurent = ({ item, index }: { item: any, index: number }) => {
    console.log("item.", item.Image)
    return (
      <RestAurentCard
        imageUrl={item.Image}
        brand={item.Brand}
        onPress={() => onItemPress(item, index)}
      />
    )

  }

  const rendeListView = () => {
    return (
      <FlatList
        keyExtractor={(item: any, index: number) => index.toString()}
        data={filteredData}
        renderItem={renderRestAurent}
      />
    )
  }

  const onSearch = (value: string) => {
    setSearchText(value)
    if (value.trim().length > 0) {
        let filterdList = restAurents.filter(function (item: any) {
            return item.Brand.toLowerCase().includes(value.toLowerCase())
        });
        setFilterdData(filterdList)
    } else {
        setFilterdData(restAurents)
    }
}

  return (
    <CustomSafeAreaView  edges={['top']} style={{ backgroundColor: color.white }} translucent={true}>
      <HomeHeader
        style={styles.headerStyle}
        title="Home"
      />
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          onChangeText={onSearch}
          value={searchText}
          placeholder="Search"
        />
        {rendeListView()}
      </View>
     
    </CustomSafeAreaView>
  );
}

const styles                = StyleSheet.create({
  headerStyle               : {
    shadowOffset            : {
        width               : 0,
        height              : 20,
    },  
    shadowOpacity           : 0.05,
    shadowRadius            : 8.0,
    backgroundColor         : color.white,
    shadowColor             : color.semiBlack,
    elevation               : 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen