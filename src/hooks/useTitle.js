import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{

        document.title = `${title} - Little Lamb`;

    },[title])
}

export default useTitle;