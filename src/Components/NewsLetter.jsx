import { useState } from "react"

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSignUp = async () => {
        if (!isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError(""); // clear if valid

        try {
            const response = await fetch("http://localhost:4000/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });
            if (response.ok) {
                console.log("Email submitted!");
            } else {
                setError("Something went wrong. Please try again.")
            }
        } catch (err) {
            setError("NEtwork error. Please try again.");
        }

        console.log("User email:", email);

    };


    return (
        <section className="m-10">
            <div className="m-5">
                <h2 className="text-center m-2">SIGN UP FOR OUR NEWSLETTER</h2>
                <p className="text-center">Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.</p>
            </div>
            <div className="text-center m-2">
                <input type="email"
                    className="bg-gray-200 p-1"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={handleSignUp} className="bg-orange-600 text-white p-1 mx-5">
                    Sign up
                </button>
                {error && (
                    <div className="text-red-600 mt-2">
                        {error}
                    </div>
                )}
            </div>
        </section>
    )
}