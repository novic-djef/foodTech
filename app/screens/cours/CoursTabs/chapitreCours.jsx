import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'

import { COLORS, SIZES, icons, images, dummyData, FONTS} from '../../../constants'
import { IconLabel, HorizontalCourses, LineDivider,TextButton } from '../../../components'

const ChapitreCours = () => {

     function renderHerder() {
        return(
<View
  style={{
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    
  }}
>
    {/* titre */}
    <Text
      style={{
        ...FONTS.h2
      }}
    >
        {dummyData?.course_details?.title}
    </Text>
    {/* durer des cours */}
     <View
       style={{
        flexDirection: 'row',
        marginTop: SIZES.base

       }}
     >
        <Text
          style={{
            color: COLORS.gray30,
            ...FONTS.body4
          }}
        >
            {dummyData?.course_details?.number_of_students}

        </Text>
        <IconLabel 
        icon={icons.time}
          label={dummyData?.course_details?.duration}
          containerStyle={{
            marginLeft: SIZES.radius
          }}
          iconStyle={{
            width: 15,
            height: 15,
          }}
          labelStyle={{
            ...FONTS.body4
          }}
        />

     </View>
     {/* Prefesseur */}
      <View
         style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: 'center'
            
         }}
      >
        <Image
        source={images.novic}
        style={{
            width: 50,
            height: 50,
            borderRadius: 25
        }}
        />
        {/* nom && titre */}

        <View
           style={{
            flex: 1,
            marginLeft: SIZES.base,
            justifyContent: 'center'
           }}
        
        >
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 18
              }}
            >
     {dummyData?.course_details?.instructor?.name}

            </Text>

            <Text
              style={{
                ...FONTS.h3,
              }}
            >
        {dummyData?.course_details?.instructor?.title}

            </Text>
        </View>
{/* text button */}
<TextButton
 label="+ Suivre"
 contentContainerStyle={{
   width: 80,
   height: 35,
   borderRadius: 20
 }}
 labelStyle={{
    ...FONTS.h3
 }}

/>
        </View>

    

</View>
        )
     }
function renderChapitre( ){
    return(
        <View
          style={{

          }}
        
        >
{dummyData?.course_details?.videos.map((item, index) =>{
    return(
        <View
         key={`Videos-${index}`}
         style={{
            alignItems: 'center',
            height: 70,
            backgroundColor: item?.is_playing ? 
            COLORS.additionalColor11 : null
         }}
        >
            <View
             style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.padding,
                alignItems: "center",
                height: 70

             }}
            >
          {/* icons */}

          <Image 
          source={item?.is_complete ? icons.completed :
             item?.is_playing ? icons.play_1 : icons.lock}
             style={{
                width: 40,
                height: 40,
             }}
          
          />
          {/* titre && durée */}
          <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius
          }}>
            <Text style={{...FONTS.h3}}>{item?.title}</Text>
            <Text style={{color: COLORS.gray30, ...FONTS.body4}}>{item?.duration}</Text>
          </View>



           {/* taill && status */}
           <View style={{
            flexDirection: "row"
           }}>
          <Text
          style={{
            color: COLORS.gray30,
            ...FONTS.body4
          }}>
            {item?.size}</Text>

{/* status */}
<Image 
source={item?.is_downloaded ?
     icons.completed : icons.download}
     style={{
        marginLeft: SIZES.base,
        width: 25,
        height: 25,
        tintColor: item?.is_lock ? COLORS.additionalColor4 : 
        null
     }}

/>
           </View>

            </View>
{/* progressBar */}
      {item.is_playing && 
      <View
      style={{
       position: "absolute",
       bottom: 0,
       left: 0,
       height: 5,
       width: item?.progress,
       backgroundColor: COLORS.primary
      }}>
        
        
        </View>}


        </View>
    )
})}
        </View>
    )
}


function renderCoursPopulaire() {
    return(
        <View
        
        style={{
            marginTop: SIZES.padding
        }}>
            {/* header */}
            <View
            style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.padding
            }}
            >
                <Text
                  style={{
                    flex: 1,
                    ...FONTS.h2
                  }}
                >
                    Cours Populaire
                </Text>
                <TextButton 
                  contentContainerStyle={{
                    width: 80,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                    
                  }}
                  label="tous voir"
                
                
                />


            </View>


            {/* cours populaire */}
            <FlatList 
              data={dummyData.courses_list_2}
              listkey="PopularCours"
              scrollEnabled={false}
              keyExtractor={item => `PopularCours-${item.id}`}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding
              }}
              renderItem={({item, index}) => (
                <HorizontalCourses 
                   course={item}
                   containerStyle={{
                    marginVertical: SIZES.padding,
                    marginTop: index == 0 ? SIZES.radius :
                     SIZES.padding
                   }}
                
                 />
              )}
            ItemSeparatorComponent={() => (
                <LineDivider />
            )}
            
            />

        </View>
    )
}

  return (
    <ScrollView
      style={{

      }}
    >
        {/* header */}
        {renderHerder()}


        {/* line Driver */}
        <LineDivider 
          style={{
            height: 1,
            marginVertical: SIZES.radius

          }}
        />


        {/* chapitre */}

        {renderChapitre()}


        {/* les cours les plus populaire */}
       {renderCoursPopulaire()}

    </ScrollView>
  )
}

export default ChapitreCours