import React, { Component } from "react";
import HeaderHomePage from './HeaderHomePage'
import Footer from '../components/footer'
import "../css/home.css";
import s1_img_right from "../img/wallet-ppl.png";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            number :2,

        };
    }
    render() {
        const { error } = this.state;
        if (error) {
            return <div>error</div>
        }
        else
            return (
                <div>
                    <HeaderHomePage />
                    <div className="row s1">
                        <div className="col-sm-6 s1-left">
                            <div className="s1-text">
                                <div className="s1-text-title">
                                    <span id="s1-span"> Dịch vụ thu phí BOT</span>
                                    <p id="s1-p">Thu phí BOT một cách minh bạch, công khai, áp dụng công nghệ Blockchain.Tạo niềm tin cho người dân, cùng đất nước bước vào công nghệ 4.0</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 s1-right">
                            <img id="s1-img" width="420px" height="300px" src={s1_img_right}></img>
                        </div>
                    </div>
                    <div className="row s2">
                        <div className="col-sm-1 "></div>
                        <div className="col-sm-4 s2-left">
                            <div className="s1-s2"></div>
                            <div className="s2-img h-100"></div>
                        </div>
                        <div className="col-sm-7 s2-right">
                         
                            <div className="s2-right-content">

                                <ul>
                                    <li>An toàn đối với người sử dụng với công nghệ blockchain</li>
                                    <li>Minh bạch về cách làm của BOT, giúp dễ dàng kiểm soát </li>
                                    <li>Công khai tài chính thu được của mỗi trạm BOT với những số liệu cụ thể</li>
                                    <li>Áp dụng công nghệ hiện đại vào ứng dụng</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="" id="SECTION7">
                        <div id="s4-icon" className=" s3 justify-content-center">
                            <div className="h-25 row justify-content-center sl">
                                <div className="col-sm-2 h-100">
                                    <svg className="s7-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32" version="1.0" fit=""
                                        height="100px" width="100px" preserveAspectRatio="xMidYMid meet"
                                        fill="rgba(115,104,104,1)">
                                        <path d="M18.723 21.788c-1.15-.48-3.884-1.423-5.565-1.92-.143-.044-.166-.05-.166-.648 0-.493.203-.99.4-1.41.215-.455.47-1.223.56-1.91.255-.297.602-.88.826-1.994.196-.98.104-1.338-.026-1.673-.013-.035-.028-.07-.038-.105-.05-.23.018-1.425.186-2.352.116-.636-.03-1.99-.906-3.108-.553-.707-1.61-1.576-3.544-1.696H9.39c-1.9.12-2.96.99-3.513 1.696C5 7.788 4.857 9.14 4.97 9.776c.17.928.237 2.123.188 2.348-.01.04-.025.074-.04.11-.128.335-.22.692-.024 1.673.222 1.113.57 1.697.826 1.993.09.688.344 1.456.56 1.912.156.334.23.788.23 1.43 0 .598-.024.605-.158.647-1.738.512-4.505 1.512-5.537 1.964-.818.35-1.017.98-1.017 1.548v2.623c0 .37.22 1.006 1.017 1.006h17.899c.796 0 1.017-.633 1.017-1.005v-2.623s-.392-1.262-1.21-1.613zm.153 4.192H1.05V23.4c0-.317.09-.46.387-.586.994-.435 3.74-1.426 5.434-1.926.89-.282.89-1.07.89-1.646 0-.8-.106-1.397-.33-1.878-.173-.366-.393-1.022-.47-1.6l-.04-.313-.206-.237c-.113-.13-.396-.538-.59-1.513-.153-.76-.085-.935-.03-1.076.03-.076.057-.152.08-.237l.005-.022.004-.022c.105-.495-.037-1.962-.18-2.755-.068-.365.016-1.4.7-2.273.417-.534 1.228-1.19 2.72-1.293h.993c1.22.082 2.145.517 2.752 1.293.68.872.765 1.91.7 2.275-.15.814-.288 2.257-.18 2.758l.007.04.01.037c.017.054.037.108.057.16l.01.027v.002c.06.153.127.326-.024 1.087-.196.975-.48 1.385-.592 1.516l-.204.237-.042.31c-.076.578-.296 1.237-.468 1.603-.247.525-.5 1.157-.5 1.856 0 .577 0 1.367.918 1.655 1.64.485 4.345 1.416 5.448 1.877.418.18.574.493.574.65l-.006 2.578zM23.078 14.44v-4.184h-1.05v4.185h-4.185v1.05h4.186v4.185h1.048V15.49h4.185v-1.05z"></path>
                                    </svg>
                                    <p className="s7-1-1">3750</p>
                                    <p className="s7-2-1">Người sử dụng</p>
                                </div>
                                <div className="col-sm-2 h-100">
                                    <svg className="s7-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.0" fit=""
                                        height="100px" width="100px" preserveAspectRatio="xMidYMid meet"
                                        fill="rgba(115,104,104,1)">
                                        <path d="M28.795 6.404H3.205c-.883 0-1.6.716-1.6 1.6v15.993c0 .884.717 1.6 1.6 1.6h25.59c.883 0 1.6-.716 1.6-1.6V8.003c0-.883-.717-1.6-1.6-1.6zM2.672 10.67h26.656V12.8H2.672V10.67zm26.656 13.327c0 .294-.24.533-.533.533H3.205c-.294 0-.533-.24-.533-.533v-10.13h26.656v10.13zM2.672 9.602v-1.6c0-.293.24-.532.533-.532h25.59c.294 0 .533.24.533.533v1.6H2.672z"></path>
                                        <path d="M4.804 21.33h10.662v1.067H4.804V21.33zM4.804 18.133h6.398V19.2H4.805v-1.067zM23.98 22.398h2.166c.58 0 1.05-.462 1.05-1.034V21.3c0-.57-.47-1.035-1.05-1.035H23.98c-.58 0-1.05.463-1.05 1.035v.064c0 .572.47 1.034 1.05 1.034z"></path>
                                    </svg>
                                    <p className="s7-1-2">345</p>
                                    <p className="s7-2-2">Ví đã liên kết</p>
                                </div>
                                <div className="col-sm-2 h-100">
                                    <svg className="s7-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.0" fit=""
                                        height="100px" width="100px" preserveAspectRatio="xMidYMid meet"
                                        fill="rgba(115,104,104,1)">
                                        <path d="M28.795 4.005H3.205v6.93h1.067v17.06H27.73v-17.06h1.065v-6.93zM26.663 26.93H5.34V10.934h21.323V26.93zM27.73 9.87H4.27v-4.8H27.73v4.8z"></path>
                                        <path d="M12.144 17.87h7.74c1.1 0 1.995-.867 1.995-1.938v-.386c0-1.07-.895-1.94-1.997-1.94h-7.74c-1.1 0-1.994.87-1.994 1.94v.386c0 1.07.89 1.94 1.994 1.94zm-.93-2.325c0-.482.417-.873.93-.873h7.738c.512 0 .93.392.93.873v.386c0 .483-.418.874-.93.874h-7.74c-.51 0-.927-.392-.927-.873v-.385z"></path>
                                    </svg>
                                    <p className="s7-1-3">451</p>
                                    <p className="s7-2-3">Trạm BOT</p>
                                </div>
                                <div className="col-sm-2 h-100">
                                    <svg className="s7-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.0" fit=""
                                        height="100px" width="100px" preserveAspectRatio="xMidYMid meet"
                                        fill="rgba(115,104,104,1)">
                                        <path d="M29.86 22.698V3.506H2.14v19.192h13.328v2.062l-5.056 2.8.516.933L16 25.683l5.072 2.81.516-.933-5.056-2.8v-2.062H29.86zM3.206 4.572h25.59v17.06H3.205V4.572z"></path>
                                        <path d="M15.294 15.427l-3.162-4.41-2.116 4.103L6.69 8.407l-2.43 8.965 1.03.28 1.693-6.25 3.014 6.08 2.284-4.427 3.415 4.76 2.948-9.89-1.02-.306zM23.464 9.903c-1.764 0-3.2 1.435-3.2 3.2s1.436 3.198 3.2 3.198c1.763 0 3.198-1.434 3.198-3.198s-1.435-3.2-3.198-3.2zm0 5.332c-1.176 0-2.133-.956-2.133-2.133s.958-2.133 2.134-2.133 2.132.955 2.132 2.132-.956 2.133-2.132 2.133z"></path>
                                    </svg>
                                    <p className="s7-1-4">255</p>
                                    <p className="s7-2-4">Thống kê</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Footer />
                </div >
            )
    }
}
export default Home