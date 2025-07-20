import React, { useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecipeList = () => {
  const [data, setData] = useState(null);

  const handleDataReceived = (data) => {
    setData(data);
  };

  return (
    <>
      <Header onDataReceived={handleDataReceived} />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-6">
        {data && data.length > 0 ? (
          data.map((recipe) => (
            <motion.div
              key={recipe.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl overflow-hidden shadow-md border hover:shadow-lg bg-white transition-all"
            >
              <Link to={`/detail/${recipe.id}`} className="block h-full">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h1 className="text-lg font-semibold text-gray-800">{recipe.title}</h1>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 mt-20">
            🔍 Belum ada resep ditemukan. Coba cari bahan makanan dulu yuk!
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeList;
