import React from 'react';
import logoFooter from '../../assets/images/logo70.png';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const FooterComponent = () => {
    return (
        <div className="flex flex-col h-screen">
            <footer className="footer mt-auto bg-primary-content p-10 bg-base-300 text-base-content">
                <aside>
                    <img src={ logoFooter } className="object-contain" alt="logo"  />
                    <p>استیل آروین تاو<br/>آغاز فعالیت سال ۱۳۸۶</p>
                </aside>
                <nav>
                    <header className="footer-title">لینک های مهم</header>
                    <a className="link link-hover">مخازن ذخیره</a>
                    <a className="link link-hover">کولر هوایی</a>
                    <a className="link link-hover">مبدل حرارتی</a>

                </nav>
                <nav>
                    <header className="footer-title">خدمات مشتریان</header>
                    <a className="link link-hover">صفحه اصلی</a>
                    <a className="link link-hover">کاتالوگ محصولات</a>
                    <a className="link link-hover">مجله استیل آروین</a>
                    <a className="link link-hover">فرصت شغلی</a>
                    <a className="link link-hover">درباره ما</a>
                </nav>
                <nav>
                    <header className="footer-title">اطلاعات تماس</header>
                    <a className="link link-hover">شیراز، میدان صنعت</a>
                    <a className="link link-hover">تلفن دفتر: </a>
                    <a className="link link-hover">info@steelarvin.com</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <div>
                            <FaTelegram size={30} />
                        </div>
                        <div>
                            <FaWhatsapp size={30} />
                        </div>
                        <div>
                              <FaInstagram size={30} />
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>کلیه حقوق این وب سایت متعلق به | گروه تولیدی و صنعتی استیل آروین تاو می باشد</p>
                </aside>
            </footer>
        </div>
    );
};

export default FooterComponent;

