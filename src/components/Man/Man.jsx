import { Route, Routes, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';


import './Man.css'

const Man = () => {
  return (
    <div className='man'>
     
        <div className='shoes'>
            <ul>
                <div>SHOES</div>
                <li><Link to="snikers">Snikers</Link></li>
                <li><Link to="running">Running</Link></li>
                <li><Link to="slides&sandals">Soccer</Link></li>
                <li><Link to="walking">Walking</Link></li>
            </ul>
        </div>

        <div className='clothing'>
            <ul>
                <div>CLOTHING</div>
                <li><Link to="t-shorts&tops">T-Shorts & Tops</Link></li>
                <li><Link to="shorts">Shorts</Link></li>
                <li><Link to="dresses & skirts" >Swimwear</Link></li>
                <li><Link to="plus size" >Hoodies & Sweatshirts</Link></li>
               
            </ul>
        </div>

        
      
        <div className='cards'>
            <Routes>
                <Route path="snikers" element={<div className='shikers'>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SAMBA CLASSIC SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2ff02abbd304144b45797e8408f581a_9366/Gazelle_Indoor_Shoes_Blue_JI2061_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GAZELLE INDOOR SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>20 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b3d62b0b0fc9428490665f9f2438d4bc_9366/Samba_MN_Shoes_White_IF1953_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SAMBA MN SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$150</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c608f554cb3b4d12b392af000188c513_9366/Ultraboost_1.0_Shoes_Black_HQ4199_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$180</Card.Text>
                                <Card.Text>22 colorst</Card.Text>
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
                                <Card.Text>40 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f7d4a7947e04cac9d92d533438610c2_9366/Gazelle_Shoes_Green_IG1634_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GAZELLE SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals
                                </Card.Text>
                                <Card.Text>$100</Card.Text>
                                <Card.Text>42 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b310c445a17412b84f6a2e5b7f8e66f_9366/Campus_00s_Shoes_Brown_IF8770_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>CAMPUS 00S SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals   
                                </Card.Text>
                                <Card.Text>$110</Card.Text>
                                <Card.Text>40 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/310d60fb49d04048bdc8a852427b8e8f_9366/Kaptir_3.0_Wide_Shoes_Black_IF7333_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>KAPTIR 3.0 WIDE SHOES</Card.Title>
                                <Card.Text>
                                Men's • Essentials
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>4 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60f94aa4ca62471eaa39af1600038cc2_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$180</Card.Text>
                                <Card.Text>22 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fccbf48dc5e744a4a7e9dfa944773239_9366/Daily_4.0_Shoes_Black_IF4502_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>DAILY 4.0 SHOES</Card.Title>
                                <Card.Text>
                                Sportswear
                                </Card.Text>
                                <Card.Text>$65</Card.Text>
                                <Card.Text>10 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/149dabd2dc4c413bb002f5e52147dbc6_9366/Ultraboost_1.0_Shoes_White_IH4924_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$180</Card.Text>
                                <Card.Text>32 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/242d09cebfa44d02a829a89fa808b6cb_9366/Gazelle_Indoor_Shoes_Green_JI2062_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GAZELLE INDOOR SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>22 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/70dab482a3424d4ea8a53c31cfa35a5d_9366/VL_Court_3.0_Shoes_Black_IH4789_HM1.jpg"} />
                            <Card.Body>
                                <Card.Title>VL COURT 3.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>30 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2dc8f82b11754a3ebba789390f72f4de_9366/Swift_Run_1.0_Shoes_White_IE7475_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SWIFT RUN 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$80</Card.Text>
                                <Card.Text>4 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a1f8ba56c764ba0a111ee9b9821465f_9366/Response_Shoes_Black_IH6007_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>RESPONSE SHOES</Card.Title>
                                <Card.Text>
                                Men's • Running  
                                </Card.Text>
                                <Card.Text>$75</Card.Text>
                                <Card.Text>9 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1d49ac8428d243debdce46575a553a1e_9366/Kaptir_3.0_Shoes_Black_JI1251_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>KAPTIR 3.0 SHOES</Card.Title>
                                <Card.Text>
                                Sportswear
                                </Card.Text>
                                <Card.Text>$90</Card.Text>
                                <Card.Text>40 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0643354eec9945edb92c800a064146ab_9366/Gazelle_Indoor_Shoes_Burgundy_IG4996_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GAZELLE INDOOR SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$150</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0be0a50815d476a9ce764a6e7ff406b_9366/Gazelle_Indoor_Shoes_Multicolor_IG1640_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>GAZELLE INDOOR SHOES</Card.Title>
                                <Card.Text>
                                Men's • Originals  
                                </Card.Text>
                                <Card.Text>$120</Card.Text>
                                <Card.Text>22 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6837c72f291c4fdab175e5a3a3b7095a_9366/Samba_MN_Shoes_Black_IF1952_01_standard.jpg"} />
                            <Card.Body>
                                <Card.Title>SAMBA MN SHOES</Card.Title>
                                <Card.Text>
                                Originals
                                </Card.Text>
                                <Card.Text>$150</Card.Text>
                                <Card.Text>2 colorst</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0ca2dd8bdb84a2ab11faacb8802c4dc_9366/Ultraboost_1.0_Shoes_White_HQ4202_HM1.jpg"} />
                            <Card.Body>
                                <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                                <Card.Text>
                                Men's • Sportswear
                                </Card.Text>
                                <Card.Text>$180</Card.Text>
                                <Card.Text>19 colorst</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>} />
                <Route path="running" element={<div className='running'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a1f8ba56c764ba0a111ee9b9821465f_9366/Response_Shoes_Black_IH6007_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RESPONSE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>9 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5ae3ebfc8a846cd80613bce06edb007_9366/Supernova_Prima_Running_Shoes_Grey_ID3684_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA PRIMA RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$160</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad02c1f113a74fe3a6ec11b6972fbd9b_9366/Runfalcon_5_Wide_Running_Shoes_Blue_IE8831_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 WIDE RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df3c857d90804a2b8e3fd1a181bb2fc5_9366/Runfalcon_5_Running_Shoes_White_IH7757_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a1f8ba56c764ba0a111ee9b9821465f_9366/Response_Shoes_Black_IH6007_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RESPONSE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>9 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df3c857d90804a2b8e3fd1a181bb2fc5_9366/Runfalcon_5_Running_Shoes_White_IH7757_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28b3d88f06cb4d178396f72038dfcd81_9366/Questar_3_Running_Shoes_Green_IE8182_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>QUESTAR 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>
 
 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a5b6fe98c4244b197ffe50b08f364da_9366/Adizero_Sl2_Running_Shoes_Black_IF1157_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL2 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b8b639c48ae439ca63c1cc35a592e2a_9366/Runfalcon_5_Wide_Running_Shoes_White_IE0551_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 WIDE RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ce6aa50814b4eb8b8b7b9c544b591d1_9366/Adizero_Sl2_Running_Shoes_White_IF6745_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL2 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f1375f34b2641d2bcca2ebdac8c9a77_9366/Supernova_Rise_Shoes_White_IF3015_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$112</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/461e178541954ddf882805827c08bff6_9366/Adizero_Sl2_Running_Shoes_Green_IE1054_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ADIZERO SL2 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c521f021c2b2434abb8fa21d281fb5b7_9366/Supernova_Rise_Shoes_Blue_IE3947_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50caa37b0b204101abe679004a7eddba_9366/Supernova_Stride_Shoes_Black_IG8321_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6aa5e81b69354c91a4b2af231abe8a2a_9366/Supernova_Solution_Running_Shoes_Blue_ID3603_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA SOLUTION RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9cdba87598344dccbb82aa7a5b0b60fe_9366/Questar_3_Running_Shoes_Grey_ID6315_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>QUESTAR 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running

                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50caa37b0b204101abe679004a7eddba_9366/Supernova_Stride_Shoes_Black_IG8321_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>RESPSUPERNOVA STRIDE SHOES"ONSE</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c521f021c2b2434abb8fa21d281fb5b7_9366/Supernova_Rise_Shoes_Blue_IE3947_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc877fde669c430dab09d6b8a7fe0df5_9366/Supernova_Rise_Wide_Shoes_Black_IG8245_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE WIDE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>10 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/afc9e362a6494c2a9ea6e6d4f5760c7e_9366/Adistar_2.0_Shoes_Green_FZ5622_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>ADISTAR 2.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="slides&sandals" element={<div className='soccer'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9abae3ebbd424ded901cdf24a9c1b13a_9366/F50_League_Laceless_Turf_White_IF1339_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>F50 LEAGUE LACELESS TURF</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a2e7d4dd8b9431297b234984600b114_9366/Copa_Pure_2_Elite_KT_Firm_Ground_White_IG6397_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA PURE 2 ELITE KT FIRM GROUND</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$250</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06cf35d952f74fc2b0f1b2807d140a09_9366/F50_Pro_Firm_Ground_Cleats_White_IE0596_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>F50 PRO FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e0aa48420ef473bb04245c15d4e0028_9366/Predator_Elite_Artificial_Grass_Cleats_Blue_IF6407_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR ELITE ARTIFICIAL GRASS CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$260</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8363218ab8674837b67fe89ff5ed723e_9366/Predator_League_Fold-Over_Tongue_Firm_Ground_Cleats_Blue_JP7209_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR LEAGUE FOLD-OVER TONGUE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16a880b3f2e144cc90bc12055f9f2c7e_9366/Copa_Pure_2_League_Firm_Ground_White_IG6408_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA PURE 2 LEAGUE FIRM GROUND</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7e338f1a380419fb05ac1730635584b_9366/Copa_Gloro_II_Firm_Ground_Black_IG8740_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA GLORO II FIRM GROUND</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d47c910737f847309e4f0104c72b21b7_9366/Predator_24_League_Low_Freestyle_Shoes_Grey_IF8351_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 LEAGUE LOW FREESTYLE SHOES</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4285a57b7fb4bbf9315af58015715f3_9366/Copa_Icon_Firm_Ground_Soccer_Cleats_Black_HQ1033_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA ICON FIRM GROUND SOCCER CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$180</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e840eaab3b0749f1962b2551b0d15235_9366/Predator_24_Pro_Firm_Ground_Cleats_Yellow_IG7776_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 PRO FIRM GROUND CLEATSATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$120</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15a6f7b63771432db7b1cd291baef3bb_9366/Copa_Pure_II_Pro_Firm_Ground_Cleats_Burgundy_IE7490_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA PURE II PRO FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$112</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9b8bb31c8db4135a5f8f2b560718a21_9366/Predator_24_League_Firm_Ground_Cleats_Black_IG7774_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 LEAGUE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Originals
                            </Card.Text>
                            <Card.Text>$76</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a172e10aed49408703eae994b28b6c_9366/Predator_24_League_Laceless_Turf_Cleats_Yellow_IF1024_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 LEAGUE LACELESS TURF CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/020ed5e8b9d14163954d09015c60acb6_9366/Predator_24_League_Low_Firm_Ground_Cleats_Yellow_IG7761_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 ELITE LACELESS FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$208</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d24407a41794038955342080c6613a1_9366/Predator_24_Elite_Laceless_Firm_Ground_Cleats_White_IE1806_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>X CRAZYFAST LEAGUE TURF SHOES</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$85</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51e0d0c49f904704bfdd097aff649eaa_9366/Copa_Pure_II_Pro_Firm_Ground_Cleats_Beige_IE4979_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA PURE II PRO FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$112</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6c9060de38b459a87b0e961ba8f050d_9366/Copa_Pure_2_League_FG_Beige_IF5448_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA PURE 2 LEAGUE FG</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$64</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7d19c34c0084792a421421a6c8ff6b1_9366/Copa_Pure_II_League_Firm_Ground_Cleats_White_IE7493_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>COPA PURE II LEAGUE FIRM GROUND CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15a877b0b0da466aa8909e9f43ddef8a_9366/Predator_24_League_Laceless_Turf_Cleats_Black_IG7715_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 LEAGUE LACELESS TURF CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8756149152064957b81c3b4d695f53e1_9366/Predator_24_Elite_Turf_Cleats_Yellow_IG7730_22_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREDATOR 24 ELITE TURF CLEATS</Card.Title>
                            <Card.Text>
                            Soccer
                            </Card.Text>
                            <Card.Text>$112</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="walking" element={<div className='walking'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/195463ce9a274fd8bbc78093bf373041_9366/KAPTIR_3.0_Blue_IE6614_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>KAPTIR 3.0</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>40 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/149dabd2dc4c413bb002f5e52147dbc6_9366/Ultraboost_1.0_Shoes_White_IH4924_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$180</Card.Text>
                            <Card.Text>41 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1d49ac8428d243debdce46575a553a1e_9366/Kaptir_3.0_Shoes_Black_JI1251_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>KAPTIR 3.0 SHOES</Card.Title>
                            <Card.Text>
                            Sportswear
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>40 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a1f8ba56c764ba0a111ee9b9821465f_9366/Response_Shoes_Black_IH6007_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RESPONSE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c1d8c6c9b61497bbbe24fb429023195_9366/Ultraboost_1.0_Shoes_Grey_IE8976_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTRABOOST 1.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$180</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5ae3ebfc8a846cd80613bce06edb007_9366/Supernova_Prima_Running_Shoes_Grey_ID3684_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA PRIMA RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$160</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df3c857d90804a2b8e3fd1a181bb2fc5_9366/Runfalcon_5_Running_Shoes_White_IH7757_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad02c1f113a74fe3a6ec11b6972fbd9b_9366/Runfalcon_5_Wide_Running_Shoes_Blue_IE8831_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 WIDE RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c875974fbc3844dd9500ade947dc12f7_9366/Runfalcon_5_Running_Shoes_Black_IH7758_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50caa37b0b204101abe679004a7eddba_9366/Supernova_Stride_Shoes_Black_IG8321_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA STRIDE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b8b639c48ae439ca63c1cc35a592e2a_9366/Runfalcon_5_Wide_Running_Shoes_White_IE0551_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RUNFALCON 5 WIDE RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/34e1ff7c25404206a1be610b0dd5d8e1_9366/Duramo_SL_Shoes_Black_IF9483_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>DURAMO SL SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5378450631de4367acc80ab908940f1a_9366/SUPERNOVA_RISE_M_White_IH7611_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE M</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a747cec8a17643d49bfb923fb364e98b_9366/Response_Shoes_Green_IH6002_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RESPONSE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>9 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/27dbbc711dce4e9bae4aa0b14653f9bd_9366/Supernova_Rise_Running_Shoes_Green_ID3590_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc4973c527724839b746df0f5bd265b0_9366/Kaptir_3.0_Shoes_White_IH4838_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>KAPTIR 3.0 SHOES</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$90</Card.Text>
                            <Card.Text>20 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c521f021c2b2434abb8fa21d281fb5b7_9366/Supernova_Rise_Shoes_Blue_IE3947_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a747cec8a17643d49bfb923fb364e98b_9366/Response_Shoes_Green_IH6002_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>RESPONSE SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>9 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/27dbbc711dce4e9bae4aa0b14653f9bd_9366/Supernova_Rise_Running_Shoes_Green_ID3590_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>SUPERNOVA RISE RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$140</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44fc388d7c254f86a5c76d524a6dda18_9366/Questar_3_Running_Shoes_White_ID6319_01_standard.jpg"} />
                        <Card.Body>
                            <Card.Title>QUESTAR 3 RUNNING SHOES</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />  

                <Route path="t-shorts&tops" element={<div className='t-shorts_tops'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0274cfe1914743c490e000518623cf20_9366/ALL_SZN_Tee_Black_IY4150_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN TEE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97741b87a0bb4d2688418754fcf7e6eb_9366/Trefoil_Essentials_Tee_Blue_IZ2097_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bba09c80cdf3416c9957d5ea0dee0738_9366/Real_Madrid_24-25_Home_Jersey_White_IU5011_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>REAL MADRID 24/25 HOME JERSEY </Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>1 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/efb7ea8dc81f4817a4c069c88a3de70e_9366/Argentina_24_Messi_Home_Jersey_White_IX7790_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ARGENTINA 24 MESSI HOME JERSEY</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$130</Card.Text>
                            <Card.Text>1 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78b62417f1e042aeb25e3353d278de3b_9366/Real_Madrid_24-25_Home_Authentic_Jersey_White_IX8095_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>REAL MADRID 24/25 HOME AUTHENTIC JERSEY</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$150</Card.Text>
                            <Card.Text>1 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba051eef3daf4ebf8f41c179ca25f7f1_9366/Mexico_24_Home_Jersey_Multicolor_IP6377_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>MEXICO 24 HOME JERSEY</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>1 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6c621c93cb894c1eb5d4afc30078e465_9366/Adicolor_Classics_SST_Track_Jacket_Red_IL2494_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS SST TRACK JACKET</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$80</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63bdc6f05cea48b2b305d7c37a010f73_9366/Strength_Graphic_Tee_Black_JI6322_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>STRENGTH GRAPHIC TEE</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/db0c4c99bddc41449aa07e9bf3aa2ad1_9366/Trefoil_Essentials_Tee_Green_IZ2106_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15c8ed30b04e4e82bd8faf0400d1df24_9366/Essentials_Single_Jersey_Big_Logo_Tee_Red_IC9352_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS SINGLE JERSEY BIG LOGO TEE</Card.Title>
                            <Card.Text>
                            Men's • Essentials
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b25ad4caa15f4d418824562d868e8033_9366/Adicolor_Trefoil_Tee_Black_IU2364_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>12 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/03c46d773e38473fa9cef1fea9f085df_9366/Tiro_24_Training_Jacket_Blue_IR7498_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO 24 TRAINING JACKET</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3392fdd77ebc49b68f12afce011dbe15_9366/Adicolor_Classics_Trefoil_Tank_Top_Grey_IM2082_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS TREFOIL TANK TOP</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cfee38e6c5a40b7867efa5f32b3d47e_9366/Adicolor_Trefoil_Tee_Green_IR8012_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>13 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a4bfaf3e7ef43d583d785f6357327f2_9366/Tennis_FreeLift_Tee_White_IP1946_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TENNIS FREELIFT TEE</Card.Title>
                            <Card.Text>
                            Men's • Tennis
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>50 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9bc390e91bb041788cd962b6861d142d_9366/Adicolor_Trefoil_Tee_Green_IR7979_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR TREFOIL TEE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$24</Card.Text>
                            <Card.Text>11 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca813fb127e3489f8677d25e0e456e7e_9366/Designed_for_Training_Workout_Tank_Top_Green_IX9160_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>DESIGNED FOR TRAINING WORKOUT TANK TOP</Card.Title>
                            <Card.Text>
                            Men's • Training                           
                            </Card.Text>
                            <Card.Text>$30</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4279132a54fc490f9de0ee91eab316be_9366/Adicolor_Mock_Eyelet_Vest_Pink_IZ2453_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR MOCK EYELET VEST</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/11e17c7e4e6a4f1190c5c067857a74b2_9366/Workout_Logo_Tee_Black_IT2124_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>WORKOUT LOGO TEE</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$25</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c61026c441b404a9175e13168bcd1a5_9366/Tiro_Track_Jacket_Black_IP3787_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO TRACK JACKET </Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$49</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="shorts" element={<div className='shorts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/76eb1b16302047f9b519afc40023f612_9366/Essentials_Fleece_3-Stripes_Shorts_Black_IB4026_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS FLEECE 3-STRIPES SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab3a97877b584409bb3c5ee8fda71c04_9366/Trefoil_Essentials_Shorts_Grey_IR7822_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>8 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8aa03eb854744d05b3e7117e7fb554b3_9366/Adicolor_3-Stripes_Shorts_Green_IR8006_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4267024cc0464d8f9d301aa6de270c93_9366/Own_The_Run_Shorts_Black_IY0704_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/472d1146bec54493b2d9227b41a36158_9366/Tiro_24_Competition_Match_Shorts_Black_IQ4753_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO 24 COMPETITION MATCH SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2da3cf34f2034001a41c77cf8b5124cf_9366/Tennis_Ergo_Shorts_Black_IQ4736_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TENNIS ERGO SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Tennis
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0395bf77fee649028754af420160e55b_9366/Ultimate365_10-Inch_Golf_Shorts_Grey_HR7946_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 10-INCH GOLF SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d0875f5e09442c0a148cc2b8eb166af_9366/Tiro_24_Shorts_Black_IR9376_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO 24 SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$35</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46b00344793144caa1bf8e58b1c7e172_9366/Own_the_Run_3-Stripes_Shorts_Black_IQ3814_HM1.jpg"} />
                        <Card.Body>
                            <Card.Title>OWN THE RUN 3-STRIPES SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Running
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16c55a7be773422e9ec3af12013e29be_9366/Ultimate365_8.5-Inch_Golf_Shorts_Grey_HR7939_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 8.5-INCH GOLF SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>11 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9bfe36f68b1a4a0f9c58121e1411b3c6_9366/Premium_Essentials_Shorts_Black_IY2249_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>PREMIUM ESSENTIALS SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab0c25b9542c4aa8999daf2b0006d02b_9366/Ultimate365_10-Inch_Golf_Shorts_Beige_HR7951_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 10-INCH GOLF SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6667a87f9fd3422fbd548d111088ec51_9366/Trefoil_Essentials_Cargo_Shorts_Blue_IY2312_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS CARGO SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/179ad1d03c8140e3b26ce32bc8494981_9366/Adicolor_Firebird_Shorts_Black_IU2368_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR FIREBIRD SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d0ff80c88684468a9c0aefa00c922ca_9366/Club_Tennis_Shorts_White_HS3265_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CLUB TENNIS SHORTS </Card.Title>
                            <Card.Text>
                            Men's • Tennis
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab0c25b9542c4aa8999daf2b0006d02b_9366/Ultimate365_10-Inch_Golf_Shorts_Beige_HR7951_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 10-INCH GOLF SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9f27eef9299f4074b8c7cbb500891ce2_9366/Workout_Logo_Knit_Shorts_Brown_IS3798_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>WORKOUT LOGO KNIT SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$28</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6786a332c0043a79ebd8a83e4e5faf8_9366/Fashion_Mesh_Shorts_Blue_IT7507_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>FASHION MESH SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$42</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6da502e5c094b40b2df6c1b7097e594_9366/ALL_SZN_Snack_Attack_French_Terry_Shorts_Green_IW6677_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN SNACK ATTACK FRENCH TERRY SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/290f5b58f1594ce9b11a2f31eb3942be_9366/Z.N.E._Premium_Shorts_Blue_IR5220_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>Z.N.E. PREMIUM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear  
                            </Card.Text>
                            <Card.Text>$45</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="plus size" element={<div className='hoodies_sweatshirts'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4d908c6409a45f7888819b03e132a4d_9366/Trefoil_Essentials_Hoodie_Black_IY4930_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TREFOIL ESSENTIALS HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>7 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e89f02f6875b4a7c888cfbd605977cac_9366/ALL_SZN_Fleece_Hoodie_Black_IX1253_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN FLEECE HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4be00a68e4844c5db8840861af53a801_9366/Tiro_24_Sweat_Hoodie_Black_IJ7673_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>TIRO 24 SWEAT HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad945d416ccb4607bbf9f55fd8401fba_9366/Core_Printed_Lightweight_Hoodie_Grey_IX2014_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CORE PRINTED LIGHTWEIGHT HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ad6a57446ea41da9859afd000e9b5c5_9366/Adicolor_Classics_3-Stripes_Crew_Blue_IM4515_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES CREW</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e87f07820d04ffb9cc1afc900935e5a_9366/Essentials_Fleece_3-Stripes_Full-Zip_Hoodie_Blue_IJ6478_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS FLEECE 3-STRIPES FULL-ZIP HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$65</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5db0f40591ee4306936b30b1dc5a4fd8_9366/ALL_SZN_Fleece_Hoodie_Grey_IY4123_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ALL SZN FLEECE HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$60</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad945d416ccb4607bbf9f55fd8401fba_9366/Core_Printed_Lightweight_Hoodie_Grey_IX2014_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CORE PRINTED LIGHTWEIGHT HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$75</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98e292d8c84e4415af98a252ee45f791_9366/Z.N.E._Premium_Full-Zip_Hooded_Track_Jacket_White_IR5208_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>Z.N.E. PREMIUM FULL-ZIP HOODED TRACK JACKET</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$100</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ec85201962f4618a476e8648f1313da_9366/Field_Issue_Essentials_Hoodie_Brown_IY2290_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>FIELD ISSUE ESSENTIALS HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$110</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f62adc243cd64d73b92a6b0edb74b325_9366/Lightweight_Half-Zip_Top_Black_IS7134_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>LIGHTWEIGHT HALF-ZIP TOP</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/782454a5a9284c77b92f2574569a5386_9366/Lightweight_Half-Zip_Top_Blue_IU4506_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>LIGHTWEIGHT HALF-ZIP TOP</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>6 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8936c7de9a7844e68ee8e0bd6e152ca2_9366/City_Escape_Full-Zip_Hoodie_Black_IR5192_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE FULL-ZIP HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4701c78b0ac24cb8b42b304acbd59c7f_9366/Z.N.E._Woven_Full-Zip_Hooded_Track_Top_Black_IR5210_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>Z.N.E. WOVEN FULL-ZIP HOODED TRACK TOR</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5dee834908c24a26998f16fe6896c8e5_9366/Adicolor_Cutline_Hoodie_Brown_IU2369_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CUTLINE HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8936c7de9a7844e68ee8e0bd6e152ca2_9366/City_Escape_Full-Zip_Hoodie_Black_IR5192_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE FULL-ZIP HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05f220749ecb43dfa48bafd000b5e15f_9366/Adicolor_Classics_3-Stripes_Hoodie_Black_IM2088_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR CLASSICS 3-STRIPES HOODIE</Card.Title>
                            <Card.Text>
                            Men's • CLASSICS
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b298b0cc18344ed0b902a0e6d8a4ff63_9366/Gym_Training_1-4-Zip_Long_Sleeve_Tee_Green_IR5882_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>GYM+ TRAINING 1/4-ZIP LONG SLEEVE TEE</Card.Title>
                            <Card.Text>
                            Men's • Training
                            </Card.Text>
                            <Card.Text>$33</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df4f2e160406488699c894d9d0007634_9366/Ultimate365_Half-Zip_Pullover_Blue_IR7148_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ULTIMATE365 HALF-ZIP PULLOVER</Card.Title>
                            <Card.Text>
                            Men's • Golf
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a19757cf1b34e2cb0e2afd20101181e_9366/FC_Bayern_Designed_For_Gameday_Full-Zip_Hoodie_Black_IB0993_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>FC BAYERN DESIGNED FOR GAMEDAY FULL-ZIP HOODIE</Card.Title>
                            <Card.Text>
                            Men's • Soccer
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                <Route path="dresses & skirts" element={<div className='swimwear'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/43a39fe594d240b198173924bc3a5cb1_9366/Monogram_Swim_Shorts_Blue_IY1559_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>MONOGRAM SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b34196e1b7ed422aa19eaf0900bab6dd_9366/Adicolor_Essentials_Solid_Swim_Shorts_Black_HT4411_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS SOLID SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3733569d1b2c40f781de5591efd7cc94_9366/Adicolor_3-Stripes_Swim_Shorts_Blue_IY1550_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>3 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe0a0176909e4f7b8093a3ecf7a26822_9366/Solid_CLX_Short-Length_Swim_Shorts_Black_IA5390_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>SOLID CLX SHORT-LENGTH SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$40</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ba23594104748159e30af0900bb2b34_9366/Adicolor_3-Stripes_Swim_Shorts_Black_HT4419_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/89887ebec13b45d2b4707a8592612c2b_9366/3-Stripes_CLX_Swim_Shorts_Green_IR9425_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>3-STRIPES CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05f73e2d918d46ac981b58da3059ca1a_9366/CLRDO_Swim_Shorts_Grey_IT8634_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CLRDO SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals   
                            </Card.Text>
                            <Card.Text>$70</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/91ff4526950f43249c44d586007d5fe6_9366/Stripey_Classics_Swim_Shorts_Short_Length_Orange_IR6205_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>STRIPEY CLASSICS SWIM SHORTS SHORT LENGTH</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b6df5e1e5284ffb8ce751d7bb56bdd1_9366/City_Escape_Camo_3-Stripes_Cix_Swim_Shorts_Blue_IS1672_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE CAMO 3-STRIPES CIX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Women's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da393430bbe74c20b2c7981520b51527_9366/City_Escape_Camo_3-Stripes_Cix_Swim_Shorts_Purple_IT8606_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CITY ESCAPE CAMO 3-STRIPES CIX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd4edb86eb4e49aa9d01aefa00f54f8e_9366/3-Stripes_CLX_Swim_Shorts_Black_HT4358_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>3-STRIPES CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2534dffaf6fa4179964a0d31317154c3_9366/Solid_CLX_Short-Length_Swim_Shorts_Green_IR6222_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>SOLID CLX SHORT-LENGTH SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$32</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8fe236b9b2a74267836d1022128dc0fc_9366/Stripey_Classics_Swim_Shorts_Short_Length_Blue_IL4020_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>STRIPEY CLASSICS SWIM SHORTS SHORT LENGTH</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$50</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2e91f557351545c6aee3539f564e27d0_9366/Essentials_3-Stripes_Animal-Print_CLX_Swim_Shorts_Black_IS1559_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ESSENTIALS 3-STRIPES ANIMAL-PRINT CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$44</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb022e40a0c74eccba43a0557e36c3a8_9366/FARM_Rio_3-Stripes_CLX_Swim_Shorts_Blue_IU1198_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>FARM RIO 3-STRIPES CLX SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Sportswear
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/734d0245910441179349d2e12a82cac6_9366/Camo_Allover_Print_Swim_Shorts_Black_IT8646_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>CAMO ALLOVER PRINT SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$56</Card.Text>
                            <Card.Text>2 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80678e176a5741d68e46c057fc74d798_9366/Adicolor_3-Stripes_Swim_Shorts_Pink_IT8658_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$44</Card.Text>
                            <Card.Text>5 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80678e176a5741d68e46c057fc74d798_9366/Adicolor_3-Stripes_Swim_Shorts_Pink_IT8658_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$44</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a479f50b089749929c787d20f6bb134e_9366/Adicolor_Essentials_Solid_Swim_Shorts_Blue_IT8653_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR ESSENTIALS SOLID SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0f4e13bc2fe4e36a27cb6fa03e9689b_9366/Adicolor_3-Stripes_Swim_Shorts_Orange_IY1555_21_model.jpg"} />
                        <Card.Body>
                            <Card.Title>ADICOLOR 3-STRIPES SWIM SHORTS</Card.Title>
                            <Card.Text>
                            Men's • Originals
                            </Card.Text>
                            <Card.Text>$55</Card.Text>
                            <Card.Text>4 colorst</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>} />
                
            </Routes>
        </div>
        
    </div>

  )
}

export default Man