import React from 'react';
import Card from '../components/Card';
import PricingComponent from '../components/Pricing';
import SearchBar from '../components/Searchbar';
import bannerImage from '../images/4119036.jpg';


const Homepage = () => {
    return (<div className="homepage">
        <div className='flex flex-col md:flex-row justify-center'>
            <div className="flex-1 md:flex-2 text-center font-sans items-center justify-center mt-10 md:mt-20"> {/* bold and align at the center */}
                <h2 className='font-bold text-2xl md:text-5xl lg:mt-5'>Welcome to Apptitude.<br/>Prepare with confidence</h2>
                <p>Excel every exam with our vetted questions</p>
                <br />
                <br/>
                <SearchBar placeholder={"Search"}
                    className={" py-3 px-4"}/>
            </div>
            <div className='flex-1 hiddden md:block'>
                <img src={bannerImage}
                    alt="banner"/></div>

        </div>
        {/* What we offer section */}
        <h3 className='font-bold py-3 px-4'>
            What we offer
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-4">
            <Card>
                <div className="card_content py-3 px-4"> {/* Add logos here */}
                    <h3 className="font-bold text-xl mb-2">
                        Title
                    </h3>
                    <p>Description of the card content</p>

                </div>
            </Card>
            <Card>
                <div className="card_content py-3 px-4"> {/* Add logos here */}
                    <h3 className="font-bold text-xl mb-2">
                        Title
                    </h3>
                    <p>Description of the card content</p>
                </div>
            </Card>

            <Card>
                <div className="card_content py-3 px-4"> {/* Add logos here */}
                    <h3 className="font-bold text-xl mb-2">
                        Title
                    </h3>
                    <p>Description of the card content</p>
                </div>
            </Card>


        </div>

        {/* Testimonial */}
        <h3 className='text-2xl font-sans font-bold py-3 px-4'>
            Our students are our biggest fans
        </h3>
        <p className='py-3 px-4'>Here is what they have to say</p>

        <div className='flex flex-col md:flex-row gap-4 mt-6'>

            <div className="testimonial_card">
                <Card>
                    <div className="card_content py-3 px-4"> {/* Add logos here */}
                        <h3 className="font-bold text-xl mb-2">
                            Title
                        </h3>
                        <p>Description of the card content</p>
                        <div className="testimonial_card_image rounded-lg mx-auto p-4">

                            <img src={bannerImage}
                                alt="banner"/>

                        </div>
                    </div>
                </Card>
            </div>
            <div className="testimonial_card">
                <Card>
                    <div className="card_content py-3 px-4"> {/* Add logos here */}
                        <h3 className="font-bold text-xl mb-2">
                            Title
                        </h3>
                        <p>Description of the card content</p>
                        <div className="testimonial_card_image rounded-lg mx-auto p-4">
                            <img src={bannerImage}
                                alt="banner"/></div>
                    </div>
                </Card>
            </div>

        </div>


        {/* Pricing */}
        <div className="flex flex-col md:flex-row gap-4">
            <PricingComponent/>
        </div>
    </div>);
};

export default Homepage;
