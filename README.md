# Road-Route-Mapper
### Project Report Submitted in Partial Fulfillment of the Requirement for the Award of the Degree of Bachelor of Technology in Artificial Intelligence
#### By
Prathmesh Deshkar, Tejas Chandrikapure, Prathmesh Vishwekar, Sahil Lande, Rahul Alone, Samiksha Gotmare

#### Under the Guidance of
Dr. Smita Nirkhi, Associate Professor, AI Dept.
Mr. Ajit Dharmik, CEO, 6Simplex Software Solution

---

### Abbreviations
- **GIS** – Geographical Information System
- **QGIS** – Quantum Geographical Information System
- **JS** – JavaScript
- **GeoJSON** – Geographic JavaScript Object Notation
- **JSON** – JavaScript Object Notation
- **WFS** – Web Feature Services
- **WMS** – Web Map Service

---

## Abstract
The goal of the Road-Route Mapper project is to provide an interactive web application for route planning using Geographic Information Systems (GIS). This user-friendly platform aims to revolutionize travel with seamless trip planning and real-time navigation. The software determines the best route by asking users to enter their starting point and destination, thus saving users time and improving their travel experiences. The emphasis is on making route planning easier and more user-friendly for people with different levels of experience by building a visually appealing and easy-to-use interface.

The Road-Route Mapper project holds substantial promise for future expansion and enhancement, including multi-modal transportation options, real-time data integration, personalization, and accessibility features. As the project evolves and explores monetization strategies, it has the potential to become a robust navigation tool and a sustainable venture. With a commitment to innovation, user-centric design, and the integration of emerging technologies, this project aims to remain at the forefront of the digital navigation landscape, providing users with efficient and customized route planning while fostering future growth and partnerships.

---

## Chapter 1: Introduction
### 1.1 Overview
Geographic Information Systems (GIS) represent a transformative technology that revolutionizes how we understand and interact with our world. At its core, GIS leverages spatial data to create, analyze, visualize, and interpret geographical information. By combining various types of data, such as maps, satellite imagery, demographic statistics, and more, GIS enables us to answer complex questions and solve real-world problems with a geographical dimension. GIS is critical for urban planning, environmental monitoring, disaster management, logistics, and countless other applications, empowering users to make informed decisions, optimize resources, and gain valuable insights by focusing on location-based analysis.

The "Road Route Mapper" project addresses the complex challenges of modern route planning by providing a comprehensive and innovative solution. This project streamlines the process of finding the most efficient path from point A to point B, emphasizing seamless integration of multiple technologies and a user-centric approach. The project begins with the use of Quantum Geographic Information System (QGIS) to create an extensive and accurate road layer, serving as the foundational data source. This road layer captures details on road networks, intersections, and various geographical attributes.

To make this data readily available, GeoServer, a robust geospatial data publication platform, ensures that the road data is accessible through web services, laying the groundwork for our web application. The web application, crafted using React and JavaScript, forms the interactive gateway to our road route mapping solution. The application’s design focuses on ease of use, empowering users to actively participate in route planning by clicking on roads to mark their chosen locations for route calculation.

The standout feature of the "Road Route Mapper" is its ability to dynamically compute and display the shortest route between user-specified starting and destination points. This feature, underpinned by advanced routing algorithms, delivers real-time optimization considering factors like road conditions, traffic, and distance. This empowers users to make informed decisions and plan their journeys efficiently, whether for daily commutes, road trips, logistics, or recreational adventures.

In a rapidly evolving world where efficient navigation and route planning are paramount, the "Road Route Mapper" project emerges as a versatile solution with numerous potential applications. From personal travel planning to logistics optimization and urban development, this project has the power to reshape how we interact with geospatial data and navigate our interconnected world. By integrating QGIS, GeoServer, and an intuitive web app, the project offers users a dynamic tool for efficient route planning, setting the stage for an enhanced and streamlined route planning experience.

### 1.2 Problem Statement
People rely on various navigation apps and tools to find the fastest, safest, or most convenient routes from one location to another. However, existing navigation systems do not always offer comprehensive or accurate data, leaving room for improvement in route mapping. The "Road Route Mapper" project aims to address these issues by developing a sophisticated and user-friendly route mapping application that leverages technology to provide optimal and efficient road routes.

In today's rapidly evolving and interconnected world, efficient and optimized route planning is critical for daily commutes, logistics, emergency services, tourism, and urban development. However, existing route planning solutions often fall short in providing users with customizable and geospatially accurate routing options. The "Road Route Mapper" project seeks to address this problem by developing a comprehensive and user-friendly route mapping solution that empowers individuals and organizations to find the shortest, most efficient paths between user-defined starting and destination points. This project aims to seamlessly integrate geospatial data, advanced routing algorithms, and user-centric design principles to revolutionize the way users interact with geographical information and make informed route planning decisions.

### 1.3 Graph Visualization and Cytoscape.js
To create and visualize the network of intersections and roads, the project utilizes Cytoscape.js, a graph visualization library. This choice is informed by the growing interest in graph analysis and visualization. "Mastering QGIS" by Menke et al. (2020) introduces readers to the concepts of graph theory and its application to spatial data. Cytoscape.js, a dynamic and versatile library, empowers the project to provide real-time route optimization by visualizing the road network as a graph.

The project also emphasizes user-centric design, aligning with principles of user experience (UX) and accessibility as highlighted in "Inclusive Design for a Digital World" by Henry (2019). The project's attention to accessibility features and personalization options ensures that the application is user-friendly and caters to a diverse audience.

The "Road Route Mapper" project is deeply rooted in literature spanning GIS, route optimization, web development, graph visualization, and user-centric design. The integration of these principles and technologies has allowed the project to create a powerful and user-friendly navigation tool, enhancing the route planning experience for users. This multidisciplinary approach underscores the project's potential to provide a comprehensive and efficient solution for modern route planning challenges.
