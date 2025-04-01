import Image from "next/image";

const dietItems = [
    { img: "/images/image1.jpg", title: "Consumed Item Name", desc: "For us to count the total number of calories intake by the user. You should provide the name of the food item that you have consumed" },
    { img: "/images/image2.jpg", title: "Ingredients", desc: "For us to count the number of calories consumend by you when having this food we need to know the ingredients in this food item" },
    { img: "/images/image3.jpg", title: "Quantity", desc: "The Quantity of each ingredient must be provided for us to know how much calories intake by the user for us to provide you the accurate results." },
];

export default function DietSection() {
    return (
        <section>
            <hr />
            <div className="px-20 py-10 mb-10">
                <h3 className="text-3xl font-semibold text-center mt-2">Diet Intake</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                    {dietItems.map((item, index) => (
                        <div key={index} className="border rounded-md p-4">
                            <Image src={item.img} alt={item.title} width={500} height={350} className="rounded-md" />
                            <h4 className="font-medium mt-2 text-2xl text-center">{item.title}</h4>
                            <p className="text-gray-400 text-center text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="mb-10"/>
        </section>
    );
}
