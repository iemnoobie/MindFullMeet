import { useState } from "react";
import {View, Text, Image, ScrollView, Button, Pressable, Modal, TouchableOpacity, SafeAreaView, StyleSheet, Linking} from "react-native";
const imageone = require("../images/m.png");
const balanceddiet = require("../images/BalancedDiet.jpg");
const ear = require("../images/Hear.png")
const breath = require("../images/Breathe.jpg")
const meditate = require("../images/Meditate.jpg")
const mind = require("../images/Mind.jpg")
const exercise = require("../images/Exercise.png")
const mindfuleat = require("../images/Mindfuleating.jpg")
const mindfullisten = require("../images/Mindfullisten.jpg")
const mindfulbreath = require("../images/Mindfulbreath.jpg")
const meditation = require("../images/Meditation.jpg")
const mindset = require("../images/Mindset.jpg")
const exercise2 = require("../images/Exercise.jpg")

const HomeScreen = () => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isEatVisible, setisEatVisible] = useState(false);
  const [isHearVisible, setisHearVisible] = useState(false);
  const [isBreathVisible, setisBreathVisible] = useState(false);
  const [isMeditateVisible, setisMeditateVisible] = useState(false);
  const [isMindsetVisible, setisMindsetVisible] = useState(false);
  const [isExerciseVisible, setisExerciseVisible] = useState(false);
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <View>
      <Image source={imageone}
      style={{width:50,height:50}}></Image>
      <Pressable  onPress={()=> setisModalVisible(true)}>
      <Image style={{width:30,height:30,left:320,bottom:40}}
      source={{uri:"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"}}></Image>
      </Pressable>
      </View>

      <ScrollView>
      {/*EATING*/}
      <View style={[styles.box,styles.whiteBg,styles.boxShadow]}>
      <TouchableOpacity 
            onPress={()=> setisEatVisible(true)}>
            <Image style={{borderRadius:35,width:100,height:100,left:20,top:5,borderColor:'#1c1b1b',borderWidth:2}}
                  source={balanceddiet}></Image>
              </TouchableOpacity>
      <Text style={{fontSize:17,textAlign:'right',color:'black',flex:0.8,paddingTop:38}}>MINDFUL EATING</Text>
      </View>

      {/*Hearing*/}
      <View style={[styles.box, styles.whiteBg, styles.boxShadow]}>
      <TouchableOpacity 
            onPress={()=> setisHearVisible(true)}>
        <Image style={{borderRadius:35,width:100,height:100,left:20,top:5,borderColor:'#1c1b1b',borderWidth:2}}
               source={ear}></Image>
              </TouchableOpacity>
      <Text style={{fontSize:17,textAlign:'right',color:'black',flex:0.8,paddingTop:38}}>MINDFUL HEARING</Text>
      </View>

      
      <View style={[styles.box, styles.whiteBg, styles.boxShadow]}>
      <TouchableOpacity 
            onPress={()=> setisBreathVisible(true)}>
            <Image style={{borderRadius:35,width:100,height:100,left:20,top:5,borderColor:'#1c1b1b',borderWidth:2}}
                  source={breath}></Image>
              </TouchableOpacity>
      <Text style={{fontSize:17,textAlign:'right',color:'black',flex:0.85,paddingTop:38}}>MINDFUL BREATHING</Text> 
      </View>

      {/*Meditation*/}
      <View style={[styles.box, styles.whiteBg, styles.boxShadow]}>
      <TouchableOpacity 
            onPress={()=> setisMeditateVisible(true)}>
            <Image style={{borderRadius:35,width:100,height:100,left:20,top:5,borderColor:'#1c1b1b',borderWidth:2}}
                  source={meditate}></Image>
              </TouchableOpacity> 
      <Text style={{fontSize:17,textAlign:'right',color:'black',flex:0.7,paddingTop:38}}>MEDITATION</Text>
      </View>
      
      {/*Mindset*/}
      <View style={[styles.box, styles.whiteBg, styles.boxShadow]}>
      <TouchableOpacity 
            onPress={()=> setisMindsetVisible(true)}>
            <Image style={{borderRadius:35,width:100,height:100,left:20,top:5,borderColor:'#1c1b1b',borderWidth:2}}
                  source={mind}></Image>
              </TouchableOpacity> 
      <Text style={{fontSize:17,textAlign:'right',color:'black',flex:0.65,paddingTop:38}}>MINDSET</Text>
      </View>

      {/*Exercise*/}
      <View style={[styles.box, styles.whiteBg, styles.boxShadow]}>
      <TouchableOpacity 
            onPress={()=> setisExerciseVisible(true)}>
            <Image style={{borderRadius:35,width:100,height:100,left:20,top:5,borderColor:'#1c1b1b',borderWidth:2}}
                    source={exercise}></Image>
              </TouchableOpacity>
      <Text style={{fontSize:17,textAlign:'right',color:'black',flex:0.7,paddingTop:38}}>EXERCISE</Text>
      </View>
      </ScrollView>



      <Modal visible={isModalVisible} onRequestClose={()=> setisModalVisible}
            animationType="slide"
            presentationStyle="pageSheet">

          <View style={{flex:1, backgroundColor:'white', padding:40}}>
           
            <Text>ABOUT</Text>
            <TouchableOpacity 
            onPress={()=> setisModalVisible(false)}>
            
              <Text style={{alignSelf:'center',fontSize:20}}>Close</Text>
              </TouchableOpacity> 
          </View>
          </Modal>

    <Modal visible={isEatVisible} onRequestClose={()=> setisEatVisible}
      animnationType="slide"
      presentationStyle="pageSheet">
        <View style={{flex:1,backgroundColor:'white',padding:40}}>
          <Image source={mindfuleat}
                style={{width:300,height:150}}></Image>
          <Text style={[styles.text]}>
          Mindful eating involves paying closer attention to your food and how it makes you feel.
           In addition to helping you learn to distinguish between physical and emotional hunger,
            it may also help reduce disordered eating behaviors and support weight loss.
          </Text>
          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.healthline.com/nutrition/mindful-eating-guide')}>
                 To know more. VISIT!!
                </Text>
          <TouchableOpacity 
            onPress={()=> setisEatVisible(false)}>
            
              <Text style={{alignSelf:'center',fontSize:20,paddingTop:30}}>Close</Text>
              </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={isHearVisible} onRequestClose={()=> setisHearVisible}
      animnationType="slide"
      presentationStyle="pageSheet">
        <View style={{flex:1,backgroundColor:'white',padding:40}}>
          <ScrollView>
          <Image source={mindfullisten}
                style={{width:300,height:150}}></Image>
          <Text style={[styles.text]}>
          How often have you had a conversation with someone, and thought you were paying attention to him or her, only to realize shortly afterwards that you can't remember what he said?
         Or, perhaps you got distracted while he was speaking and missed the message that he was trying to deliver.
         In today's busy world, it can be hard to shut out distractions such as noise and electronic devices, and our own thoughts or reactions can draw us away from a conversation. 
         So, how can we listen more effectively?
          </Text>
          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.mindful.org/how-to-practice-mindful-listening/')}>
                 To know more. VISIT!!
                </Text>
          <TouchableOpacity 
            onPress={()=> setisHearVisible(false)}>
            
              <Text style={{alignSelf:'center',fontSize:20,paddingTop:40}}>Close</Text>
              </TouchableOpacity>
              </ScrollView>
        </View>
      </Modal>
          
      <Modal visible={isBreathVisible} onRequestClose={()=> setisBreathVisible}
      animnationType="slide"
      presentationStyle="pageSheet">
        <View style={{flex:1,backgroundColor:'white',padding:40}}>
          <ScrollView>
        <Image source={mindfulbreath}
                style={{width:300,height:150}}></Image>
          <Text style={[styles.text]}>
          Mindful breathing is paying attention to the sensation of the breath coming in and out of the body. This means noticing the breath, how and where you feel it in the body without
          trying to change it.Mindful breathing is a deep breathing exercise. Deep breathing uses big breaths and controls the length. This is to achieve a desired outcome,
          like falling asleep or reaching a state of relaxation while in meditation or hypnosis.
          Mindful breathing teaches core mindfulness. Using meditation techniques like mindful breathing can result in a number of proven health benefits.
          </Text>
          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.betterup.com/blog/mindful-breathing#:~:text=Mindful%20breathing%20is%20paying%20attention,breaths%20and%20controls%20the%20length.')}>
                 To know more. VISIT!!
                </Text>
          <TouchableOpacity 
            onPress={()=> setisBreathVisible(false)}>
            
              <Text style={{alignSelf:'center',fontSize:20,paddingTop:40}}>Close</Text>
              </TouchableOpacity>
              </ScrollView>
        </View>
      </Modal>

      <Modal visible={isMeditateVisible} onRequestClose={()=> setisMeditateVisible}
      animnationType="slide"
      presentationStyle="pageSheet">
        <View style={{flex:1,backgroundColor:'white',padding:40}}>
          <ScrollView>
        <Image source={meditation}
                style={{width:300,height:150}}></Image>
          <Text style={[styles.text]}>
          Meditation is a practice in which an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
          Meditation may significantly reduce stress, anxiety, depression, and pain, and enhance peace, perception, self-concept, and well-being.
          </Text>
          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.mindful.org/how-to-meditate/')}>
                 To know more. VISIT!!
                </Text>
          <TouchableOpacity 
            onPress={()=> setisMeditateVisible(false)}>
            
              <Text style={{alignSelf:'center',fontSize:20,paddingTop:40}}>Close</Text>
              </TouchableOpacity>
              </ScrollView>
        </View>
      </Modal>

      <Modal visible={isMindsetVisible} onRequestClose={()=> setisMindsetVisible}
      animnationType="slide"
      presentationStyle="pageSheet">
        <View style={{flex:1,backgroundColor:'white',padding:40}}>
          <ScrollView>
        <Image source={mindset}
                style={{width:300,height:150}}></Image>
          <Text style={[styles.text]}>
          Your mindset is a set of beliefs that shape how you make sense of the world and yourself. It influences how you think, feel, and behave in any given situation. It means that what you believe about yourself impacts your success or failure.
          Mindsets can influence how people behave in a wide range of situations in life. For example, as people encounter different situations, their mind triggers a specific mindset that then directly impacts their behavior in that situation.
          </Text>
          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.verywellmind.com/what-is-a-mindset-2795025')}>
                 To know more. VISIT!!
                </Text>
          <TouchableOpacity 
            onPress={()=> setisMindsetVisible(false)}>
            
              <Text style={{alignSelf:'center',fontSize:20,paddingTop:40}}>Close</Text>
              </TouchableOpacity>
              </ScrollView>
        </View>
      </Modal>

      <Modal visible={isExerciseVisible} onRequestClose={()=> setisExerciseVisible}
      animnationType="slide"
      presentationStyle="pageSheet">
        <View style={{flex:1,backgroundColor:'white',padding:40}}>
          <ScrollView>
        <Image source={exercise2}
                style={{width:300,height:150}}></Image>
          <Text style={[styles.text]}>
          Exercise is intentional physical activity to enhance or maintain fitness and overall health.
          It is performed for various reasons, including weight loss or maintenance, to aid growth and improve strength, develop muscles and the cardiovascular system, hone athletic skills, improve health, or simply for enjoyment. Many individuals choose to exercise outdoors where they can congregate in groups, socialize, and improve well-being as well as mental health.
          </Text>
          <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.healthline.com/nutrition/10-benefits-of-exercise')}>
                 To know more. VISIT!!
                </Text>
          <TouchableOpacity 
            onPress={()=> setisExerciseVisible(false)}>
            
              <Text style={{alignSelf:'center',fontSize:20,paddingTop:40}}>Close</Text>
              </TouchableOpacity>
              </ScrollView>
        </View>
      </Modal>

          </View>

  );
};
const styles = StyleSheet.create({
  box:{
    width: 350,
    height: 110,
    flexDirection: 'row',
     borderRadius:30,
    marginBottom:8 },

    whiteBg:{
      backgroundColor:'white',
    },

    text:{
      fontFamily:'sans-serif-condensed',
      fontSize:25
    },

    boxShadow:{
      shadowColor:'#d8dde6',
      shadowOffset:{
        width:6,
        height:6
      },
      shadowOpacity:0.6
    }


});
export default HomeScreen;