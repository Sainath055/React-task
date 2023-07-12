
import "../../src/styles/products.scss"

const Products = () => {


  const data = [
    {
      name: `Arm chairs set of 2`,
      pic: `https://i.pinimg.com/564x/29/46/9d/29469dba7aad735e0d768286f3aeec8f.jpg`,
      price: 7200,
      tags: ['Showcase', 'Studio']
    },
    {
      name: `Mordern sofa`,
      pic: `https://www.limemodernliving.co.uk/user/Homepage%20Designs/MOBILE-1-up-Porada-Etienne.jpg`,
      price: 16000,
      tags: ['Hall', 'Furniture', 'Mordern']
    },
    {
      name: `Bean bag set of 5`,
      pic: `https://beanproducts.com/cdn/shop/collections/bean_bag_spread.jpg?v=1638830032`,
      price: 9000,
      tags: ['Reusable', 'East to carry']
    }
  ]


  return (
    <>
    <div>
      <div id="products_top_div">
        <h2>Products</h2>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="18px" height="18px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm-6 4q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z">
          </path></svg>
          Add
        </button>
      </div>

      <div id="products_container">
        {data.map((each,i)=> (
          <div key={i} className="product_card">
            <div className="img_div_product">
              <img alt="img" src={each.pic} />
            </div>
            <div className="product_details">
              <h2>{each.name}</h2>
              <p className='tags'>
                {each.tags.map((val,j)=>(
                  <span key={j} className='each_tag'>
                    {val}
                  </span>
                ))}
              </p>
              <p className="delivery">
                Delivery charges may apply
              </p>
              <div className="price_buy">
                <p>₹{each.price}</p>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Products