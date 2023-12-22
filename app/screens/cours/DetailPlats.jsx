import { View, Text, Animated, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import { SharedElement } from 'react-navigation-shared-element';
import { IconsButton } from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  BottomSheet  from 'react-native-raw-bottom-sheet';
import { CheckBox } from 'react-native-elements';

export default function DetailPlats({route, navigation}) {
  const { plat } = route.params;
  const bottomSheetRef = useRef(null);
  const [cart, setCart] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [text, setText] = useState('');
  const [checkboxState, setCheckboxState] = useState({});

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxState({
      ...checkboxState,
      [checkboxName]: !checkboxState[checkboxName],
    });
  };

  function BackHandler() {
    navigation.goBack()
  }

  const addToCart = () => {
    setCart(cart + 1)
    setShowCounter(true);
  }
 
  function renderHeader() {

    return(
      <Animated.View
       style={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        height: 250,
        overflow: "hidden",
       }}
      >
      
          <SharedElement 
          //id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
         style={[StyleSheet.absoluteFillObject]}
       >
         <Image 
         source={plat.thumbnail}
          resizeMode="cover"
           style={{
             height: "100%",
             width: "100%",
             borderBottomLeftRadius: 60,
           }}
         />

       </SharedElement>
       
        {/* titre */}
        <Animated.View
        style={{
          position: "absolute",
          bottom: 70,
          left: 30
        }}
        >
          <SharedElement
          // id={`${sharedElementPrefix}-CategoryCard-title-${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}
          >
            <Text
            style={{
              position: "absolute",
              color: COLORS.white,
              ...FONTS.h1
            }}
            >
              {plat.name}
            </Text>
          </SharedElement>
        </Animated.View>

        {/* back button */}

        <Animated.View 
          //style={headerFadeAnimatedStyle}

        >
         <IconsButton 
           icon={icons.back}
           iconStyle={{
            tintColor: COLORS.black
           }}
           containerStyle={{
            position: "absolute",
            top: 40,
            left: 20,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            backgroundColor: COLORS.white,

           }}
         onPress={() =>{BackHandler()}}
         
         />
        </Animated.View>

         {/* category image component */}

         <Animated.Image
           source={images.mobile_image}
           resizeMode="contain"
           style={{
            position: "absolute",
            right: 40,
            bottom: -40,
            width: 100,
            height:200,

           }}
         
         ></Animated.Image>
        

      </Animated.View>
    )
  }

  function renderDetail() {
    
    return(
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            marginBottom: SIZES.base,
            marginHorizontal: 22
          }}

        >
          {/* result */}
          <Text
            style={{
              flex: 1,
              ...FONTS.body2
            }}
          >
            {plat.name}

          </Text>

          {/* filter button */}
        
          <IconsButton
            icon={icons.filter}
            iconStyle={{
              width: 20,
              height: 20,
            }}
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: COLORS.primary
            }}
            onPress={() => {  
              bottomSheetRef.current.open()
            } } 
            >
             
          <Text style={{ color: "white", fontSize: 12 }}>
            {cart}
          </Text>
              </IconsButton>

        </View>
        <View>
          <Text 
          style={{marginHorizontal: 20, fontSize: SIZES.body3}}
          
          >
            {plat.description}
          </Text>
        </View>
        <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginHorizontal: 22

                  }}>
                  <View style={{flexDirection: 'row', }}>
                    <Icon name="star" size={20} color={COLORS.orange} />
                    <Icon name="star" size={20} color={COLORS.orange} />
                    <Icon name="star" size={20} color={COLORS.orange} />
                    <Icon name="star" size={20} color={COLORS.orange} />
                    <Icon name="star" size={20} color={COLORS.grey} />
                  </View>
                  
                  <Text style={{fontSize: 20, color: COLORS.grey, marginBottom: 12,}}><Icon name="favorite" size={30} color={COLORS.reddeconnectColor} /> 102</Text>
                </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          
        }}>
        <View style={{
            flex: 1,
            marginHorizontal: 22,
            fontSize: SIZES.body2,
          }}>
        <Text style={{fontSize: SIZES.body2, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>Liste des Ingrédients</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            {plat.ingredients.slice(0, Math.ceil(plat.ingredients.length / 2)).map((ingredient, index) => (
              <Text style={{
                color: COLORS.cyanColor
              }} 
              key={index}>{ingredient}
              </Text>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            {plat.ingredients.slice(Math.ceil(plat.ingredients.length / 2)).map((ingredient, index) => (
              <Text style={{
                color: COLORS.cyanColor
              }} 
              key={index}>{ingredient}
              </Text>
            ))}
          </View>
        </View>
        </View>

        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: 'space-between',
          marginHorizontal: 24
          }}>
          <Text style={{
          fontSize: SIZES.body1,
          color: COLORS.blackColor,
         
          }}>Prix
          </Text>
          <Text style={{
          fontSize: SIZES.body1,
          color: COLORS.primary,
          textAlign: 'right',
         
          }}>{plat.price} Frs
          </Text>
        </View>
   
                <TouchableOpacity
      onPress={() => {addToCart()}}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary, // couleur de fond du bouton
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 28
      }}
    >
      <Text style={{ fontSize: SIZES.body2, color: 'white', marginRight: 5  }}>Ajout au panier</Text>
      <Icon name="shopping-cart" size={30} color="white" />
      <View style={{
              backgroundColor: COLORS.primary2,
              borderRadius: 20,
              width: 22,
              height: 22,
              position: "relative",
              left: -14,
              top: -14,
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Text style={{ color: "white", fontSize: 12 }}>
                {cart}
              </Text>
            </View> 
    </TouchableOpacity>
    <BottomSheet
            ref={bottomSheetRef}
            closeOnDragDown={true}
            height={350}
            openDuration={250}
            customStyles={{
              container: {
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: '#f1f3f6'
              },
            }}
          >
      <View>
        <Text style={{textAlign: 'center', fontSize: SIZES.body2}}>recommandation client</Text>
        <View style={styles.containe}>
      <TextInput
        style={styles.input}
        placeholder="Entrez vos restrictions alimentaires"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
    </View>
    <Text style={{fontSize: SIZES.body2, fontWeight: 500, marginLeft: 22, marginTop: 12, color: COLORS.black}}>je ne veux pas les ingredients: </Text>
    <View style={styles.contain}>
            <View style={styles.row}>
              <Text style={styles.item}>Cube</Text>
              <CheckBox
                checked={checkboxState.cube}
                onPress={() => handleCheckboxChange('cube')}
              />
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
              <Text style={styles.item}>Epices</Text>
              <CheckBox
                checked={checkboxState.epices}
                onPress={() => handleCheckboxChange('epices')}
              />
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
              <Text style={styles.item}>Sel</Text>
              <CheckBox
                checked={checkboxState.sel}
                onPress={() => handleCheckboxChange('sel')}
              />
            </View>
          </View>
      </View>

          </BottomSheet>
        </View>
    )
  }
  return (
    <>
       {/* Header */}
    {renderHeader()}

    {/* component */}
    {renderDetail()}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
     alignItems: 'center',
     justifyContent: 'space-evenly'
  },
  containe: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  validationText: {
    color: 'red',
    marginTop: 8,
  },
  contain: {
    flexDirection: 'column',
    paddingHorizontal: 16,
   
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    marginHorizontal: 10,
    color: COLORS.accent
  },
  separator: {
    //flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: -8,
    marginHorizontal: 22
  },
})