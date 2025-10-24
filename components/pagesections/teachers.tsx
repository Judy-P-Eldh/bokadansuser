import Image from "next/image";

export default function Teachers() {
    return (
        <section id="teachers" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-purple-800 mb-4">Här är våra lärare</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">Våra professionella lärare har många års erfarenhet och bidrar med stor passion.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/*  <!-- Teacher 1 --> */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <Image
                            className="dark:invert w-full h-64 object-cover"
                            src="/female1.jpeg"
                            alt="Porträtt av danslärare."
                            width={500}
                            height={100}
                            priority
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-purple-800 mb-1">Sarah Johnson</h3>
                            <p className="text-purple-600 mb-3">Ballet</p>
                            <p className="text-gray-700 mb-4">Former principal dancer with 15 years of teaching experience. Specializes in Vaganova method.</p>
                            {/* <div className="flex space-x-3">
                                <Link href="#" className="text-purple-600 hover:text-purple-800"><i className="fab fa-instagram"></i></Link>
                                <Link href="#" className="text-purple-600 hover:text-purple-800"><i className="fab fa-linkedin"></i></Link>
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- Teacher 2 --> */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <Image
                            className="dark:invert w-full h-64 object-cover"
                            src="/male2.jpeg"
                            alt="Porträtt av danslärare."
                            width={500}
                            height={100}
                            priority
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-purple-800 mb-1">James Wilson</h3>
                            <p className="text-purple-600 mb-3">Hip Hop Specialist</p>
                            <p className="text-gray-700 mb-4">Professional hip hop dancer with competition experience. Focuses on foundation and freestyle.</p>
                            {/* <div className="flex space-x-3">
                                <Link href="#" className="text-purple-600 hover:text-purple-800"><i className="fab fa-instagram"></i></Link>
                                <Link href="#" className="text-purple-600 hover:text-purple-800"><i className="fab fa-youtube"></i></Link>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- Teacher 3 --> */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                         <Image
                            className="dark:invert w-full h-64 object-cover"
                            src="/female2.jpeg"
                            alt="Porträtt av danslärare."
                            width={500}
                            height={100}
                            priority
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-purple-800 mb-1">Emily Chen</h3>
                            <p className="text-purple-600 mb-3">Jazz & Contemporary</p>
                            <p className="text-gray-700 mb-4">Broadway performer turned teacher. Passionate about storytelling through movement.</p>
                            {/* <div className="flex space-x-3">
                                <Link href="#" className="text-purple-600 hover:text-purple-800"><i className="fab fa-instagram"></i></Link>
                                <Link href="#" className="text-purple-600 hover:text-purple-800"><i className="fab fa-twitter"></i></Link>
                            </div> */}
                        </div>
                    </div>
                    {/*  <!-- Teacher 4 --> */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                         <Image
                            className="dark:invert w-full h-64 object-cover"
                            src="/male3.jpeg"
                            alt="Porträtt av danslärare."
                            width={500}
                            height={100}
                            priority
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-purple-800 mb-1">David Martinez</h3>
                            <p className="text-purple-600 mb-3">Tap & Musical Theater</p>
                            <p className="text-gray-700 mb-4">Tony-nominated performer with extensive teaching credentials in tap and theater dance.</p>
                            {/* <div className="flex space-x-3">
                                <Link href="#" className="text-purple-600 hover:text-purple-800">Instagram</Link>
                                <Link href="#" className="text-purple-600 hover:text-purple-800">LinkedIn</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}