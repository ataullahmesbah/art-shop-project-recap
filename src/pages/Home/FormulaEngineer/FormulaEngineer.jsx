

const FormulaEngineer = () => {
    return (
        <div className=" text-white ">
            <div className=" space-y-6 lg:px-20 lg:p-20  p-2" style={{
                background: 'linear-gradient(to left , #001f37, #4a2310, #254f70, #18344a)',
            }}>
                {/* Content for the section below the banner goes here */}

                <h1 className='text-4xl font-poppins font-bold text-center '>Plan your career</h1>
                <p className='text-center pb-10'>Whether you’re just starting out in your career or you’ve got years of experience, an <br /> Engineering Bangladesh membership will give you the knowledge and connections you need <br /> to succeed.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto lg:px-72 lg:gap-8 gap-20 pb-10">

                    <div className="relative text-white ">
                        <p
                            style={{
                                fontSize: '12.8rem',
                                position: 'absolute',
                                verticalAlign: 'text-top',
                                lineHeight: 1,
                                top: '-4rem',
                                zIndex: 0,
                                color: 'rgba(255,255,255,.3)',
                            }}
                        >
                            1
                        </p>
                        <h1 className='text-xl px-20 mb-5'>Starting out</h1>
                        <p className='px-20'>Upskill through continuing professional development and build networks.</p>
                    </div>

                    <div className="relative text-white ">
                        <p
                            style={{
                                fontSize: '12.8rem',
                                position: 'absolute',
                                verticalAlign: 'text-top',
                                lineHeight: 1,
                                top: '-4rem',
                                zIndex: 0,
                                color: 'rgba(255,255,255,.3)',
                            }}
                        >
                            2
                        </p>
                        <h1 className='text-xl px-14 mb-5'>Mid-career</h1>
                        <p className=' px-14'>Participate in events and make a name for yourself.</p>
                    </div>
                    <div className="relative text-white ">
                        <p
                            style={{
                                fontSize: '12.8rem',
                                position: 'absolute',
                                verticalAlign: 'text-top',
                                lineHeight: 1,
                                top: '-4rem',
                                zIndex: 0,
                                color: 'rgba(255,255,255,.3)',
                            }}
                        >
                            3
                        </p>
                        <h1 className='text-xl px-14 mb-5'>Expert</h1>
                        <p className=' px-14'>Share your knowledge and inspire the next generation of engineers.</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default FormulaEngineer;