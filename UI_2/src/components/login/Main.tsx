import React from 'react';
import './Bt2.scss';

export default function Main() {
  return (
    <div className='main'>
        <div className='head'>
            <div className='hi'>
               <h2>Add new post</h2>
               <h3>+ Add content</h3>
               <h3>+ Settings</h3>
            </div>
            <div>
                <input type="text" placeholder='Search'/>
                <button>Search</button>
            </div>
        </div>

        <div className='head2'>
            <div className='card'>
                <img className='icon' src="https://th.bing.com/th/id/R.5cfdb41d3b4efb53ebe812f9957d4f51?rik=2inTaFCCQJWuHQ&pid=ImgRaw&r=0" alt="" />
                <div>
                    <p>Togal Item</p>
                    <h3>$2,466</h3>
                </div>
            </div>
            <div className='card'>
                <img className='icon' src="https://static.vecteezy.com/system/resources/previews/000/350/151/original/shop-vector-icon.jpg" alt="" />
                <div>
                    <p>Togal Item</p>
                    <h3>$2,466</h3>
                </div>
            </div>
            <div className='card'>
                <img className='icon' src="https://th.bing.com/th/id/OIP.LPnBXk0zxAcMxxOM1a7o2wAAAA?w=300&h=280&rs=1&pid=ImgDetMain" alt="" />
                <div>
                    <p>Togal Item</p>
                    <h3>$2,466</h3>
                </div>
            </div>
            <div className='card'>
                <img className='icon' src="https://th.bing.com/th/id/OIP.LhH78XZIARwtQYUqNFly9gAAAA?rs=1&pid=ImgDetMain" alt="" />
                <div>
                    <p>Togal Item</p>
                    <h3>$2,466</h3>
                </div>
            </div>
        </div>
        
        <div className='main1'>
            <h2>Form title</h2>
            <p style={{color:"gray"}}>Ronaldo is the best player in the world, may khong biet thi may ngu</p>
            <br />
            <p className='chuY'><img className='img1' src="https://thuviendohoa.vn/upload/images/thumbs/logo-bieu-tuong-canh-bao-than-trong-tam-giac-dau-cham-than-png-384.jpg" alt="" /> Ronaldo dep trai vai ca nho ra the luon day, m khong biet thi may ngu !!</p>
            <table>
                <thead>
                    <tr>
                        <th>Table Title</th>
                        <th>Table Title</th>
                        <th>Table Title</th>
                        <th>Table Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>Pronunciation</p></td>
                        <td>Critiano Ronaldo</td>
                        <td>Leo Pessi</td>
                        <td><button className='one'>Side</button><button className='two'>Text</button></td>
                    </tr>
                    <tr>
                        <td><p>Pronunciation</p></td>
                        <td>Critiano Ronaldo</td>
                        <td>Leo Pessi</td>
                        <td><button className='one'>Side</button><button className='two'>Text</button></td>
                    </tr>
                    <tr>
                        <td><p>Pronunciation</p></td>
                        <td>Critiano Ronaldo</td>
                        <td>Leo Pessi</td>
                        <td><button className='one'>Side</button><button className='two'>Text</button></td>
                    </tr>
                    <tr>
                        <td><p>Pronunciation</p></td>
                        <td>Critiano Ronaldo</td>
                        <td>Leo Pessi</td>
                        <td><button className='one'>Side</button><button className='two'>Text</button></td>
                    </tr>
                    <tr>
                        <td><p>Pronunciation</p></td>
                        <td>Critiano Ronaldo</td>
                        <td>Leo Pessi</td>
                        <td><button className='one'>Side</button><button className='two'>Text</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}
