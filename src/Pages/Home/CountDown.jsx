

const CountDown = () => {
    return (
        <div>
            <h3 className=' text-4xl mb-3 text-center mt-60 text-green-700'>OverView</h3>
            <p className="text-center mb-3 text-slate-500">We're thrilled to share an update on our toy store's performance for the past month. <br /> It was an exciting period filled with vibrant sales and enthusiastic website views, <br /> reflecting our commitment to providing a delightful toy shopping experience.</p>
            <div className="stats shadow text-center flex">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Sale</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Website Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Order delivered</div>
                    <div className="stat-desc text-secondary">31 order remaining</div>
                </div>

            </div>
        </div>
    );
};

export default CountDown;