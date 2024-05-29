class DataClient {
  constructor() {
    this._TotalProduct = 0;
    this._TotalPriceProduct = 0.0;
    this._DataClient = {};
    this._login = false;
    this._listProduct = [];
    this._dataRestaurant = {};
    this._Dealers = 0;
  }

  setTotalProductReiniciar() {
    this._TotalProduct = 0;
    this._TotalPriceProduct = 0.0;
    this._listProduct = [];
    this._dataRestaurant = {};
    this._Dealers = 0;
  }

  getTotalProduct() {
    return this._TotalProduct;
  }

  setTotalProduct(total) {
    this._TotalProduct = total;
  }

  // operaciones para controlar el total del pedido
  getTotalPriceProduct() {
    return this._TotalPriceProduct;
  }

  setTotalPriceProduct(value) {
    if (value >= 0) {
      this._TotalPriceProduct += value;
    }
  }

  SetSubtractTotalPriceProduct(value) {
    if (value >= 0) {
      this._TotalPriceProduct -= value;
    }
  }

  // objet of client
  getDataClient() {
    return this._DataClient;
  }

  setDataClient(value) {
    if (value) {
      this._DataClient = value;
    }
    // console.log('set:',this._DataClient);
  }

  // login true of false
  getLogin() {
    return this._login;
  }

  setLogin(value) {
    if (value === true) {
      this._login = value;
    }
  }

  // list product of client
  getListProduct() {
    return this._listProduct;
  }

  setListProduct(value) {
    if (value) {
      this._listProduct.push(value);
    }
  }

  // data restaurant
  getDataRestaurant() {
    return this._dataRestaurant;
  }

  setDataRestaurant(value) {
    if (value) {
      this._dataRestaurant = value;
    }
  }

  // repartidor
  getDealers() {
    return this._Dealers;
  }

  setDealers(value) {
    if (value) {
      this._Dealers = value;
    }
  }
}

const dataclient = new DataClient();

export default dataclient;
