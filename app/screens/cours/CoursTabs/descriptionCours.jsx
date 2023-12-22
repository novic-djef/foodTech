
import { View, Text, TextInput, Keyboard, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES, FONTS, dummyData, icons } from '../../../constants'
import { IconsButton, IconsLabelButtom } from '../../../components'

const CommentSection = ({commentItem, commentOption, replies}) => {
    return(
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding
          }}
        >
            {/* profile photo */}

            <Image 
              source={commentItem.novic}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20
              }}
            />
            {/* name & comment */}
            <View
             style={{ 
                flex: 1,
                marginTop: 3,
                marginLeft: SIZES.radius
             }}
            >
                {/* name */}

                <Text style={{...FONTS.h3}}>
                    {commentItem?.name}
                </Text>

                {/* Comment */}
                <Text style={{...FONTS.body4}}>
                    {commentItem?.comment}
                </Text>

                {/* comment Option */}
                  {commentOption}


                  {/* Replice Section */}
                  {replies}
            </View>
        </View>
    )
} 

const DescriptionCours = () => {
const [footerPosition, setFooterPosition] = useState(0);
const [footerHeight, setFooterHeight] = useState(0);

useEffect(() => {
  //ecoute la cle
  const showSubscription = Keyboard.addListener(
    "keyboardWillShow", (e) => {
      setFooterPosition(e.endCoordinates.height)
    }
  )
  const hideSubscription = Keyboard.addListener(
    "keyboardWillHide", (e) => {
    setFooterPosition(0)
  })
return() => {
  showSubscription.remove();
  hideSubscription.remove();
}

}, [])

function renderDiscussion() {
    return(
        <View
          style={{
            flex: 1,

          }}
        >
        <FlatList 
          data={dummyData?.course_details?.discussions}
          keyExtractor={item => `Discussion-main-${item.id}`}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding,
            paddingBottom: 70
          }}
          renderItem={({item, index}) => (
           <CommentSection  
           commentItem={item}
           commentOption={
             <View
               style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                paddingVertical: SIZES.base,
                borderTopWidth: 1,
                borderColor: COLORS.gray20
               }}
             >
                {/* comment */}
                <IconsLabelButtom 
                label={item?.no_of_comments}
                  iconStyle={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                  }}
                  labelStyle={{
                    marginLeft: 3,
                    color: COLORS.black,
                    ...FONTS.h4
                  }}
                
                />


                {/* like */}
                <IconsLabelButtom 
                   icon={icons.heart}
                   label={item?.no_of_likes}
                   containerStyle={{
                   marginLeft: SIZES.radius,   
                   }}
                   labelStyle={{
                    marginLeft: 3,
                    color: COLORS.black,
                    ...FONTS.h4
                   }}
                
                />


                {/* Date */}
             <Text
               style={{
                flex: 1,
                textAlign: 'right',
                ...FONTS.h4
               }}
             >
                {item?.posted_on}
                </Text> 

             </View>
           }
           replies={
            <FlatList
                data={item?.replies}
                scrollEnabled={false}
                keyExtractor={item => `Discution-Replies-${item.id}`}
                renderItem={({item, index}) => (
                  <CommentSection
                     commentItem={item}
                     commentOption={ 
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: SIZES.radius,
                          paddingVertical: SIZES.base,
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor: COLORS.gray20

                        }}
                      >
                         {/* reply */}
                         <IconsLabelButtom
                           icon={icons.reply}
                           label="Reply"
                           labelStyle={{
                            marginLeft: 5,
                            color: COLORS.black,
                            ...FONTS.h4
                           }}
                         />

                         {/* like */}
                         <IconsLabelButtom
                           icon={icons.heart_off}
                           label="Like"
                           containerStyle={{
                            marginLeft: SIZES.radius
                           }}
                           labelStyle={{
                            marginLeft: 3,
                            color: COLORS.black,
                            ...FONTS.h4
                           }}
                         />

                         {/* Date */}
                         <Text
                           style={{
                            flex: 1,
                            textAlign: "right",
                            ...FONTS.h4
                           }}
                         >
                          {item?.posted_on}
                         </Text>
                      </View>
                     }
                  />
                )}
 
            />
           }
           />
          )}
        
        />

        </View>
    )
          }
    function renderFooterTextInput() {
      return(
        <View
         style={{
          flexDirection: "row",
          position: "absolute",
          bottom: footerPosition,
          left: 0,
          right: 0,
          height: footerHeight,
          borderTopEndRadius: 26,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
          backgroundColor: COLORS.gray10
         }}
           
        >
          <TextInput
            style={{
              flex: 1,
              marginRight: SIZES.base,
              ...FONTS.body3
            }}
            multiline
            placeholder='Ecrivez votre commentaire...'
            placeholderTextColor={SIZES.gray80}
            onContentSizeChange={(event) => {
              const height = event.nativeEvent.contentSize.height

              if(height <= 60) {
                setFooterHeight(60)

              } else if (height > 60 && height <  100) {
                setFooterHeight(height)
              } else if( height > 100) {
                setFooterHeight(100)
              }
             
            }}
          
          />
          <View
           style={{
            alignItems: "center",
            justifyContent: "center"
           }}
          >
          <IconsButton
             icon={icons.send}
             iconStyle={{
              height: 25,
              width: 25,
              tintColor: COLORS.primary
             }}
          />
          </View>

        </View>
      )
    }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
        {/* Discussion */}
        {renderDiscussion()}

        {/* footer */}
        {renderFooterTextInput()}
     
    </View>
  )
}

export default DescriptionCours