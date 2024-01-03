import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mx-auto px-16 border-opacity-50">
            <div className="grid h-screen card rounded-box shadow-2xl place-items-center">
                <div className="hero-content flex-col pr-16 pl-16 lg:flex-row-reverse">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">درباره استیل آروین تاو</h1>
                        <p className="py-6">شرکت فنی و مهندسی استیل آروین تاو فعالیت خود را از سال ۱۳۸۶ - با تکیه بر تجربه و تخصص جمعی از فارغ التحصیلان دانشگاه‌های معتبر داخلی و خارجی و مجهز به ماشین آلات به روز و پیشرفته- در زمینه طراحی و ساخت و تولید انواع قطعات صنعتی آغاز نمود پس از مدت کوتاهی با پشتکار و تلاش شبانه روزی متخصصین ،این مجموعه فعالیت خود را در زمینه طراحی و ساخت انواع تجهیزات ثابت و دوار صنایع نفت، گاز ،پتروشیمی و غذایی به عنوان فعالیت اصلی خود گسترش داده است .</p>
                        <button className="btn btn-primary">درباره ما بیشتر بدانید</button>
                    </div>
                </div>

            </div>

            </div>
        </div>

    );
};

export default HomePage;