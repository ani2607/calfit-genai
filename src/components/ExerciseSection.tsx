import Image from "next/image";

export default function ExerciseSection() {
    return (
        <section className="px-6 py-10 ml-4">

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left column - Text content */}
                <div className="flex-1 space-y-6 max-w-xl ml-8">
                    <h1 className="text-3xl font-bold mb-6">Exercise/Calories burn</h1>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Exercise Name</h2>
                        <p className="text-gray-400 text-md">What kind of exercise.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Number of sets</h2>
                        <p className="text-gray-400 text-md">
                            Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Number of reps</h2>
                        <p className="text-gray-400 text-md">
                            Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Weight lifted (lbs)</h2>
                        <p className="text-gray-400 text-md">
                            Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 mt-8 pt-6">
                        <div className="flex gap-4">
                            <button className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-600 transition-colors duration-300">
                                Calculate Calories burnt
                            </button>
                            <button className="border border-gray-300 px-6 py-2 rounded-md font-medium hover:bg-white hover:text-gray-700 transition-colors duration-300">
                                Predict exercise
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right column - Image */}
                <div className="flex-1">
                    <Image
                        src="/images/image1.jpg" // Reference local image
                        alt="Fitness"
                        width={800}
                        height={300}
                        className="mx-auto rounded-lg transition-opacity duration-500"
                    />
                </div>
            </div>
        </section>
    );
}