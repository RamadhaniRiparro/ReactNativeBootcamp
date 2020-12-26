import React from 'react';
import { Text, View,StyleSheet,ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function AboutScreen() {
    return (
        <ScrollView style={styles.containter}>

            <View style={styles.head}>
                <Text style={styles.headTitle}>Tentang Saya</Text>
                <Icon name="account-circle" size={200} color="#EFEFEF"/>
                <Text style={styles.headName}>Mukhlis Hanafi</Text>
                <Text style={styles.headDetail}>React Native Developer</Text>
            </View>

            <View style={styles.body}>

                <View style={styles.bodyItem}>
                    <Text style={styles.itemTitle}>Portofolio</Text>
                    <View style={styles.itemPortofolio}>

                        <View style={styles.subItemPortofolio}>
                            <Icon name="github" size={42} color="#3EC6FF"/>
                            <Text style={styles.subItemTitlePorto}>@mukhlish</Text>
                        </View>

                        <View style={styles.subItemPortofolio}>
                            <Icon name="gitlab" size={42} color="#3EC6FF"/>
                            <Text style={styles.subItemTitlePorto}>@mukhlis-h</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.bodyItem}>
                    <Text style={styles.itemTitle}>Hubungi Saya</Text>

                    <View style={styles.itemHubungi}>
                        <View style={styles.subItemHubungi}>
                            <Icon name="facebook" size={42} color="#3EC6FF" />
                            <Text style={styles.subItemTitleHub}>mukhlis.hanafi</Text>
                        </View>
                        <View style={styles.subItemHubungi}>
                            <Icon name="instagram" size={42} color="#3EC6FF"/>
                            <Text style={styles.subItemTitleHub}>@mukhlis_hanafi</Text>
                        </View>
                        <View style={styles.subItemHubungi}>
                            <Icon name="twitter" size={42} color="#3EC6FF"/>
                            <Text style={styles.subItemTitleHub}>@mukhlish</Text>
                        </View>
                        
                    </View>


                </View>

             
            </View>

        </ScrollView>
    );
}

export default AboutScreen;

const styles = StyleSheet.create({
    containter:{
        flex:1,
        paddingHorizontal:8,

    },
    head:{
        alignItems:"center",
        flexDirection:"column",
        paddingTop:65
    },
    headTitle:{
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:36,
        lineHeight:42,
        color:"#003366"
    },
    headName:{
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:24,
        lineHeight:28,
        color:"#003366"
    },
    headDetail:{
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:16,
        lineHeight:19,
        color:"#3EC6FF"
    },

    body:{
        paddingHorizontal:8,
   
        flexDirection:"column"
    },
    bodyItem:{
        backgroundColor:"#EFEFEF",
        borderRadius:16,
        marginVertical:10
    },
    itemTitle:{
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:18,
        lineHeight:21,
        color:"#003366",
        borderBottomColor:"#003366",
        borderBottomWidth:1,
        padding:7
    },
    itemPortofolio:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20
    },
    subItemPortofolio:{
        flexDirection:"column",
        alignItems:"center",
        paddingHorizontal:35
    },
    itemHubungi:{
        flexDirection:"column",
        alignItems:"flex-start",
    
        marginHorizontal:85,

    },
    subItemHubungi:{
        flexDirection:"row",
        paddingBottom:25,
        paddingTop:25,
        alignItems:"center"
    },
    subItemTitleHub:{
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:16,
        lineHeight:19,
        color:"#003366",
        paddingLeft:15
    },
    subItemTitlePorto:{
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:16,
        lineHeight:19,
        color:"#003366",
        paddingTop:10
    }

    
})