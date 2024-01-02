const data=[
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
        caption:"Best Books to Learn Full-Stack Development"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
        caption:"Best Ways to Learn Full Stack Development in 2024"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-1536x804.png",
        caption:"The Ultimate Guide to Real-World Full-Stack Development Applications"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-1536x804.png",
        caption:"Top 10 Tools Every Full-Stack Developer Should Master"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
        caption:"Best Full-Stack Development Online Courses"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        caption:"Top Ways to Assess Soft Skills in Full Stack Developers"
    },

]
export default function Fsd(){

    
    return(
        <div>
            <h1 className="head">FULL STACK DEVELOPMENT</h1>
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