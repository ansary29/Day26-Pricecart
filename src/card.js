import React from 'react';
function Card(props){
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.plan}</h5>
            <h6 className="card-price text-center">{props.cardData.currency}{props.cardData.price}<span className="period">{props.cardData.period}</span></h6>
            <hr/>
            <ul className="fa-ul">
                {
                    props.cardData.listItems.map((item,index)=>{
                        return(
                            <>
                                {
                                    item.isDisabled?
                                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{item.itemName}</li>:
                                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.itemName}</li>
                                }
                            </>
                            
                        )
                    })
                }
            </ul>
            <a href="https://guvi.in" className="btn btn-block btn-primary text-uppercase" target="_blank" rel="noreferrer">Subscribe</a>
          </div>
        </div>
      </div>
    );
}

export default Card;
/* <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
    <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
    <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li> */