// import { useQuery } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";
import MainSlider from "../components/default/homepage/MainSlider";
import ShoppingCart from "../components/default/ShoppingCart";
import FullPageLoading from "../components/skeletonLoading/FullPageLoading";
import { withApollo } from "../graphql/client";
import {
  GET_BEST_SELLING_PRODUCTS,
  GET_MOST_DISCOUNT_PRODUCTS,
  GET_NEW_ARRIVAL_PRODUCTS,
} from "../graphql/queries/productQuery";
// import { GET_CATEGORIES } from "../graphql/queries/categoryQuery";
import DefaultLayout from "../layouts/default/DefaultLayout";

const Home = (props) => {
  // fetching most discount products
  const {
    loading: mostDiscountLoading,
    data: { getMostDiscountProducts: mostDiscountProducts } = {},
  } = useQuery(GET_MOST_DISCOUNT_PRODUCTS);
  // fetching new arrival products
  const {
    loading: newArrivalLoading,
    data: { getBestNewArrivalProducts: newArrivalProducts } = {},
  } = useQuery(GET_NEW_ARRIVAL_PRODUCTS);
  // fetching best selling products
  const {
    loading: bestSellingLoading,
    data: { getBestSellingProducts: bestSellingProducts } = {},
  } = useQuery(GET_BEST_SELLING_PRODUCTS);

  if (bestSellingLoading || newArrivalLoading || mostDiscountLoading) {
    return (
      <div>
        <FullPageLoading />
      </div>
    );
  }

  // console.log("from home", categories);
  // console.log("from home", data);

  return (
    <DefaultLayout>
      <div className="z-0">
        <Head>
          <title>This is Grocery App</title>
          <meta name="description" content="best grocery shop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ShoppingCart {...props} />
        {/* banner part top*/}
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0, .1),
            rgba(0,0,0, .1)), url(${"/landingBannerTop.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full h-72 grid place-items-center"
        >
          <input
            placeholder="Search for products (e.g. eggs, milk, potato)"
            className={`py-2 px-4  rounded-lg border w-3/4 border-gray-400  
            focus:outline-none focus:bg-white focus:border-2 focus:border-yellow-500  
          `}
          />
        </div>
        {/* two feature sub cateogries */}
        <div className="grid my-10 gap-5 sm:grid-cols-2">
          <div className="rounded-r-md overflow-hidden shadow border">
            <img src="/landingBannerTop.jpg" alt="" />
          </div>
          <div className="rounded-l-md overflow-hidden shadow border">
            <img src="/landingBannerTop.jpg" alt="" />
          </div>
        </div>
        {/* Most Discount*/}
        <div>
          <div>
            <h1 className="capitalize text-lg font-medium text-gray-700 text-center">
              <span className="border-b-2 pb-2 border-yellow-500">
                most discount
              </span>
            </h1>
          </div>
          <MainSlider items={mostDiscountProducts} />
        </div>
        {/* New Arrival*/}
        <div>
          <div>
            <h1 className="capitalize text-lg font-medium text-gray-700 text-center">
              <span className="border-b-2 pb-2 border-yellow-500">
                new arrival
              </span>
            </h1>
          </div>
          <MainSlider items={newArrivalProducts} />
        </div>
        {/* best selling*/}
        <div>
          <div>
            <h1 className="capitalize text-lg font-medium text-gray-700 text-center">
              <span className="border-b-2 pb-2 border-yellow-500">
                best selling
              </span>
            </h1>
          </div>
          <MainSlider items={bestSellingProducts} />
        </div>
      </div>
    </DefaultLayout>
  );
};

// export default Home;
export default withApollo({ ssr: false })(Home);
