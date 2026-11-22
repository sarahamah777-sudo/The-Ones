"use strict";

/* =========================================
   A & S REAL ESTATE
   PROPERTY LISTINGS
========================================= */

/* ALL PROPERTY LOCATIONS */

const locations = [
    "Ikeja GRA",
    "Ikeja",
    "Lekki Phase 1",
    "Lekki Phase 2",
    "Victoria Island",
    "Banana Island",
    "Ikoyi",
    "Ajah",
    "Sangotedo",
    "Chevron",
    "Osapa London",
    "Ikate",
    "Oniru",
    "Agungi",
    "VGC",
    "Abijo",
    "Epe",
    "Yaba",
    "Surulere",
    "Maryland",
    "Magodo",
    "Ogudu",
    "Gbagada",
    "Apapa"
];


/* PROPERTY TYPES */

const propertyTypes = {
    apartment: {
        label: "Apartment",
        names: [
            "Luxury Apartment",
            "Executive Living Apartment",
            "Contemporary Luxury Apartment"
        ],
        bedrooms: [3, 4, 3],
        bathrooms: [2, 3, 3]
    },

    duplex: {
        label: "Duplex",
        names: [
            "Luxurious Duplex",
            "Royal Signature Duplex",
            "Grand Prestige Duplex"
        ],
        bedrooms: [4, 5, 6],
        bathrooms: [3, 4, 5]
    },

    house: {
        label: "House",
        names: [
            "Signature Family Residence",
            "Elegant Garden Residence",
            "Premium Family Home"
        ],
        bedrooms: [3, 4, 5],
        bathrooms: [2, 3, 4]
    }
};


/* PROPERTY PURPOSES */

const purposes = {
    buy: {
        label: "Buying",
        priceLabel: "Price available on enquiry"
    },

    sale: {
        label: "For Sale",
        priceLabel: "Price available on enquiry"
    },

    rent: {
        label: "For Rent",
        priceLabel: "Rental price available on enquiry"
    }
};


/* ARCHITECTURAL PROPERTY IMAGES
   These are illustrative photographs.
   Replace them with verified 3D renders
   when you have your own image collection.
*/

const propertyImages = {
    apartment: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85"
    ],

    duplex: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85"
    ],

    house: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"
    ]
};


/* PROPERTY AMENITIES */

const amenities = {
    apartment: [
        "Spacious bedrooms",
        "Modern bathrooms",
        "Fully fitted kitchen",
        "Comfortable living and dining area",
        "Wardrobes and storage space",
        "Secure parking",
        "Air conditioning, where provided",
        "Swimming pool, where available",
        "24-hour security, where provided"
    ],

    duplex: [
        "Multiple spacious bedrooms",
        "Modern bathrooms",
        "Large living and dining areas",
        "Fitted kitchen",
        "Private outdoor space, where available",
        "Secure parking",
        "Swimming pool, where available",
        "Basketball or recreational court, where available",
        "Security arrangements to be confirmed"
    ],

    house: [
        "Spacious family bedrooms",
        "Modern bathrooms",
        "Fitted kitchen",
        "Living and dining rooms",
        "Storage space",
        "Parking area",
        "Garden or outdoor space, where available",
        "Swimming pool, where available",
        "Security arrangements to be confirmed"
    ]
};


/* =========================================
   GET HTML ELEMENTS
========================================= */

const propertyContainer =
    document.getElementById("propertyContainer");

const purposeFilter =
    document.getElementById("purposeFilter");

const typeFilter =
    document.getElementById("typeFilter");

const locationFilter =
    document.getElementById("locationFilter");

const resultsCount =
    document.getElementById("resultsCount");

const resetFilters =
    document.getElementById("resetFilters");

const enquiryDialog =
    document.getElementById("enquiryDialog");

const closeDialog =
    document.getElementById("closeDialog");

const dialogTitle =
    document.getElementById("dialogTitle");

const dialogLocation =
    document.getElementById("dialogLocation");

const dialogPrice =
    document.getElementById("dialogPrice");

const amenitiesList =
    document.getElementById("amenitiesList");


/* =========================================
   CHECK THAT THE HTML IS LINKED CORRECTLY
========================================= */

if (
    !propertyContainer ||
    !purposeFilter ||
    !typeFilter ||
    !locationFilter ||
    !resultsCount
) {
    console.error(
        "Properties page elements were not found. Check Properties.html and properties.js."
    );
}


/* =========================================
   ADD LOCATIONS TO THE DROPDOWN
========================================= */

locations.forEach(function (location) {
    const option = document.createElement("option");

    option.value = location;
    option.textContent = location;

    locationFilter.appendChild(option);
});


/* =========================================
   GENERATE PROPERTY DATA
========================================= */

const properties = [];

let propertyId = 1;

locations.forEach(function (location) {

    Object.keys(propertyTypes).forEach(function (type) {

        const typeInfo = propertyTypes[type];

        Object.keys(purposes).forEach(function (purpose) {

            const purposeInfo = purposes[purpose];

            /*
              Create THREE listings for every combination
              of location, property type and purpose.
            */

            for (let i = 0; i < 3; i++) {

                const property = {
                    id: propertyId,

                    location: location,

                    type: type,

                    typeLabel: typeInfo.label,

                    purpose: purpose,

                    purposeLabel: purposeInfo.label,

                    name: typeInfo.names[i],

                    bedrooms: typeInfo.bedrooms[i],

                    bathrooms: typeInfo.bathrooms[i],

                    image: propertyImages[type][i],

                    priceLabel: purposeInfo.priceLabel,

                    amenities: amenities[type]
                };

                properties.push(property);

                propertyId++;
            }

        });

    });

});


/* =========================================
   CREATE A PROPERTY CARD
========================================= */

function createPropertyCard(property) {

    const card = document.createElement("article");

    card.className = "property-card";

    const imageWrap = document.createElement("div");

    imageWrap.className = "property-image-wrap";

    const image = document.createElement("img");

    image.className = "property-image";

    image.src = property.image;

    image.alt = property.name + " architectural image";

    image.loading = "lazy";

    image.onerror = function () {
        image.style.display = "none";
        imageWrap.style.background = "#dce7f5";
    };

    const badge = document.createElement("span");

    badge.className = "purpose-badge";

    badge.textContent = property.purposeLabel;

    imageWrap.appendChild(image);

    imageWrap.appendChild(badge);


    const details = document.createElement("div");

    details.className = "property-details";


    const title = document.createElement("h3");

    title.textContent = property.name;


    const location = document.createElement("p");

    location.className = "property-location";

    location.textContent = "📍 " + property.location + ", Lagos";


    const features = document.createElement("div");

    features.className = "property-features";

    features.textContent =
        "🛏 " + property.bedrooms + " Bedrooms  |  " +
        "🛁 " + property.bathrooms + " Bathrooms";


    const typeLabel = document.createElement("p");

    typeLabel.className = "property-type-label";

    typeLabel.textContent = property.typeLabel;


    const price = document.createElement("p");

    price.className = "property-price";

    price.textContent = property.priceLabel;


    const enquiryButton = document.createElement("button");

    enquiryButton.type = "button";

    enquiryButton.className = "property-button";

    enquiryButton.textContent = "Enquire Now";

    enquiryButton.addEventListener("click", function () {
        openPropertyEnquiry(property);
    });


    details.appendChild(title);

    details.appendChild(location);

    details.appendChild(features);

    details.appendChild(typeLabel);

    details.appendChild(price);

    details.appendChild(enquiryButton);


    card.appendChild(imageWrap);

    card.appendChild(details);

    return card;
}


/* =========================================
   DISPLAY THE PROPERTIES
========================================= */

function displayProperties() {

    if (!propertyContainer) {
        return;
    }

    propertyContainer.replaceChildren();

    const selectedPurpose = purposeFilter.value;

    const selectedType = typeFilter.value;

    const selectedLocation = locationFilter.value;


    const filteredProperties = properties.filter(function (property) {

        const matchesPurpose =
            selectedPurpose === "all" ||
            property.purpose === selectedPurpose;

        const matchesType =
            selectedType === "all" ||
            property.type === selectedType;

        const matchesLocation =
            selectedLocation === "all" ||
            property.location === selectedLocation;

        return (
            matchesPurpose &&
            matchesType &&
            matchesLocation
        );

    });


    resultsCount.textContent =
        "Showing " +
        filteredProperties.length +
        " of " +
        properties.length +
        " sample properties";


    if (filteredProperties.length === 0) {

        const message = document.createElement("div");

        message.className = "no-results";

        message.textContent =
            "No properties match your selected filters. Try changing your filters.";

        propertyContainer.appendChild(message);

        return;
    }


    const fragment = document.createDocumentFragment();

    filteredProperties.forEach(function (property) {

        fragment.appendChild(createPropertyCard(property));

    });

    propertyContainer.appendChild(fragment);

}


/* =========================================
   OPEN THE PROPERTY ENQUIRY WINDOW
========================================= */

function openPropertyEnquiry(property) {

    dialogTitle.textContent = property.name;

    dialogLocation.textContent =
        "📍 " + property.location + ", Lagos" +
        " | " + property.bedrooms + " Bedrooms" +
        " | " + property.bathrooms + " Bathrooms" +
        " | " + property.purposeLabel;


    dialogPrice.textContent = property.priceLabel;


    amenitiesList.replaceChildren();

    property.amenities.forEach(function (amenity) {

        const item = document.createElement("li");

        item.textContent = amenity;

        amenitiesList.appendChild(item);

    });


    if (typeof enquiryDialog.showModal === "function") {

        enquiryDialog.showModal();

    } else {

        alert(
            property.name +
            "\nLocation: " + property.location +
            "\n" + property.priceLabel
        );

    }

}


/* =========================================
   CLOSE THE ENQUIRY WINDOW
========================================= */

if (closeDialog && enquiryDialog) {

    closeDialog.addEventListener("click", function () {

        enquiryDialog.close();

    });


    enquiryDialog.addEventListener("click", function (event) {

        if (event.target === enquiryDialog) {

            enquiryDialog.close();

        }

    });

}


/* =========================================
   FILTER EVENT LISTENERS
========================================= */

purposeFilter.addEventListener("change", displayProperties);

typeFilter.addEventListener("change", displayProperties);

locationFilter.addEventListener("change", displayProperties);


/* =========================================
   RESET ALL FILTERS
========================================= */

resetFilters.addEventListener("click", function () {

    purposeFilter.value = "all";

    typeFilter.value = "all";

    locationFilter.value = "all";

    displayProperties();

});


/* =========================================
   INITIALISE THE PAGE
========================================= */

displayProperties();


console.log(
    "A & S Real Estate: " +
    properties.length +
    " sample properties generated successfully."
);
  console.log("A & S REAL ESTATE JavaScript is working!");
    alert("JavaScript is connected!");