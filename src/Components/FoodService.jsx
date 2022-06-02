import React, { useState } from 'react'
import meals from '../Fake-data/Meal-data'
import useAuth from '../hooks/useAuth'
import Title from './Title'
import { FaPhoneSquare } from 'react-icons/fa'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import OrderList from './OrderList'
import useHook from '../hooks/useHook'
import { HashLink } from 'react-router-hash-link'
const FoodService = () => {
  const { emailVerified } = useAuth()
  const { handleOrder } = useHook()
  // const [showList, setShowList] = useState(false)
  const breakfast = meals.breakfast
  const launch = meals.launch
  const dinner = meals.dinner

  return (
    <div id='food-service'>
      <section className='service'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Banner>
            {' '}
            <HashLink to='/food-cart#food-cart' className='btn-book'>
              Food Cart
            </HashLink>
          </Banner>
        </div>

        <Title title='Breakfast Items' />
        <div className='services-center'>
          {breakfast.map((item, indx) => {
            return (
              <article
                key={indx}
                style={{ padding: '20px 35px' }}
                className='services'
              >
                <img src={item.img} width={150} alt={item.name} />
                <h6>Name: {item.name}</h6>

                <p>Type: {item.type} </p>
                <p style={{ marginBottom: '15px' }}>
                  Price: &#2547; {item.price}{' '}
                </p>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {emailVerified ? (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '10px 0',
                        }}
                      >
                        <FaPhoneSquare />{' '}
                        <a style={{ padding: '0 5px' }} href='tel:'>
                          999-8
                        </a>
                      </div>
                      <button
                        onClick={() => {
                          handleOrder(item.name, item.price, item.img)
                        }}
                        className='btn-book'
                      >
                        Order
                      </button>
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
              <article
                key={indx}
                style={{ padding: '20px 35px' }}
                className='services'
              >
                <img src={item.img} width={150} alt={item.name} />
                <h6>Name: {item.name}</h6>

                <p>Type: {item.type} </p>
                <p style={{ marginBottom: '15px' }}>
                  Price: &#2547; {item.price}{' '}
                </p>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {emailVerified ? (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '10px 0',
                        }}
                      >
                        <FaPhoneSquare />{' '}
                        <a style={{ padding: '0 5px' }} href='tel:'>
                          999-8
                        </a>
                      </div>
                      <button
                        onClick={() => {
                          handleOrder(item.name, item.price, item.img)
                        }}
                        className='btn-book'
                      >
                        Order
                      </button>
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
              <article
                key={indx}
                style={{ padding: '20px 35px' }}
                className='services'
              >
                <img src={item.img} width={150} alt={item.name} />
                <h6>Name: {item.name}</h6>

                <p>Type: {item.type} </p>
                <p style={{ marginBottom: '15px' }}>
                  Price: &#2547; {item.price}{' '}
                </p>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  {emailVerified ? (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '10px 0',
                        }}
                      >
                        <FaPhoneSquare />{' '}
                        <a style={{ padding: '0 5px' }} href='tel:'>
                          999-8
                        </a>
                      </div>
                      <button
                        onClick={() => {
                          handleOrder(item.name, item.price, item.img)
                        }}
                        className='btn-book'
                      >
                        Order
                      </button>
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
