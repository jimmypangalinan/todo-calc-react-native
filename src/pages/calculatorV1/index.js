import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { vh, vw } from 'react-native-expo-viewport-units'

import { colors, color2 } from '../../assets/colors'

const App = () => {

    // hasil
    const [result, setResult] = useState(0)
    // display operasi
    const [operation, setOperation] = useState(0)

    function Calculation (a) {
        if(operation === 0 ){
            setOperation(a)
        }else{
            setOperation(operation + "" + a)
        }
    }

    function Answer(){
        setResult(eval(operation))
        setOperation(0) 
    }

    function ClearScreen() {
        setResult(0),
        setOperation(0)
    }

    
    return (
        <View style={styles.container}>

            {/* Judul */}
            <View style={styles.headingBar}>
                <Text style={styles.heading}>Calculator</Text>
            </View>

            <View style={styles.bar}>
                {/* layar Hasil */}
                <View style={styles.calcBarResult}>
                    <Text style={styles.textResult}> {result} </Text>
                </View>

                {/* layar Kalkulasi */}
                <View style={styles.calcBar}>
                    <Text style={styles.textCalc}> {operation}</Text>
                </View>
            </View>

            {/* button */}
            <View style={styles.btnArea}>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(1)}>
                    <Text style={styles.textBtn}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(2)}>
                    <Text style={styles.textBtn}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('-')}>
                    <Text style={styles.textBtnOpr}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('+')}>
                    <Text style={styles.textBtnOpr}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(3)}>
                    <Text style={styles.textBtn}>3</Text >
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(4)}>
                    <Text style={styles.textBtn}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('/')}>
                    <Text style={styles.textBtnOpr}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('*')}>
                    <Text style={styles.textBtnOpr}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(5)}>
                    <Text style={styles.textBtn}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(6)}>
                    <Text style={styles.textBtn}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('%')}>
                    <Text style={styles.textBtnOpr}>%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Answer()}>
                    <Text style={styles.textBtnOpr}>=</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(7)}>
                    <Text style={styles.textBtn}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(8)}>
                    <Text style={styles.textBtn}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(9)}>
                    <Text style={styles.textBtn}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation(0)}>
                    <Text style={styles.textBtn}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnClear} onPress={() => ClearScreen()}>
                    <Text style={styles.textBtnClear}>Clear</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: vh(100),
        backgroundColor: color2.fouth,
    },
    headingBar: {
        width: vw(100),
        top: 50,
    },
    heading: {
        color: color2.secondary,
        fontSize: 30,
        marginStart: 20
    },
    bar: {
        backgroundColor: color2.white2,
        borderWidth: 2,
        borderColor: color2.secondary,
        width: vw(93),
        height: vh(18),
        top: 50,
        marginStart: 10,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    calcBarResult: {
        position: 'absolute',
        // top: 170,
        top: -10,
        // right: 30
        right: 10
    },
    textResult: {
        color: '#243441',
        fontSize: 60,
        fontWeight: 'bold',
        marginEnd: -8,
        opacity: 1
    },
    calcBar: {
        position: 'absolute',
        // top: 250,
        top: 65,
        // right: 30
        right: 10
    },
    textCalc: {
        color: '#243441',
        marginEnd: 10,
        fontSize: 40,
        fontWeight: 'bold',
        opacity: 0.5
    },
    btnArea: {
        position: 'absolute',
        // backgroundColor: 'white',  
        width: vw(95),
        height: vh(60),
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        bottom: 55,
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#B0B8B4FF',
        justifyContent: 'center',
        borderWidth: 2,
        alignItems: 'center',
        width: 70,
        height: 70,
        margin: 7,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textBtn: {
        color: colors.bg,
        fontSize: 40,
        textAlign: 'center',
        // marginTop: 12,
        // padding: 10,
        fontWeight: 'bold'
    },
    btnOperator: {
        backgroundColor: color2.secondary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        margin: 7,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textBtnOpr: {
        color: color2.fouth,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnClear: {
        backgroundColor: color2.third,
        width: vw(90),
        height: 80,
        margin: 8,
        borderWidth: 2,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textBtnClear: {
        color: color2.primary,
       
        fontSize: 40,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold'
    }
});
