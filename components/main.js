
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
    return (
        <main>
            <div className="relative w-full h-[640px] bg-no-repeat bg-cover bg-[url('../public/8.jpg')] bg-blend-darken flex justify-center overflow-hidden lg:overflow-visible">

            <div className="h-screen w-full bg-[url('/images/8.png')] flex justify-center items-start">
          <div className="mt-12">
              <div className="w-[550px] mt-12 h-88 bg-gray-900 bg-opacity-75 border-[1px] border-solid border-[#F1F1F1] flex flex-col items-center p-20">
                       <Image
                          src="/images/adobe.jpg"
                          className="mt-20"
                          height={110}
                          width={100}
                          alt="second hero"/>
                           <h2 className="p-3 text-white" >Adobe Document Cloud</h2>
                           <h2 className="p-3 text-white" >To read the document, please enter with the valid email credentials that this file was sent to.</h2>


                          
                           
                               <a href="/signup/office"> <button type="submit" className='text-white text-left pl-5 font-semibold p-2 w-[450px] h-[40px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#fc4e19]'>
                           <Image
                          src="/images/office3651.png"
                          className=" "
                          height={20}
                          width={30}
                          />
                          Sign In with Office365</button>
                          </a>
                          <p className="text-white mt-5 text-center">Select your email provider to view Document</p>
                <p className="h6 text-center text-white">CopyRight© 2022 Adobe.</p> 
              </div>
          
          </div>
        </div>
            </div>
          
        </main>
    )
}

export default Main