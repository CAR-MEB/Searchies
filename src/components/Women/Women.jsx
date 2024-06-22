import { Route, Routes, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

import './Women.css'


const Kids = () => {
  return (
    <div className='women'>
     
        <div className='shoes'>
            <ul>
                <div>SHOES</div>
                <li><Link to="snikers">Snikers</Link></li>
                <li><Link to="running">Running</Link></li>
                <li><Link to="slides&sandals">Slides & Sandals</Link></li>
                <li><Link to="walking">Walking</Link></li>
            </ul>
        </div>

        <div className='clothing'>
            <ul>
                <div>CLOTHING</div>
                <li><Link to="t-shorts&tops">T-Shorts & Tops</Link></li>
                <li><Link to="shorts">Shorts</Link></li>
                <li><Link to="dresses & skirts">Dresses & Skirts</Link></li>
                <li><Link to="plus size">Plus Size</Link></li>
            </ul>
        </div>
        
      
        <div className='cards'>
            <Routes>
                <Route path="snikers" element={<div className='shikers'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd73d923864546cda02423dfeff8dd22_9366/Gazelle_Shoes_Brown_IG4392_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GAZELLE SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>7 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SAMBA CLASSIC SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>2 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a16f6b12b145d78a5e204fe0981900_9366/Campus_00s_Shoes_Green_ID3170_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>CAMPUS 00S SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>12 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538419fc409a4b9495af4d438048bc2a_9366/Cloudfoam_Pure_Shoes_White_II0043_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>CLOUDFOAM PURE SHOES</Card.Title>
                                <Card.Text>
                                Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2eb6e1b91bfe486fad760fc9924bf054_9366/Samba_OG_Shoes_White_IE6521_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SAMBA OG SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>10 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/87e278ebf8cf4706a3bda7fa00e450a5_9366/Busenitz_Pro_Shoes_Black_G48060_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>BUSENITZ PRO SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$85</Card.Text>
                                <Card.Text>5 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0041bd0adff54f1e8c3cb98f507eb8b0_9366/Samba_LT_Shoes_White_IG4279_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SAMBA LT SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>3 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538419fc409a4b9495af4d438048bc2a_9366/Cloudfoam_Pure_Shoes_White_II0043_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>CLOUDFOAM PURE SHOES</Card.Title>
                                <Card.Text>
                                Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3cab8dd16484997b9e8e7e5ad6f31c7_9366/NMD_R1_Shoes_Pink_IE9078_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>NMD_R1 SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$130</Card.Text>
                                <Card.Text>14 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f7036c6aa6944aa19b7c0ca5c9d96f65_9366/VL_Court_3.0_Shoes_Black_ID6279_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>VL COURT 3.0 SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>14 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bcae562c079c4ea8ba2a10de85e7e04f_9366/Forum_Low_CL_Shoes_White_IH7915_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>FORUM LOW CL SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>8 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df885e26d4954df2ac3ab031ef9ebb5d_9366/Advantage_2.0_Shoes_White_IF1660_HM1.jpg"} />
                            <Card.Body>
                                <Card.Title>ADVANTAGE 2.0 SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Sportswear
                                </Card.Text>
                                <Card.Text>$70</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4cd6d8d41dd14bef884b372a9e13c52a_9366/Gazelle_Shoes_Pink_ID7006_010_hover_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GAZELLE SHOES</Card.Title>
                                <Card.Text>
                                Women's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>7 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e5e947fe25b4c49a1d64e6f86321bf0_9366/Supernova_Stride_Shoes_Pink_IE4624_HM1.jpg"} />
                            <Card.Body>
                                <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                                <Card.Text>
                                Women's • Running
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>5 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b3dd53bb2b7444ea9f09d8d5fb142b0a_9366/SL_72_OG_Shoes_White_JH7394_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SL 72 OG SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>7 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/195463ce9a274fd8bbc78093bf373041_9366/KAPTIR_3.0_Blue_IE6614_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>KAPTIR 3.0</Card.Title>
                                <Card.Text>
                                Sportswear
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>15 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c7472fe593a4ff496f781d9824adde2_9366/SL_72_OG_Shoes_Turquoise_JH7397_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SL 72 OG SHOES</Card.Title>
                                <Card.Text>
                                Women's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>7 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f11892ba6c27405d9864baf5bb1fedb4_9366/Forum_Bold_Stripes_Shoes_Purple_ID3153_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>FORUM BOLD STRIPES SHOES</Card.Title>
                                <Card.Text>
                                    Women's • Originals
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>6 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/91af123014644986a911a5a46b2055e5_9366/Galaxy_7_Running_Shoes_White_ID8768_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GALAXY 7 RUNNING SHOES</Card.Title>
                                <Card.Text>
                                Women's • Running
                                </Card.Text>
                                <Card.Text>$60</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/152121a06bc94848be1241ff9c83be51_9366/Terrex_Free_Hiker_2.0_Hiking_Shoes_Green_ID5897_HM1.jpg"} />
                            <Card.Body>
                                <Card.Title>TERREX FREE HIKER 2.0 HIKING SHOES</Card.Title>
                                <Card.Text>
                                    Women's • TERREX
                                </Card.Text>
                                <Card.Text>$70</Card.Text>
                                <Card.Text>4 colors</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>} />
                <Route path="running" element={<div className='running'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/91af123014644986a911a5a46b2055e5_9366/Galaxy_7_Running_Shoes_White_ID8768_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>GALAXY 7 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Women's • Running
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ae641707a2c43b8ae67cfc5871d316f_9366/Runfalcon_5_Running_Shoes_Grey_IE8823_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/243dcef4bd2e47fcaadabcc98b60c564_9366/Runfalcon_5_Running_Shoes_White_IE8827_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/39016994181c4fc1a492629f9673e74a_9366/Runfalcon_5_Running_Shoes_Black_IE8828_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe62020e4f7646b0a30341e8592efd0f_9366/Galaxy_7_Running_Shoes_Black_ID8765_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>GALAXY 7 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Women's • Running
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eaf5f4ba553b42c79b03c15c8b27c7f2_9366/Runfalcon_5_Running_Shoes_Black_IH7759_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                RunWomen's • Runningning
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6233a542abfa4fd6a2601c79e3c2031e_9366/Supernova_Rise_Running_Shoes_White_JH5200_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3a90bcc7ef7418ca12964479976b789_9366/Questar_3_Running_Shoes_White_ID8746_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>QUESTAR 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c13949833df041a6bc615167e2617ef5_9366/Galaxy_7_Running_Shoes_Red_ID8766_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>GALAXY 7 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b273a168aae4ec9aaf94c1516712b6a_9366/Questar_3_Running_Shoes_White_ID8741_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>QUESTAR 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ca56cdb5c82482384a4623fa5334a1e_9366/Runfalcon_5_Running_Shoes_White_IH7760_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/84fda67bce57411b8581adff00bcd3c7_9366/Ultraboost_22_Shoes_Pink_HR1030_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 22 SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$95</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eaf5f4ba553b42c79b03c15c8b27c7f2_9366/Runfalcon_5_Running_Shoes_Black_IH7759_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28c8e3acf97248efa457b57b75ae7da0_9366/Duramo_SL_Shoes_White_IF9465_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>DURAMO SL SHOES</Card.Title>
                            <Card.Text>
                                Women's Running
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/243625e2b37f4c19bffbbaa4b75bf1bc_9366/Adizero_SL2_Running_Shoes_Black_IF6761_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL2 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/961beccc2bb24907bd65af3500b6b138_9366/Adistar_CS_Shoes_Green_HP5659_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADISTAR CS SHOES</Card.Title>
                            <Card.Text>
                            Women's • Running
                            </Card.Text>
                            <Card.Text>$112</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a3f4e3f28540b69a972f5e9ede9cbf_9366/Supernova_Rise_Running_Shoes_Beige_ID8747_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ce43c10a1ec40a7a887a3c1812a6b17_9366/Adizero_SL2_Running_Shoes_White_IF6767_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL2 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/db7fe5e32a434c7eb3598ce146880b98_9366/Supernova_Stride_Shoes_White_IG8310_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63431ea8d23f49459b74823d34bb7a4c_9366/Supernova_Rise_Shoes_Red_IE3942_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="slides&sandals" element={<div className='slides_sandals'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/898599bf0b6548aeacd3becc99c545d4_9366/Adilette_Comfort_Slides_Black_ID8502_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SLIDES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69e60b96568f41ac8fa4afd3012d46e3_9366/Adilette_Aqua_Slides_Black_IF7371_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE AQUA SLIDES</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>11 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/416c979f4cad4cd49a70afa801058977_9366/Adilette_Platform_Slides_White_IE9703_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE PLATFORM SLIDES</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>9 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/923bec57082443e39f92ad6e00cbed3d_9366/Adilette_Comfort_Slides_Black_GZ5896_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SLIDES</Card.Title>
                            <Card.Text>
                            Swim
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>23 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5646514991140efbb6caf500115bf11_9366/Adicane_Slides_Grey_HQ9915_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICANE SLIDES</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/04d5ca90c186439984d323970dea248f_9366/Adilette_22_XLG_Slides_Pink_IE5651_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE 22 XLG SLIDES</Card.Title>
                            <Card.Text>
                            Originals
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3723be3685ec476aaed0a991001b1389_9366/Adilette_Aqua_Slides_Blue_F35542_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE AQUA SLIDES</Card.Title>
                            <Card.Text>
                            Swim
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>11 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8433bf3d28294dc4937b958155dad056_9366/Adilette_Comfort_Slides_Green_IF1924_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SLIDES</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$35 </Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a6eb1c1c347490c9aa3d82d6c93bca2_9366/Adilette_Comfort_Slides_Pink_JH6606_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SLIDES</Card.Title>
                            <Card.Text>
                                Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/43662d58cd9749b984948827689fbda6_9366/Adilette_Aqua_Slides_Purple_IE8918_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE AQUA SLIDES</Card.Title>
                            <Card.Text>
                            Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/683b202bb0584a74b470ab0492d118b9_9366/Adilette_Shower_Slides_Yellow_IE8945_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE AQUA SLIDES</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/362cdc7a2b694ca882f73fc1d91fb1da_9366/Adifom_Stan_Smith_Mules_Silver_IG9360_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIFOM STAN SMITH MULES</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>8 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/918528dac5174eb08904cbec9f3b1d91_9366/Adilette_Platform_Slides_Pink_IH0523_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE PLATFORM SLIDES</Card.Title>
                            <Card.Text>
                            Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>8 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f38f0c357b8245a3bfbaaf47011d361e_9366/Adilette_Platform_Slides_Black_HQ6179_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE PLATFORM SLIDES</Card.Title>
                            <Card.Text>
                            Sportswear                            
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>9 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77d53fbb14da4775bb6baec500d6923f_9366/adidas_by_Stella_McCartney_Clogs_Black_GW2050_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY CLOGS</Card.Title>
                            <Card.Text>
                            Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78cee0df320b41d880fbdb8c7488af1e_9366/Adilette_Zplaash_Slides_Black_IF4133_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE ZPLAASH SLIDES</Card.Title>
                            <Card.Text>
                                Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/670a1c978b1c43daa5fe5e996a556ec1_9366/Adilette_Comfort_Sandals_Blue_II0022_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE COMFORT SANDALS</Card.Title>
                            <Card.Text>
                            Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>10 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b95efbbe72f4a7995cf423153f04a5c_9366/adidas_by_Stella_McCartney_Slide_Shoes_Black_IF6066_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY SLIDE SHOES</Card.Title>
                            <Card.Text>
                            Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99ac2fdea36e4714bdbaaf4200bcc5ff_9366/Adilette_22_Slides_Brown_HQ4670_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADILETTE 22 SLIDES</Card.Title>
                            <Card.Text>
                                Originals
                            </Card.Text>
                            <Card.Text>$36</Card.Text>
                            <Card.Text>29 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f604c16709944eaa2ffaa4901152895_9366/Adissage_Slides_Black_EG6517_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADISSAGE SLIDES</Card.Title>
                            <Card.Text>
                            Essentials
                            </Card.Text>
                            <Card.Text>$20</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="walking" element={<div className='walking'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538419fc409a4b9495af4d438048bc2a_9366/Cloudfoam_Pure_Shoes_White_II0043_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>CLOUDFOAM PURE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e5e947fe25b4c49a1d64e6f86321bf0_9366/Supernova_Stride_Shoes_Pink_IE4624_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                            Women's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/195463ce9a274fd8bbc78093bf373041_9366/KAPTIR_3.0_Blue_IE6614_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>KAPTIR 3.0</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>20 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/91af123014644986a911a5a46b2055e5_9366/Galaxy_7_Running_Shoes_White_ID8768_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>GALAXY 7 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0c94f3bef174f15b43606ae911e385b_9366/Duramo_SL_Wide_Running_Shoes_Black_IG0310_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>DURAMO SL WIDE RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ae641707a2c43b8ae67cfc5871d316f_9366/Runfalcon_5_Running_Shoes_Grey_IE8823_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Women's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad02c1f113a74fe3a6ec11b6972fbd9b_9366/Runfalcon_5_Wide_Running_Shoes_Blue_IE8831_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/243dcef4bd2e47fcaadabcc98b60c564_9366/Runfalcon_5_Running_Shoes_White_IE8827_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>7 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/caf6bef014c44e2b9cc991ce28436d31_9366/Cloudfoam_Pure_Shoes_Beige_ID1064_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>CLOUDFOAM PURE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$27580</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a5b01d104af4cfdbcc1c9574ab754a3_9366/Supernova_Rise_Shoes_Green_IF3023_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6233a542abfa4fd6a2601c79e3c2031e_9366/Supernova_Rise_Running_Shoes_White_JH5200_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fcd064abcf174509bfff9c589436bfda_9366/Crazychaos_2000_Shoes_White_IG4346_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>CRAZYCHAOS 2000 SHOES</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/db7fe5e32a434c7eb3598ce146880b98_9366/Supernova_Stride_Shoes_White_IG8310_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>25 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7784b524e7344e6db6cdae0401266751_9366/Ultraboost_22_Running_Shoes_Blue_GX8003_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 22 RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$95</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46467f074e724fe49f36673630d982d6_9366/Duramo_Speed_Running_Shoes_White_IE9678_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>DURAMO SPEED RUNNING SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$54</Card.Text>
                            <Card.Text>14 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28c8e3acf97248efa457b57b75ae7da0_9366/Duramo_SL_Shoes_White_IF9465_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>DURAMO SL SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed7d3e2e1087480ab38b8f3e76b6fe4d_9366/adidas_by_Stella_McCartney_Solarglide_Shoes_Beige_ID7585_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY SOLARGLIDE SHOES</Card.Title>
                            <Card.Text>
                                Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$220</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/961beccc2bb24907bd65af3500b6b138_9366/Adistar_CS_Shoes_Green_HP5659_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADISTAR CS SHOES</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$112</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d063e72a4ec2404bafa34f77ddd51339_9366/adidas_by_Stella_McCartney_Ultraboost_20_Shoes_Orange_IF6056_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY ULTRABOOST 20 SHOES</Card.Title>
                            <Card.Text>
                                Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$230</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfe92bf10dbe4b7b94c507ab74788326_9366/adidas_by_Stella_McCartney_Earthlight_2.0_Shoes_White_IF8058_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS BY STELLA MCCARTNEY EARTHLIGHT 2.0 SHOES</Card.Title>
                            <Card.Text>
                                Women's • adidas by Stella McCartney
                            </Card.Text>
                            <Card.Text>$280</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />  

                <Route path="t-shorts&tops" element={<div className='t-shorts_tops'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e190efada8846a9ba944d26cf598b91_9366/HIIT_Airchill_Training_Tee_Brown_IT7431_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>HIIT AIRCHILL TRAINING TEE</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3257a613d5244e6902bf38085d37a27_9366/Tiro_Cut_3-Stripes_Crop_Jersey_Green_IZ2081_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO CUT 3-STRIPES CROP JERSEY</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e15de65f3bb94001b970bcec3aed412e_9366/Own_The_Run_Tee_Black_IN2961_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN TEE</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>8 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97f07952a9494afebc1a87b1fbf7aee7_9366/Adicolor_Essentials_Tee_Purple_IR5924_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9a0bc9b654047428d97dae839c52c09_9366/Adicolor_Classics_SST_Track_Jacket_Pink_IY2170_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS SST TRACK JACKET</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/25b090b73bdf4e0aa9bcbb8e773260c6_9366/YGA_ST_MA_TK_Blue_IP1253_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>YGA ST MA TK</Card.Title>
                            <Card.Text>
                                Women's • Yoga
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97f07952a9494afebc1a87b1fbf7aee7_9366/Adicolor_Essentials_Tee_Purple_IR5924_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ce95c0ec03d4e87ae9edf8ac50e9332_9366/Adicolor_Classics_Loose_Firebird_Track_Top_Green_IP0604_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS LOOSE FIREBIRD TRACK TOP</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d183f09c1f0b4b9ab86e31598f8564b8_9366/HIIT_Crop_HEAT.RDY_Tank_Top_Brown_IT7432_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>IIT CROP HEAT.RDY TANK TO</Card.Title>
                            <Card.Text>
                            Women's • Training
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b45953082d564638bb1f06a892ebba0a_9366/Own_The_Run_Tank_Top_Pink_IN2963_21_model.jpg "} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN TANK TOP</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f62163655de54e8ab759ad2400b36817_9366/Primegreen_Essentials_Warm-Up_Slim_3-Stripes_Track_Jacket_Black_H48443_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PRIMEGREEN ESSENTIALS WARM-UP SLIM 3-STRIPES TRACK JACKET</Card.Title>
                            <Card.Text>
                                Women's • SoSportswearccer
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2d044b8197434abfb3f8b398b1eab7c2_9366/ALL_SZN_Loose_Tee_White_IY6784_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN LOOSE TEE</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7cfb0bf909da453da3cbb894b056d130_9366/TD_BABY_TEE_Black_IZ1859_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TD BABY TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/33150ea075a4498b9d974257a07e71f9_9366/3-Stripes_Tee_Black_IU2420_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>3-STRIPES TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/963789d9441f411b839198a4a729ab20_9366/Own_The_Run_Tee_White_IK7442_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN TEE</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>8 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bbcc4abc54d142e18f093456ec88de2f_9366/3-Stripes_Tee_White_IR8051_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>3-STRIPES TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9335725d94bc437d9eec1ed8fb4750f2_9366/Own_The_Run_Long_Sleeve_Tee_Red_IM5405_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN LONG SLEEVE TEE</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/364a3a3c4f704611842a663bef5d4c36_9366/Adicolor_Trefoil_Boxy_Tee_White_IN8441_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL BOXY TEE</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d79dffcf860485fa8d127f0a0cac17f_9366/Designed_for_Training_Tee_Black_IX9422_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING TEE</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7db4cb82252349ff9f7923bc77b6afe5_9366/ALL_SZN_Loose_Tee_Black_IX3808_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN LOOSE TEE</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="shorts" element={<div className='shorts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/03e4e2baa2c945f898cdbe4ab0f29c7a_9366/Designed_for_Training_2-in-1_Shorts_Blue_IT7414_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING 2-IN-1 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77a5f59dda9e4a1789f7944e53b98463_9366/Designed_for_Training_HEAT.RDY_HIIT_2-in-1_Shorts_Brown_IT7435_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING HEAT.RDY HIIT 2-IN-1 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/431b3805a8da4b8caa8287718491baac_9366/Firebird_Shorts_Black_IU2425_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>FIREBIRD SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/27168a84bec5440db80e9f339f31cbc2_9366/Own_the_Run_Excite_Allover_Print_AEROREADY_Shorts_Pink_IV9986_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2306dc5248954cd0950963a769484019_9366/Adicolor_3-Stripes_French_Terry_Shorts_Black_IU2517_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a8ae9d553cf4653914d0629e194d362_9366/Essentials_French_Terry_Shorts_Green_IY7342_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/53e277bdc1054cdfbe08a5c32fd482fd_9366/Adicolor_3-Stripes_French_Terry_Shorts_Green_IY2157_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16b9362c696a448c9b20ee3be5762bba_9366/Tiro_Cut_3-Stripes_Summer_Shorts_Blue_IZ2076_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PACER TRAINING 3-STRIPES WOVEN HIGH-RISE SHORTS</Card.Title>
                            <Card.Text>
                            Women's • Training
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>12 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/336a3ff26f7e4a30bc0a586d66ecbd8d_9366/Pacer_Training_3-Stripes_Woven_High-Rise_Shorts_Black_IT7760_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e828e6cc1e3438a99ae8fcd15efe0ae_9366/ALL_SZN_French_Terry_Shorts_Beige_JJ4922_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d45a54cdda584a28a807e2a66409fbda_9366/Essentials_French_Terry_Shorts_Grey_IY7341_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ec4e2ddf0344410a5e4a45e27342264_9366/Optime_7-Inch_Leggings_Black_IQ2686_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>OPTIME 7-INCH LEGGINGS</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3834f8ab614e44819dbceaab4b74ee61_9366/City_Escape_Summer_Cargo_Shorts_Black_IQ4822_21_model.jpg "} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE SUMMER CARGO SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/87df9d8066e0473c8d21eb632e0295a0_9366/Tiro_24_Shorts_Black_IR9374_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO 24 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Soccer
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d24304ad305744f6a4994c43e8b3d9f8_9366/ALL_SZN_French_Terry_Shorts_Black_JJ4920_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97600522010c47a299f3a940a579fb0c_9366/Tiro_24_Shorts_Blue_IR9375_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO 24 SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Soccer
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba04e404c0714005a86a25fbd558929f_9366/Adicolor_Essentials_French_Terry_Shorts_Purple_IR5958_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8045356675aa4067ba42f224e6f3ad66_9366/adidas_x_FARM_Rio_Pacer_Shorts_Pink_IN3749_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO PACER SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2636ce929bfa418fb5184b60e6efda29_9366/Pacer_Training_3-Stripes_Woven_High-Rise_Shorts_Blue_IS1664_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PACER TRAINING 3-STRIPES WOVEN HIGH-RISE SHORTS</Card.Title>
                            <Card.Text>
                            Women's • Training
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cddc539e629d443a92a9fdcb0ff105b4_9366/City_Escape_Summer_Cargo_Shorts_Yellow_IS0662_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE SUMMER CARGO SHORTS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="plus size" element={<div className='plus_size'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5de73839c8294b7f98a230439d28eedb_9366/Adicolor_Flared_Leggings_Plus_Size_Black_IN1105_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR FLARED LEGGINGS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e7f2581c6214aa0aa3b5dcb258d1d7a_9366/Adicolor_Classics_3-Stripes_V-Neck_Maxi_Dress_Plus_Size_Red_IN2210_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES V-NECK MAXI DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/13891d4c190a45e38b1f1bb2ee4a1269_9366/Adicolor_Classics_3-Stripes_V-Neck_Maxi_Dress_Plus_Size_Black_IN2212_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES V-NECK MAXI DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e1bbc63361d40dea929b1dd102ba73f_9366/Trefoil_Dress_Plus_Size_Black_IN0738_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TREFOIL DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d7796a0d6f764a38bb7c976879310919_9366/Adicolor_Classics_Firebird_Track_Top_Plus_Size_Green_IZ2037_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS FIREBIRD TRACK TOP (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed43227b5cd4f0c979f99f2c8c2e2d2_9366/Own_The_Run_Tee_Plus_Size_Purple_IN1554_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN TEE (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff335f81e319482bb0962488c842f4a7_9366/Adicolor_Classics_Firebird_Track_Pants_Plus_Size_Green_IZ2040_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS FIREBIRD TRACK PANTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb521708817d48c7a4a43b9ab5a36008_9366/Essentials_3-Stripes_Camo_Print_7-8_Length_Leggings_Plus_Size_Black_IY3713_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS 3-STRIPES CAMO PRINT 7/8 LENGTH LEGGINGS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/13defaebd0e64e7da281af2a00aee994_9366/Essentials_Fleece_Joggers_Plus_Size_Black_IA6444_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS FLEECE JOGGERS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$48</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3aaf531b4b2049aebe7c89e4a54ffe32_9366/adidas_x_FARM_Rio_Bike_Shorts_Plus_Size_Blue_IN3746_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS X FARM RIO BIKE SHORTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d88dc68dc4e477d9922e56a87511074_9366/Adicolor_Classics_Firebird_Track_Pants_Plus_Size_Black_JE6234_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS FIREBIRD TRACK PANTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a674923a9dd4b6bb8979260b573c898_9366/Future_Icons_3-Stripes_Biker_Shorts_Plus_Size_Red_IS0388_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>FUTURE ICONS 3-STRIPES BIKER SHORTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e2d6c735fcb4e54b6754894933f6ae6_9366/Ultimate365_TWISTKNIT_Dress_Plus_Size_Blue_IV9373_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 TWISTKNIT DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$77</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b535f0578e247998ca1d10c0731b5ac_9366/Adicolor_Adibreak_Pants_Plus_Size_Red_IN0674_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ADIBREAK PANTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$85</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/764ef6d0e6e44c7696edaeb795ad60da_9366/Future_Icons_3-Stripes_Tee_Plus_Size_Blue_IS8339_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 TWISTKNIT DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$4771</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/408ed1d3f39b49fa80cbbb0207a06d72_9366/Ultimate365_Short_Sleeve_Dress_Plus_Size_Black_IV9372_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 SHORT SLEEVE DRESS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee9bf8d8e2e5442993362d00e5297174_9366/Designed_for_Training_Tee_Plus_Size_White_IY1777_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING TEE (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Training
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/256666f323794a659b0bafd300e83731_9366/Adicolor_Classics_Firebird_Track_Top_Plus_Size_Black_IL9046_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS FIREBIRD TRACK TOP (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/41de750b1e0248188dc6ece0e2ba9fd3_9366/Adicolor_SST_Track_Pants_Plus_Size_Black_IL6653_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR SST TRACK PANTS (PLUS SIZE)</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28fc746365eb4cc3a68394345c4d3947_9366/Tiro_24_Training_Pants_Plus_Size_Black_IT2665_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO 24 TRAINING PANTS</Card.Title>
                            <Card.Text>
                                Women's • Soccer
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="dresses & skirts" element={<div className='dresses_skirts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7bbebacb838a4c05a24261bcc763f21c_9366/3-Stripes_Maxi_Dress_Black_IU2427_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>3-STRIPES MAXI DRESS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/584c2e57c01e4ba5a32dcefad0e3d066_9366/Adicolor_3-Stripes_Pinstripe_Dress_Black_IX5510_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES PINSTRIPE DRESS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c5755777d88e4beba7bb623e2d85785b_9366/Essentials_3-Stripes_Single_Jersey_Boyfriend_Tee_Dress_Pink_IY4242_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS 3-STRIPES SINGLE JERSEY BOYFRIEND TEE DRESS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f9de7e73d674672a1dd11860a31f1fc_9366/Womens_Ultimate365_Tour_Pleated_Skort_Green_IS9686_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>WOMEN'S ULTIMATE365 TOUR PLEATED SKORT</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2106ec752c42455886da2a136b0137b6_9366/TD_DRESS_Yellow_IY7594_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TD DRESS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26c3817bab9f4a548060afcd00257d70_9366/Adicolor_Classics_3-Stripes_Maxi_Dress_Red_II0750_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES MAXI DRESS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1af1e15634af4dc9b312af6200b0ae59_9366/Essentials_3-Stripes_Single_Jersey_Boyfriend_Tee_Dress_Black_HR4923_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS 3-STRIPES SINGLE JERSEY BOYFRIEND TEE DRESS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/206d7b0de2ca4de199ed791423bacf01_9366/Womens_Ultimate365_Tour_Pleated_Dress_Black_IY8758_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>WOMEN'S ULTIMATE365 TOUR PLEATED DRESS</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a413f83cd27b46529dcfce76b09de331_9366/Ultimate365_TWISTKNIT_Skort_Pink_IM5579_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 TWISTKNIT SKORT</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$85</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0eab58ca07df4dc3ad5bd8a2a18f9a0c_9366/Future_Icons_3-Stripes_Dress_Red_IS8341_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>FUTURE ICONS 3-STRIPES DRESS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96d0c4047e804ee1a7995841f38d0974_9366/Adicolor_3-Stripes_Maxi_Dress_Blue_IR8139_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES MAXI DRESS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa10eac2efcd49b79cfd43c28e56715f_9366/Ultimate365_Skort_Pink_IS9727_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 SKORT</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3fe194b3c3341ef9353c008fdac7984_9366/adidas_NY_Tee_Dress_Blue_IR5277_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIDAS NY TEE DRESS</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ba73fb0b1464ffdb524a121fa6754dd_9366/Adicolor_3-Stripes_Skirt_Purple_IP0701_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SKIRT</Card.Title>
                            <Card.Text>
                                Women's • Originals
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68755c5d38844753a03341360eb78171_9366/Go-To_Dress_Brown_IP4201_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>GO-TO DRESS</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$77</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1300c111a2234ec9a24a1934f56f007f_9366/Ultimate365_Frill_Skort_Black_IV9371_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 FRILL SKORT</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>6 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/39e0849edf7f413ebf5a7c8090753d46_9366/Go-To_Romper_Blue_IP4197_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>GO-TO ROMPER</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$77</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea4e8987355043648b51edbcbaf7e626_9366/Ultimate365_Frill_Skort_Blue_IP4274_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 FRILL SKORT</Card.Title>
                            <Card.Text>
                                Women's • Golf
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>5 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f27a9327c4c4462b6eaf9db7f6cd567_9366/Stripe_Pack_Graphic_Tee_Dress_Blue_IN6466_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>STRIPE PACK GRAPHIC TEE DRESS</Card.Title>
                            <Card.Text>
                                Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>2 colors</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71716cce81054b478740af460142aa93_9366/Melbourne_Tennis_Skirt_Multicolor_HU1810_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>MELBOURNE TENNIS SKIRT</Card.Title>
                            <Card.Text>
                                Women's • Tennis
                            </Card.Text>
                            <Card.Text>$26</Card.Text>
                            <Card.Text>4 colors</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
            </Routes>
        </div>
        
    </div>

  )
}

export default Kids