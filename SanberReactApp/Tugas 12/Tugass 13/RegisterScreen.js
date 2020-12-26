import React from 'react';
import {Text,View,Image,Button,
    TextInput,StyleSheet,StatusBar,Dimensions,ScrollView,
    TouchableOpacity

} from 'react-native'


function App() {
    return (
       <ScrollView style={styles.container}>
           
            <View style={styles.head}>
                <Image 
                source={require('./images/logo.png')}
                style={{
                    width:Dimensions.get("window").width,
                    height:100,
                    marginTop:30,
                }}
                />

                <Text style={styles.pageTittle}>Register</Text>
           </View>

           <View style={styles.body}>

                <Text style={styles.inpuTittle}>Username</Text>
                <TextInput style={styles.textInput}/>

                <Text style={styles.inpuTittle}>Email</Text>
                <TextInput style={styles.textInput}/>

                <Text style={styles.inpuTittle}>Password</Text>
                <TextInput style={styles.textInput}/>

                <Text style={styles.inpuTittle}>Ulangi Password</Text>
                <TextInput style={styles.textInput} />
           </View>

            <View style={styles.tail}>
                
                <TouchableOpacity style={styles.btnDaftar}>
                    <Text style={styles.btnTittle}>Daftar</Text>
                </TouchableOpacity>

                <Text style={styles.textBtn}>atau</Text>

                <TouchableOpacity style={styles.btnMasuk}>
                    <Text style={styles.btnTittle}>Masuk ?</Text>
                </TouchableOpacity>
            </View>
          
        
       </ScrollView>
    );
}

export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight,
        flexDirection:"column",
 

    },
    pageTittle:{
        color:"#003366",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:24,
        lineHeight:28,
        paddingTop:60,
    },
    inpuTittle:{
        color:"#003366",
        fontFamily:"Roboto",
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:16,
        lineHeight:19,
        paddingTop:16,
        
    },
    body:{
        paddingTop:30,
        paddingBottom:40,
        marginHorizontal:40

    },
    head:{
        alignItems:"center",

    },
    tail:{
        alignItems:"center",
        height:140,
        justifyContent:"space-between",
        marginBottom:40
 
    },
    textInput:{
        borderColor:"#003366",
        borderWidth:1,
        height:48,
    
    }, 
    btnMasuk:{
        borderRadius:16,
        backgroundColor:"#3EC6FF",
        width:140,
        height:40,
        justifyContent:"center",
        alignItems:"center"
    },
    btnDaftar:{
        borderRadius:16,
        backgroundColor:"#003366",
        width:140,
        height:40,
        justifyContent:"center",
        alignItems:"center"
    },
    btnTittle:{
        color:"#FFFFFF",
        fontSize:24,
        lineHeight:28,
        fontStyle:"normal",
        fontFamily:"Roboto",
        fontWeight:"normal"
    },
    textBtn:{
        color:"#3EC6FF",
        fontSize:24,
        lineHeight:28,
        fontStyle:"normal",
        fontFamily:"Roboto",
        fontWeight:"normal"
    }
 

})