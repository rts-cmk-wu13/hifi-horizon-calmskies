export default function InputElement({ selectedinput, setSelectedinput }) {

    const handleCheckboxChange = (inputCheckBox) => {
        const element = inputCheckBox.target;
        const { checked, id } = element
        checked ? setSelectedinput((prev) => [...prev, id]) : setSelectedinput((prev) => prev.filter((el) => el !== id))
    };

    return (
        <section>
            <h1>Home</h1>
            <div className="input-group flex gap-2">
                <label htmlFor="yamaha">Yamaha</label>
                <input type="checkbox" id="yamaha" onChange={handleCheckboxChange} />
            </div>
            <div className="input-group flex gap-2">
                <label htmlFor="marantz">Marantz</label>
                <input type="checkbox" id="marantz" onChange={handleCheckboxChange} />
            </div>
        </section>

    );
}


// import { useEffect, useState } from "react";

// export default function InputElement() {
//     const [selectedinput, setSelectedinput] = useState([]); // Indeholder de valgte input-elementer

//     const handleCheckboxChange = (e) => {
//         const element = e.target;

//         if (element.checked) {
//             // Tilføj til listen
//             setSelectedinput((prev) => [...prev, element]);
//         } else {
//             // Fjern fra listen
//             setSelectedinput((prev) => prev.filter((el) => el !== element));
//         }
//     };

//     useEffect(() => {
//         console.log("Valgte elementer:", selectedinput);
//     }, [selectedinput]);

//     return (
//         <section>
//             <h1>Home</h1>

//             <label htmlFor="id1">
//                 Checkbox 1
//                 <input id="id1" type="checkbox" onChange={handleCheckboxChange} />
//             </label>

//             <label htmlFor="id2">
//                 Checkbox 2
//                 <input id="id2" type="checkbox" onChange={handleCheckboxChange} />
//             </label>

//             <div className="mt-4">
//                 <h2>Valgte elementer:</h2>
//                 <ul>
//                     {selectedinput.map((el) => (
//                         <li key={el.id}>{el.id} er valgt</li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// }
