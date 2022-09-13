import React, { useEffect, useState } from "react";
import axios from "axios";
import './css/style.css';


const imageBaseURL = "https://image.tmdb.org/t/p/w500/";
export default function MovieDBAPI() {

    const [post, setPost] = useState([]);
    const [count, setCount] = useState(1);

    function getApiData() {
        const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=b45cce70bce060e172f3dd4d7f839c55&page=${count}`;
        axios.get(baseURL).then((response) => {
            setPost([...post, ...response.data.results]);

        });
    }
    useEffect(() => {
        getApiData();
    }, [count]);

    function showMoreItems() {
        setCount(count + 1);
        getApiData();
    }
    if (!post) return "No post!";
    return (
        <>
            <h4 className="main-heading">Welcome To Logistic Infotech</h4>

            <div className="container mt-5 mb-3">
                <div className="row">
                    {console.log(post)}
                    {post.map((movie) => (
                        <div className="col-md-4" key={movie.id}>
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div clasclassNames="icon"> <i className="bx bxl-mailchimp"></i> </div>
                                        <div className="ms-2 c-details">
                                            <h6 className="mb-0">Title</h6> <span>{movie.title}</span>
                                        </div>
                                    </div>
                                    <div className="badge"> <span>Release Date <br />{movie.release_date}</span> </div>
                                </div>
                                <div className="mt-5">
                                    <h3 className=""><img src={`${imageBaseURL}${movie.poster_path}`} alt="new" style={{ 'height': '300px', 'width': '370px' }} onClick={() => window.open(`https://www.themoviedb.org/movie/${movie.id}-${movie.title}`, "_blank")} /></h3>
                                    <div className="mt-5">
                                        <div className="mt-3"> <span className="text1">Overview :- <span class="text2">{movie.overview}</span></span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button class='btn btn-info' style={{ 'padding': '10px', 'margin': '40px' }} onClick={showMoreItems}>Load More</button>
        </>
    );
}