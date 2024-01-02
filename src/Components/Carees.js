const data=[
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
        caption:"UI/UX Designer Job Description and Roles & Responsibilities"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
        caption:"IT Jobs for Economics Students"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
        caption:"A Lucrative Career Path"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
        caption:"Automation Test Engineer Resume"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-1536x804.webp",
        caption:"Professional Civil Engineer Resume: A Guide To Attract Employers"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-1536x804.webp",
        caption:"Based Companies for Project Management"
    },

]
export default function Carees(){

    
    return(
        <div>
            <h1 className="head">CAREES</h1>
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