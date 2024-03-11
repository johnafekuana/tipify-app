import React from 'react'

const About = () => {
  return (
    <>
			<div className='bg-blue-100 text-gray-600 mb-8'>
				<h1 className='about--title--text font-bold pt-4 mb-6 text-3xl text-center text-black'>What is Tipify?</h1>
				<p className='w-1/2 text-center mx-auto mb-6 text-sm'>
					Available in over Y cities in X countries, Tipify is about getting workers to easily receive tips
					seamlessly based on individual customer satisfaction with them having full control over how they 
					receive rewards from satisfied customers. 
					We call our local business users <span className='font-bold'>Tipifyers</span>.
				</p>
				<p className='w-1/2 text-center mx-auto pb-8 text-sm'>
					Clients and customers can easily look through the performance, fulfilment rate, reviews and ratings of 
					any Tipifyer for motivation to tip better. This would drive efficiency among workers and boost the 
					overall productivity of the parent company.
				</p>
			</div>
      
    </>  
  )
}

export default About