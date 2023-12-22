import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { apiCall } from '../../redux/action/commentaireAction'


 function Commentaire({apiData, apiCommentaire}) {

 console.log(apiData)

    useEffect(() => {
        apiCommentaire()
    },[apiCommentaire])

    const displayApiData = apiData.isLoading ? (
        <Text> Chargement....</Text>
    ) : apiData.error ? (
        <Text> {apiData.error}.</Text>
    ): (
        apiData.commentaire.map( commentaire => {
            return(
                <View 
                 key={commentaire.id}
                 style={{

                 }}
                >
                    <Text>{commentaire.body}</Text>

                </View>
            )
        })
    )
      

  return (
    <>
    <Text>Commentaire</Text>
    
        {displayApiData}
    </>
  )
}

 const mapStateToProps = state => {
    return {
        apiData: state.commentaire
    }
}

 const mapDispatchToProps = dispatch => {
    return {
       apiCommentaire: () => dispatch(apiCall())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Commentaire)