import React, { useState, useEffect, useContext } from "react";

// import Heart from '../../assets/Heart';
import "./Post.css";
import bikeimage from "../../assets/bikeimage.jpeg";
import { FirebaseContext } from "../../store/FirebaseContext";
import { getDocs, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { postContext } from "../../store/PostContext";
import { useNavigate } from "react-router-dom";

function Posts() {
    const { db } = useContext(FirebaseContext);
    const [products, setProducts] = useState([]);
    const { setPostDetails } = useContext(postContext);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch all documents in the 'products' collection
                const snapshot = await getDocs(collection(db, "products"));
                const allProducts = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id, // Include the document ID
                }));
                console.log(allProducts);
                setProducts(allProducts);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProducts();
    }, [db]);
    return (
        <div className="postParentDiv">
            <div className="moreView">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View more</span>
                </div>
                <div className="cards">
                    {products.map((product, id) => {
                        return (
                            <div
                                className="card"
                                onClick={() => {
                                    setPostDetails(product);
                                    navigate("/viewpost");
                                }}
                            >
                                <div className="favorite">{/* <Heart></Heart> */}</div>
                                <div className="image">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="content">
                                    <p className="rate">&#x20B9; {product.price}</p>
                                    <span className="kilometer">{product.category}</span>
                                    <p className="name"> {product.name}</p>
                                </div>
                                <div className="date">
                                    <span>{product.createdAt.toDate().toLocaleDateString()}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="recommendations">
                <div className="heading">
                    <span>Fresh recommendations</span>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="favorite">{/* <Heart></Heart> */}</div>
                        <div className="image">
                            <img src={bikeimage} alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">&#x20B9; 250000</p>
                            <span className="kilometer">Two Wheeler</span>
                            <p className="name"> YAMAHA R15V3</p>
                        </div>
                        <div className="date">
                            <span>10/5/2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
