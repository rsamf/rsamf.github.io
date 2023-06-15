import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {awardSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
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
    if (awardSection.displayMediumBlogs === "true") {
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
            awardSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (!awardSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="awards">
        <div className="blog-header">
          <h1 className="blog-header-text">{awardSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {awardSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {awardSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? awardSection.awards.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      isDark={isDark}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
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
