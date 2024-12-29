import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { ImSpinner10 } from "react-icons/im";


// import CategoryItems from "../../Component/CategoryItems";
// import ImageDrawer from "../../Component/Product/ImageDrawer";

import axios from "axios";
import toast from "react-hot-toast";
// import StockLocation from "../../Component/Product/StockLocation";
// import VideoDrawer from "../../Component/Product/videoDrawer";
import { RiDeleteBinLine } from "react-icons/ri";
import RichTextEditor from "../Settings/Terms/TextEd";
import { FaPlus, FaPlusCircle } from "react-icons/fa";

const CreateProduct = () => {

  const [images, setImages] = useState([]);


  const [selectedVideoName, setSelectedVideoName] = useState("");

  const handleVideoSelect = (videoName) => {
    setSelectedVideoName(videoName);
    console.log(selectedVideoName);
  };




  const [image, setImage] = useState("");

  const productImage = (images) => {
    setImages(images);
  };


    const [isChecked, setIsChecked] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
  
    const files = Array.from(event.dataTransfer.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const deleteImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  

  const funSelectedImages = (id, imagess) => {

    const selectedImage = imagess.find((image) => image.id === id);

    if (selectedImage) {
      setSelectedImages((prevSelectedImages) => {
        // Check if the image is already selected
        if (prevSelectedImages.some((image) => image.id === id)) {
          // If already selected, remove it from the selection
          return prevSelectedImages.filter((image) => image.id !== id);
        } else {
          // If not selected, add it to the selection
          return [...prevSelectedImages, selectedImage];
        }
      });

      setImages(selectedImages); // Handle the product image
    }
  };

  const variationImageSelect = (name, index) => {
    const updatedCombinations = [...combinations]; // Copy the current combinations state
    updatedCombinations[index]['vimage'] = name; // Update the specific field
    setCombinations(updatedCombinations);
  };

  const variationImageRemove = (index) => {
    const updatedCombinations = [...combinations]; // Copy the current combinations state
    updatedCombinations[index]['vimage'] = null; // Update the specific field
    setCombinations(updatedCombinations);
  };

  const handleRemoveImage = (imagess, id) => {
    const updatedImages = imagess.filter(image => image.id !== id);
    setSelectedImages(updatedImages);
  };



  console.log(images);


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isVideoDrawerOpen, setIsVideoDrawerOpen] = useState(false);


  const navigate = useNavigate();

  const [variationImageIdx, setVariationImageIdx] = useState(null)

  const toggleDrawer = () => {
    setVariationImageIdx(null);
    setIsDrawerOpen(!isDrawerOpen);
  };

  //image
  const handleVariationImage = (index) => {
    setVariationImageIdx(index)
    setIsDrawerOpen(!isDrawerOpen)
  }

  const toggleVideoDrawer = () => {
    setIsVideoDrawerOpen(!isVideoDrawerOpen);
  };



  // Update selected image when an image is selected

  const clientId = localStorage.getItem("clientId");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [short_desc, setShort_desc] = useState("");
  const [category_id, setCategoryId] = useState("");

  const [stockLocationId, setStockLocationId] = useState("");

  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("");

  const [code, setCode] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [discountType, setDiscountType] = useState("");

  const [discountDate, setDiscountDate] = useState("");

  const [upload_by, setUpload_by] = useState("");

  const generateRandomCode = () => {
    const prefix = "EPP";
    const randomNumber = Math.floor(
      10000000 + Math.random() * 90000000
    ).toString();
    const randomCode = `${prefix}${randomNumber}`;
    setCode(randomCode);
  };

  useEffect(() => {
    generateRandomCode();
  }, []);

  const handleCategoryIdChange = (id) => {
    setCategoryId(id);
  };

  const handleLocationIdChange = (id) => {
    setStockLocationId(id);

    console.log(stockLocationId);
  };

  const [isOpen, setIsOpen] = useState(false);

  // const [selectedFile, setSelectedFile] = useState(null);

  const [errors, setErrors] = useState({});

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  // for image upload

  const [variationsData, setVariationsData] = useState([]);

  useEffect(() => {
    const fetchVariation = async () => {
      try {
        const response = await axios.get(
          `https://admin.glorebd.com/api/product/variation/values`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.status) {
          console.log(response.data.data)
          setVariationsData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching variationsData:", error);
      }
    };
    fetchVariation();
  }, [token, clientId]);

  // console.log(variationsData);

  const [variationIds, setVariationIds] = useState([]);
  const [variationValuesIds, setVariationValuesIds] = useState([]);
  const [hasVariations, setHasVariations] = useState(false);
  const [variations, setVariations] = useState([
    {
      selectedVariation: null,
      options: [],
      selectedValues: [],
      price: "",
      stock: "",
      discount: "",
      discount_type: "fixed",
      vimage: "",
      code: "",
    },
  ]);


  // IF one variation selected then it will not show here again 
  // const [variationsDataFilter, setVariationsDataFilter] = useState([]);

  // useEffect(() => {
  //   // Function to filter unmatched variations
  //   const getUnmatchedVariations = (variations, variationsData) => {
  //     return variationsData.filter(data => {
  //       // Check if this data matches any variation's selectedVariation.id
  //       const matchingVariation = variations.find(
  //         variation => variation.selectedVariation.id === data.id
  //       );

  //       if (!matchingVariation) return true; // No matching variation found

  //       // Check if all selectedValues match the variation_values
  //       const hasMismatch = matchingVariation.selectedValues.some(selectedValue => {
  //         return !data.variation_values.some(
  //           value => value.name.trim() === selectedValue.value.trim()
  //         );
  //       });

  //       return hasMismatch; // Include in filter if mismatch exists
  //     });
  //   };

  //   // Update the state with unmatched variations
  //   const unmatchedVariations = getUnmatchedVariations(variations, variationsData);



  //   setVariationsDataFilter(unmatchedVariations);
  // }, [variations, variationsData]); // Dependencies



  const variationOptions = variationsData.map((variation) => ({
    id: variation.id,
    value: variation.name.toLowerCase(),
    label: variation.name.toLowerCase(),
    variationValues: variation.variation_values.map((v) => ({
      id: v.id,
      name: v.name.trim(),
    })),
  }));

  console.log(variations);
  console.log(variationsData)

  // const [selectedVariationsOptions, setSelectedVariationsOptions] = useState([]);

  // useEffect(() => {
  //   const filteredVariations = variationsData.map((variation) => {
  //     const isSelected = variations.filter(
  //       (v) => v.selectedVariation.value !== variation.name.toLowerCase()
  //     );
  //   });

  //   setSelectedVariationsOptions(isSelected);
  // }, [variations, variationsData]);

  const handleCheckboxChange = (e) => {
    // e.preventDefault()
    setHasVariations(!hasVariations);
    setHasVariation(e.target.checked ? 1 : 0);
  };
  const handleVariationChange = (selectedOption, index) => {
    console.log(variations)
    console.log(selectedOption.value);
    const variations_check = variations.filter(item => item?.selectedVariation?.label != selectedOption.value);
    console.log(variations_check);


    const updatedVariations = [...variations];
    updatedVariations[index].selectedVariation = selectedOption;
    updatedVariations[index].options = getOptionsForVariation(
      selectedOption.value
    );
    updatedVariations[index].selectedValues = []; // Reset selected values when changing variation
    setVariations(updatedVariations);
    // Do not setVariationIds yet. Only set it after values are selected.
  };

  const handleValuesChange = (selectedOptions, index) => {

    const updatedVariations = [...variations];
    updatedVariations[index].selectedValues = selectedOptions;
    setVariations(updatedVariations);

    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];

    setVariationValuesIds((prevVariationValuesId) => {
      const updatedVariationValues = [...prevVariationValuesId];
      updatedVariationValues[index] = selectedValues; // Replace or add the values for the specific index
      return updatedVariationValues;
    });

    // Once values are selected, we add the variation ID
    setVariationIds((prevVariationId) => {
      const variationId = updatedVariations[index].selectedVariation.id;

      // Ensure the variationId is only added after selecting values
      if (!prevVariationId.includes(variationId) && selectedValues.length > 0) {
        return [...prevVariationId, variationId]; // Append new id if values are selected
      }
      return prevVariationId; // If already present or no values selected, return unchanged
    });
  };

  // Handle input change for price, stock, discount, and code in combinations
  const handleInputChange = (e, index, field) => {
    const updatedCombinations = [...combinations]; // Copy the current combinations state
    updatedCombinations[index][field] = e.target.value; // Update the specific field
    setCombinations(updatedCombinations); // Update state with new combinations
  };

  const handleDelete = (combination, index) => {
    const updatedVariations = combinations.filter((_, i) => i !== index);
    setCombinations(updatedVariations);
    // setVariationIds((prevIds) => prevIds.filter((_, i) => i !== index));
    // setVariationValuesIds((prevValues) =>
    //   prevValues.filter((_, i) => i !== index)
    // );
  };


  const addVariation = () => {
    if (variations.length < variationsData.length) {
      setVariations([
        ...variations,
        {
          selectedVariation: null,
          options: [],
          selectedValues: [],
          buying_price: "",
          price: "",
          stock: "",
          discount_date: "",
          discount_type: "fixed",
          discount: "",
          vimage: "",
          code: "",
        },
      ]);
    }
  };

  const getOptionsForVariation = (variationType) => {
    const variation = variationsData.find(
      (v) => v.name.toLowerCase() === variationType.toLowerCase()
    );

    if (!variation) {
      return [];
    }

    return variation.variation_values.map((value) => ({
      value: value.name.toLowerCase().trim(),
      label: value.name.charAt(0).toUpperCase() + value.name.slice(1).trim(),
    }));
  };

  const [combinations, setCombinations] = useState([]); // Define combinations state

  // Function to generate combinations
  const generateCombinations = () => {
    const selectedVariations = variations.filter(
      (v) => v.selectedValues.length > 0
    );
    if (selectedVariations.length === 0) return [];

    const combinations = selectedVariations.reduce((acc, currVariation) => {
      const newCombinations = [];
      currVariation.selectedValues.forEach((value) => {
        if (acc.length === 0) {
          newCombinations.push({
            values: [value],
            buying_price: "",
            price: "",
            stock: "",
            discount_date: "",
            discount_type: "",
            discount: "",
            vimage: "",
            code: code,
          });
        } else {
          acc.forEach((existingCombination) => {
            newCombinations.push({
              values: [...existingCombination.values, value],

              buying_price: existingCombination.buying_price || "",

              price: existingCombination.price || "",
              stock: existingCombination.stock || "",
              discount_date: existingCombination.discount_date || "",
              discount_type: existingCombination.discount_type || "fixed",
              discount: existingCombination.discount || "",
              vimage: existingCombination.vimage || "",
              code: code,
            });
          });
        }
      });
      return newCombinations;
    }, []);

    return combinations;
  };

  // Generate combinations and store in state
  useEffect(() => {
    setCombinations(generateCombinations());
  }, [variations]);

  const cacheKey = "allProducts";
  const cacheTimeKey = "allProducts_timestamp";

  const [hasVariation, setHasVariation] = useState(0);



  // profit margin
  const [retailPrice, setRetailPrice] = useState(0);
  const [itemCost, setItemCost] = useState(0);

  // Calculate profit and margin
  const profit = retailPrice - itemCost;
  const margin = retailPrice > 0 ? ((profit / retailPrice) * 100).toFixed(2) : 0;

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", userId);

    formData.append("created_by", userId);

    formData.append("name", name);
    formData.append("short_desc", short_desc);
    formData.append("category_id", category_id);



    formData.append("image", selectedImages[0]?.name || '');

    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("code", code);
    formData.append("is_published", status);
    formData.append("has_variation", hasVariation);

    formData.append("discount_date", discountDate);

    formData.append("discount_type", discountType);

    formData.append("more_images", selectedImages.map((image) => image.id).join(','));


    formData.append("video", selectedVideoName);


    formData.append("discount_amount", discountAmount);
    formData.append("buying_price", buyingPrice);
    formData.append("is_discount", 0);

    formData.append("stock_location_id", stockLocationId);

    formData.append("variation_ids", JSON.stringify(variationIds));
    formData.append("variation_values", JSON.stringify(variationValuesIds));
    formData.append("combinations", JSON.stringify(combinations));

    // console.log(formData);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://admin.glorebd.com/api/product/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      if (response.data.status) {
        toast.success(response.data.message || "product upload successfully!", {
          duration: 2000,
          position: "top-right",
        });

        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheTimeKey);

        // Reset form fields
        setName("");

        setPrice("");
        setStock("");
        setDiscountAmount("");

        setCategoryId("");
        setShort_desc("");

        setErrors({});

        navigate("/product/all-product");
      } else {
        setErrors(response.data.error || {});

        console.log(response.data.error);
      }
    } catch (error) {
      console.error(
        "Error saving business:",
        error.response ? error.response.data : error.message
      );
      toast.error(
        "An error occurred while saving the business. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // setVariationValuesId(variations.selectedValues)

  // handle Svae .............

  return (
    <div id="section-1" className="w-[80%]  mx-auto">
      <div className="w-full shadow py-4 flex pe-4 mb-4">
        <h2 className="px-4 text-xl font-semibold">Create Product</h2>
      </div>

      <div id="section-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
          <div className="md:col-span-1 p-4 rounded-lg bg-[#eeeff1] order-1 md:order-3">
            {/* <div className="mb-3 px-4 py-2 h-28 bg-white flex flex-col  border">
              <label
                htmlFor="category_id"
                className="block text-sm font-medium text-gray-700 required"
              >
                Stock Location
              </label>
             
              {errors.stock_location_id && (
                <p className="text-red-500 text-sm">
                  {errors.stock_location_id[0]}
                </p>
              )}
            </div> */}

            {/* <div className="relative">
            
              <button
                type="button"
                onClick={() => {
                  toggleVideoDrawer();
                }} className="rounded w-full flex flex-col items-center cursor-pointer bg-white  border py-3"
              >
                {selectedVideoName ? (
                  <video
                    src={`https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/video/${selectedVideoName}`}
                    width="350"
                    height="450"
                    autoPlay
                    muted
                    loop
                    className="mb-2"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="mb-2"
                  >
                    <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
                    <line
                      x1="20"
                      y1="40"
                      x2="60"
                      y2="40"
                      stroke="white"
                      strokeWidth="4"
                    />
                    <line
                      x1="40"
                      y1="20"
                      x2="40"
                      y2="60"
                      stroke="white"
                      strokeWidth="4"
                    />
                  </svg>
                )}

                <div className="mt-2 text-center">Add Video</div>
              </button>
            </div> */}

            {/* {errors.image && (
                <p className="text-red-500 text-sm mx-4">{errors.video[0]}</p>
              )} */}

              <div>
                <h1 className=" font-semibold text-lg">Product settings</h1>

                <div>
                <div className="form-control ">
    <label className="label cursor-pointer">
      <span className="label-text text-sm font-semibold">Activate</span>
      <input type="checkbox" className="toggle toggle-md h-3 toggle-primary "  />
    </label>
  </div>
                </div>

                <div>
                  <h1>Sales Chanel</h1>
                  <h1>Manage</h1>
                </div>
           

              </div>
          </div>



          {/* Left Side Content */}

          <form
            onSubmit={handleSave}
            className="md:col-span-3 order-2 md:order-1"
          >
            <div className=" bg-white p-5 rounded-lg">

                <div>
                    <h1 className=" text-lg my-6 font-semibold ">Product information</h1>
                </div>
            <div className="mb-4">
              <label
                htmlFor="Product_name"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                name="name"
                type="text"
                className="mt-1 block w-full rounded-lg  border border-gray-300 p-2"
                id="Product_name"
                value={name}
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name[0]}</p>
              )}
              <span className="text-red-500 error-text product_name_error"></span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Product_name"
                className="block text-sm font-medium text-gray-700"
              >
                Summery
              </label>
              <input
                name="name"
                type="text"
                className="mt-1 block w-full rounded-lg  border border-gray-300 p-2"
                id="Product_name"
                value={name}
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name[0]}</p>
              )}
              <span className="text-red-500 error-text product_name_error"></span>
            </div>

            <div className="mb-4">
              <label
                htmlFor="short_desc"
                className="block text-sm font-medium text-gray-700"
              >
                Short Description
              </label>
              {/* <textarea
                value={short_desc}
                onChange={(e) => setShort_desc(e.target.value)}
                name="short_desc"
                id="short_desc"
                className="mt-1 w-full rounded-lg h-36 p-2  border"
              /> */}

              <RichTextEditor/>


            </div>
    

            <div className="mb-4 " id="">
              <label
                htmlFor="category_id"
                className="block text-sm my-4 font-medium text-gray-700 required"
              >
                Image
              </label>

              <div
  className={`relative bg-[#f7f7f9]  border-dashed border-2 rounded-lg p-4 ${
    isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
  }`}
  onDragOver={(e) => {
    e.preventDefault();
    e.stopPropagation();
    handleDragOver();
  }}
  onDragLeave={(e) => {
    e.stopPropagation();
    handleDragLeave();
  }}
  onDrop={(e) => {
    e.preventDefault();
    e.stopPropagation();
    handleDrop(e);
  }}
>
  <button
    type="button"
    className="rounded w-full flex flex-col items-center cursor-pointer   py-3"
  >
    {selectedImages.length > 0 ? (
      <div className="flex items-center flex-wrap gap-2 justify-center">
        {selectedImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Selected ${index + 1}`}
              className="w-20 h-20 border border-gray-300 object-cover rounded"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              onClick={() => deleteImage(index)}
            >
              x
            </button>
          </div>
        ))}
        <label htmlFor="fileInput" className="flex gap-2 border border-gray-300 p-2 rounded-md items-center cursor-pointer text-center">
          Add Image <FaPlusCircle />
        </label>
      </div>
    ) : (
      <label htmlFor="fileInput" className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 80 80"
          fill="none"
          className="mb-2"
        >
          <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
          <line
            x1="20"
            y1="40"
            x2="60"
            y2="40"
            stroke="white"
            strokeWidth="4"
          />
          <line
            x1="40"
            y1="20"
            x2="40"
            y2="60"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </label>
    )}
  </button>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    multiple
    onChange={handleImageUpload}
    className="hidden"
  />
  {isDragging && (
    <div className="absolute inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center">
      <p className="text-blue-500 font-bold">Drop images here</p>
    </div>
  )}
</div>




              {errors.image && (
                <p className="text-red-500 text-sm mx-4">{errors.image[0]}</p>
              )}
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              id="section-3"
            >
              <div>
                <div className="mb-3 px-4 py-2 h-28 bg-white flex flex-col  border">
                  <label
                    htmlFor="category_id"
                    className="block text-sm font-medium text-gray-700 required"
                  >
                    Product Category
                  </label>
                  {/* <CategoryItems onCategoryIdChange={handleCategoryIdChange} />
                  {errors.category_id && (
                    <p className="text-red-500 text-sm">
                      {errors.category_id[0]}
                    </p>
                  )} */}
                </div>
              </div>

              <div>
                <div className="mb-3 px-4 py-2 h-28 bg-white flex flex-col  border">
                  <label
                    htmlFor="product_status"
                    className="block text-sm font-medium text-gray-700 required"
                  >
                    Product Status
                  </label>
                  <select
                    name="product_status"
                    id="product_status"
                    className="form-select rounded-lg shadow border-gray-300 py-1 px-2"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="1">On</option>
                    <option value="0">Off</option>
                  </select>
                  <span className="text-danger error-text product_status_error"></span>
                </div>
              </div>
            </div>

            {/* variation code start */}

            <div className="col-span-12 mb-4  ">
              {/* {!hasVariations && (
                <div className="mb-4 my-4  border bg-white">
                  <div className="card-body p-4" id="section-7">
                    <h5 className="mb-4 text-lg font-semibold">
                      Product Costing / Discount
                    </h5>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <div className="col-span-1">
                        <div className="mb-3">
                          <label className="form-label">Costing Price</label>
                          <input
                            type="number"
                            className="form-control rounded-lg shadow border border-gray-300 p-2 w-full"
                            id="price"
                            placeholder="Enter costing price"
                            aria-label="Price"
                            onChange={(e) => setBuyingPrice(e.target.value)}
                          />

                          {errors.buying_price && (
                            <p className="text-red-500 text-sm">
                              {errors.buying_price[0]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="mb-3">
                          <label className="form-label">Discount Amount</label>
                          <input
                            type="number"
                            name="discount_value"
                            defaultValue=""
                            className="form-control rounded-lg shadow border border-gray-300 p-2 w-full"
                            onChange={(e) => setDiscountAmount(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="mb-3">
                          <label className="form-label">Discount Type</label>
                          <select
                            name="discount_type"
                            id="discount_type"
                            onChange={(e) => setDiscountType(e.target.value)}
                            defaultValue="fixed"
                            className="form-control rounded-lg shadow border border-gray-300 p-2 w-full h-full"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="percentage">Percentage %</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="mb-3">
                          <label className="form-label">Discount Date</label>
                          <input
                            type="date"
                            onClick={(e) => e.target.showPicker()}
                            className="form-control rounded-lg shadow border border-gray-300 p-2 w-full"
                            placeholder="Enter discount"
                            onChange={(e) => setDiscountDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
              <div className="mb-3 py-2 pb-3 shadow bg-white flex-shrink-0">
                <div className="flex justify-between mb-2">
                  <div className=" font-semibold mx-4 text-lg mt-7 mb-4">Price settings</div>
                  <div className="mx-4 my-2 flex items-center">
                    <input
                      type="checkbox"
                      className="toggle toggle-info scale-75"
                      checked={hasVariations}
                      onChange={handleCheckboxChange}
                      aria-label="Toggle Variations"
                    />
                    <span className="ml-2">Has Variations?</span>
                  </div>
                </div>

                {!hasVariations && (
                  <div className="container-fluid">
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-5">
                      <div className="mb-2">
                        <label
                          htmlFor="Selling price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Selling Price
                        </label>
                        <input
                          type="number"
                          className="form-control rounded-lg shadow border border-gray-300 p-2 w-full"
                          id="price"
                          placeholder="Enter price"
                          aria-label="Price"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        {errors.price && (
                          <p className="text-red-500 text-sm">
                            {errors.price[0]}
                          </p>
                        )}
                      </div>

                      <div className="mb-2">
                        <label
                          htmlFor="stock"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Stock
                        </label>
                        <input
                          type="number"
                          className="form-control rounded-lg shadow border border-gray-300 p-2 w-full"
                          id="stock"
                          placeholder="Enter stock"
                          aria-label="Stock"
                          onChange={(e) => setStock(e.target.value)}
                        />
                        {errors.stock && (
                          <p className="text-red-500 text-sm">
                            {errors.stock[0]}
                          </p>
                        )}
                      </div>

                      <div className="mb-2">
                        <label
                          htmlFor="code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Code
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-lg shadow border border-gray-300 p-2 w-full"
                          id="code"
                          placeholder="Enter code"
                          aria-label="Code"
                          value={code} // Set the input field value to the generated code
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>
                    </div> */}

<div className="mx-4">
     

      {/* Input Row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Retail Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Retail Price
          </label>
          <input
            type="number"
            value={retailPrice}
            onChange={(e) => setRetailPrice(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Item Cost */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Item Cost
          </label>
          <input
            type="number"
            value={itemCost}
            onChange={(e) => setItemCost(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
      {/* Results */}

        {/* Profit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profit
          </label>
          <input
            type="text"
            value={profit.toFixed(2)}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Margin */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Margin (%)
          </label>
          <input
            type="text"
            value={margin}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
      
      </div>
    </div>



    <div className="mx-4">
<h1 className=" font-semibold text-lg mt-7 mb-4">Inventory</h1>


  
   <div className="grid grid-cols-2 gap-6 mb-6">
   <div className="mb-4">
      <label for="sku" className="block text-sm font-medium text-gray-700">SKU</label>
      <input 
        type="text" 
        id="sku" 
        name="sku" 
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        placeholder="Enter SKU"
      />
    </div>


    <div className="mb-4">
      <label for="barcode" className="block text-sm font-medium text-gray-700">Barcode</label>
      <input 
        type="text" 
        id="barcode" 
        name="barcode" 
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        placeholder="Enter Barcode"
      />
    </div>
   </div>

    <div className="mb-4">
      <label for="quantity" className="block text-sm font-medium text-gray-700">Inventory Quantity</label>
      <input 
        type="number" 
        id="quantity" 
        name="quantity" 
        className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        placeholder="Enter Quantity"
      />
    </div>

    <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="exampleCheckbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                  <label htmlFor="exampleCheckbox" className="ml-2 text-sm text-gray-700">
                  Track quantity with orders
                  </label>
                </div>
    

  
  
</div>

                  </div>
                )}
              </div>

              {hasVariations && (
                <div className="mb-4 py-4 bg-white shadow">
                  <div className="mx-5">
                    {variations.map((variation, index) => (
                      <div key={index} className="">
                        <div className="mb-6">
                          <div className="flex gap-4">
                            <div className="flex-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Variation
                              </label>
                              <Select
                                options={variationOptions}
                                className="rounded-lg shadow border border-gray-300"
                                placeholder="Select a variation"
                                isSearchable
                                onChange={(selectedOption) =>
                                  handleVariationChange(selectedOption, index)
                                }
                                value={variation.selectedVariation}
                              />
                            </div>

                            <div className="flex-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Values
                              </label>
                              <Select
                                id="variation_value_ids"
                                options={variation.options || []}
                                className="rounded-lg shadow border border-gray-300"
                                placeholder="Select values"
                                isSearchable
                                isMulti
                                onChange={(selectedOptions) =>
                                  handleValuesChange(selectedOptions, index)
                                }
                                value={variation.selectedValues}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addVariation}
                      className="text-blue-500 hover:text-blue-700 focus:outline-none mb-6"
                    >
                      + Add another variation
                    </button>
                  </div>
                  <div className="mx-4 mb-6 overflow-x-auto">
                    <div className="border rounded p-2 bg-gray-100">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr className="text-center">
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Variation & Value
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Costing Price
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              selling Price
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Stock
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Image
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Discount
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Discount Type
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Discount Date
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Code
                            </th>
                            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Remove
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {combinations.map((combination, combIndex) => (
                            <tr key={`comb-${combIndex}`}>
                              <td className="capitalize text-center flex gap-2 items-center py-4">
                                <button type="button"
                                  onClick={() => handleDelete(combination, combIndex)}
                                  className="text-red-500 hover:text-red-700 focus:outline-none"
                                >
                                  <RiDeleteBinLine />
                                </button>
                                <div className="whitespace-nowrap">
                                  {combination.values.map((value, i) => (
                                    <span key={i} className="block">
                                      {value.label}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="px-2 py-4 whitespace-nowrap">
                                <input
                                  required
                                  type="number"
                                  value={combination.buying_price || ""}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      combIndex,
                                      "buying_price"
                                    )
                                  }
                                  className="form-control rounded-lg shadow border border-gray-300 p-2  w-[120px]"
                                  placeholder="cost price"
                                />
                              </td>

                              <td className="px-2 py-4 whitespace-nowrap">
                                <input
                                  required
                                  type="number"
                                  value={combination.price || ""}
                                  onChange={(e) =>
                                    handleInputChange(e, combIndex, "price")
                                  }
                                  className="form-control rounded-lg shadow border border-gray-300 p-2  w-[120px]"
                                  placeholder="price"
                                />
                              </td>
                              <td className="px-2 py-4 whitespace-nowrap">
                                <input
                                  required
                                  type="number"
                                  value={combination.stock || ""}
                                  onChange={(e) =>
                                    handleInputChange(e, combIndex, "stock")
                                  }
                                  className="form-control rounded-lg shadow border border-gray-300 p-2 w-[120px]"
                                  placeholder="stock"
                                />
                              </td>



                              <td className="whitespace-nowrap">
                                {combination.vimage ? (
                                  <div className="relative group">
                                    <img
                                      src={`https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/image/${combination.vimage}`}
                                      className="rounded border shadow-sm max-h-20"
                                    />
                                    <button type="button"
                                      className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                                      onClick={() => { variationImageRemove(combIndex) }}>
                                      &times;
                                    </button>
                                  </div>) : (
                                  <div onClick={() => {
                                    handleVariationImage(combIndex);
                                  }} className="flex flex-col items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="30"
                                      viewBox="0 0 80 80"
                                      fill="none"
                                    >
                                      <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
                                      <line
                                        x1="20"
                                        y1="40"
                                        x2="60"
                                        y2="40"
                                        stroke="white"
                                        strokeWidth="4"
                                      />
                                      <line
                                        x1="40"
                                        y1="20"
                                        x2="40"
                                        y2="60"
                                        stroke="white"
                                        strokeWidth="4"
                                      />
                                    </svg>
                                    <span>Add Image</span>
                                  </div>
                                )}
                              </td>

                              <td className="px-2 py-4 whitespace-nowrap">
                                <input
                                  type="number"
                                  value={combination.discount || ""}
                                  onChange={(e) =>
                                    handleInputChange(e, combIndex, "discount")
                                  }
                                  className="form-control rounded-lg shadow border border-gray-300 p-2 w-[120px]"
                                  placeholder="discount"
                                />
                              </td>
                              <td className="px-2 py-4 whitespace-nowrap">
                                <select
                                  name="discount_type"
                                  id="discount_type"
                                  onChange={(e) =>
                                    handleInputChange(e, combIndex, "discount_type")
                                  }
                                  defaultValue={combination.discount || "fixed"}
                                  className="form-control rounded-sm shadow-sm border border-gray-300 px-2 py-3 w-[120px]"
                                >
                                  <option value="fixed">Fixed</option>
                                  <option value="percentage">Percentage %</option>
                                </select>
                              </td>

                              <td className="px-2 py-4 whitespace-nowrap">
                                <input
                                  type="date"
                                  value={combination.discount_date || ""}
                                  onClick={(e) => e.target.showPicker()}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      combIndex,
                                      "discount_date"
                                    )
                                  }
                                  className="form-control rounded-lg shadow border border-gray-300 p-2 w-[120px]"
                                  placeholder="date"
                                />
                              </td>

                              <td className="px-2 py-4 whitespace-nowrap">
                                <input
                                  type="text"
                                  value={code}
                                  onChange={(e) =>
                                    handleInputChange(e, combIndex, "code")
                                  }
                                  className="form-control rounded-lg shadow border border-gray-300 p-2 w-[120px]"
                                  placeholder="Enter code"
                                />
                              </td>
                              <td className="px-2 py-4 whitespace-nowrap">
                                <button type="button"
                                  onClick={() => handleDelete(combination, combIndex)}
                                  className="text-red-500 hover:text-red-700 focus:outline-none"
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* variation code end */}

            <div className="flex justify-end mt-4">
              <button
                className="btn bg-[#444CB4] hover:bg-[#28DEFC] text-white px-5 text-lg"
                type="submit"
              >
                {loading ? (
                  <div className="flex justify-center w-full">
                    <ImSpinner10
                      className="animate-spin text-white"
                      size={20}
                    />
                    <span className="px-2">Saving...</span>
                  </div>
                ) : (
                  <>save</>
                )}
              </button>
            </div>
         
         </div>
          </form>
        </div>

        {/* Bottom Drawer */}

        {/* <ImageDrawer
          isOpen={isDrawerOpen}

          funSelectedImages={funSelectedImages}
          toggleDrawer={toggleDrawer}
          productImage={productImage}
          variationImageIdx={variationImageIdx && variationImageIdx}
          variationImageSelect={variationImageSelect}
        /> */}

        {/* end Bottom Drawer */}

        {/* Bottom video Drawer */}

        {/* <VideoDrawer

          onVideoSelect={handleVideoSelect} // Pass the handler to VideoDrawer

          isOpen={isVideoDrawerOpen}
          toggleDrawer={toggleVideoDrawer}
    
        /> */}


        {/* end Bottom video Drawer */}
      </div >
    </div >
  );
};

export default CreateProduct;