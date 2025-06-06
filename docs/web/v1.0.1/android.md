[<img src="https://about.mappls.com/images/mappls-b-logo.svg" height="60"/>](https://www.mapmyindia.com/api)

## Mappls DIGIPIN

###

DIGIPIN is poised to serve as a robust foundation for Geospatial Governance, promising improvements in public service delivery, quicker emergency responses, and enhanced logistics efficiency.

The introduction of DIGIPIN marks a transformative leap in India's digital journey, bridging the gap between physical locations and their digital counterparts.

## 2. Design Approach
### 2.1 Core Concept
- Developed in collaboration with **IIT Hyderabad**.
- Uses an **alphanumeric offline grid system**.
- Divides India into **4m x 4m** units, each assigned a unique **10-digit alphanumeric code** based on latitude and longitude.
- The system is **scalable, adaptable**, and can be integrated with **GIS applications**.

### 2.2 DIGIPIN Layer
- Acts as an **offline addressing reference system**.
- Enables **logical and directional** location referencing.
- Useful for **emergency rescue operations, disaster management**, and **public services**.
- Fully **public domain**, ensuring **no privacy concerns**.


#### Properties of DIGIPIN
- DIGIPIN contains the geographic location of the area. It is possible to extract the latitude and longitude of the address from the DIGIPIN with low complexity.
- DIGIPIN has been designed for the Indian context. All points of interest to India (including maritime regions) can be assigned codes, and it is possible to assign unique digital addresses even in areas that are very densely populated.
- The format of the DIGIPIN is intuitive and human-readable. Effort was made to infuse a sense of directionality within the format of DIGIPIN.
- DIGIPIN is independent of the land use pattern and the structure built. Note that DIGIPIN is designed as a permanent digital infrastructure, that does not change with changes in the names of state, city or locality, or with changes in the road network in an area. The DIGIPIN is designed to be robust to accommodate future developments and changes. The arrival of a new building in a community, or even a new village or city in a district, or changes in the name of a road or locality will not affect the underlying DIGIPIN.
- The length of the DIGIPIN is designed to be as small as possible in order to provide an efficient digital representation of addresses.

### How Does Mappls Help by integrating DIGIPIN


- **Improved Address Accuracy and Efficiency**
    - **Precise Location Mapping:** Third-party users (such as delivery services, logistics, or e-commerce platforms) will benefit from highly accurate location data, reducing delivery errors.
    - **Simplified Addressing:** Instead of long-form addresses that can be inconsistent, users can rely on a standardized alphanumeric code.
- **Enhanced User Experience**
    - **Easier Navigation:** GPS applications, ride-hailing services, and mapping platforms can integrate DIGIPIN to provide better routing.
    - **Seamless Address Entry:** Users won’t need to enter lengthy addresses, improving form-filling efficiency in apps and websites.
- **Data Privacy and Security**
    - **Publicly Available Grid:** Since DIGIPIN is designed to be publicly accessible, there are no privacy concerns associated with its use.
    - **No Personal Data Storage:** Unlike conventional addresses tied to individuals, DIGIPIN is location-based and not linked to personal identities.
- **Business and Operational Benefits**
    - **Faster Deliveries & Serviceability:** Logistics, emergency services, and e-commerce platforms can optimize routes and improve last-mile connectivity.
    - **Fraud Reduction:** DIGIPIN can act as a verification tool, ensuring users enter valid location codes instead of fake addresses.

### Mappls-DIGIPIN Methods : 

**To convert Coordinate to DIGIPIN**
##### SWIFT
~~~swift
let digipin: String = MapplsDigiPinUtility().getDigiPin(from: coordinate)
~~~
##### Objective-c
~~~swift
NSString* digipin = [[[MapplsDigiPinUtility alloc] init] getDigiPinFrom:CLLocationCoordinate2DMake(28.0, 77.898)];
~~~

**To convert DIGIPIN to Coordinate**
##### SWIFT
~~~swift
let coordinate: CLLocationCoordinate2D = MapplsDigiPinUtility().getCoordinate(from: digipin)?.coordinate
~~~
##### Objective-c
~~~swift
CLLocationCoordinate2D coordinate = [[[[MapplsDigiPinUtility alloc] init] getCoordinateFrom:digipin] coordinate];
~~~

For any queries and support, please contact:

[<img src="https://about.mappls.com/images/mappls-logo.svg" height="40"/>](https://about.mappls.com/api/)
Email us at [apisupport@mappls.com](mailto:apisupport@mappls.com)


![](https://www.mapmyindia.com/api/img/icons/support.png)
[Support](https://about.mappls.com/contact/)
Need support? contact us!



<div align="center">
  <a href="https://stackoverflow.com/questions/tagged/mappls-api" target="_blank" rel="noopener noreferrer">
    <img src="https://www.mapmyindia.com/api/img/icons/stack-overflow.png" alt="Stack Overflow" style={{ margin: "0 10px" }} />
  </a>
  <a href="https://about.mappls.com/blog/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.mapmyindia.com/api/img/icons/blog.png" alt="Blog" style={{ margin: "0 10px" }} />
  </a>
  <a href="https://github.com/Mappls-api" target="_blank" rel="noopener noreferrer">
    <img src="https://www.mapmyindia.com/api/img/icons/gethub.png" alt="GitHub" style={{ margin: "0 10px" }} />
  </a>
  <a href="https://www.npmjs.com/org/mapmyindia" target="_blank" rel="noopener noreferrer">
    <img src="https://mmi-api-team.s3.ap-south-1.amazonaws.com/API-Team/npm-logo.one-third%5B1%5D.png" height="40" alt="npm" style={{ margin: "0 10px" }} />
  </a>
</div>


<div align="center">@ Copyright 2025 CE Info Systems Ltd. All Rights Reserved.</div>

<div align="center">
  <a href="https://about.mappls.com/api/terms-&amp;-conditions">Terms & Conditions</a> |
  <a href="https://about.mappls.com/about/privacy-policy">Privacy Policy</a> |
  <a href="https://about.mappls.com/pdf/mapmyIndia-sustainability-policy-healt-labour-rules-supplir-sustainability.pdf">Supplier Sustainability Policy</a> |
  <a href="https://about.mappls.com/pdf/Health-Safety-Management.pdf">Health & Safety Policy</a> |
  <a href="https://about.mappls.com/pdf/Environment-Sustainability-Policy-CSR-Report.pdf">Environmental Policy & CSR Report</a>
</div>

<div align="center">Customer Care: +91-9999333223</div>