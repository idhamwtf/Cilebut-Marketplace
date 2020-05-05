import React from 'react'
import { FaFacebook, FaLine, FaSearch, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import '../css/Footer.css'

const Footer = () => {
    return (
        // Footer Started
        <div className='Footer-New'>
            <div className='Footer-Full'>
                {/* style={{ marginLeft: "350px" }} */}
                <div className='Footer-Top'>
                    <div className='Footer-Layanan'>
                        <p className='Footer-Layanan-Head'> LAYANAN PELANGGAN</p>
                        <h6 className='Footer-Layanan-Column-1'>Bantuan</h6>
                        <h6 className='Footer-Layanan-Column-2'>Pembayaran</h6>
                        <h6 className='Footer-Layanan-Column-2'>Lacak Pesanan Pembeli</h6>
                        <h6 className='Footer-Layanan-Column-2'>Gratis Ongkir</h6>
                        <h6 className='Footer-Layanan-Column-2'>Garansi Shopee</h6>
                        <h6 className='Footer-Layanan-Column-2'>Koin Shopee</h6>
                        <h6 className='Footer-Layanan-Column-2'>Pengembalian Barang & Dana</h6>
                        <h6 className='Footer-Layanan-Column-2'>Hubungi Kami</h6>
                    </div>
                    <div className='Footer-Jelajahi'>
                        <p className='Footer-Jelajahi-Head'>JELAJAHI SHOPEE</p>
                        <h6 className='Footer-Jelajahi-Column-1'>Tentang Kami</h6>
                        <h6 className='Footer-Jelajahi-Column-2' style={{ fontSize: ".75rem", fontFamily: "Roboto", color: "rgba(0,0,0,.54)", letterSpacing: "1px", marginTop: "15px" }}>Karir</h6>
                        <h6 className='Footer-Jelajahi-Column-2'>Kebijakan Shopee</h6>
                        <h6 className='Footer-Jelajahi-Column-2'>Kebijakan Privasi</h6>
                        <h6 className='Footer-Jelajahi-Column-2'>Blog</h6>
                        <h6 className='Footer-Jelajahi-Column-2'>Shopee Mall</h6>
                        <h6 className='Footer-Jelajahi-Column-2'>Hubungi Kami</h6>
                    </div>
                    <div className='Footer-Pembayaran'>
                        <p className='Footer-Pembayaran-Head'>PEMBAYARAN</p>
                        <div className='Footer-Pembayaran-Image-Flex'>
                            <img src="https://3.bp.blogspot.com/-ZK6W9UlA3lw/V15RGexr3yI/AAAAAAAAAJ4/nkyM9ebn_qg3_rQWyBZ1se5L_SSuuxcDACLcB/s1600/Bank_Central_Asia.png" alt="a" className='Image-Content' />
                            <img src="https://logos-download.com/wp-content/uploads/2016/06/Mandiri_logo.png" alt="a" className='Image-Content' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_BRI.png" alt="a" className='Image-Content' />
                        </div>
                        <div className='Footer-Pembayaran-Image-Flex'>
                            <img src="https://3.bp.blogspot.com/-e1fOq9uUk8M/V15O0WHiIMI/AAAAAAAAAJA/IpxPlLevxLsjisy2I625Yvz-eNzgc6xfgCKgB/s1600/Logo%2BBank%2BBNI%2BPNG.png" alt="a" className='Image-Content' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/CIMB_Niaga_logo.svg" alt="a" className='Image-Content' />
                            <img src="https://www.aturduit.com/sites/www.aturduit.com/files/Logo-Kredivo.png" alt="a" className='Image-Content' />
                        </div>
                        <div className='Footer-Pembayaran-Image-Flex'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg" alt="a" className='Image-Content' />
                            <img src="https://upload.wikimedia.org/wikipedia/id/2/28/Indomaret.png" alt="a" className='Image-Content' />
                        </div>
                        <p className='Footer-Pengiriman-Head'>PENGIRIMAN</p>
                        <div className='Footer-Pembayaran-Image-Flex'>
                            <img src="https://help.shopee.co.id/servlet/rtaImage?eid=ka06F0000015u4l&feoid=00N6F00000Rj6Gl&refid=0EM6F0000054k6w" alt="a" className='Image-Content' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png" alt="a" className='Image-Content' />
                            <img src="https://bandungdigitalniaga.com/wp-content/uploads/2019/11/logo-jnt-1-1.png" alt="a" className='Image-Content' />
                        </div>
                        <div className='Footer-Pembayaran-Image-Flex'>
                            <img src="https://cdn.clipart.email/667e3d2ff2999ec2f622c7da25433dbf_delivery-policy-green-n-skin_350-140.png" alt="a" className='Image-Content' />
                            <img src="https://weareswift.com/images/landing/gosend.png" alt="a" className='Image-Content' />
                            <img src="https://pngimage.net/wp-content/uploads/2018/06/pt-pos-png-7.png" alt="a" className='Image-Content' />
                        </div>
                    </div>
                    <div className='Footer-Ikuti'>
                        <p className='Footer-Ikuti-Head' >IKUTI KAMI</p>
                        <div className='Footer-Icons-Flex-1'>
                            <FaFacebook />
                            <h6 className='Footer-Icons-Text'>Facebook</h6>
                        </div>
                        <div className='Footer-Icons-Flex-2'>
                            <AiFillInstagram />
                            <h6 className='Footer-Icons-Text'>Instagram</h6>
                        </div>
                        <div className='Footer-Icons-Flex-2'>
                            <FaTwitterSquare />
                            <h6 className='Footer-Icons-Text'>Twitter</h6>
                        </div>
                        <div className='Footer-Icons-Flex-2'>
                            <FaLine />
                            <h6 className='Footer-Icons-Text'>Line</h6>
                        </div>
                        <div className='Footer-Icons-Flex-2'>
                            <FaLinkedin />
                            <h6 className='Footer-Icons-Text'>Linkedin</h6>
                        </div>
                    </div>

                    <div className='Footer-Download'>
                        <p className='Footer-Download-Head'>DOWNLOAD APIKASI SHOPEE</p>
                        <div className='Footer-Image-Flex'>
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/e68ee35ea16e8c82ec46074f1e6fe247.png" alt="A" className='Footer-Image-Barcode' />
                            <div >
                                <img className='Footer-Image-AppStore' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/759416b55e2bd69ecc360ee2faab7ad0.png" alt="" /> <br />
                                <img className='Footer-Image-PlayStore' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/2679f513b5f9e235adf2c6c288617e7b.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr style={{ width: "1163px", marginRight: "500px" }} /> */}
                <hr className='Footer-Hr' />
                {/* <div style={{ width: "1163px", height: "1px", backgroundColor: "rgba(0,0,0,.54)", marginLeft: "140px", marginTop: "20px", marginBottom: "20px" }} /> */}
                <div className='Footer-Bottom'>
                    <h6 className='Footer-Bottom-Left'>&copy;  Shopee 2020. Hak Cipta Dilindungi</h6>
                    <h6 className='Footer-Bottom-Right-Negara'>Negara: </h6>
                    <h6 className='Footer-Bottom-Right'>Singapura</h6>
                    <h6 className='Footer-Bottom-Right'>|</h6>
                    <h6 className='Footer-Bottom-Right'>Indonesia</h6>
                    <h6 className='Footer-Bottom-Right'>|</h6>
                    <h6 className='Footer-Bottom-Right'>Taiwan</h6>
                    <h6 className='Footer-Bottom-Right'>|</h6>
                    <h6 className='Footer-Bottom-Right'>Thailand</h6>
                    <h6 className='Footer-Bottom-Right'>|</h6>
                    <h6 className='Footer-Bottom-Right'>Malaysia</h6>
                    <h6 className='Footer-Bottom-Right'>|</h6>
                    <h6 className='Footer-Bottom-Right'>Vietnam</h6>
                    <h6 className='Footer-Bottom-Right'>|</h6>
                    <h6 className='Footer-Bottom-Right'>Filiphina</h6>
                </div>
            </div>
        </div>
        //Footer Ended
    )
}

export default Footer;