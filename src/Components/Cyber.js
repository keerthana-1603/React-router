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
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
        caption:"Cybersecurity Vs Ethical Hacking"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
        caption:" Importance and its uses & the growing challenges"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
        caption:"Types of Cybersecurity and Threats Involved"
    },
    {
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
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