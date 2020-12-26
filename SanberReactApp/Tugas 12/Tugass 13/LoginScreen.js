import React from 'react';
import { Text,View,TextInput,Image,
    StyleSheet,ScrollView,TouchableOpacity } from "react-native";


function LoginScreen() {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.head}>
                <Image source={require("./images/logo.png")}/>
                <Text style={styles.screenTitle}>Login</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.inputTitle}>Username / Email</Text>
                <TextInput style={styles.inputBox}/>

                <Text style={styles.inputTitle}>Password</Text>
                <TextInput style={styles.inputBox}/>
            </View>

            <View style={styles.tail}>
                <TouchableOpacity style={styles.btnMasuk}>
                    <Text style={styles.btnTitle}>Masuk</Text>
                </TouchableOpacity>

                <Text style={styles.textAtau}>atau</Text>

                <TouchableOpacity style={styles.btnDaftar}>
                    <Text style={styles.btnTitle}>Daftar ?</Text>
                </TouchableOpacity>

            </View>



        </ScrollView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    head:{
        flexDirection:"column",
        alignItems:"center"
    },
    body:{
        paddingHorizontal:41,
        paddingBottom:40
    },
    tail:{
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:100,
        height:140,

    },
    container:{
        flex:1,
        paddingTop:63,
    },
    screenTitle:{
        color:"#003366",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:24,
        lineHeight:28,
        paddingTop:70,
        paddingBottom:24
    },
    inputTitle:{
        color:"#003366",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:16,
        lineHeight:19,
        paddingTop:16
    },
    inputBox:{
        borderColor:"#003366",
        borderWidth:1,
        height:48
    },
    btnMasuk:{
        height:40,
        width:140,
        backgroundColor:"#3EC6FF",
        borderRadius:16,
        alignItems:"center",
        justifyContent:"center"
    },
    btnDaftar:{
        height:40,
        width:140,
        backgroundColor:"#003366",
        borderRadius:16,
        alignItems:"center",
        justifyContent:"center"
    },
    btnTitle:{
        color:"#FFFFFF",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:24,
        lineHeight:28,
    },
    textAtau:{
        color:"#3EC6FF",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:24,
        lineHeight:28,
    }

    
})