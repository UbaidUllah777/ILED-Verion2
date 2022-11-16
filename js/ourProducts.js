//  ********* VENDERING ALL PRPERTY NAMES OF THE THREE TABLES ********
const ElpixelPitch = document.getElementById("pixelPitch");
const Elresolution = document.getElementById("resolution");
const Elbrightness = document.getElementById("brightness");
const ElrefreshRate = document.getElementById("refreshRate");
const Elcontrast5000 = document.getElementById("contrast5000");
const ElcolorDepth = document.getElementById("colorDepth");
const ElviewingAngle = document.getElementById("viewingAngle");
const EldiodeType = document.getElementById("diodeType");
const ElindoorOutdoor = document.getElementById("indoorOutdoor");
const EloperatingTemprature = document.getElementById("operatingTemprature");
const EloperatingHumidity = document.getElementById("operatingHumidity");
const ElenviromentRating = document.getElementById("enviromentRating");
const Elweight = document.getElementById("weight");
const ElweightMetric = document.getElementById("weightMetric");
const Eldimensions = document.getElementById("dimensions");
const EldimensionsMetric = document.getElementById("dimensionsMetric");
const ElpanelPower = document.getElementById("panelPower");
const Elinstallation = document.getElementById("installation");
const EloperatingVoltageAC = document.getElementById("operatingVoltageAC");
const Elcertifiations = document.getElementById("certifiations");

// if some column data is Not available the we wil use this variable
const NotAvailable = "N/A";
const clickedProduct = sessionStorage.getItem("productId");

//  ************* ALL PRODUCTS DATA OF ILED   **************
//  ************* NEW PRODUCT CAN BE ADDED HERE   **************
const ourProducts = [
  // 3D Hologram
  {
    id: "3DHOLOGRAM",
    productName: "3D HOLOGRAM",
    productHeadingLine: "",
    productDetail: "",
    productImages: [
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // UL TRANSPARENT LED DISPLAY
  {
    id: "UlTransparentLedDisplay",
    productName: "UL TRANSPARENT LED DISPLAY",
    productHeadingLine: "",
    productDetail: "",
    productImages: [
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // ILED SPECIALL TILE SERIES
  {
    id: "IledSpecialTileSeries",
    productName: "ILED SPECIAL TILE Series",
    productHeadingLine: "",
    productDetail: "",
    productImages: [
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // IB SERIES (BLACK LED)
  {
    id: "IbSeriesBlackLed",
    productName: "IB SERIES (BLACK LED)",
    productHeadingLine: "",
    productDetail: "",
    productImages: [
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // TAXI TOP
  {
    id: "TaxiTop",
    productName: "TAXI TOP",
    productHeadingLine: "",
    productDetail: "",
    productImages: [
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // STREET POLE
  {
    id: "StreetPole",
    productName: "STREET POLE",
    productHeadingLine: "",
    productDetail: "",
    productImages: [
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // ILEX SERIES
  {
    id: "IlexSeries",
    productName: "ILEX SERIES",
    productHeadingLine: "",
    productDetail: "",
    productImages: [
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
      {
        image: "",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
];

//  ********** RENDERING DATA ON THE 3 TABLES(SPACIFICATIONS)  **********
for (const singleProduct of ourProducts) {
  if (singleProduct.id === clickedProduct) {
    for (const singleProperty of singleProduct.DisplayProperties) {
      if (singleProperty.id == "pixelPitch") {
        for (singleValue of singleProperty.Values) {
          ElpixelPitch.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "resolution") {
        for (singleValue of singleProperty.Values) {
          Elresolution.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "brightness") {
        for (singleValue of singleProperty.Values) {
          Elbrightness.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "refreshRate") {
        for (singleValue of singleProperty.Values) {
          ElrefreshRate.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "contrast5000") {
        for (singleValue of singleProperty.Values) {
          Elcontrast5000.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "colorDepth") {
        for (singleValue of singleProperty.Values) {
          ElcolorDepth.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "viewingAngle") {
        for (singleValue of singleProperty.Values) {
          ElviewingAngle.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "diodeType") {
        for (singleValue of singleProperty.Values) {
          EldiodeType.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }

      // ENGINEERING Table

      if (singleProperty.id == "indoorOutdoor") {
        for (singleValue of singleProperty.Values) {
          ElindoorOutdoor.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "operatingTemprature") {
        for (singleValue of singleProperty.Values) {
          EloperatingTemprature.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "operatingHumidity") {
        for (singleValue of singleProperty.Values) {
          EloperatingHumidity.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "enviromentRating") {
        for (singleValue of singleProperty.Values) {
          ElenviromentRating.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "weight") {
        for (singleValue of singleProperty.Values) {
          Elweight.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "weightMetric") {
        for (singleValue of singleProperty.Values) {
          ElweightMetric.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "dimensions") {
        for (singleValue of singleProperty.Values) {
          Eldimensions.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "dimensionsMetric") {
        for (singleValue of singleProperty.Values) {
          EldimensionsMetric.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "panelPower") {
        for (singleValue of singleProperty.Values) {
          ElpanelPower.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }

      // Manufacturing Table

      if (singleProperty.id == "installation") {
        for (singleValue of singleProperty.Values) {
          Elinstallation.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "operatingVoltageAC") {
        for (singleValue of singleProperty.Values) {
          EloperatingVoltageAC.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
      if (singleProperty.id == "certifiations") {
        for (singleValue of singleProperty.Values) {
          Elcertifiations.innerHTML += `<td>${singleValue.value}</td>`;
        }
      }
    }
  }
}
