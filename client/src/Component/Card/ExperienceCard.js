import React from 'react'
import './projectcard.css'
function ExperienceCard() {
  return (
    <div className='mt-5 h-2/4 text-white'>
        <ul>
            <li className='text-lg'>Aug 2020-Present</li>
        </ul>
            <div className='grid grid-cols-8'>
                <div className=' justify-end'>
                    <img src='https://s3-alpha-sig.figma.com/img/5e48/d450/7de421cee9214ce7fa35fa511be17ea8?Expires=1679875200&Signature=B2DmMdhDOqungBHTurgvGhTu6vbmfO8L-8D2XjXjwU8sePu4zKZp4XctX7pi8o6TpO3laoJFPai~VEkldx-EgpSzscQpKmUaZB1xU~xqt98nI4AP5a1vJ9sY~qa7YLUkVT8u3uEEZfUrJm9I1o65QAK2oqCeI5UHW~Xe4brJRoa3nR8xrIKqWT2g8CQUM0MbdgZmKfqsuzmbYaJkvG9ZVKcXdbiBN53MXU4hLqSyo8v~h3LPbjb~Nu~OhX880cDFF4Kx91l6TINWi83WswYn7Z1tEB6HvtPikXJ6BxapK5O3rBHTBcrkqe7gVhasPyf8kBgd0PQrOAAenhaVc2Y9JQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className=' h-24 w-24' />
                </div>
                <div className='col-span-3 text-lg'>
                    <h2>Associate Software Engineer</h2>
                    <h2 className='text-tint text-2xl'>Indus Valley Partners</h2>
                    <hr />
                    <p className='text-base'>Mumbai,Maharashtra</p>
                </div>
            </div>
            <div className='mt-4 '>
            Job descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, as well as a project plan that describes the activities the members will undertake. 
            </div>
            <div className='mt-2 border-2 border-tint flex w-2/3 '>
                <span className='m-2'><span>Skills:</span> NodeJs,React,MongoDb,Express,Cloudinary,Tailwind Css</span>
            </div>
            <div className='mt-20 h-2 borderGrad'>

            </div>
        
    </div>
  )
}

export default ExperienceCard