import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {

  const p = data.attributes;

  const dispatch = useDispatch();

  const updateCartItems = (event, key) =>{
    const payload = {
      key,
      val: key === 'quantity' ? parseInt(event.target.value) : event.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 md:gap-5 border-b">
      {/* image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[128px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          width={120}
          height={120}
        />
      </div>
      {/* image end */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* prod title start */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>
          {/* prod title end */}

          {/* prod subtitle start */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>
          {/* prod subtitle end */}

          {/* prod price start */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;{p.price}
          </div>
          {/* prod price end */}
        </div>

        {/* prod subtitle start */}
        <div className="text-sm md:text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtitle}
        </div>
        {/* prod subtitle end */}

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="text-semibold">Size:</div>
              <select className="cursor-pointer hover:text-black" onChange={(e)=>updateCartItems(e, 'selectedSize')}>
                {p.size.data.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}

                {/* <option value='2'>UK 6.5</option>
                        <option value='3'>UK 7</option>
                        <option value='4'>UK 7.5</option>
                        <option value='5'>UK 8</option>
                        <option value='6'>UK 8.5</option>
                        <option value='7'>UK 9</option>
                        <option value='8'>UK 9.5</option>
                        <option value='8'>UK 10</option>
                        <option value='8'>UK 10.5</option>
                        <option value='8'>UK 11</option> */}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="text-semibold">Quantity:</div>
              <select className="cursor-pointer hover:text-black" onChange={(e)=>updateCartItems(e, 'quantity')}>
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (quantity, index) => {
                    return (
                      <option key={index} value={quantity} selected={data.quantity===quantity}>
                        {quantity}
                      </option>
                    );
                  }
                )}

                {/* <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option> */}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
           onClick={()=> dispatch(removeFromCart({id:data.id}))}
           />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
