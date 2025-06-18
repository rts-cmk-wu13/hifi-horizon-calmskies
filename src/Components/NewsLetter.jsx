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
        <section>
            <div>
                <h2>SIGN UP FOR OUR NEWSLETTER</h2>
                <p>Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.</p>
            </div>
            <div>
                <input type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={handleSignUp} className="bg-orange-600 text-white">
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