import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2 ">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <input
              id="searchTerm"
              type="text"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2 mt-1">
              <input id="all" type="checkbox" className="w-5" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2 mt-1">
              <input id="rent" type="checkbox" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2 mt-1">
              <input id="sell" type="checkbox" className="w-5" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2 mt-1">
              <input id="offer" type="checkbox" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2 mt-1">
              <input id="parking" type="checkbox" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2 mt-1">
              <input id="furnished" type="checkbox" className="w-5" />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select id="sort_order" className="border rounded-lg p-3">
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 transition-all duration-300 ease-in-out">
            Search
          </button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold border-b-2 p-3 text-slate-700 mt-5">
          Listing results:
        </h1>
      </div>
    </div>
  );
}
