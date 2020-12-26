import React from 'react';
import {Text,View, StyleSheet,Image,StatusBar,TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import VideoItem from './Components/videoItem'
import data from './data.json'



function App() {
  
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image 
                source={require('./images/logo.png') }
                style={{
                    width:98,
                    height:22,
                }}/>

                <View style={styles.rightNav}>
                    <TouchableOpacity >
                        <Icon 
                        style={styles.navItem} 
                        name="search" size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon 
                        style={styles.navItem}
                        name="account-circle" 
                        size={25}
                        />
                    </TouchableOpacity>
                  
                </View>
            </View>
 

            <View style={styles.body}>
                
            
                <FlatList 
                keyExtractor={(item)=>item.id}
                data={data.items}
                renderItem={(video)=><VideoItem video={video.item}/>}
                ItemSeparatorComponent={()=>
                    <View style={{
                        height:0.5,
                        backgroundcolor:"black"
                    }}/>
                }
                />

            </View>


            <View style={styles.tabBar}>
                
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='home' size={25}/>
                    <Text style={styles.tabTittle}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='whatshot' size={25}/>
                    <Text style={styles.tabTittle}>Trending</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='subscriptions' size={25}/>
                    <Text style={styles.tabTittle}>Subscriptions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='folder' size={25}/>
                    <Text style={styles.tabTittle}>Library</Text>
                </TouchableOpacity>

                

            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    navbar:{
        height:55,
        backgroundColor:"white",
        elevation: 3,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal:15,
        justifyContent:"space-between",

    },
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
        
    },
    rightNav:{
        flexDirection:"row",
    },
    navItem:{ 
        marginLeft:25,
    },
    tabBar:{
        backgroundColor:"white",
        height:65,
        borderTopWidth:0.5,
        borderColor:'#E5E5E5',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:30
        
    },
    tabItem:{
        alignItems:"center",
        textAlign:"center",
        
    },
    tabTittle:{
        fontSize:10,
        color:"#3c3c3c"
    },
    body:{
        flex:1
    }
    

})

export default App;