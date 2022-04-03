import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Icon, IconButton, Modal, modalVisible, Text, Pressable, Button, FormControl, Input, Checkbox, } from 'native-base'
import { colors } from '../../assets/colors';
import axios from 'axios';
import { vh } from 'react-native-expo-viewport-units';
import { Feather } from '@expo/vector-icons'


export default function Todos() {
  // state modal update
  const [showModal, setShowModal] = useState(false);

  // state todos from database
  const [taskItems, setTaskItems] = useState([]);

  const baseUrl = "https://api.kontenbase.com/query/api/v1/1cc2d483-8579-4962-85c6-39fd527e1ca6/todos"

  // get todos
  const getTodos = async () => {
    const data = await axios.get(`${baseUrl}`)
    setTaskItems(data.data)
  }

  // create todo
  const [tod, setTod] = useState();
  const addNewTodo = async () => {
    try {
      const response = await axios.post(`${baseUrl}`, tod);
      getTodos(),
        setTod("")
    } catch (error) {
      alert("Falied add todo");
    }
  };

  // btn update todo
  const [idUpdate, setIdUpdate] = useState()
  const btnUpdateTodo = async (id) => {
    try {
      setShowModal(true),
        setIdUpdate(id)
    } catch (error) {
      alert("Failed to delete resource");
      console.log(error)
    }
  };

  // update todo
  const updateTodo = async () => {
    try {
      const response = await axios.patch(`https://api.kontenbase.com/query/api/v1/1cc2d483-8579-4962-85c6-39fd527e1ca6/todos/${idUpdate}`, tod)
      console.log(response.data);
      setShowModal(false)
      setTaskItems([])
      const data = await axios.get(`${baseUrl}`)
      setTaskItems(data.data)
    } catch (error) {
      alert("Failed to delete resource");
      console.log(error)
    }
  };

  // done task
  const [done, setDone] = useState({status: 'done'})
  const doneTodo = async (id) => {
    const idDone = id
    try {
      const response = await axios.patch(`https://api.kontenbase.com/query/api/v1/1cc2d483-8579-4962-85c6-39fd527e1ca6/todos/${idDone}`, done)
      console.log(response.data);
      setTaskItems([])
      const data = await axios.get(`${baseUrl}`)
      setTaskItems(data.data)
    } catch (error) {
      alert("Failed to delete resource");
      console.log(error)
    }
  };

  //cancel done
  const [doing, setDoing] = useState({status: 'doing'})
  const cancelTodo = async (id) => {
    const idDoing = id
    try {
      const response = await axios.patch(`https://api.kontenbase.com/query/api/v1/1cc2d483-8579-4962-85c6-39fd527e1ca6/todos/${idDoing}`, doing)
      console.log(response.data);
      setTaskItems([])
      const data = await axios.get(`${baseUrl}`)
      setTaskItems(data.data)
    } catch (error) {
      alert("Failed to delete resource");
      console.log(error)
    }
  };

  // delete todo
  const onDeleteFormHandler = async (id) => {
    const idT = id
    try {
      const response = await axios.delete(`https://api.kontenbase.com/query/api/v1/1cc2d483-8579-4962-85c6-39fd527e1ca6/todos/${idT}`)
      getTodos()
    } catch (error) {
      alert("Failed to delete resource");
      console.log(error)
    }
  };


  useEffect(() => {
    getTodos()
  }, [])

  return (

    <View accessible={true} style={styles.main}>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" style={{ bottom: 100 }}>
          <Modal.CloseButton />
          <Modal.Header>Update Todo</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input onChangeText={(text) => setTod({ task: text })} value={tod} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={() => updateTodo()}>
                Update
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <ScrollView >
        <View style={styles.todoListArea}>
          <Text style={styles.sectionTitle}>What's Up Today !!!</Text>
          <View style={styles.items}>
            {taskItems.map((item) => {
              return (
                <View style={styles.item} key={item._id}>
                  
                    {item.status == 'done' ?
                      <View style={styles.itemLeft}>
                      <Checkbox
                        onPress={() => cancelTodo(item._id)}
                        isChecked={true}
                        style={styles.checkbox}
                        colorScheme="green"
                      /> 
                      <Text strikeThrough style={styles.itemText} >{item.task}</Text>
                      </View>
                      : 
                      <View style={styles.itemLeft}>
                      <Checkbox
                        onPress={() => doneTodo(item._id)}
                        isChecked={false}
                        style={styles.checkbox}
                        colorScheme="green"
                      />
                      <Text  style={styles.itemText} >{item.task}</Text>
                      </View>
                      }
                    
                  

                  <View style={styles.btnModif}>
                    {item.status == 'done' ? null :
                      <View style={styles.btnUpdate}>
                        <IconButton
                          onPress={() => btnUpdateTodo(item._id)}
                          icon={
                            <Icon
                              as={Feather}
                              name="edit"
                              color={'yellow.500'}
                            />}
                        />
                      </View>}
                    {/* <Text style={styles.removeTask} onPress={() => btnUpdateTodo(item._id)}>U</Text> */}

                    <View style={styles.btnRemove} >
                      <IconButton
                        value={item._id}
                        onPress={() => onDeleteFormHandler(item._id)}
                        icon={
                          <Icon
                            as={Feather}
                            name="trash-2"
                            color={'danger.700'}
                          />}
                      />
                      {/* <Text style={styles.removeTask} value={item._id} onPress={() => onDeleteFormHandler(item._id)}>X</Text> */}
                    </View>

                  </View>
                </View>
              )
            })}
          </View>
        </View>

      </ScrollView>
      <View style={styles.inputArea}>
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Mau apa aja nih ?'} onChangeText={(text) => setTod({ task: text, status: 'doing' })} value={tod} />
          <TouchableOpacity onPress={addNewTodo}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.bg,
    height: vh(100)
  },
  todoListArea: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    top: 19,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    paddingVertical: 4
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputArea: {
    width: '100%'
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 40,
    borderColor: colors.seondary,
    borderWidth: 1,
    width: '75%',
    bottom: -35,
    marginEnd: -60
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    bottom: -35,
    marginStart: 35
  },
  addText: {
    fontSize: 25,
    top: 3,
    color: colors.white
  },
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
    height: 50
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkbox: {
    marginEnd: 10
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  btnRemove: {
    // backgroundColor: colors.primary,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: -7

  },
  btnUpdate: {
    // backgroundColor: colors.seondary,
    borderWidth: 1,
    borderColor: colors.yellow,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 4
  },
  btnModif: {
    flexDirection: 'row'
  },
  removeTask: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: 'white'
  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});