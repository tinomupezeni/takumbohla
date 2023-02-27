import "./IngredientsStyles.css";
import { IngredientsDataList } from "./IngredientDataList";
import React, { Component } from "react";

const orderArr = [];
var totalSum = 0;
var totalNums = [];
var totalAmount = 0;
var message = "";
var link = "";
var name = "";
var phoneNumber = 0;
class IngredientsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      clicked: null,
      active: null,
      orderArr: orderArr,
      totalNums: totalNums,
      totalSum: totalSum,
      totalAmount: totalAmount,
      time: 1000,
      link: link,
      message: message,
      //name: name,
      //phoneNumber: phoneNumber,
    };
  }
  handleTextChange = (e) => {
    const nm = e.target.value
    name = nm
    console.log(name);
  }

  handleNumChange = (e) => {
    const number = e.target.value
    phoneNumber = number
    console.log(phoneNumber);
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.occurance }),
      100
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = (id) => () => {
    this.setState((prevState) => ({
      clicked: prevState.clicked === id ? null : id,
    }));
  };
  state = { show: false, text: "" };
  showCurrent = () => {
    this.setState({ show: !this.state.show, text: !this.state.text });
  };
  selectedId = [];
  activated = (id) => {
    this.setState((prevState) => ({
      active: prevState.active === id ? null : id,
    }));
  };
  selected = [];
  selecte = [];
  occurance = () => {
    orderArr.length = 0;
    totalNums.length = 0;
    totalSum = 0;
    message = "";
    link = "";
    this.selected.forEach((item) => {
      let count = 0;
      for (var element of this.selecte) {
        if (element === item) {
          count++;
        }
      }
      if (
        orderArr.filter((e) => e.item === item && e.count === count).length > 0
      ) {
        return true;
      } else {
        orderArr.push({ item, count });
      }
    });
    orderArr.forEach((el) => {
      totalNums.push(el.count);
    });
    totalNums.forEach((num) => {
      totalSum += num;
    });
    if (totalSum >= 20) {
      totalAmount = 0.5 * totalSum;
    } else {
      totalAmount = totalSum;
    }
    totalAmount = totalAmount.toFixed(2);

    message = 'name : ' + name +'\n' +'phone number : '+ phoneNumber + '\n' +
      orderArr.map((el) => {
        return el.item + "---" + el.count + "\n";
      }) +
      "\n" +
      " total number of items " +
      totalSum +
      "\n" +
      " total amount $" +
      totalAmount;
    link = `https://wa.me/263719509816?text=${encodeURI(message)}&app_absent=0`;

    setTimeout(this.occurance, 100);
  };

  capturingName = (e, Spname) => {
    e.preventDefault();
    this.selected.push(Spname);
    this.selecte.push(Spname);
  };

  placeOrder = () => {
    this.occurance();
    this.showCurrent();
  };
  increase = (item) => {
    this.selected.push(item);
    this.selecte.push(item);
  };
  decrease = (item) => {
    let index = this.selected.lastIndexOf(item)
    this.selected.splice(index, 1);
    this.selecte.splice(index, 1);
  };

  render() {
    return (
      <>
        <div className="data-list">
          <div className="data-text">
            <h1>your kitchen buddies chef</h1>
            <p>$1.00 retail and $0.50 wholesale @ $10.00 for 20 sachets</p>
          </div>
          <ul className="ingredients">
            {IngredientsDataList.map((item, index) => {
              return (
                <div className="category">
                  <div key={index} onClick={this.handleClick(index)}>
                    <div className="image">
                      <img alt="img" src={item.image} />
                    </div>
                    <h2>{item.heading}</h2>
                  </div>
                  <div className="ingred-list">
                    {this.state.clicked === item.id - 1 ? (
                      <div>
                        {item.list.map((element, index) => {
                          return (
                            <>
                              <div>
                                <li
                                  className={
                                    this.state.active === element
                                      ? "prod selected"
                                      : "prod"
                                  }
                                  key={index}
                                  onClick={(e) =>
                                    this.capturingName(e, element)
                                  }
                                >
                                  {element}
                                </li>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={this.state.show ? "blurback" : null}>
          <div
            className={this.state.show ? "displayOrders" : "orders activation"}
          >
            <div className="head-top">
              <div className="heading-bar">
                <h3>your order list</h3>
                <i className="fas fa-times" onClick={this.placeOrder} />
              </div>
              <p>$1.00 retail and $0.50 wholesale @ $10.00 for 20 sachets</p>
              <div className="inputs">
                <input
                  placeholder="enter name"
                  required='required'
                  onChange={(event) => this.handleTextChange(event)}
                  type="text"
                />
                <input
                  placeholder="phone number"
                  onChange={(event) => this.handleNumChange(event)}
                  type="alphanumeric"
                />
              </div>
            </div>
            <div className="spice-list">
              {this.selected.length === 0
                ? "please select items from our ingredients list"
                : orderArr.map((elem, index) => {
                    if (this.props.show) return null;
                    return (
                      <>
                        <div className="addRemove">
                          <i
                            className="fa fa-plus-circle"
                            onClick={() => this.increase(elem.item)}
                          />
                          <div className="spiceAmount">
                            <span key={index}>{elem.item}</span>
                            <span>{elem.count}</span>
                          </div>
                          <i
                            className="fa fa-minus-circle"
                            onClick={() => this.decrease(elem.item)}
                          />
                        </div>
                      </>
                    );
                  })}
            </div>
            <div className="total">
              <div className="items">
                <h5>total quantity</h5>
                <span>{totalSum}</span>
              </div>
              <div className="price">
                <h5>total amount</h5>
                <span>${totalAmount}</span>
              </div>
            </div>
            <div className="head-bottom">
              <a className="placeOrderBtn" target="-blank" 
              href={link}>
                place order<i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <span
          className={this.state.show ? "orderBottom activated" : "orderBottom"}
          onClick={this.placeOrder}
        >
          view order
        </span>
      </>
    );
  }
}
export default IngredientsData;
