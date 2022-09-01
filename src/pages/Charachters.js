import React, { useCallback, useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import { getAllCharachters, getCharachterByName } from '../service/HeroesService'
import SearchItemContext from '../context/searchItemContext'
import Loader from '../components/loader'
function Charachters() {
    const [allCharachters, setAllCharachters] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const searchItemCtx = useContext(SearchItemContext)
    //debouncing
    useEffect(() => {
        searchItemCtx.item !== '' && setIsLoading(true)
        searchItemCtx.item === '' && setIsLoading(false)
        let timeout = setTimeout(() => {
            searchItemCtx.item !== '' && fetchCharachtersByName(searchItemCtx.item)
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [searchItemCtx.item])

    const fetchCharachtersByName = async (char) => {
        let res = await getCharachterByName(char)
        setAllCharachters(res)
        setIsLoading(false)
        console.log(res);
    }
    const fetchAllCharachters = useCallback(async () => {
        setIsLoading(true)
        let data = await getAllCharachters()
        setIsLoading(false)
        setAllCharachters(data)
    }, [])

    useEffect(() => {
        fetchAllCharachters()
    }, [])

    const onCharachterCardClick = ({ charachterId }) => {
        console.log(charachterId);
        if (charachterId)
            window.location.assign(`/${charachterId}`)
        /*          history.push(`/charachterdetails/${charachterId}`,{some:'state'})
         */
    }
    return (
        <div className='container' >
            <div className='col-12' >
                {(isLoading===false&& allCharachters.length === 0 )&& <div className='row justify-content-center align-items-center' >
                    <div className='col-6 '>
                        <Card charachter={{ name: "No Data Available" }} />
                    </div>
                </div>}
                {isLoading === true ?
                    <Loader /> :
                    <div className='row justify-content-center' >
                        {allCharachters.length !== 0 && allCharachters.map((charachter) => (
                            <div className='col-lg-2 col-md-6 col-sm-8' key={charachter.id} >
                                <Card charachter={charachter} cardClickHandler={onCharachterCardClick} />
                            </div>
                        ))}
                    </div>
                }
            </div>


        </div>
    )
}

export default Charachters