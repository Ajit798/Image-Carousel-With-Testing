import axios from "axios"
import React from "react"

export const useImagesApi=()=>{

    const [imagesData,setImagesData]=React.useState<{[key:string]:string|number}[]>([])

    React.useEffect(()=>{
      getData()
    },[])


    const getData= React.useCallback(async()=>{

      try{
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos')

        setImagesData([...(response.data.photos)])

      }catch(err){
        
      }

       
    },[])

    return imagesData

}