import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClickedproductData } from "../Redux/actions";


export const SingleProductList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.clickedProduct);

  // make a request to get the details
  useEffect(() => {
    dispatch(getClickedproductData(params.id));
  }, []);
  return (
    <div>
      <img src={data.image} alt={data.title} />
      <div>
        <h1
          
        >
          {data.title}
        </h1>
        <h2
       
        >
          Rs {data.price}
        </h2>
        <p>Brand: {data.brand}</p>
        <p>Category: {data.category}</p>

        {console.log(data)}
      </div>
    </div>
  );
};