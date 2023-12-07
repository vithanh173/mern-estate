import React from "react";

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="border p-3 rounded-xl"
            required
          />
          <textarea
            id="description"
            type="text"
            placeholder="Description"
            className="border p-3 rounded-xl"
            required
          />
          <input
            id="address"
            type="text"
            placeholder="Address"
            className="border p-3 rounded-xl"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input id="sale" type="checkbox" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input id="rent" type="checkbox" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input id="parking" type="checkbox" className="w-5" />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input id="furnished" type="checkbox" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input id="offer" type="checkbox" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <input
                id="bedrooms"
                type="number"
                className="border p-3 border-gray-300 rounded-xl"
                min="1"
                max="10"
                required
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="bathrooms"
                type="number"
                className="border p-3 border-gray-300 rounded-xl"
                min="1"
                max="10"
                required
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="regularPrice"
                type="number"
                className="border p-3 border-gray-300 rounded-xl"
                min="1"
                max="10"
                required
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="discountPrice"
                type="number"
                className="border p-3 border-gray-300 rounded-xl"
                min="1"
                max="10"
                required
              />
              <div className="flex flex-col items-center">
                <p>Discount price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold text-gray-600 ml-2">
            Images:
            <span>The first image will be the cover (max 10)</span>
          </p>
          <div className="flex gap-4">
            <input
              id="images"
              type="file"
              accept="image/*"
              multiple
              className="border p-3 border-gray-300 rounded w-full"
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-50 transition-all duration-300 ease-in-out">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-xl uppercase hover:opacity-90 disabled:opacity-50 transition-all duration-300 ease-in-out">
            create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
