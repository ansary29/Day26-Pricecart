import './App.css';
import Card from './card'
function App() {
  let data = [
    {
      plan: "FREE",
      price:0,
      currency:"$",
      period:"month",
      listItems:[
        {
          itemName:"Single User",
          isDisabled: false
        },
        {
          itemName:"5GB Storage",
          isDisabled: false
        },
        {
          itemName:"Unlimited Public Projects",
          isDisabled: false
        },
        {
          itemName:"Community Access",
          isDisabled: false
        },
        {
          itemName:"Unlimited Private Projects",
          isDisabled: true
        },
        {
          itemName:"Dedicated Phone Support",
          isDisabled: true
        },
        {
          itemName:"Free Subdomain",
          isDisabled: true
        },
        {
          itemName:"Monthly Status Reports",
          isDisabled: true
        }
      ]
    },
    {
      plan: "PLUS",
      price:9,
      currency:"$",
      period:"month",
      listItems:[
        {
          itemName:"5 User",
          isDisabled: false,
          isBold: true
        },
        {
          itemName:"50GB Storage",
          isDisabled: false
        },
        {
          itemName:"Unlimited Public Projects",
          isDisabled: false
        },
        {
          itemName:"Community Access",
          isDisabled: false
        },
        {
          itemName:"Unlimited Private Projects",
          isDisabled: false
        },
        {
          itemName:"Dedicated Phone Support",
          isDisabled: false
        },
        {
          itemName:"Free Subdomain",
          isDisabled: false
        },
        {
          itemName:"Monthly Status Reports",
          isDisabled: true
        }
      ]
    },
    {
      plan: "PRO",
      price:49,
      currency:"$",
      period:"month",
      listItems:[
        {
          itemName:"Unlimited Users",
          isDisabled: false,
          isBold: true
        },
        {
          itemName:"150GB Storage",
          isDisabled: false
        },
        {
          itemName:"Unlimited Public Projects",
          isDisabled: false
        },
        {
          itemName:"Community Access",
          isDisabled: false
        },
        {
          itemName:"Unlimited Private Projects",
          isDisabled: false
        },
        {
          itemName:"Dedicated Phone Support",
          isDisabled: false
        },
        {
          itemName:"Unlimited Free Subdomain",
          isDisabled: false,
          isBold: true
        },
        {
          itemName:"Monthly Status Reports",
          isDisabled: false
        }
      ]
    }
  ]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((card)=>{
              return <Card cardData={card}></Card>
            })
          }
        </div>
      </div>

    </section>
  );
}

export default App;
