import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { vh, vw } from 'react-native-expo-viewport-units'
import { colors } from '../../assets/colors'


// import {colors} from '../../assets/colors'

const App = () => {

    const [operation, setOperation] = useState("")
    const [operator, setOperator] = useState("")
    const [answer, setAnswer] = useState("")

    function Calculation(symb) {
        if (symb == 'Clear') {
            setOperation('')
            setAnswer('')
            setOperator('')
            return
        }
        if (symb == "+") {
            setOperation(prev => prev + symb)
            setOperator(symb)
            return
        }
        if (symb == "-") {
            setOperation(prev => prev + symb)
            setOperator(symb)
            return
        }
        if (symb == "*") {
            setOperation(prev => prev + symb)
            setOperator(symb)
            return
        }
        if (symb == "/") {
            setOperation(prev => prev + symb)
            setOperator(symb)
            return
        }
        if (symb == "%") {
            setOperation(prev => prev + symb)
            return
        }
        if (symb == ".") {
            setOperation(prev => prev + symb)
            return
        }

        let detectAlreadyUpdate = false

        if (operator == "+") {
            let arr = operation.split("+")
            let n = arr[arr.length - 1] + symb
            let b = arr[arr.length - 2] + "+"

            n = formatNum(n)

            let f = ''

            for (var i = 0; i < arr.length - 2; i++) {
                f += arr[i] + "+"
            }

            console.log("arr " + arr)
            console.log(f + "" + b + " " + n)

            setOperation(f + b + n)
            detectAlreadyUpdate = true

        }

        // perhitngan - +
        if (operator == "-") {
            let arr = operation.split("-")
            let n = arr[arr.length - 1] + symb
            let b = arr[arr.length - 2] + "-"

            n = formatNum(n)

            let f = ''

            for (var i = 0; i < arr.length - 2; i++) {
                f += arr[i] + "-"
            }

            console.log("arr " + arr)
            console.log(f + "" + b + " " + n)

            setOperation(f + b + n)
            detectAlreadyUpdate = true
        }

        if (operator == "*") {
            let arr = operation.split("*")
            let n = arr[arr.length - 1] + symb
            let b = arr[arr.length - 2] + "*"

            n = formatNum(n)

            let f = ''

            for (var i = 0; i < arr.length - 2; i++) {
                f += arr[i] + "*"
            }

            console.log("arr " + arr)
            console.log(f + "" + b + " " + n)

            setOperation(f + b + n)
            detectAlreadyUpdate = true
        }

        if (operator == "/") {
            let arr = operation.split("/")
            let n = arr[arr.length - 1] + symb
            let b = arr[arr.length - 2] + "/"

            n = formatNum(n)

            let f = ''

            for (var i = 0; i < arr.length - 2; i++) {
                f += arr[i] + "/"
            }

            console.log("arr " + arr)
            console.log(f + "" + b + " " + n)

            setOperation(f + b + n)
            detectAlreadyUpdate = true
        }

        if (detectAlreadyUpdate == false) {
            setOperation(prev => formatNum(prev + symb))

        }

    }

    function formatNum(number) {
        number = parseFloat(number.replace(/,/g, ''))
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    }

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }

    async function solve() {
        let newCalc = replaceAll(operation, ",", '')
        newCalc = replaceAll(newCalc, "x", '*')
        newCalc = replaceAll(newCalc, "÷", '/')
        newCalc = replaceAll(newCalc, "%", '/100')
        console.log('calc')
        console.log(newCalc)
        setAnswer(formatNum(JSON.stringify(eval(newCalc))))
    }

    function deleteoperator() {
        setOperation(operation.slice(0, -1))
    }

    if (Platform.OS == 'web') {
        operationFont = 270
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
                    <Text style={styles.textResult}> {answer} </Text>
                </View>

                {/* layar Kalkulasi */}
                <View style={styles.calcBar}>
                    <Text style={styles.textCalc}> {operation}</Text>
                </View>
            </View>

            {/* button */}
            <View style={styles.btnArea}>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('1')}>
                    <Text style={styles.textBtn}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('2')}>
                    <Text style={styles.textBtn}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('-')}>
                    <Text style={styles.textBtnOpr}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('+')}>
                    <Text style={styles.textBtnOpr}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('3')}>
                    <Text style={styles.textBtn}>3</Text >
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('4')}>
                    <Text style={styles.textBtn}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('/')}>
                    <Text style={styles.textBtnOpr}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('*')}>
                    <Text style={styles.textBtnOpr}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('5')}>
                    <Text style={styles.textBtn}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('6')}>
                    <Text style={styles.textBtn}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => Calculation('%')}>
                    <Text style={styles.textBtnOpr}>%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnOperator} onPress={() => solve()}>
                    <Text style={styles.textBtnOpr}>=</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('7')}>
                    <Text style={styles.textBtn}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('8')}>
                    <Text style={styles.textBtn}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('9')}>
                    <Text style={styles.textBtn}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => Calculation('0')}>
                    <Text style={styles.textBtn}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnClear} onPress={() => Calculation('Clear')}>
                    <Text style={styles.textBtnClear}>Clear</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App


const styles = StyleSheet.create({
    container: {
        height: vh(100),
        backgroundColor: colors.bg
    },
    headingBar: {
        width: vw(100),
        top: 50,
    },
    heading: {
        color: colors.primary,
        fontSize: 30,
        marginStart: 20
    },
    bar: {
        backgroundColor: 'white',
        width: vw(93),
        height: vh(18),
        top: 60,
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
        top: 0,
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
        top: 80,
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
        // backgroundColor: '#ffffff',  
        width: vw(94),
        height: vh(60),
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        bottom: 40,
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: colors.seondary,
        width: 70,
        height: 70,
        margin: 6,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: colors.bg,
        fontSize: 40,
        textAlign: 'center',
        // marginTop: 11,
        fontWeight: 'bold'
    },
    btnOperator: {
        backgroundColor: '#243441',
        width: 70,
        height: 70,
        margin: 6,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtnOpr: {
        color: colors.bg,
        fontSize: 40,
        textAlign: 'center',
        // marginTop: 12,
        fontWeight: 'bold'
    },
    
    btnClear: {
        backgroundColor: colors.primary,
        width: vw(91),
        height: 75,
        margin: 5,
        marginHorizontal: 5,
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
        color: colors.white,
        fontSize: 40,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold'
    }
});
