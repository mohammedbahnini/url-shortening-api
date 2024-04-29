import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Oval } from 'react-loader-spinner';
import getShortUrl from '../../../api/shorten-link';


function ProcessLink({ setShortenLinks }) {

    const [hasError, setHasError] = useState(false);
    const [isLoading  , setIsLoading ]= useState(false);
    const [errorMessage , setErrorMessage] = useState('');
    const inputRef = useRef(null);
    const regex = new RegExp(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i) ;
    

    const  handleSubmiit = async (e) => {
        e.preventDefault();



        // validate url format 
        console.log(regex.test( inputRef.current.value ));
        if( !regex.test(inputRef.current.value.trim()) )
        {
            
            setHasError(true);
            setErrorMessage('Please add a link')
        }
        else 
        {
            // reset
            setIsLoading(true);
            setHasError(false);
            setErrorMessage('')


            const data = await getShortUrl(inputRef.current.value);
            console.log(data);
            setIsLoading(false);
            setErrorMessage('')
    
            // case api returns an error
            if( !data.status ){
               
                const { message} = data;
    
                setHasError(true);
                setErrorMessage(message);
               
            }
            else {
                setHasError(false);
                setErrorMessage('');
                const { url , shortenUrl } = data;
                setShortenLinks( prev => [...prev , { url  , shortenUrl }])
                inputRef.current.value = '';
            }
        }

    }   



    return (
        <div className='bg-very-dark-violet  p-6 rounded-[10px] relative -top-0 bg-[url("/images/bg-shorten-mobile.svg")] bg-no-repeat lg:bg-cover bg-right-top lg:py-14 lg:px-16 lg:bg-[url("/images/bg-shorten-desktop.svg")] '>

            <form action="#" className='flex flex-col lg:flex-row lg:items-center lg:gap-x-6 '>
                <div className='lg:flex-1'>
                    <input type="text" placeholder='Shorten a link here...' className={classNames('bg-white rounded-md outline-none px-4 py-[6px] text-base leading-loose placeholder:font-medium w-full lg:flex-1 lg:px-8 lg:py-[14px] ', {
                        'outline-red-400 outline-4 -outline-offset-4 placeholder:text-red-400/70 ': hasError,
                        'border-none  ': !hasError
                    })}
                    ref={inputRef} 
                    
                    />
                    {
                        hasError && (
                            <span className='italic text-xs block leading-normal text-red-400 mt-1 lg:text-base lg:mt-2 lg:absolute '>
                                {errorMessage}
                            </span>
                        )
                    }
                </div>

                <button className='btn rounded-md mt-4 lg:mt-0 lg:py-[16px] lg:self-start min-h-[52px] lg:min-h-[60px] min-w-[161px]' onClick={handleSubmiit}>{!isLoading ? 'Shoten it!' : (
                    <Oval
                    visible={true}
                    height="25"
                    width="80"
                    color="white"
                    secondaryColor='white'
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    strokeWidth={4}
                    wrapperClass="*:mx-auto"
                    />
                )}</button>
            </form>

        </div>

    )
}

export default ProcessLink
