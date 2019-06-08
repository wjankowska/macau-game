<<<<<<< HEAD
import { dragElement } from "./utility";
=======
// import { dragElement } from "./utility";
>>>>>>> master

export default class Card {
  constructor(name) {
    this._name = name; // card symbol, i. e. "2D", "3D"...
    this._element = document.createElement("div");
    this.fillElement();
  }

  fillElement() {
    this._element.innerHTML =
      "<img src='assets/img/cards/" + this._name + ".png' />";
    this._element.classList.add(this._name, "card-element");
    this._element.style.overflow = "hidden";
    this._element.style.transform = "translate(0px, 0px)";
  }

  addEvents() {
    // handle dragging element, dispatch event when dropped
    dragElement(this._element, this._name);
  }

  getElement() {
    return this._element;
  }

  removeHtmlElement() {
    this._element.parentNode.removeChild(this._element);
  }

  getName() {
    return this._name;
  }

  getElement() {
    return this._element;
  }
}
<<<<<<< HEAD
=======

const dragElement = (elmnt, name) => {
  let height = 90; // height of a card
  elmnt.onmousedown = dragMouseDown;
  elmnt.ontouchstart = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // e.preventDefault();

    // calculate the new cursor position:
    let diffX = e.clientX - (elmnt.offsetLeft * 2 + elmnt.offsetWidth) / 2;
    let diffY = e.clientY - (window.innerHeight * 2 - height) / 2;
    elmnt.style.overflow = "visible";
    elmnt.style.transform = "translate(" + diffX + "px, " + diffY + "px)";
  }

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    let diffY = e.clientY - (window.innerHeight * 2 - height) / 2;

    if ((elmnt.offsetHeight * 3) / 4 < Math.abs(diffY)) {
      // when card is dropped, fire event
      let event = new CustomEvent("carddropped", { detail: { name: name } });
      document.dispatchEvent(event);
    }

    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
    elmnt.style.overflow = "hidden";
    elmnt.style.transform = "translate(0, 0)";
  }
};

// _p = Card.prototype;
>>>>>>> master
