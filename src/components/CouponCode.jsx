import React, { useEffect, useState } from "react";

const CouponCode = () => {
    const [data, setData] = useState([]);
    const [couponCode, setCouponCode] = useState("");

    // Using async/await for API call
    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Runs only once when component mounts

    return (
        <div style={{ padding: "20px" }}>
            {/* Coupon Code Input */}
            <div>
                <h1>Apply Coupon Code</h1>
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter the coupon code"
                    style={{
                        padding: "10px",
                        width: "100%",
                        marginBottom: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
            </div>

            {/* Cards to display fetched data */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {data.map((item) => (
                    <div key={item.id} style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "15px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                        textAlign: "center"
                    }}>
                        <h3>{item.name}</h3>
                        <p>Email: {item.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CouponCode;
