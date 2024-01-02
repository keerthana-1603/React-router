const data=[
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        caption:"A Comprehensive Guide"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        caption:"Types of Hacking & More"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
        caption:"Cybersecurity Vs Ethical Hacking"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        caption:" Importance and its uses & the growing challenges"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        caption:"Types of Cybersecurity and Threats Involved"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        caption:"Is coding required for cybersecurity"
    },

]
export default function Cyber(){

    
    return(
        <div>
            <h1 className="head">CYBER SECURITY</h1>
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