const data=[
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        caption:"Top 10 High Paying Non-Coding Jobs in Data Science"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
        caption:"Extraordinary Data Science Projects for Beginners As Well as Veterans"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
        caption:"Useful Python Libraries & Tools for Data Science Beginners"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
        caption:"Data Science and Data Engineering"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp",
        caption:"Data Science Webinars and Workshops"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
        caption:"Best Data Science Books to Learn"
    },

]
export default function Datasci(){

    
    return(
        <div>
            <h1 className="head">DATA SCIENCE</h1>
           <div className="map-container">
           {
            data.map((course, index) => (
                <div className="map-con" key={index}>
                <img src={course.img} alt="fsd"  />
                <p>{course.caption}</p>
                <button className="btn-map">Book Now</button>
                </div>
            ))}
           </div>
        </div>
     );
    
};