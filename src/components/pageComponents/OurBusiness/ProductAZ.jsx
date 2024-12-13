import React, { useState } from "react";
import productsData from "../../json/products.json"; // Import JSON data
import { FaArrowRight } from "react-icons/fa6";
const ProductAZ = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData); // State for filtered products
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const searched = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(searched);
  };

  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-[#3c286b] mb-6">
            Products A-Z
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Below you can find the full A-Z list of our products available
            worldwide.
          </p>

          {/* Radio Buttons for Filters */}
          <div className="flex flex-row items-center justify-center gap-3 mb-8 ">
            <p className="">filter by product area</p>
            {[
              "All",
              "Vaccines",
              "Specialty Medicines",
              "General Medicines",
            ].map((category) => (
              <label
                key={category}
                className="flex items-center space-x-2 text-[#3c286b]"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="form-radio text-[#3c286b] focus:ring-[#3c286b]"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for products..."
                className="px-4 py-2 w-full border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-[#3c286b] pl-10 transition-all"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#3c286b] text-white">
                  <th className="px-4 py-2 border border-gray-300">Product</th>
                  <th className="px-4 py-2 border  border-gray-300">
                    Therapeutic Category
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    Dosage Form
                  </th>
                  <th className="px-4 py-2 border border-gray-300">USDMF</th>
                  <th className="px-4 py-2 border border-gray-300">CEP/EDMF</th>
                  <th className="px-4 py-2 border border-gray-300">JDMF</th>
                  <th className="px-4 py-2 border border-gray-300">KDMF</th>
                  <th className="px-4 py-2 border border-gray-300">ANVISA</th>
                </tr>
              </thead>

              <tbody>
                <tr className='bg-[#c21f28] text-white "'>
                  <td
                    colSpan={8}
                    className="px-4 py-2 border text-center border-gray-300"
                  >
                    COMMERCIAL APIs
                  </td>
                </tr>
                {filteredProducts.map((product, index) => (
                  <tr
                    key={index}
                    className={`text-center ${
                      index % 2 === 0 ? "bg-[#F1F3F2]" : "bg-[#E0DAE4]"
                    }`}
                  >
                    <td className="px-4 py-2 text-start border border-gray-300">
                      {product.name}
                    </td>
                    <td className="px-4 py-2 text-start border border-gray-300">
                      {product.category}
                    </td>
                    <td className="px-4 py-2 text-start border border-gray-300">
                      {product.dosage}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {product.usdmf ? "✓" : ""}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {product.cep ? "✓" : ""}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {product.jdmf ? "✓" : ""}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {product.kdmf ? "✓" : ""}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {product.anvisa ? "✓" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductAZ;
