import React from 'react'
import meals from '../Fake-data/Meal-data'
import useAuth from '../hooks/useAuth'
import Title from './Title'
import { FaPhoneSquare } from 'react-icons/fa'
const FoodService = () => {
  const { emailVerified } = useAuth()
  const breakfast = meals.breakfast
  const launch = meals.launch
  const dinner = meals.dinner
  return (
    <div>
      <section className='service'>
        <Title title='Breakfast Items' />
        <div className='services-center'>
          {breakfast.map((item, indx) => {
            return (
              <article key={indx} className='services'>
                <img src={item.img} width={150} alt={item.name} />
                <h6>Name: {item.name}</h6>
                <p>Description: {item.des}</p>
                <p>Type: {item.type} </p>
                <p style={{ marginBottom: '15px' }}>
                  Price: &#2547; {item.price}{' '}
                </p>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {emailVerified ? (
                    <>
                      <FaPhoneSquare />{' '}
                      <a style={{ padding: '0 5px' }} href='tel:'>
                        999-8
                      </a>
                    </>
                  ) : (
                    'Only verified user can order foods'
                  )}
                </p>
              </article>
            )
          })}
        </div>
      </section>
      <section className='service'>
        <Title title='Launch Items' />
        <div className='services-center'>
          {launch.map((item, indx) => {
            return (
              <article key={indx} className='services'>
                <img src={item.img} width={150} alt={item.name} />
                <h6>Name: {item.name}</h6>
                <p>Description: {item.des}</p>
                <p>Type: {item.type} </p>
                <p style={{ marginBottom: '15px' }}>
                  Price: &#2547; {item.price}{' '}
                </p>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {emailVerified ? (
                    <>
                      <FaPhoneSquare />{' '}
                      <a style={{ padding: '0 5px' }} href='tel:'>
                        999-8
                      </a>
                    </>
                  ) : (
                    'Only verified user can order foods'
                  )}
                </p>
              </article>
            )
          })}
        </div>
      </section>
      <section className='service'>
        <Title title='Dinner Items' />
        <div className='services-center'>
          {dinner.map((item, indx) => {
            return (
              <article key={indx} className='services'>
                <img src={item.img} width={150} alt={item.name} />
                <h6>Name: {item.name}</h6>
                <p>Description: {item.des}</p>
                <p>Type: {item.type} </p>
                <p style={{ marginBottom: '15px' }}>
                  Price: &#2547; {item.price}{' '}
                </p>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {emailVerified ? (
                    <>
                      <FaPhoneSquare />{' '}
                      <a style={{ padding: '0 5px' }} href='tel:'>
                        999-8
                      </a>
                    </>
                  ) : (
                    'Only verified user can order foods'
                  )}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default FoodService
