import React from 'react'

export default function Home() {
    return (
        <div className = "home-holder ">
            <h1>Ballon d'or 2021</h1>
            <div className="players-table">
                <div className="table-item">
                    <img src="https://resources.premierleague.com/photos/2020/12/02/f5b67801-2bfc-4fa4-a5cb-366675c614ec/1288276189.jpg?width=931&height=620" alt="" />
                    <h3 className = "player-name">Ruben Dias</h3>
                    <h5 className =  "nationality">Portugal</h5>
                </div>
                <div className="table-item">
                    <img src="https://theeverydayfan.com/wp-content/uploads/2020/12/3480.jpg" alt="" />
                    <h3 className = "player-name">Harry Kane</h3>
                    <h5 className =  "nationality">England</h5>
                </div>
                <div className="table-item">
                    <img src="https://e0.365dm.com/20/08/768x432/skysports-kevin-de-bruyne-manchester-city_5068719.jpg?20200815213516" alt="" />
                    <h3 className = "player-name">Kevin De Bruyne</h3>
                    <h5 className =  "nationality">Belgium</h5>
                </div>
            </div>
            
        </div>
    )
}
