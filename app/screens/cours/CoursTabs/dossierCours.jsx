import { View, ScrollView, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, dummyData, icons } from '../../../constants'
import { TextButton, IconsButton } from '../../../components'


const DossierCours = () => {

function renderStudent() {
    let students = []

    if(dummyData?.course_details?.students.length > 3 ) {
        students = dummyData?.course_details?.students.slice(0,3)
    }else {
        students = dummyData?.course_details?.students
    }
    return(
        <View
        >
            <Text
               style={{
                ...FONTS.h2,
                fontSize: 25
              }}> Etudiants </Text>

              {/* etudient */}
              <View
                style={{
                    flexDirection: "row",
                    marginTop: SIZES.radius,
                    alignItems: "center"
                }}              
              
              >
                {students.map((item, index) => {
                    return(
                        <View
                        key={`students-${index}`}
                          style={{
                            marginLeft: index > 0 ? SIZES.radius : 0
                          }}
                        >
                            <Image 
                              source={item?.thumbnail}
                              style={{
                                width: 80,
                                height: 80,
                              }}
                            />


                        </View>
                    )
                })}
                {dummyData.course_details?.students.length > 3 && 
                    <TextButton 
                    label="tous voirs"
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.h3
                    }}
                    contentContainerStyle={{
                        marginLeft: SIZES.base,
                        backgroundColor: null
                    }}
                    />
                }


              </View>

        </View>
    )
}

function renderDossier() {
    return(
        <View
           style={{
            marginTop: SIZES.padding
           }}
        >
            {/* titre */}
            <Text style={{...FONTS.h2, fontSize: 25 }}>
                Dossier
            </Text>

            {/* Dossier */}
            {dummyData?.course_details?.files.map((item, index) => {
                return(
                    <View
                    key={`Files-${index}`}
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.radius
                    }}
                    >
                        {/* TUMBNAIL */}
                        <Image
                          source={item?.thumbnail}
                          style={{
                            width: 80,
                            height: 80,
                          }}
                        />


                        {/* name && auteur && date */}
                        <View
                          style={{
                            flex: 1,
                            marginLeft: SIZES.radius
                          }}
                        >
                            <Text
                              style={{...FONTS.h2}}
                            >
                       {item?.name}
                            </Text>
                            <Text
                              style={{color: COLORS.gray30, ...FONTS.body3}}
                            >
                       {item?.author}
                            </Text>
                            <Text
                              style={{ ...FONTS.body4}}
                            >
                       {item?.upload_date}
                            </Text>

                        </View>



                        {/* menu */}

                        <IconsButton 
                          icon={icons.menu}
                          iconStyle={{
                            with: 25,
                            height: 25,
                            tintColor: COLORS.black
                          }}
                          containerStyle={{
                            alignItems: "center",
                            justfyContent: "center",
                            borderRadius: 25
                          }}
                        
                        />
                    </View>
                )
            })}

        </View>
    )
}

  return (
   <ScrollView
     contentContainerStyle={{
        padding: SIZES.padding

     }}
   >
    {/* etudiant */}
    {renderStudent()}
 

    {/* dossier */}
   {renderDossier()}

   </ScrollView>
  )
}

export default DossierCours