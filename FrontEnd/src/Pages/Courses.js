import React from 'react';
import CourseCard from '../components/CourseCard';

export const Courses = () => {
  const courses = [
    {
      id: 101,
      title: "Python",
      description: "Learn Python, a versatile and beginner-friendly programming language used for web development, data analysis, automation, and more.",
      imageUrl: "https://www.unite.ai/wp-content/uploads/2022/04/AI-Python-Libraries.png",
      link: "/courses/101",
    },
    {
      id: 102,
      title: "Java",
      description: "Master Java, a powerful programming language known for its portability and performance, commonly used in enterprise applications.",
      imageUrl: "https://www.shutterstock.com/image-photo/java-inscription-against-laptop-code-260nw-1852227901.jpg",
      link: "/courses/102",
    },
    {
      id: 103,
      title: "JavaScript",
      description: "Dive into JavaScript, the essential language for web development, enabling dynamic and interactive web pages.",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/011/216/135/non_2x/computer-language-programming-javascript-code-internet-text-editor-components-on-on-display-screen-free-photo.jpg",
      link: "/courses/103",
    },
    {
      id: 104,
      title: "Excel",
      description: "Enhance your data management skills with Excel, the go-to tool for creating spreadsheets, analyzing data, and automating tasks.",
      imageUrl: "https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhjZWx8ZW58MHx8MHx8fDA%3D",
      link: "/courses/104",
    },
    {
      id: 105,
      title: "MySQL",
      description: "Learn MySQL, a popular relational database management system used for managing and organizing data efficiently.",
      imageUrl: "https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png",
      link: "/courses/105",
    },
    {
      id: 106,
      title: "Content Writing",
      description: "Develop your writing skills with our content writing course, focusing on creating compelling and engaging online content.",
      imageUrl: "https://media.licdn.com/dms/image/D5612AQFbdnbkVUBVuA/article-cover_image-shrink_720_1280/0/1664892809287?e=2147483647&v=beta&t=_zPKPn58PLuS2HaLnWpbCOXJg-KFa4dVwDLfidkANHY",
      link: "/courses/106",
    },
    {
      id: 107,
      title: "HTML",
      description: "Get started with HTML, the foundational markup language for creating structured content on the web.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfbRia-RHZbVqF8xyS8XHQzM9g-7wQSCk4Q&s",
      link: "/courses/107",
    },
    {
      id: 108,
      title: "CSS",
      description: "Learn CSS, the styling language used to control the layout and appearance of web pages.",
      imageUrl: "https://res.cloudinary.com/cloudinary-marketing/images/w_1540,h_847/f_auto,q_auto/v1649718594/Web_Assets/blog/working_with_css_22218720ab/working_with_css_22218720ab-jpg?_i=AA",
      link: "/courses/108",
    },
    {
      id: 109,
      title: "React",
      description: "Master React, a popular JavaScript library for building user interfaces, particularly for single-page applications.",
      imageUrl: "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
      link: "/courses/109",
    },
    {
      id: 110,
      title: "Node.js",
      description: "Explore Node.js, a runtime environment that lets you run JavaScript on the server side for building scalable network applications.",
      imageUrl: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      link: "/courses/110",
    },
    {
      id: 111,
      title: "MongoDB",
      description: "Learn MongoDB, a NoSQL database system designed for handling large amounts of unstructured data.",
      imageUrl: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/Mu3tf3evRUuYT2mbdPd93vmC",
      link: "/courses/111",
    },
    // Add more courses as needed
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
