import React, { useState, useEffect, createContext } from 'react'
import Navabar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=4d74e8197ea6444aaff7128178272c51").then(
            response => {
                if (search === "") {
                    setData(response.data.articles)
                }
                else {
                    let filteredItems = response.data.articles.filter((item) => {
                        if (item.title) {
                            return item.title.toLowerCase().includes(search.toLowerCase())
                        }
                    })
                    setData(filteredItems)
                }
            }
        ).catch(err => console.log(err))
        console.log(data);
    }, [search])
    const getImage = (item) => {
        // console.log(data);
        if (item.urlToImage) {
            return item.urlToImage
        }
        else {
            return "https://www.coindesk.com/resizer/Fl3Ho7yNPycDAMMOP6jZQugmiZs=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/F6EMOEK6UVARNFJRX34ZJSKOCM"
        }
    }
    const handleDel = (url) => {
        // console.log(i);
        let filterdata = data.filter((item) => item.url !== url)
        console.log(filterdata, "filterdata");
        setData(filterdata)
    }
    const handleLike = (e) => {
        // console.log(object)
        data.map((item, idx) => {
            if (e.target.id == idx) {
                console.log(idx);
                const element = document.getElementById(idx)
                element.classList.toggle("red")
                element.classList.toggle("fa-solid")
                if(element.classList.contains("red")){
                    localStorage.setItem("liked", JSON.stringify(item))
                }
                else{
                    localStorage.removeItem("liked")
                }
            }
        })

    }
    const detailsHandler = (item) => {
        if (item) {
            localStorage.setItem("itemDetails", JSON.stringify(item))
        }
    }
    return (
        <div>
            <Navabar setSearch={setSearch} search={search} />
            <div className='flex'>
                {
                    data.map((item, idx) => (
                        <div key={item.url} className="card" id={item.url}>
                            <div>
                                <img src={getImage(item)} alt="" style={{ height: "200px", width: "298px" }} />
                            </div>
                            <h3>{item.title}</h3>
                            <div className='icons'>
                                <i className={"fa-regular fa-heart"} id={idx} onClick={(e) => handleLike(e)}></i>
                                <i className="fa-solid fa-trash" style={{ color: "black" }} onClick={() => handleDel(item.url)}></i>
                                <Link to='/details'><button className='details' onClick={() => detailsHandler(item)}>Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home