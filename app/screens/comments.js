import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux'
import { apiCall } from '../redux/action/commentaireAction'



 function Comments({apiData, apiCommentaire}) {

    const [spinner, setSpinner] = useState(false)
 console.log(apiData)

    useEffect(() => {

            setSpinner(true);
            setTimeout(() => {
              setSpinner(false);
            }, 2000);
          
        apiCommentaire()
    },[apiCommentaire])

    const displayApiData = apiData.isLoading ? (
        <Spinner
        visible={spinner}
        textContent={'Veillez patienter svp...'}
        textStyle={styles.spinnerTextStyle} 
        />
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
   <View>
   <Text>Commentaire</Text>
    
    {displayApiData}
   </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(Comments)