import React, { useEffect } from 'react'
import Products from '../components/Products'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {useSelector, useDispatch} from 'react-redux'
import { listProducts } from '../actions/productAction'



export default function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {laoding, error, products} = productList
  console.log(products);
  useEffect(() => {
    dispatch(listProducts())
  }, [])
    return (
      <div>
         {
        laoding ? ( 
         <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
          <div className="row center">
            {
              products?.map(product => {
                return <Products key={product._id} product={product}/>
              })
            }
          </div>
          )
       }
      </div>
        
    )
}
