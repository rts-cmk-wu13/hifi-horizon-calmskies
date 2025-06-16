import { useLoaderData } from "react-router";


export default function About() {

    let history = useLoaderData()
    console.log(history);
    return (
        <div className="container px-8 sm:mx-auto">
          <h1 className="text-3xl font-bold mb-8">Our history</h1>
          <article className="grid gap-16">
            {history.map((item, index) => (
              <section
                key={item.id}
                className="grid lg:grid-cols-2 gap-8 my-8 even:[direction:rtl]" 
              >
                <img
                  className="w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col justify-center text-center p-4">
                  <h2 className="font-bold text-2xl mb-4">{item.title}</h2>
                  <p className="font-bold text-orange-400 mb-2">{item.text}</p>
                  <p>{item.subtext}</p>
                </div>
              </section>
            ))}
          </article>
        </div>
      );
}