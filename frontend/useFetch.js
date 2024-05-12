import { useEffect, useState } from 'react';
   
// For Sign Up screen 
export const handleRegister = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, username}),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Admin registered successfully");
            navigate(""); // here you pass the path to navigate the screen where you want .
        } else {
            console.error("Failed to register admin");
            // setError(data.message)
        }
    } catch (error) {
        console.log(error);
    }

};

// For Login / Signin screen 
export const handleLogin = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Admin Login successfully");
            navigate(""); // here you navigate the screen where you want .
        } else {
            console.error("Failed to login admin");
            // setError(data.message) 
        }

    } catch (error) {
        console.log(error);
    }
};

//  for running shoes component  

export const useFetchAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/products`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.products);
                    setIsLoading(false);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllProducts();
    }, []);

    return { products, isLoading };
};

// for running shoe component get product by id

export const useFetchProducts = (id) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/products/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return { products };
};

// for best seller component 
export const useFetchShoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/bestseller/`);
                if (response.ok) {
                    const data = await response.json();
                    setShoes(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return { shoes };
};

//  for best seller component get shoes by category

export const useFetchShoesByCategory = (category) => {
    const [shoesByCategory, setShoesByCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/bestseller/category/${category}`);
                if (response.ok) {
                    const data = await response.json();
                    setShoesByCategory(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return { shoesByCategory };
};



