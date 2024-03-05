import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const Hero = () => {
  return (
    <div className='main--container'>
      <div className='section--one flex'>
        <div className='left--div w-1/2 h-screen flex flex-col pt-4' style={{ backgroundColor: '#fefefe' }}>
          <div className='logo--text flex pl-20 mb-16'>
            <Image
							className='mr-2'
              src="/app-logo.svg"
              alt="Logo"
              width={20}
              height={15}
            />
            <h1 className="text-3xl font-bold text-blue-700 tracking-wide">Tipify</h1>
          </div>
          <div className='hero--image '>
						<Image
							className='mx-auto rounded-t-xl'
							src='/rider.jpg'
							alt='dispatch rider'
							width={500}
							height={500}
						/>

          </div>
        </div>
        <div className='right--div w-1/2 h-screen pt-2'>
          <div className='nav--menu flex pl-12'>
            <ul className='nav--list flex w-2/3 items-center justify-between'>
              <li className='lang--dropdown flex border rounded-full border-gray-300 p-1'>
                <Image
									className='pl-1'
                  src='/world-icon.svg'
                  alt='world icon'
                  width={20}
                  height={20}
                />
                <p className='mx-2'>English</p>
                <Image
									className='pr-1'
                  src='/dropdown-icon.svg'
                  alt='dropdown icon'
                  width={10}
                  height={10}
                />
              </li>

              <li><p>Learn More</p></li>
              <li><p>FAQ</p></li>
              <li><p>Support</p></li>
              
              <li>
                {/* Connect Wallet Button */}
								
									{/* <WalletMultiButton style={{backgroundColor: '#2563EB'}} /> */}
								
								<p>Connect Wallet</p>
              </li>
            </ul>
          </div>

          <div className='bottom--right px-12 mt-12'>
            <div className='hero--text'>
              <h1>Your <span className='blue--span'>time</span>.</h1>
              <h1>Your <span className='blue--span'>goals</span>.</h1>
              <h1>You're are the <span className='blue--span'>boss</span>.</h1>
              <p className='mt-6'>Start and stop when you want</p>
            </div>

            <div className='email--signUp w-full mt-4 '>
              <div className='email rounded-full shadow-sm text-gray-800'>
                <form className='flex w-full border rounded-full '>
                  <input className='w-full pl-4 py-2 outline-none rounded-l-full border-gray-300' type="email" placeholder="Enter your email" />
                  <input className='border w-1/3 py-2 rounded-full bg-blue-800 text-white' type="submit" value="Submit" />
                </form>
              </div>

              <p className='agreement--text mt-4'>By clicking 'Submit', I agree to the
								<Link href=''> Independent Contractor Agreement<br/></Link> and have read the
								<Link href=''> terms and conditions</Link>
							</p>
              <p className='mt-8'>
								<Link href='' className='font-semibold text-blue-600 hover:text-blue-800 hover:underline'>
									Already connected wallet? View Profile
								</Link>
							</p>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Hero