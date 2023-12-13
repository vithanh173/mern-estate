import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import CardListingItem from "../components/CardListingItem";

export default function Home() {
  SwiperCore.use([Navigation, Autoplay, EffectFade]);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/*top*/}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span> <br />{" "}
          place with ease
        </h1>
        <div className="text-gray-500 text-xs sm:text-sm">
          VT Estate is the best place to find your next super perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-semibold hover:underline"
        >
          Let's get started...
        </Link>
      </div>
      {/*Swiper*/}
      <Swiper
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        slidesPerView={1}
      >
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => {
            return (
              <SwiperSlide>
                <div
                  key={listing._id}
                  className="h-[500px]"
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      {/*listing results for offer, sale and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                to={"/search?offer=true"}
                className="text-sm font-semibold text-blue-800 hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {offerListings.map((listing) => {
                return <CardListingItem key={listing._id} listing={listing} />;
              })}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                to={"/search?type=rent"}
                className="text-sm font-semibold text-blue-800 hover:underline"
              >
                Show more places for rent
              </Link>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {rentListings.map((listing) => {
                return <CardListingItem key={listing._id} listing={listing} />;
              })}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                to={"/search?type=sale"}
                className="text-sm font-semibold text-blue-800 hover:underline"
              >
                Show more places for sale
              </Link>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {saleListings.map((listing) => {
                return <CardListingItem key={listing._id} listing={listing} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
