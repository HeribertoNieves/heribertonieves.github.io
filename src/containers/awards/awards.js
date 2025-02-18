// import React, { useState, useEffect, useContext } from "react";
// import "./awards.scss";
// import AwardCard from "../../components/awardCard/AwardCard";
// import { awardsSection } from "../../portfolio";
// import { Fade } from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function Awards() {
//   const { isDark } = useContext(StyleContext);
//   const [awards, setAwards] = useState([]);

//   useEffect(() => {
//     if (awardsSection.displayDynamicAwards === "true") {
//       fetch("/awards.json")
//         .then(result => result.ok ? result.json() : Promise.reject("Failed to fetch"))
//         .then(response => setAwards(response.items))
//         .catch(error => {
//           console.error(`Error fetching awards: ${error}`);
//           setAwards("Error");
//           awardsSection.displayDynamicAwards = "false";
//         });
//     }
//   }, []);

//   if (!awardsSection.display) return null;

//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main" id="awards">
//         <div className="award-header">
//           <h1 className="award-header-text">{awardsSection.title}</h1>
//           <p className={isDark ? "dark-mode award-subtitle" : "subTitle award-subtitle"}>
//             {awardsSection.subtitle}
//           </p>
//         </div>
//         <div className="award-main-div">
//           <div className="award-text-div">
//             {awardsSection.displayDynamicAwards !== "true" || awards === "Error"
//               ? awardsSection.awards.map((award, i) => (
//                   <AwardCard key={i} isDark={isDark} award={award} />
//                 ))
//               : awards.map((award, i) => (
//                   <AwardCard key={i} isDark={isDark} award={award} />
//                 ))}
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// }
//import "../../containers/blogs/Blog.scss";
import "../blogs/Blog.scss";
import React, {useState, useEffect, useContext} from "react";
import BlogCard from "../../components/blogCard/BlogCard";
import {awardsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Awards() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
  useEffect(() => {
    if (awardsSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            awardsSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (!awardsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="awards">
        <div className="blog-header">
          <h1 className="blog-header-text">{awardsSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {awardsSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {awardsSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? awardsSection.awards.map((award, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: award.url,
                        image: award.image,
                        title: award.title,
                        description: award.description
                      }}
                    />
                  );
                })
              : mediumBlogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content)
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
